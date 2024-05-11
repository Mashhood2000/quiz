
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
//import { useNavigate } from 'react-router-dom';


export default function BasicTable() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
          try {
              //API Call
              const response = await axios.get('https://sandbox.practical.me/api/user/profile', {
                  headers: {
                    "Content-Type": "application/json"
                  }
              });
              if (response.data.success) {
                  setUserData(response.data);
                  console.log(response.data);
              } else {
                  console.log(response.data.error);
              }
          } catch (error) {
              console.error(error);
          }
      };
      fetchData();

  }, []);

  return (
    <Box>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>WALLET</TableCell>
            <TableCell align="right">Wallet ID</TableCell>
            <TableCell align="right">Transaction Type</TableCell>
            <TableCell align="right">Transaction Date</TableCell>
            <TableCell align="right">Order ID</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {/* {userData.wallet.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                
              </TableCell>
              <TableCell align="right">{row.wallet_id}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.transaction_type}</TableCell>
              <TableCell align="right">{row.transaction_date}</TableCell>
              <TableCell align="right">{row.description}</TableCell>

            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    
  );
}
