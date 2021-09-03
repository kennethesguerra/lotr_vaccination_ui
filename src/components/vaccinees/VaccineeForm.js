import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Modal, Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { LIST_VACCINES_REQUESTED } from '../../store/reducers/vaccines/vaccineReducer';
import { CREATE_VACCINEE_REQUESTED, 
  SET_VACCINEE_INPUT_CHANGE_REQUESTED, 
  UPDATE_VACCINEE_REQUESTED} from '../../store/reducers/vaccinees/vaccineeReducer';
import { listVaccinees } from '../../store/reducers/vaccinees/vaccineeReducer';

class VaccineeForm extends Component {
  
  componentDidMount() {
    this.props.listVaccines();
  }

  handleSubmit = async () => {
    if (this.props.action === '/create') {
      await this.props.createVaccinee(this.props.vaccinees.vaccinee, () => {
        this.setState(this.defaultFormValues);
        this.props.history.push('/');
        alert('Vaccinee has been successfully added.');
        this.props.listVaccinees();
      });
    }
    else {
      await this.props.updateVaccinee(this.props.vaccinees.vaccinee, () => {
        this.setState(this.defaultFormValues);
        this.props.history.push('/');
        alert('Vaccinee has been successfully updated.');
        this.props.listVaccinees();
      });
    }
  }

  handleInputChange = (e, definedVal) => {

    let id = '';
    let value = '';

    if (definedVal) {
      id = definedVal.id;
      value = definedVal.value;
    }
    else {
      id = e.target.id;
      value = e.target.value;
    }

    this.props.handleInputChange({[id]: value});
  }

  render() {
    const vaccines = this.props.vaccines.vaccines;
    const vaccinee = this.props.vaccinees.vaccinee;

    let modalTitle = '';
    let firstname = vaccinee?.firstname || '';
    let lastname = vaccinee?.lastname || '';
    let birthdate = vaccinee?.birthdate || '';
    let location = vaccinee?.location || '';
    let with_comorbidity = vaccinee?.with_comorbidity || '';
    let first_dose_sched = vaccinee?.first_dose_sched || '';
    let second_dose_sched = vaccinee?.second_dose_sched || '';
    let vaccine_id = vaccinee?.vaccine_id || '';

    if (this.props.action === "/create") {
      modalTitle = "Add Vacinnee";
    }
    else {
      modalTitle = "Update Vaccinee";
    }

    return (
      <div className="lotr-modal-container">
        <Modal show={this.props.show}>
          <Modal.Header>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <FormGroup>
                  <FormLabel>First Name</FormLabel>
                  <FormControl type="text" id="firstname" value={firstname} onChange={this.handleInputChange} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl type="text" id="lastname" value={lastname} onChange={this.handleInputChange}/>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <FormLabel>Location</FormLabel>
                  <FormControl type="text" id="location" value={location} onChange={this.handleInputChange} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <FormLabel>Birthdate</FormLabel>
                  <FormControl type="date" id="birthdate" value={birthdate} onChange={this.handleInputChange} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <FormLabel>With Comorbidity</FormLabel>
                  <Form.Check
                    type="checkbox"
                    id="with_comorbidity" 
                    checked={with_comorbidity ? true : false}
                    onChange={(e) => {
                      const definedVal = {}

                      definedVal.id = e.target.id;
                      definedVal.value = e.target.checked ? 1 : 0;

                      this.handleInputChange(null, definedVal);
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <FormLabel>Vaccine</FormLabel>
                  <Form.Select id="vaccine_id" value={vaccine_id} onChange={this.handleInputChange}>
                    <option value="0">--Select Vaccine--</option>
                    { vaccines.length ? (vaccines.map((vaccine, key) => {
                        return <option key={key} value={vaccine.id}>{vaccine.name}</option>
                      })) : ('')
                    }
                  </Form.Select>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <FormLabel>First Dose Schedule</FormLabel>
                  <FormControl type="datetime-local" 
                    id="first_dose_sched" 
                    value={first_dose_sched} 
                    onChange={this.handleInputChange} />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <FormLabel>Second Dose Schedule</FormLabel>
                  <FormControl type="datetime-local" 
                    id="second_dose_sched" 
                    value={second_dose_sched} 
                    onChange={this.handleInputChange}/>
                </FormGroup>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {
              this.props.history.push('/')
            }}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>       
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  vaccinees: state.vaccinees, 
  vaccines: state.vaccines
})

const mapDisaptchToProps = (dispatch) => ({
  listVaccines: () => dispatch({type: LIST_VACCINES_REQUESTED}), 
  createVaccinee: (vaccinee, callBack) => dispatch({type: CREATE_VACCINEE_REQUESTED, vaccinee, callBack}),
  updateVaccinee: (vaccinee, callBack) => dispatch({type: UPDATE_VACCINEE_REQUESTED, vaccinee, callBack}),
  handleInputChange: (value) => dispatch({type: SET_VACCINEE_INPUT_CHANGE_REQUESTED, value}), 
  listVaccinees: () => dispatch(listVaccinees())
})
export default withRouter(connect(mapStateToProps, mapDisaptchToProps)(VaccineeForm))
