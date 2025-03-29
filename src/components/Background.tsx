import React from "react"

import { Button, Image } from "react-bootstrap"

export const Background=()=>{
  
        return(
            <>
              <div style={{ position: 'relative', width: '100%', height: '550px' }}>
      {/* Image */}
      <Image 
        src="cleaning.jpg" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        fluid 
      />
      {/* Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.45)'  // Adjust opacity as needed
        }}
      />
      {/* Centered Text */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
          fontSize: '60px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
        }}
      >
        <h3>Transforming Spaces, One Sparkle at a Time</h3>
        <h2>– Because Every Detail Matters</h2>
        <Button>Get Estimate</Button>
      </div>
    </div>
        
            
            </>
    )
}