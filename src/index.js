import React from "react"
import { render } from "react-dom"

import Collapse from "./components/Collapse/Collapse"

import "./styles.css"

function App() {
  return (
    <div className="app">
      <h1>React Collapse component</h1>
      <Collapse multipleOpen>
        <div title="Content 1" isOpen>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            <strong>Lorem ipsum :</strong> Consequat eloquentiam ad sit,
          </p>
        </div>
        <div title="Content 2 ">
          <p>
            <strong>Item 1:</strong> quis saperet nam ne
          </p>
          <p>
            <strong>Item 2:</strong> mea iusto doctus pertinacia an
          </p>
          <p>
            <strong>Item 3</strong>  Ferri decore civibus mea ex.
          </p>
        </div>
        <div title="Content 3">
          <p>
            <strong>Item 1:</strong> quis saperet nam ne
          </p>
          <p>
            <strong>Item 2:</strong> mea iusto doctus pertinacia an
          </p>
          <p>
            <strong>Item 3</strong>  Ferri decore civibus mea ex.
          </p>
        </div>
      </Collapse>
    </div>
  )
}

const container = document.createElement("div")
document.body.appendChild(container)
render(<App />, container)
