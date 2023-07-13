import React from 'react'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import bootstrap from '../assets/tools/bootstrap.png'
import c from '../assets/tools/c.png'
import css from '../assets/tools/css.png'
import figma from '../assets/tools/figma.png'
import firebase from '../assets/tools/firebase.png'
import github from '../assets/tools/github.png'
import html from '../assets/tools/html.png'
import java from '../assets/tools/java.png'
import js from '../assets/tools/js.png'
import kotlin from '../assets/tools/kotlin.png'
import mern from '../assets/tools/mern.png'
import mysql from '../assets/tools/mysql.png'
import php from '../assets/tools/php.png'
import postman from '../assets/tools/postman.png'
import vscode from '../assets/tools/vscode.png'
import wordpress from '../assets/tools/wordpress.png'


function Skills() {
  return (
    <>
    <section id="skills">
    <Typography variant="h2" align="center" gutterBottom>Skills</Typography>
    <Grid container spacing={2}>


    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={html} height="150px" alt="html"/>
    <Typography variant="subtitle1">HTML</Typography>
    </div>
    </Grid>


    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={css} height="150px" alt="css"/>
    <Typography variant="subtitle1">CSS</Typography>
    </div>
    </Grid>


    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={php} height="150px" alt="php"/>
    <Typography variant="subtitle1">PHP</Typography>
    </div>
    </Grid>


    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={js} height="150px" alt="js"/>
    <Typography variant="subtitle1">JS</Typography>
    </div>
    </Grid>


    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={c} height="150px" alt="c"/>
    <Typography variant="subtitle1">C</Typography>
    </div>
    </Grid>


    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={java} height="150px" alt="java"/>
    <Typography variant="subtitle1">Java</Typography>
    </div>
    </Grid>


    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={mysql} height="150px" alt="mysql"/>
    <Typography variant="subtitle1">MySQL</Typography>
    </div>
    </Grid>


    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={bootstrap} height="150px" alt="bootstrap"/>
    <Typography variant="subtitle1">Bootstrap</Typography>
    </div>
    </Grid>


    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={vscode} height="150px" alt="vscode"/>
    <Typography variant="subtitle1">VS Code</Typography>
    </div>
    </Grid>


    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={github} height="150px" alt="github"/>
    <Typography variant="subtitle1">Github</Typography>
    </div>
    </Grid>


    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={figma} height="150px" alt="figma"/>
    <Typography variant="subtitle1">Figma</Typography>
    </div>
    </Grid>


    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={firebase} height="150px" alt="firebase"/>
    <Typography variant="subtitle1">Firebase</Typography>
    </div>
    </Grid>

    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={postman} height="150px" alt="postman"/>
    <Typography variant="subtitle1">Postman</Typography>
    </div>
    </Grid>


    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={kotlin} height="150px" alt="kotlin"/>
    <Typography variant="subtitle1">Kotlin</Typography>
    </div>
    </Grid>


    <Grid item xs={6} sm={3} md={2}>
    <div style={{ textAlign: 'center' }}>
    <img src={wordpress} height="150px" alt="wordpress"/>
    <Typography variant="subtitle1">Wordpress</Typography>
    </div>
    </Grid>

    <Grid item >
    <div style={{ textAlign: 'center' }}>
    <img src={mern} height="150px" alt="mern"/>
    <Typography variant="subtitle1">Mern</Typography>
    </div>
    </Grid>

    </Grid>
    </section>
    </>
  )
}

export default Skills