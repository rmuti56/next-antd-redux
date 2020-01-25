import React, { Component } from 'react'
import BaseLayout from '../components/layout/BaseLayout'
import Link from 'next/link'
import withAuth from '../components/hoc/withAuth';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { setCustomerName } from '../store/actions/customers/customers'

class Portfolios extends Component {

  setDetail(name) {
    this.props.setCustomerName({
      name
    })
  }

  render() {
    const { customers } = this.props;
    const arr = new Array(10).fill({}).map((v, i) => ({ id: i, title: 'text' + i }));
    return (
      <BaseLayout {...this.props.auth}>
        {arr.map(a => {
          return (
            <li key={a.id}>
              <Link as={`/portfolios/${a.id}`} href="/portfolios/[id]">
                <React.Fragment>
                  <h4>{a.title}{customers.details.name}
                  </h4>
                  <Button
                    onClick={() => this.setDetail(a.title)}
                  >ตั้งชื่อ</Button>
                </React.Fragment>
              </Link>
            </li>
          )
        })}

      </BaseLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    customers: state.customers
  }
}

export default connect(mapStateToProps, { setCustomerName })(withAuth()(Portfolios))
