import React, { Component } from 'react';
import Phone from './Phone';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPhones } from '../../actions/phonesActions'

class Phones extends Component {


  componentDidMount(){
    this.props.getPhones();
  }
  
  render() {
    const { Phones } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2 title">
          <span className="text-info">Phones</span> List
        </h1>
        <div className="row">
          {Phones.map(phone => (
            <Phone key={phone.id} phone={phone} />
          ))}
        </div>

      </React.Fragment>
    );
  }
}

Phones.propTypes = {
  Phones: PropTypes.array.isRequired,
  getPhones: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  Phones: state.phone.Phones
})



export default connect(mapStateToProps, {getPhones})(Phones);
