import React from 'react'


import profilePic from './logo.svg'


class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginBottom: 0,
          }}
        />
        <p>
          Le blog du <strong>Loup</strong> et de <strong>l'Ourse</strong> sur les petits chemins très hauts des andes.
        </p>
      </div>
    )
  }
}

export default Bio
