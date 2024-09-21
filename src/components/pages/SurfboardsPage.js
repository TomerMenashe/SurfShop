import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import '../../styles/SurfboardsPage.css';  // Import the updated CSS

const SurfboardsPage = () => {
  const [surfboards, setSurfboards] = useState([]);  // State to store the surfboards data
  const [loading, setLoading] = useState(true);  // State to track loading
  const [error, setError] = useState(null);  // State to track any errors
  const navigate = useNavigate();  // Initialize navigation

  // Fetch surfboard data from the API
  useEffect(() => {
    const fetchSurfboards = async () => {
      try {
        const response = await fetch('/api/surfboards');  // Fetch data from the API
        if (!response.ok) {
          throw new Error('Failed to fetch surfboards');
        }
        const data = await response.json();
        setSurfboards(data);  // Set the fetched surfboards data
        setLoading(false);  // Stop loading
      } catch (err) {
        setError(err.message);  // Capture any error that occurs
        setLoading(false);  // Stop loading if there's an error
      }
    };

    fetchSurfboards();
  }, []);  // Dependency array ensures this runs once on component mount

  // Handle navigation to surfboard details page when a board is clicked
  const handleBoardClick = (surfboard) => {
    navigate(`/surfboards/${surfboard._id}`, { state: { surfboard } });  // Navigate to the details page with surfboard state
  };

  if (loading) return <p>Loading surfboards...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="surfboard-list">
  {surfboards.map((surfboard) => (
    <div key={surfboard._id} className="surfboard-card" onClick={() => handleBoardClick(surfboard)}>
      <img src={surfboard.image} alt={surfboard.model} />
      <h2>{surfboard.brand} - {surfboard.model}</h2>
      <p>Length: {surfboard.length} ft</p>
      <p className="price">Price: ${surfboard.price}</p>
    </div>
  ))}
</div>
  );
};

export default SurfboardsPage;
