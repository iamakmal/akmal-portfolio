import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Typewriter from 'typewriter-effect'
import backgroundImg from '../assets/background.jpg'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function home() {
  return (
 
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center', 
    }}
    >
    <section id="home">
    <Typography variant="h6"align="center">Hi There,</Typography>
    <Typography variant="h1" align="center">I am Akmal</Typography>
    <Typography variant="h3" align="center">
    <Typewriter
      options={{
        strings: [
          "Undergraduate",
          "Full Stack Web Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      />
    </Typography>
    <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', 
    }}>
    <a href="https://www.linkedin.com/in/akmal-alavi/" style={{marginRight: '20px'}}><LinkedInIcon style={{ fontSize: 40 }}/></a>
    <a href="https://github.com/iamakmal" style={{marginRight: '20px'}}><GitHubIcon style={{ fontSize: 40 }}/></a>
    <a href="https://twitter.com/_iamakmal_" style={{marginRight: '20px'}}><TwitterIcon style={{ fontSize: 40 }}/></a>
    </Box>
    </section>
    </Box>

  )
}

export default home