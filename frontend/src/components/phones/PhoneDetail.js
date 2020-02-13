import React, { Component } from 'react';
import Phone from './Phone';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getPhone } from '../../actions/phonesActions'

import ColorSvg from './colorSvg.js';
import Spinner from './spinner'

class PhoneDetail extends Component {
  state = {
    loading: true
  };

  componentDidMount(){
    const { id } = this.props.match.params
    id == this.props.Phone.id ? null : this.state.loading = false
    this.props.getPhone(id);
  }


  render() {
  const {  name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = this.props.Phone;
  const imagePath = `/images/${imageFileName}`

  return (      
      <React.Fragment>

        <h1 className="display-4 detail-header">
        <Link to='/'><i
          className="fas fa-arrow-left" style={{fontSize: '40px'}}
        />
        </Link>
            <span className="text-info">   Phones</span> List
        </h1>
        {this.state.loading ?
          <div className="spinner-container">
           <Spinner/>
          </div>
         :
        <div className="card card-body detail-container">
          <div className="detail-title">
            <ColorSvg color={color}/>
            <h2 >
              {`${name}, ${color}`}
            </h2>
          </div>
          <div className="d-flex detail-infos-container">
            <ul className="detail-infos-list">
              <li className="list-group-item">
                <i className="fas fa-industry"/>
                Manufacturer: {manufacturer}
              </li>
              <li className="list-group-item">
                <i className="fas fa-dollar-sign"/>
                Price: {price}
              </li>
              <li className="list-group-item">
                <i className="fas fa-mobile-alt"/>
                Screen: {screen}
              </li>
              <li className="list-group-item">
                <i className="fas fa-server"/>
                Processor: {processor}
              </li>
              <li className="list-group-item">
                <i className="fas fa-microchip"/>
                Ram: {ram}
              </li>
          </ul>
          <figure className="detail-image">
            <img src={imagePath}/>
          </figure>
          </div>
        
            <li className="list-group-item mt-4 mb-2">
              {description}
            </li>
        </div>
         
        }

      </React.Fragment>
    );
  }
}

Phone.propTypes = {
  phone: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  Phone: state.phone.Phone
})

export default connect(mapStateToProps, {getPhone})(PhoneDetail);
