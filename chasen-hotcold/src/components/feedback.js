import React from 'react';
import {connect} from 'react-redux';

export function Feedback(props){
  return (
    <h2 id='feedback'>{props.feedback}</h2>
  );
};

export const mapStateToProps = state => ({
  feedback: state.feedback
});

export default connect(mapStateToProps)(Feedback);