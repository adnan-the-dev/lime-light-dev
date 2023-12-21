import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const About = () => {

  const { id } = useParams();
  const [update, setUpdate] = useState([])
  const [user, setUser] = useState([])
  console.log(user,'uersfd');
  const navigate = useNavigate()
  const baseUrl = process.env.REACT_APP_BASE_URL
  useEffect(() => {
    axios.get(`${baseUrl}/api/users/` + id).
      then(res => setUpdate(res)).
      catch(err => console.log(err))
  }, [])

  function handleSubmit (event) {
    // event.preventDefau1t()
    axios.put(`${baseUrl}/api/users/` + id, update).then(res => {setUser(res)
      toast.success("data updata successfully")
      navigate('/userdetails')
    })
  }
  return (
    <>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w—50 border bg—light p—5'>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder='Enter your Name'
                className='form-control'
                value={update.data?.username}
                onChange={e => setUpdate({ ...update, name: e.target.value })}
              />
            </div>
            <div>
              <input type="email"
                name="email"
                placeholder='Enter your Email'
                className='form-control'
                value={update.data?.email}
                onChange={e => setUpdate({ ...update, email: e.target.value })}
              />
            </div>
            <button className='btn btn-info'type='Submit'>Update Now</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default About
