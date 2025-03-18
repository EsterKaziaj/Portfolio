import React from 'react';
import Incident1 from '../components/allservices/Incident1';
import Incident2 from '../components/allservices/Incident2';
import Incident3 from '../components/allservices/Incident3';

const ServicesIncident = () => {
  return (
    <div>
      {/* Incident Response Hero Section */}
      <Incident1 />

      {/* Key Features of Incident Response */}
      <Incident2 />

      {/* Incident Response Overview */}
      <Incident3 />
    </div>
  );
};

export default ServicesIncident;
