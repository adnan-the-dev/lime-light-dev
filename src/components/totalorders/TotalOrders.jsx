import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const TotalOrders = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((item) => {
    return item.productSection.cart;
  });
  return (
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
                        <TableHead style={{backgroundColor:'darkcyan'}}>
                          <TableRow>
                            <TableCell>
                              <TableSortLabel>LOGO</TableSortLabel>
                            </TableCell>
                            <TableCell>
                              <TableSortLabel>Product Name</TableSortLabel>
                            </TableCell>
                            <TableCell>
                              <TableSortLabel>Count</TableSortLabel>
                            </TableCell>
                            <TableCell>
                              <TableSortLabel>Price</TableSortLabel>
                            </TableCell>
                            <TableCell>
                              <TableSortLabel>Delete Item</TableSortLabel>
                            </TableCell>
                            {/* <TableCell align={"right"}>Delete</TableCell> */}
                          </TableRow>
                        </TableHead>
                        {cartItem?.map((item,i) => {
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
                                    <Avatar
                                      sx={{
                                        height: 42,
                                        width: 42,
                                        backgroundColor: "primary.main",
                                      }}
                                    >
                                      <img
                                        src={item.img}
                                        alt="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"
                                      />
                                    </Avatar>
                                    <Box sx={{ ml: 1 }}>
                                      <Link
                                        color={"inherit"}
                                        variant={"subtitle2"}
                                        component={"a"}
                                        sx={{ cursor: "pointer" }}
                                      >
                                        The Dark Web
                                      </Link>
                                    </Box>
                                  </Box>
                                </TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>Tester</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>
                                  <DeleteIcon style={{cursor:'pointer',color:'red'}} onClick={()=>{
                                    dispatch({
                                      type:"DELETET_ITEM",
                                      payload:item.id
                                    })
                                    toast.success("Item Delete")
                                  }} />
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          );
                        })}
                      </Table>
                    </Box>
                  </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
