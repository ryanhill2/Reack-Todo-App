import React, { Component } from "react";

export class Todoinput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add a todo item"
              value={item}
              onChange={handleChange}
            ></input>
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "bun btn-block btn-success mt-3"
                : "bun btn-block btn-primary mt-3"
            }
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}

export default Todoinput;
