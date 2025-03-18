import React from 'react';
import Network1 from '../components/allservices/Network1';
import Network2 from '../components/allservices/Network2';
import Network3 from '../components/allservices/Network3';

const ServiceNetwork = () => {
  return (
    <div>
      {/* Network Security Hero Section */}
      <Network1 />

      {/* Key Features of Network Security */}
      <Network2 />

      {/* Network Security Overview */}
      <Network3 />
    </div>
  );
};

export default ServiceNetwork;
