import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Typewriter from 'typewriter-effect'
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
      justifyContent: 'center', 
    }}
    >
    <section id="home">
    <div>
    <Typography variant="h6">Hi There,</Typography>
    <Typography variant="h1">I am Akmal</Typography>
    <Typography variant="h3">
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
    <a href="https://www.linkedin.com/in/akmal-alavi/"><LinkedInIcon/></a>
    <a href="https://github.com/iamakmal"><GitHubIcon/></a>
    <a href="https://twitter.com/_iamakmal_"><TwitterIcon/></a>
    </div>
    </section>
    </Box>
  )
}

export default home