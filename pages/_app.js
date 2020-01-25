import React from 'react'
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import initialStore from '../store';
import auth0 from '../services/auth0';
import '../styles/main.less'
import NextNProgress from '../components/layout/NextNProgress';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx, store }) {
    let pageProps = {};
    const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const auth = { user, isAuthenticated: !!user };

    return { pageProps, auth, store }
  }

  render() {
    const { Component, pageProps, auth, store } = this.props;
    return (
      <Provider store={store}>
        <NextNProgress
        />
        <Component {...pageProps} auth={auth} />
      </Provider>
    )
  }
}

export default withRedux(initialStore)(MyApp);