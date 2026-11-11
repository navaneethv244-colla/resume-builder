import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:'black',
      color:'white',
      width:'100%',
      display:'flex',
      justifyContent:'space-between'
    }}>
      <div style={{width:"50%",
      padding:'30px'

      }}>
        <p style={{textAlign:'justify'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia praesentium aliquam unde eius in non natus quibusdam! Inventore culpa tenetur a esse suscipit et alias minima impedit maiores reiciendis.
      </p>
    </div>
    <div style={{padding:'30px'}}>
        <h1>Contact Us</h1>
        <ul style={{listStyle:'none',
          lineHeight:'25px'
        }}>
          <li>rebuild@gmail.com</li>
          <li>9034764810</li>
        </ul>
        <h3>Connect with us</h3>
    </div>
      </div>
  )
}

export default Footer
