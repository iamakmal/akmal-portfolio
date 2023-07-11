import React from 'react'
import {Typography} from '@mui/material'

function education() {
  return (
    <>
    <section id="education">
    <Typography variant="h1">Education</Typography>

    <div>
    <Typography variant="body1" sx={{fontWeight: 'bold'}}>BSc in Information Technology (Specializing in Software Engineering) | SLIIT</Typography>
    <Typography variant="body2">2021 – 2025 (READING) | CGPA 3.61</Typography>
    </div>

    <div>
    <Typography variant="body1" sx={{fontWeight: 'bold'}}>G.C.E. A/L | Zahira College Colombo</Typography>
    <Typography variant="body2">2020 <br /> 1A 2S (Z-SCORE=O.9456)</Typography>
    <Typography variant="body2">
      <ul>
        <li>ICT-A</li>
        <li>Combined Math- S</li>
        <li>Physics- S</li>
        <li>General English- A</li>
        <li>Common General Test- 64</li>
      </ul>
    </Typography>
    </div>

    <div>
    <Typography variant="body1" sx={{fontWeight: 'bold'}}>Diploma in Information Technology (DiTec) | Esoft (Pearson)</Typography>
    <Typography variant="body2">2018</Typography>
    </div>

    </section>
    </>
  )
}

export default education