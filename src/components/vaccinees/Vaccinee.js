import { faBirthdayCake, faBookMedical, faCalendarDay, faEdit, faHome, faSyringe, faTrash, faVial } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const formateDate = (date) => {
  if (!date) {
    return 'TBA';
  }

  const _date = new Date(date);
  return _date.getMonth() + 1 + "/" + _date.getDate() + "/" + _date.getFullYear();
}

const actionButtons = (updateBtnAction, deleteBtnAction) => {
  return (
    <Row >
      <Col>
        <Button size="sm" variant="primary" className="mx-3" onClick={() => {
          updateBtnAction();
        }}>
          <FontAwesomeIcon icon={faEdit} /> Update
        </Button>
        <Button size="sm" variant="danger" onClick={() => {
          deleteBtnAction();
        }}>
          <FontAwesomeIcon icon={faTrash} /> Delete
        </Button>
      </Col>
    </Row>
  )
}

export default function Vaccinee({ data, updateBtnAction, deleteBtnAction }) {

  let dose = 0;
  console.log(data);
  if (data.first_dose_sched && new Date(data.first_dose_sched) < new Date()) {
    dose += 1;
  }

  if (data.second_dose_sched &&  new Date(data.second_dose_sched) < new Date()) {
    dose += 1;
  }

  return (
    <div className="vacinee-container">
      <Row>
        <Col>
          <h4>{ data.firstname + " " + data.lastname }</h4>
        </Col>
        <Col>
          <div className="vaccinee-action-bts-container">
            { actionButtons(updateBtnAction, deleteBtnAction) }
          </div>
        </Col>
      </Row>
      <Row className="mt-3 text-muted small">
        <Col xs={12} sm={12} md={3} lg={3} xl={3}>
          <Row>
            <Col>
              <FontAwesomeIcon icon={faHome} /> { data.location }
            </Col>
          </Row>
          <Row>
            <Col>
              <FontAwesomeIcon icon={faBirthdayCake} /> { formateDate(data.birthdate) } 
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3} xl={3}>
          <Row>
            <Col>
              <FontAwesomeIcon icon={faBookMedical} /> { data.with_comorbidity ? 
                (<span className="text-danger">With Comorbidity</span>) 
                : (<span className="text-success"> Without Comorbidity </span>) }
            </Col>
          </Row>
          <Row>
            <Col>
              <FontAwesomeIcon icon={faVial} /> { data.vaccine_name } 
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3} xl={3}>
          <Row>
            <Col>
              <FontAwesomeIcon icon={faSyringe} /> { dose } { dose > 1? " doses" : " dose"}
            </Col>
          </Row>
          <Row>
            <Col>
              <FontAwesomeIcon icon={faCalendarDay} /> 1st dose - { formateDate(data.first_dose_sched) }
            </Col>
          </Row>
          <Row>
            <Col>
              <FontAwesomeIcon icon={faCalendarDay} /> 2nd dose - { formateDate(data.second_dose_sched) }
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
