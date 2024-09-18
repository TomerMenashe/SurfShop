import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

function ProfilePage() {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {currentUser.username}</p>
      <p>Email: {currentUser.email}</p>
    </div>
  );
}

export default ProfilePage;
