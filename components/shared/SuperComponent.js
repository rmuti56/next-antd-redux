import React, { Component } from 'react'

export default class SuperComponent extends Component {
  constructor(props) {
    super(props);

    this.someVariable = 'Just some variable';
  }

  alerName(title) {
    alert(title);
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
