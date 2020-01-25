import React, { Component } from 'react'
import Link from 'next/link';
import { Button } from 'antd';
import axios from 'axios';
import BaseLayout from '../components/layout/BaseLayout'
import SuperComponent from '../components/shared/SuperComponent';


export default class Index extends SuperComponent {


  static async getInitialProps() {
    // try {
    //   const respone = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    //   console.log(respone.data);
    //   return { initialData: respone.data };
    // } catch (error) {
    //   console.log(error);
    // }

  }

  constructor(props) {
    super(props);
    this.state = {
      title: 'I am Index Page'
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }



  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <BaseLayout {...this.props.auth}>

        <React.Fragment >
          <h1> {isAuthenticated &&
            <span>{user.exp}</span>
          }</h1>
          <Button type="primary">555</Button>
        </React.Fragment>
      </BaseLayout>
    )
  }
}
