import React, { Component } from 'react'
import BaseLayout from '../components/layout/BaseLayout'

export default class Cv extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <h1>I am Cv page</h1>
      </BaseLayout>
    )
  }
}
