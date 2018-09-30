import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeName, changeAge, changeStatus} from './store/actions'

const mapStateToProps = state => ({
  name: state.name,
  age: state.age,
  isStudent: state.isStudent,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onNameChanged: e => changeName(e.target.value),
  onAgeChanged: e => changeAge(e.target.value),
  onIsStudentChanged: e => changeStatus(e.target.value),
}, dispatch);

const UserForm = ({ name, age, isStudent, onNameChanged, onAgeChanged, onIsStudentChanged }) => (
  <form>
    <div className="form-group row">
      <label className="col-sm-2 col-form-label" htmlFor="name">User Name</label>
      <div className="col-sm-4">
        <input
          id="name"
          type="text"
          className="form-control"
          value={name}
          onChange={onNameChanged}
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-2 col-form-label" htmlFor="age">User Age</label>
      <div className="col-sm-3">
        <input
          id="age"
          type="number"
          className="form-control"
          value={age}
          onChange={onAgeChanged}
        />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-2 col-form-label">&nbsp;</div>
      <div className="col-sm-3">
        <div className="form-check">
          <input
            id="is-student"
            type="checkbox"
            className="form-check-input"
            value={isStudent}
            onChange={onIsStudentChanged}
          />
          <label htmlFor="is-student" className="form-check-label">Student</label>
        </div>
      </div>
    </div>
  </form>
);

export default connect(mapStateToProps,mapDispatchToProps)(UserForm);