import React from 'react';
import { Row, Col } from 'antd';

const Container = (props) => {
  return (
    <Row type="flex" justify="center">
      <Col span={24} xs={24} sm={24} md={20} lg={18} xl={16}> {props.children}</Col>
    </Row>
  );
}

export default Container;
