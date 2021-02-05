import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.total}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.car.price + state.additionalPrice
  }
}

export default connect(mapStateToProps, {})(Total);