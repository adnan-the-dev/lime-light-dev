import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
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
  const [open, setOpen] = useState({ isOpen: false, id: '' })

  const handleclose = () => {
    setOpen({ isOpen: false })
  }

  const baseUrl = process.env.REACT_APP_BASE_URL

  // get all user Api
  async function getUserData() {
    setLoading(true)
    const response = await axios.get(
      `${baseUrl}/users`
    );
    if (response.status == 200) {
      setData(response?.data)
      setLoading(false)
    }
  }
  // // get all user Api end

  async function deleteItem(itemId) {
    const res = await axios.delete(`${baseUrl}/${itemId}`)
    getUserData()
    if (res.status == 200) {
      toast.success(`item delete`)
    } else {
      toast.error(`${res}some error ecourd`)
    }
  }
  useEffect(() => {
    getUserData()
  }, [])

  let userData = data.find((user) => user._id == open.id)

  const [userName, setUserName] = useState(userData?.username)
  const [userEmail, setUserEmail] = useState(userData?.email)


  useEffect(() => {
    if (userData) {
      setUserName(userData?.username);
      setUserEmail(userData?.email)
    }
  }, [open])

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value)
  }

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }


  // callin API for update user
  const updateUser = async () => {
    const formData = {
      username : userName,
      email: userEmail
    }
    handleclose()
    getUserData()
    await axios.put(`${baseUrl}/update-user/${open.id}`, formData).then(res => {
      toast.success("data updata successfully")
    })

  }

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
                                      {/* <Link to={`/about/${item._id}`}>
                                      <UpdateOutlined style={{cursor:'pointer'}}/>
                                      </Link> */}
                                      <UpdateOutlined style={{ cursor: 'pointer' }} onClick={() => {
                                        setOpen({ isOpen: true, id: item._id })
                                      }} />
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
      <Dialog open={open.isOpen}>
        <div className="pop-up">
          <DialogTitle>
            <h2 style={{ padding: 0, margin: "0" }}>hello</h2>
          </DialogTitle>

          <DialogContent
            sx={{ textAlign: "center", margin: "0", padding: "0" }}
          >
            <input type="text" placeholder='name' value={userName} onChange={handleUserName} /><br />
            <input type="text" placeholder='email' value={userEmail} onChange={handleUserEmail} />
          </DialogContent>

          <DialogActions sx={{ paddingBottom: "30px" }}>
            <Button onClick={updateUser} variant="contained" color="primary">
              Update
            </Button>
            <Button onClick={handleclose} variant="contained" color="primary">
              Close
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  )
}

export default UserDetails
