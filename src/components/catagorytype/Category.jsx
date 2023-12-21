import { Avatar } from '@mui/material'
import React from 'react'

const Category = ({ cat ,btn }) => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', marginTop: "2rem" }}>
        {
          cat.map((item, i) => {
            return (
              <div key={i} style={{
                textAlign: 'center',
                cursor: 'pointer'
              }}>
                <img src={item.img} alt="Avatar" style={{
                  verticalAlign: 'middle',
                  width: "10rem",
                  height: "10rem",
                  border: '1px solid gray',
                  borderRadius: "50%",
                  overflow: 'hidden'
                }} />
                <h5 style={{ color: 'black', marginTop: '8px' ,fontSize:'1.8em'}}>{item.name}</h5>
              </div>
            )
          })
        }
      </div>

     
    </>
  )
}

export default Category
