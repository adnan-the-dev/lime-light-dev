// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { toast } from 'react-toastify';

// const About = () => {
//   const baseUrl = process.env.REACT_APP_BASE_URL
//   const { id } = useParams();
//   console.log(id,'uersfd');
//   const [update, setUpdate] = useState([])
//   console.log(update,'upadat');
//   const navigate = useNavigate()

//   async function getUserData() {
//     const response = await axios.get(
//       `${baseUrl}/users`
//     );
//     if (response.status == 200) {
//       setUpdate(response?.data)
//     }
//   }

//   async function handleSubmit (event) {
//     event.preventDefault()
//     // await axios.put(`${baseUrl}/users/${id}`,update).then(res => {
//     //   toast.success("data updata successfully")
//     //   navigate('/userdetails')
//     // })
//   }

//     useEffect(() => {
//     getUserData()
//   }, [])
//   return (
//     <>
//       <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
//         <div className='w—50 border bg—light p—5'>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder='Enter your Name'
//                 className='form-control'
//                 value={update.username}
//                 onChange={e => setUpdate({ ...update, name: e.target.value })}
//               />
//             </div>
//             <div>
//               <input type="email"
//                 name="email"
//                 placeholder='Enter your Email'
//                 className='form-control'
//                 value={update.email}
//                 onChange={e => setUpdate({ ...update, email: e.target.value })}
//               />
//             </div>
//             <button className='btn btn-info'type='Submit'>Update Now</button>
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }

// export default About
