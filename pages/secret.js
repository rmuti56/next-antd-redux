import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';

import withAuth from '../components/hoc/withAuth';
import { getSecretData } from '../actions'

class Secret extends React.Component {

  static async getInitialProps({ req }) {
    const anotherSecretData = await getSecretData(req);
    console.log(anotherSecretData);
    return { anotherSecretData }
  }

  state = {
    secretData: []
  }

  // async componentDidMount() {
  //   try {
  //     const secretData = await getSecretData();
  //     console.log(secretData);
  //   } catch (err) {
  //     console.log(err.message);
  //   }


  //   // this.setState({
  //   //   secretData
  //   // })
  // }

  displaySecretData() {
    //  const { secretData } = this.state;
    const { anotherSecretData } = this.props;
    if (anotherSecretData && anotherSecretData.length > 0) {
      return anotherSecretData.map((data, index) => {
        return (
          <div key={index}>
            <p>{data.title}</p>
            <p>{data.description}</p>
          </div>
        )
      })
    }
  }

  render() {
    const { superSecretValue } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <h1>I am Secret Page</h1>
        <p>Secret Content Here</p>
        <h2>{superSecretValue}</h2>
        {this.displaySecretData()}
      </BaseLayout>
    )
  }
}

export default withAuth(Secret);