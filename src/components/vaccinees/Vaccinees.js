import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { DELETE_VACCINEE_REQUESTED, 
  GET_VACCINEE_REQUESTED, 
  listVaccinees } from '../../store/reducers/vaccinees/vaccineeReducer';

import VaccineeForm from './VaccineeForm';
import Vaccinee from './Vaccinee';

class Vaccinees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  componentDidMount() {
    this.props.listVaccinees();
  }

  renderVacinees = (vaccinees) => {
    let vaccineesList = [];

    if (vaccinees) {
      vaccineesList = vaccinees.length ? (vaccinees.map((vaccinee, key) => {
        return (
          <Vaccinee 
            key={key} 
            data={vaccinee} 
            updateBtnAction={() => {
              this.props.history.push('/update');
              this.props.getVaccinee(vaccinee.id);
            }}
            deleteBtnAction={() => {
              this.props.deleteVaccinee(vaccinee.id, () => {
                alert('Vaccinee has been successfully deleted.');
                this.props.listVaccinees();
              })
            }} />
        )
      })) : (
       <p>Loading...</p> 
      )
    }
    else {
      vaccineesList = <p>No results found</p>   
    }

    return vaccineesList;
  }

  render() {
    console.log(this.props);
    const vaccinees = this.props.vaccinees.vaccinees;
    const pathname = this.props.location.pathname;
    
    let show = ['/create', '/update'].includes(pathname) ? true : false;

    return (
      <div>
        <VaccineeForm show={show} action={pathname} />
        <Row className="main-container">
        <Col>
          <h3>Vaccinees</h3>
          <Row className="mt-5">
            <Col>
              { this.renderVacinees(vaccinees) }
            </Col>
          </Row>
        </Col>
      </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  vaccinees: state.vaccinees
})

const mapDispatchToProps = (dispatch) =>  ({
  listVaccinees: () => dispatch(listVaccinees()),
  getVaccinee: (id) => dispatch({type: GET_VACCINEE_REQUESTED, id}),
  deleteVaccinee: (id, callBack) => dispatch({type: DELETE_VACCINEE_REQUESTED, id, callBack})
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Vaccinees))
