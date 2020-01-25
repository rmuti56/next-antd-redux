import React, { Component } from 'react';
import { Layout } from 'antd';
import LayoutFooter from './LayoutFooter';
import LayoutHeader from './LayoutHeader';
import Container from './Container';
import '../../styles/main.less'
const { Content } = Layout;
class BaseLayout extends Component {

  render() {
    const { isAuthenticated, user } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }} >
        <LayoutHeader
          isAuthenticated={isAuthenticated}
          user={user}
        />
        <Content>
          <Container>
            {this.props.children}
          </Container>
        </Content>
        <LayoutFooter />
      </Layout>
    )
  }
}

export default BaseLayout;