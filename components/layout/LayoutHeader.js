import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd';
import Container from './Container';
import Link from 'next/link';
import { withRouter } from 'next/router'

import auth0 from '../../services/auth0';
import { connect } from 'react-redux';

// const { Header } = Layout;
const { SubMenu } = Menu;

class LayoutHeader extends Component {
  state = {
    current: 'mail',
  };



  handleClick = e => {
    if (!e.key) return;
    if (e.key === 'logout') return auth0.logout();
    if (e.key === 'login') return auth0.login();
    const pathname = this.props.router.pathname.split('/')[1] || ' ';
    if (pathname === e.key) return
    this.props.router.push('/' + e.key)

  };
  render() {
    const { isAuthenticated, customers } = this.props;
    const pathname = this.props.router.pathname.split('/')[1] || ' ';
    return (
      <Container>
        <Menu theme="light"
          onClick={this.handleClick}

          selectedKeys={pathname}
          mode="horizontal"
          className="d-flex align-center"
          multiple={true}
        >
          <Menu.Item key=" " >
            <span>
              <Icon type="home" />
              Home{customers.details.name}
            </span>
          </Menu.Item>

          <Menu.Item key="about" >
            <span>
              <Icon type="mail" />
              About
                </span>
          </Menu.Item>

          <Menu.Item key="portfolios" >
            <span>
              <Icon type="profile" />
              portfolio
                </span>
          </Menu.Item>
          <Menu.Item key="secret" >
            <span>
              <Icon type="key" />
              secret
                </span>
          </Menu.Item>
          {!isAuthenticated &&
            <Menu.Item key="login" className="ml-auto">
              <span>
                <Icon type="login" />
                login
              </span>
            </Menu.Item>
          }

          {isAuthenticated &&
            <Menu.Item key="logout" className="ml-auto">
              <span>
                <Icon type="logout" />
                logout
              </span>
            </Menu.Item>}

        </Menu>

      </Container>
    )
  }
}
const mapStateToProps = state => {
  return {
    customers: state.customers
  }
}

export default connect(mapStateToProps)(withRouter(LayoutHeader));