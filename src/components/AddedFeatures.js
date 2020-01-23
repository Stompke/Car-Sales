import React from 'react';
import { connect } from 'react-redux';

import { removeFeature, logIt } from '../actions/featuresActions';

import AddedFeature from './AddedFeature';
import { statement } from '@babel/template';


const AddedFeatures = (props) => {
 console.log(removeFeature)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature remove={props.removeFeature} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
        )}
        <button onClick={props.removeFeature}>test</button>
    </div>
  );
};



const mapStateToProps = state => {
  return {
    features: state.car.features
  }
}

export default connect(
  mapStateToProps,
  {removeFeature, logIt}
)(AddedFeatures);
