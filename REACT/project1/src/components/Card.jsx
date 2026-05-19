import React from 'react'

const Card = (props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '300px', margin: '0 auto' }}>
        <h2>{props.name}</h2>
        <p>{props.age}</p>
        <p>{props.course}</p>
        <img src={props.link} alt="Random" style={{ width: '100%', borderRadius: '5px', marginTop: '10px' }} />
    </div>
  )
}

export default Card