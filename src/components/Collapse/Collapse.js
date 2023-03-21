import React, { Component } from "react"
import PropTypes from "prop-types"

import CollapseItem from "../CollapseItem/CollapseItem"
import styles from './styles.css'

class Collapse extends Component {
  static propTypes = {
    multipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
  }

  static defaultProps = {
    multipleOpen: false,
  }

  constructor(props) {
    super(props)

    const openSections = {}
    
    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.title] = true
      }
    })

    this.state = { openSections }
  }

  onClick = title => {
    const { props: { multipleOpen }, state: { openSections } } = this

    const isOpen = !!openSections[title]

    if (multipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [title]: !isOpen
        }
      })
    } else {
      this.setState({
        openSections: {
          [title]: !isOpen
        }
      })
    }
  }

  render() {
    const { 
      onClick,
      props: { children },
      state: { openSections },
    } = this

    return (
      <div className="collapse-container">
        {children.map(child => (
          <CollapseItem
            isOpen={!!openSections[child.props.title]}
            title={child.props.title}
            onClick={onClick}
          >
            {child.props.children}
          </CollapseItem>
        ))}
      </div>
    )
  }
}

export default Collapse