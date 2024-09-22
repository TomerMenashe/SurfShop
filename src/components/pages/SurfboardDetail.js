import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../../styles/SurfboardDetail.css';

const SurfboardDetail = () => {
  const { sku } = useParams(); // Get the surfboard SKU from the URL
  const { state } = useLocation(); // Get the passed state if available
  const [surfboard, setSurfboard] = useState(state?.surfboard || null); // Use passed state if available
  const [loading, setLoading] = useState(!surfboard); // Show loading state if no data from state

  useEffect(() => {
    // Fetch surfboard data by SKU if it's not already available from state
    if (!surfboard) {
      const fetchSurfboard = async () => {
        try {
          const response = await axios.get(`/api/surfboards/${sku}`); // Fetch by SKU
          setSurfboard(response.data);
          setLoading(false); // Data is loaded, stop showing loading state
        } catch (error) {
          console.error('Error fetching surfboard details:', error);
          setLoading(false); // Stop loading state if there's an error
        }
      };
      fetchSurfboard();
    }
  }, [sku, surfboard]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading spinner or message
  }

  if (!surfboard) {
    return <div>No surfboard data available.</div>; // Show error if no data is found
  }

  return (
    <div className="surfboard-detail-container">
      <div className="surfboard-detail-card">
        <img 
          src={surfboard.image} 
          alt={surfboard.model} 
          className="surfboard-detail-image" 
        />
        <div className="surfboard-detail-info">
          <h2>{surfboard.brand} - {surfboard.model}</h2>
          <p className="price">
            ${surfboard.price}
            {surfboard.discount && (
              <span className="discounted-price"> ${surfboard.discount}</span>
            )}
          </p>
          <h3 className="subheading">Model Overview</h3>
          <p className="description">{surfboard.description}</p>
          {surfboard.conditions && (
            <>
              <h3 className="subheading">Conditions</h3>
              <p className="description">{surfboard.conditions}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurfboardDetail;
