import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { __values } from 'tslib';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//Below are the classes I used in this form - you guys can adjust styling as necessary,
//I just went with the stock material-ui component styling
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  panel: {
    margin: theme.spacing(3),
    padding: theme.spacing(1),
  },
  container: {
    background: "#777"
  }
}));

export default function LoginPanel() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    password: '',
    email: ''
  })

const Battle = () => {
  return <h2>Battle Screen</h2>
}

const Login = () => {
  return <h2>Login Screen</h2>
}

const CharSelect = () => {
  return <h2>Char Select Screen</h2>
}

  const changeHandler = (name, password, email) => event => {
    setValues({...values, 
      [name]: event.target.value, 
      [password]: event.target.value,
      [email]: event.target.value
      });
  }

  const signUp = event => {
    axios.post('/addUser', {
      username: values.name,
      password: values.password,
      email: values.email
    })
  }

  return(
  <>
    <Container  maxWidth="sm">
    <h1 id = "welcometext">Welcome To The Curse of Brent</h1>
    <div className =  "login-box">
      <Paper className={classes.panel}>
        <Box >
          <Typography variant="h6" component="h6">
            Sign up or Log in
          </Typography>
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={changeHandler('name')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            onChange={changeHandler('password')}
            type="password"
            value={values.password}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-email-input"
            label="E-mail"
            className={classes.textField}
            onChange={changeHandler('email')}
            type="email"
            value={values.email}
            margin="normal"
            variant="outlined"
          />
        </Box>

        <Box component="span">
          <Button 
            variant="contained" 
            color = "primary"
            id = "loginButton"
            className={classes.button}>
            Login
          </Button>

          <Button 
            variant="contained" 
            color="secondary" 
            className={classes.button}
            onClick={signUp()}>
            Sign-Up
          </Button>
        </Box>
      </Paper>
      </div>
    </Container>
  </>
  )
}