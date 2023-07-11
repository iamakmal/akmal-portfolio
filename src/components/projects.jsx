import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import bank from '../assets/bank.png'
import exam from '../assets/exam.png'
import resource from '../assets/resource.png'
import landsale from '../assets/landsale.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';

function projects() {
  return (
    <>
    <section id="projects">
    <Typography variant="h1">Projects</Typography>

    <Grid 
      container
      spacing={2}
      >
    <Grid item xs={12} sm={6}>
    <Card sx={{ maxWidth: 800, borderRadius: '3%', margin: '20px', padding: '10px' }}>
      <CardMedia
                sx={{
                  height: { xs: 300, sm: 400 },
                  borderRadius: '3%',
                }}
        image={exam}
        title="exam system"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Online Exam System
        </Typography>
        <Typography variant="body1" color="text.secondary">
        This group project was for the OOP module in the 2nd Year 1st Semester. I
        developed the Students Dashboard and Feedback Section, where the student
        can view and edit his certain details, view the enrolled modules, attend the
        online exam and view the results of his past exams done through the system
        and also to send any feedbacks regarding the exam.<br/>
        <i><b>#Java Servlets #JSP #MySQL #Bootstrap</b></i>
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://github.com/Arudchayan/Online-Examination-Management-System" target="_blank" rel="noopener noreferrer" style={{marginRight: '20px'}}><GitHubIcon style={{ fontSize: 40, color: 'black'}}/></a>
      <a href="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7004138072615354370?compact=1" target="_blank" rel="noopener noreferrer"><Button size="large">Demo</Button></a>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={12} sm={6}>
    <Card sx={{ maxWidth: 800, borderRadius: '3%', margin: '20px', padding: '10px' }}>
      <CardMedia
         sx={{
          height: { xs: 300, sm: 400 },
          borderRadius: '3%',
        }}
        image={resource}
        title="HR system"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Human Resource Management System - Resource Management
        </Typography>
        <Typography variant="body1" color="text.secondary">
        This group project was for the ITP module in the 2nd Year 2nd Semester. I
        developed the Resource Management component, here all the resources in
        the company which can be either devices or stationeries, they can be
        managed easily, by entering the available quantity, supplier details, and also
        to assign employees to a particular resource. It is also equipped with a search
        functionality and also reports are generated based on the available quantity
        and the number of employees assigned to a resource.<br/>
        <i><b>#MERN-(MongoDB, Express, React, Node) #Bootstrap</b></i>
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://github.com/SLIITITP/y2_s2_wd_it_01-itp_wd_metro_01" target="_blank" rel="noopener noreferrer" style={{marginRight: '20px'}}><GitHubIcon style={{ fontSize: 40, color: 'black'}}/></a>
      <a href="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7062811311100891137?compact=1" target="_blank" rel="noopener noreferrer"><Button size="large">Demo</Button></a>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={12} sm={6}>
    <Card sx={{ maxWidth: 800, borderRadius: '3%', margin: '20px', padding: '10px' }}>
      <CardMedia
         sx={{
          height: { xs: 300, sm: 400 },
          borderRadius: '3%',
        }}
        image={bank}
        title="Bank management"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          E-Wallet - Bank Management
        </Typography>
        <Typography variant="body1" color="text.secondary">
        This group project was for the MAD module in the 2nd Year 2nd Semester. I
        developed the Bank Management component. Here the user can have multiple
        bank accounts and manage the respective transactions of each bank account
        separately. It is also equipped with a search function so that a particular
        transaction could be searched easily.<br/>
        <i><b>#Android Studio #Kotlin #Firebase Database</b></i>
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://github.com/IT21292422/WalletApp-PilotSquad" target="_blank" rel="noopener noreferrer" style={{marginRight: '20px'}}><GitHubIcon style={{ fontSize: 40, color: 'black'}}/></a>
      <a href="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7062784147399835648?compact=1" target="_blank" rel="noopener noreferrer"><Button size="large">Demo</Button></a>
      </CardActions>
    </Card>
    </Grid>

    <Grid item xs={12} sm={6}>
    <Card sx={{ maxWidth: 800, borderRadius: '3%', margin: '20px', padding: '10px' }}>
      <CardMedia
         sx={{
          height: { xs: 300, sm: 400 },
          borderRadius: '3%',
        }}
        image={landsale}
        title="Bank management"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Online Landsale System
        </Typography>
        <Typography variant="body1" color="text.secondary">
        This group project was for the IWT module in the 1st Year 2nd Semester. I
        developed the submit request form, edit request form and My Posts section
        where the user can see all the posts, he has posted which includes both the
        request posts and sale posts.<br/>
        <i><b>#HTML #CSS #PHP #MySQL</b></i>
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://github.com/ravii-sa/landsale" target="_blank" rel="noopener noreferrer" style={{marginRight: '20px'}}><GitHubIcon style={{ fontSize: 40, color: 'black'}}/></a>
      </CardActions>
    </Card>
    </Grid>

    </Grid>
    </section>
    </>
  )
}

export default projects