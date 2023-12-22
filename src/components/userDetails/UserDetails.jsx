import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from 'axios';
import { Circles } from 'react-loader-spinner';
import { UpdateOutlined } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const UserDetails = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const handleclose = () => {
    setOpen(false)
  }

  const baseUrl = process.env.REACT_APP_BASE_URL

  // get all user Api
  async function getUserData() {
    setLoading(true)
    const response = await axios.get(
      `${baseUrl}/api/users`
    );
    if (response.status == 200) {
      setData(response?.data)
      setLoading(false)
    }
  }
  // // get all user Api end

  async function deleteItem(itemId) {
    const res = await axios.delete(`${baseUrl}/api/users/${itemId}`)
    getUserData()
    if (res.status == 200) {
      toast.success(`item delete`)
    } else {
      toast.error(`${res}some error ecourd`)
    }
  }
  // // Delete user Api
  useEffect(() => {
    getUserData()
  }, [])






  return (
    <>
      <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="main-container-table">
                <div className="table-section">
                  <Box sx={{ overflow: "auto" }}>
                    <Box
                      sx={{
                        width: "100%",
                        display: "table",
                        tableLayout: "fixed",
                      }}
                    >
                      <Table>
                        <TableHead style={{ backgroundColor: 'darkcyan' }}>
                          <TableRow>
                            <TableCell>
                              <TableSortLabel>User Name</TableSortLabel>
                            </TableCell>
                            <TableCell>
                              <TableSortLabel>Email</TableSortLabel>
                            </TableCell>
                            <TableCell>
                              <TableSortLabel>Id</TableSortLabel>
                            </TableCell>
                            <TableCell>
                              <TableSortLabel>Price</TableSortLabel>
                            </TableCell>
                            <TableCell>
                              <TableSortLabel>Delete Item</TableSortLabel>
                            </TableCell>
                            <TableCell>
                              <TableSortLabel>Edit Item</TableSortLabel>
                            </TableCell>
                            {/* <TableCell align={"right"}>Delete</TableCell> */}
                          </TableRow>
                        </TableHead>
                        {/* <TableBody> */}
                        {
                          loading ? (<Circles />) :
                            data?.map((item, i) => {
                              // console.log(item,'hello');
                              return (
                                <TableBody key={i}>
                                  <TableRow hover>
                                    <TableCell>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <TableCell>{item.username}</TableCell>
                                      </Box>
                                    </TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item._id}</TableCell>
                                    <TableCell>world</TableCell>
                                    <TableCell>
                                      <Link to={`/about/${item._id}`}>
                                      <UpdateOutlined style={{cursor:'pointer'}}/>
                                      </Link>
                                      {/* <UpdateOutlined style={{cursor:'pointer'}} onClick={()=>{

                                        item.username = prompt('Enter your name')
                                        item.email = prompt('Enter your email')
                                        axios.put('/update-user' , item).then(()=>{
                                          setData([...data])
                                        })
                                        toast.success('hello world')
                                      }}/> */}

                                    </TableCell>
                                    <TableCell>
                                      <DeleteIcon style={{ cursor: 'pointer' }} onClick={() => {
                                        deleteItem(item._id)
                                        // toast.error("Hello world")
                                      }} />
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              );
                            })
                        }
                      </Table>
                    </Box>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserDetails
