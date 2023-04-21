import React from 'react'
import Sidebar from '../pages/Sidebar'
import { Box } from '@mui/material'
import Navbar from '../pages/Navbar'
import Grid from '@mui/material/Grid';
import BarChart from '../utils/charts/barChart';
import '../Dash.css'
import Stack from '@mui/material/Stack';



const Dashboard = () => {
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
                    <BarChart />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </div>
        </>
      )
}

export default Dashboard    