import React, { Component } from 'react'
import BaseLayout from '../../components/layout/BaseLayout'
import { withRouter } from 'next/router'
import Axios from 'axios';

class Portfolios extends Component {

  static async getInitialProps(context) {
    let post = {};
    const postId = context.query.id;
    try {
      const respone = await Axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
      post = respone.data;
    } catch (error) {
      console.log(error);
    }
    return { post };

  }


  componentDidMount() {
    console.log(this.props.router.query.id)
  }

  render() {
    const post = this.props.post;
    return (
      <BaseLayout {...this.props.auth}>
        <h1>I am Portfolios page {post.title}</h1>
      </BaseLayout>
    )
  }
}


export default withRouter(Portfolios);