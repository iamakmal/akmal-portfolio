import React from 'react'
import {Typography} from '@mui/material'
import {Box} from '@mui/material'
import { Grid } from '@mui/material'
import profilePic from '../assets/profile.jpg'

function about() {
  return (
    <section id="about">
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center', 
    }}
    >
    <Typography variant="h1">About Me</Typography>
    <Grid 
      container
      spacing={2}
      >
      <Grid item xs={12} sm={6}>
        <Typography variant="h4">A dedicated, hardworking and an enthusiastic individual,
        looking forward to work in the IT industry. Seeking an
        internship on Software Development in a well reputed
        company to utilize my skills and to gain some real world
        experience in a challenging and motivating working
        environment. Currently I am an undergraduate at SLIIT,
        following BSc in Information Technology (Specializing in
        Software Engineering) degree program. Curiosity to learn
        new things is what keeps me motivated. I believe that I will
        be a valuable asset to your company.</Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <img src={profilePic} width="50%"/>
      </Grid>

      </Grid>
    </Box>
    </section>
  )
}

export default about