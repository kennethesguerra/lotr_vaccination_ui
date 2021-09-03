import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

class Menus extends Component {
  render() {
    return (
      <Row className="menus-container">
        <Col>
          <Button onClick={() => {
            this.props.history.push('/create');
          }}>
            <FontAwesomeIcon icon={faUserPlus} /> Add Vaccinee 
          </Button>
        </Col>
      </Row>
    )
  }
}

export default withRouter(Menus)
