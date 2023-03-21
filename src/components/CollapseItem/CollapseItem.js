import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from './styles.css'

class CollapseItem extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  onClick = () => {
    this.props.onClick(this.props.title)
  }

  render() {
    const { onClick, props: { isOpen, title } } = this

    return (
      <div className="collapse-content">
        <div onClick={onClick} className='title'>
          {title}
          <div className="arrow-right">
            <i className={"arrow " + (isOpen ? 'down' : 'up')}></i>
          </div>
        </div>
        {isOpen && (
          <div className="collapse-content-place">
            {this.props.children}
          </div>
        )}
      </div>
    )
  }
}

export default CollapseItem
