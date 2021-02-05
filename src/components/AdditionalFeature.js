import React from 'react';
import { connect } from 'react-redux';
import { addAdditionalFeature } from '../actions/index';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => {props.addAdditionalFeature(props.feature)}} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addAdditionalFeature })(AdditionalFeature);
