import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { FormLabel } from '@mui/material'
import { Box } from '@mui/material'
import emailjs, { init } from "@emailjs/browser"
import contact from "../assets/contact.jpg"

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true)
    const [emailError, setEmailError] = useState(false)

    const validateEmail = (email) => {
        // Regular expression to validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);
        setEmailError(!validateEmail(value)); // Set emailError based on email validity
    };

    useEffect(() => {
        // Check if all the fields are filled and email is valid and then set the disabled state of the submit button accordingly
        const isFormValid = name !== '' && email !== '' && subject !== '' && message !== '' && !emailError;
        setSubmitBtnDisabled(!isFormValid);
    }, [name, email, subject, message]);

    const submit = (e) => {
        e.preventDefault()
        var templateParams = {
            name,
            email,
            subject,
            message
        }

        emailjs.send("service_t1k3lbg", "template_pkz9elr", templateParams, "gyOgN_uwaHWczAH-r")
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Email Delivered Successfully")
                setName("")
                setEmail("")
                setSubject("")
                setMessage("")
            }, function (error) {
                console.log('FAILED...', error);
            });
    }

    return (
        <>
        <section id="contact">
            <Typography variant="h2" align="center" gutterBottom>Contact Me</Typography>
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                           // width: '50%',
                            background: 'inherit',
                            justifyContent: 'center',
                            padding: '20px',
                        }}
                    >
                        <form onSubmit={submit}>
                            <TextField type="text" sx={{ mb: 3, backgroundColor: '#ffff' }} value={name} onChange={(e) => setName(e.target.value)} label="Name" fullWidth color='primary' variant='outlined' placeholder="Enter your Name" />
                            <TextField type="email" sx={{ mb: 3, backgroundColor: '#ffff' }} value={email} onChange={handleEmailChange} error={emailError} helperText={emailError ? 'Invalid email format' : ''} label="E-mail" color='primary' fullWidth variant='outlined' placeholder="Enter the E-Mail" />
                            <TextField type="text" sx={{ mb: 3, backgroundColor: '#ffff' }} value={subject} onChange={(e) => setSubject(e.target.value)} label="Subject" color='primary' fullWidth variant='outlined' placeholder="Enter the Subject" />
                            <TextField label="Message" sx={{ mb: 3, backgroundColor: '#ffff' }} value={message} onChange={(e) => setMessage(e.target.value)} multiline rows={4} fullWidth placeholder="Enter the Message" />
                            <Button size="large" variant="outlined" type='submit' disabled={submitBtnDisabled} sx={{backgroundColor: '#ffff'}}>Submit</Button>
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={contact} style={{maxWidth: '100%', height: 'auto'}}/>
                </Grid>
            </Grid>
            <br/>
            <br/>
            </section>
        </>
    )
}

export default Contact