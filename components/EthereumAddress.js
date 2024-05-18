import React from 'react';

const EthereumAddress = ({ address }) => {
  // Function to generate abbreviated Ethereum address
  const getAbbreviatedAddress = (address, maxLength) => {
    if (!address) return null;
    const startPart = address.slice(0, maxLength);
    const endPart = address.slice(-maxLength);
    return `${startPart}........${endPart}`;
  };

  // Define the maximum length for abbreviation
  const maxLength = 4;

  // Generate the abbreviated address
  const abbreviatedAddress = getAbbreviatedAddress(address, maxLength);

  return abbreviatedAddress;
};

export default EthereumAddress;
