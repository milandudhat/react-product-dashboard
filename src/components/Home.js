
import React from 'react'
import { Box, Stack } from '@mui/material'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import Navbar from '../pages/Navbar'
import Sidebar from '../pages/Sidebar'

import '../Dash.css'


const Home = () => {
    return (
        <>
          <div className='bgcolor'>
            <Navbar />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
              <Sidebar />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <Card sx={{ minWidth: 49 + '%', height: 125, bgcolor: '#575656' }}>
                        <CardContent sx={{
                          margin: 10 + 'px',
                        }}>
                          <div className='homepageCard' sx={{
                            // margin: 100 + 'px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
              
    
                          }}>
                            Welcome to the Product Management System
                          </div>
                        </CardContent>
                      </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </div>
        </>
      )
}

export default Home
