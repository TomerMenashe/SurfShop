import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/SurfboardDetail.css';

const SurfboardDetail = () => {
  const { state } = useLocation();
  const { surfboard } = state;  // Extract surfboard data from the state

  return (
    <div className="surfboard-detail-container">
  <div className="surfboard-detail-card">
    <img src={surfboard.image} alt={surfboard.model} className="surfboard-detail-image" />
    <div className="surfboard-detail-info">
      <h2>{surfboard.brand} - {surfboard.model}</h2>
      <p className="price">
        ${surfboard.price}
        {surfboard.discount && <span className="discounted-price">${surfboard.discount}</span>}
      </p>
      <h3 className="subheading">Model Overview</h3>
      <p className="description">{surfboard.description}</p>
      {/* Additional sections for details */}
      <h3 className="subheading">Conditions</h3>
      <p className="description">{surfboard.conditions}</p>

      <div className="button-group">
        <button>Model Overview</button>
        <button>Shipping Details</button>
        <button>Volume Calculator</button>
      </div>
    </div>
  </div>
</div>

  );
};

export default SurfboardDetail;
