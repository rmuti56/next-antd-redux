import React from 'react';
import BaseLayout from '../layout/BaseLayout';

const namespace = 'http://localhost:3000';

export default role => Component =>
  class withAuth extends React.Component {

    static async getInitialProps(args) {
      const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);
      return { ...pageProps };
    }

    renderProtectedPage() {
      const { isAuthenticated, user } = this.props.auth;
      const userRole = user && user.payload[`${namespace}/roles`];

      let isAuthorized = false;

      if (role) {
        if (userRole && userRole === role) { isAuthorized = true };
      } else {
        isAuthorized = true;
      }

      if (!isAuthenticated) {
        return (
          <BaseLayout {...this.props.auth}>
            <h1>You are not authenticated. Please Login to access this page.</h1>
          </BaseLayout>
        )
      } else if (!isAuthorized) {
        return (
          <BaseLayout {...this.props.auth}>
            <h1>You are not authorized. You dont have a permission to visit this page.</h1>
          </BaseLayout>
        )
      } else {
        return (<Component {...this.props} />)
      }

    }
    render() {
      return this.renderProtectedPage();
    }
  }

