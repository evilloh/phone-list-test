import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Phone extends Component {

  render() {
    const { id, name, imageFileName } = this.props.phone;
    const imagePath = `/images/${imageFileName}`

    return (
      <div className="card card-body card-body-list">
        <h4 className="card-name">
          <Link to={`/phone/${id}`}>
            {name}{' '}
            <i
              className="fas fa-angle-right"
            />
          </Link>

        </h4>
        <Link to={`/phone/${id}`}>
            <figure className="card-image">
              <img src={imagePath}/>
            </figure>
          </Link>

      </div>
    );
  }
}

Phone.propTypes = {
  phone: PropTypes.object.isRequired
};

export default Phone;
