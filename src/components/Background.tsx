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




        <h5>Reliable and eco-friendly cleaning services.</h5>
        <h1>A cleaner, brighter workspace.</h1>
        <Button href="#get-estimate">Get Estimate</Button>
      </div>
    </div>
        
            
            </>
    )
}