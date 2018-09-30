import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  name: state.name,
  age: state.age,
  isStudent: state.isStudent,
});

const UserInfo = ({ name, age, isStudent }) => (
  <div className="row">
    <div className="col-sm-6">
      <samp>
        {isStudent ? 'Student ' : ''}
        {name}
        {' is '}
        {age}
        {' years old.'}
      </samp>
    </div>
  </div>
);

export default connect(mapStateToProps)(UserInfo);