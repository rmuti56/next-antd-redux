import React, { Component } from 'react'
import BaseLayout from '../components/layout/BaseLayout'

export default class About extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <h1> I am About Page</h1>
      </BaseLayout>

    )
  }
}
