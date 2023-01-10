import { Box, TableRow,  Table, TableBody, TableCell, TableContainer, TableHead, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Order.css"



const Orders = ( { order }) => {
  
    function createData(id, nombre, telefono, email, precio) {
        return {id, nombre, telefono, email, precio };
      }
      
      const rows = [
        createData(order?.id, order?.buyer?.nombre, order?.buyer?.telefono,order?.buyer?.email, order?.total),
       
      ];



  return (
    <Box 
    sx={{ marginTop: 5 }}
    >
    <Typography color="primary" variant="h3" className="order" align="center">Factura</Typography>
    <h4><Link to="/" sx={{ marginTop: 5 }}  >Ir al listado de productos</Link></h4>
    <TableContainer sx={{ marginTop: 5, marginLeft: 2 }}
    >
      <Table sx={{ maxWidth: 800, minWidth: 300 }} aria-label="simple table" >
        <TableHead>
          <TableRow 
          sx={{ '&:last-child td, &:last-child th': { border: 1, textAlign: "center" } }}
          >            
            <TableCell>Numero de Orden</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Telefono</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Total a pagar</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 1, textAlign: "center" } }}
            >
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="right">{row.nombre}</TableCell>
              <TableCell align="right">{row.telefono}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">$ {row.precio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
)}

export default Orders

