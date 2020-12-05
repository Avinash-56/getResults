import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getResults } from "../actions/result";
// import Tables from './Tables'

const Results = ({ getResults, results }) => {
  const [inputs, setInputs] = useState({
    rollNumbers: "",
  });
  const { rollNumbers } = inputs;

  const onChange = (e) => {
    setInputs({ [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getResults(rollNumbers);
  };
  return (
    <div>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Row>
          <Col>
            <Form.Label className="label">
              Input the Roll Numbers separated by a ','.
            </Form.Label>
            <Form.Control
              placeholder="Roll Numbers"
              name="rollNumbers"
              value={rollNumbers}
              onChange={(e) => onChange(e)}
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>{" "}
          </Col>
        </Row>
      </Form>
      <br />
      <br />
      <br />
      <br />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th scope="col">Roll Number</th>
            <th scope="col">Pass/Fail</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(results).map((keyName, i) => (
            <tr key={i}>
              <td>{keyName}</td>
              <td>{results[keyName]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

Results.propTypes = {
  result: PropTypes.array,
  getResults: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  results: state.result.results,
});

export default connect(mapStateToProps, { getResults })(Results);
