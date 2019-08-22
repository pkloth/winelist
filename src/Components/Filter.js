import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  render() {
    const {title, filterTypes} = this.props
    return (
      <div className="Filter">
        <p className="Filter__title">{title}</p>
        <ul className="Filter__list">
          { filterTypes.map((type, key) => 
            <li className="Filter__list-item" key={key}>
              <div className="checkbox">
                <input id={type} type="checkbox" />
                <label for={type}>{type}</label>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Filter