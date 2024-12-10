import React, { useEffect, useState } from 'react'
import { Box, Typography, Paper, AppBar, Toolbar, IconButton, InputBase, Button, Divider } from '@mui/material';
import { Search, Menu, AccountCircle,ArrowDropDown } from '@mui/icons-material';
import dp from '../images/dp.png'

function Home() {
    return (
<div>
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f5f5' ,borderRadius:'3',padding:'2'}}>
          {/* Sidebar */}
          <Box
            sx={{
              width: 250,
              bgcolor: '#ffffff',
              borderRight: '1px solid #ddd',
              p: 2,
              boxShadow: 3, 
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Star.top
            </Typography>
            <Box>
              <Typography variant="body1" mb={1}>
                Introduction
              </Typography>
              <Typography variant="body1" mb={1}>
                Analyst
              </Typography>
              <Typography variant="body1" mb={1}>
                Connections
              </Typography>
              <Typography variant="body1" mb={1}>
                Boosting
              </Typography>
            </Box>
          </Box>
    
          {/* Main Content */}
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <AppBar position="static" color="transparent" elevation={0}>
              <Toolbar>
                <IconButton edge="start" color="inherit">
                  <Menu />
                </IconButton>
                <Box sx={{ flexGrow: 1 }}>
                  <InputBase
                    placeholder="Search in services, startups..."
                    sx={{
                      bgcolor: '#f0f0f0',
                      borderRadius: 2,
                      p: 1,
                      px: 2,
                      width: '100%',
                    }}
                    startAdornment={<Search sx={{ mr: 1 }} />}
                  />
                </Box>
                <Button color="inherit" variant="outlined"
      sx={{
        borderColor: "rgba(0, 0, 0, 0.4)", 
        borderRadius: "22px", 
        color: "black", 
        padding: "8px 16px", 
        textTransform: "none", 
        "&:hover": {
          borderColor: "rgba(0, 0, 0, 0.6)", 
        },
      }} startIcon={<ArrowDropDown />} endIcon={<Box sx={{fontSize:'36px',display: "flex",
        alignItems: "center",
        justifyContent: "center",}}><AccountCircle fontSize="large"/></Box>}>
                  Kanoe Thora
                </Button>
              </Toolbar>
            </AppBar>
    
            {/* Hero Section */}
            <Box
              sx={{
                flexGrow: 1,
                p: 4,
                bgcolor: '#e8f5ff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Ignite your startup’s potential with <br />{' '}
                <Typography component="span" color="primary" fontWeight="bold">
                  Progress Instruments
                </Typography>
              </Typography>
              <Button variant="contained" size="large" sx={{ mt: 2 }}>
                Get Started
              </Button>
            </Box>
    
            {/* Main Cards */}
            <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 3 }}>
              {/* Card 1 */}
              <Paper sx={{ p: 3, width: '30%' }}>
                <Typography variant="h6" fontWeight="bold">
                  Monthly Statistics
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  December 2023
                </Typography>
                {/* Add a chart or progress bar here */}
              </Paper>
    
              {/* Card 2 */}
              <Paper sx={{ p: 3, width: '30%' }}>
                <Typography variant="h6" fontWeight="bold">
                  Active Startups
                </Typography>
                <Typography variant="h4" color="primary">
                  +430
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
    
</div>  );
};

export default Home
