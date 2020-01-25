import React, { Component } from 'react'
import BaseLayout from '../components/layout/BaseLayout'
import withAuth from '../components/hoc/withAuth';

class Owner extends Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <h1>I am Owner Page</h1>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(Owner)