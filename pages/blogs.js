import React, { Component } from 'react'
import BaseLayout from '../components/layout/BaseLayout'

export default class Blogs extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <h1>I am Blogs page</h1>
      </BaseLayout>
    )
  }
}
