import React, { Component, useEffect, useState } from "react";
import axios from 'axios';
import { Grid, TextField, Button, Typography} from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { green, purple } from "@material-ui/core/colors";
// import Redirect from "react-router/Redirect";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Redirect from '../../../utilities/Redirect';
import CheckIcon from '@material-ui/icons/Check';
import Snackber from './ComponentViewChangePassword/Snackber';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#cc0707', //#cc0707, #c62828
            light: '#ff5f52',
            dark: '#8e0000',
            contrastText: '#ffffff'
        }
    },
    
})

const styles = theme => ({

  
    button: {
        width: '400px',
        height: '42px',
        borderRadius: 5,
        background: 'linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181)',
        // backgroundColor: 'cyan',
        border:0,
        fontFamily:'Nunito',
    },
    title: {

        fontFamily: 'Nunito'
    }


});

 const ViewChangePassword = props => {

    const { classes } = props;


    /*

        `````````````````````````````
        PLAY WITH SNACKBAR

        `````````````````````````````

    */

    const [isOpenResponse200 , setOpenResponse200 ] = useState(false);
    const handleCloseSnackbar200 = () => setOpenResponse200(false);



    /*

        `````````````````````````````
        Get URL Redirect from email 

        `````````````````````````````

    */

    const [usefullUrl, setUsefullUrl ] = useState();
    const [emailUser, setEmailUser ] = useState();

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search.substring(1));
		const currentUrl = urlParams.get('redirect');
        console.log("currentUrl : ", currentUrl);
        
        setUsefullUrl(currentUrl);
        
        
        /*
            ````````` 
            GET EMAIL
            
            `````````
        */
        const header =  {

            'Accept': "application/json",
            'Content-Type' : "application/json",

        };

        axios.defaults.headers.common = header;

        axios
            .get(currentUrl)
            .then((response) => {
                
                console.log("Response Original : ", response)
                if(response.data.data !== null && response.data.data !== undefined){

                    setEmailUser(response.data.data.email)
                };
                
            })
            .catch((error) => {

                alert('Whoops, something went wrong !')
                console.log("Error : ", error.response)
               
            })

    },[])

    /*

        ```````````````````````````````````
        POST SUBMIT VERIFY FORGET PASSWORD

        ```````````````````````````````````

    */

    const handleSubmitVerifyPassword = () => {

        console.log("usefullUrl : ", usefullUrl);

        let data = {
            
            Auth : {
                new_password: values.password,
                new_password_confirmation : valuesConfirm.passwordConfirmation
            }
        };

        console.log("Data SUBMIT : ", data);

        const header =  {

            'Accept': "application/json",
            'Content-Type' : "application/json",

        };

        axios.defaults.headers.common = header;

        axios
            .post(usefullUrl, data)
            .then((response) => {
                
                console.log("Response Original : ", response);

                setOpenResponse200(true);
                setTimeout(() => {

                    Redirect('/login');

                }, 3000)
                
            })
            .catch((error) => {

                console.log("Error : ", error.response)
               
            })
        

    }


    /*
        ``````````````````````
        Password 

        ``````````````````````

    */

    const [values, setValues] = useState({
        amount: '',
        password: '',
        
        showPassword: false,
    
        
      });
    
    const handleChangePassword = prop => event => {

        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {

        setValues({ ...values, showPassword: !values.showPassword });
    };

    /*
        ``````````````````````
        Password Confirmation

        ``````````````````````

    */

    const [valuesConfirm, setValuesConfirm] = React.useState({
        amount: '',
        passwordConfirmation: '',
        showPasswordConfirmation: false
        
    });
    
    const handleChangePasswordConfirmation = prop => event => {

        setValuesConfirm({ ...valuesConfirm, [prop]: event.target.value });
    };
    

    const handleClickShowPasswordConfirmation = () => {
        setValuesConfirm({ ...valuesConfirm, showPasswordConfirmation: !valuesConfirm.showPasswordConfirmation });
    }

    /*

        ```````````````
        REDIRECT LOGIN 

        ```````````````
    */

    const [ isRedirectToLogin, setRedirectToLogin] = useState(false)
    const redirectToLogin = () => setRedirectToLogin(true);

    if(isRedirectToLogin == true){

        Redirect('/login')
    }
    return (
        
        <MuiThemeProvider theme ={theme}>

            <Grid  
                container
                spacing={8}
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item sm={12} style={{textAlign:'center'}}>
                    <br />
                    <br />
                    {/* <img src={ImageForgetPassword} alt='Image Forget Password' /> */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Typography variant='h5' className={classes.title} style={{textAlign: 'center'}}>
                        <b>Ubah Kata Sandi</b>
                    </Typography>                    
                    <br />
                    {
                        emailUser !== undefined ? (

                            <Typography variant='h6' className={classes.title} style={{textAlign: 'center', color: 'grey'}}>
                                User name : {emailUser}
                                {/* User name : {emailUser !== undefined ? emailUser : '...'} */}
                            </Typography>
                            
                        ) : null
                    }
                    <br />
                    <br />
                    

                    <TextField
                            id="outlined-adornment-password"
                            // className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={values.showPassword ? 'text' : 'password'}
                            label="Password"
                            value={values.password}
                            onChange={handleChangePassword('password')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton 
                                            aria-label="Toggle password visibility" 
                                            onClick={handleClickShowPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}

                            style={{width: 400}}
                        />
                        {/* <p>Kata sandi harus terdiri dari min 6 karakter dan kombinasi angka</p> */}
                        <br />
                        <br />
                        <TextField
                            id="outlined-adornment-confirm-password"
                            // className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={valuesConfirm.showPasswordConfirmation ? 'text' : 'password'}
                            label="Konfirmasi Kata Sandi"
                            value={valuesConfirm.passwordConfirmation}
                            onChange={handleChangePasswordConfirmation('passwordConfirmation')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton 
                                            aria-label="Toggle password visibility" 
                                            onClick={handleClickShowPasswordConfirmation}
                                        >
                                            {valuesConfirm.showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}

                            style={{width: 400, fontFamily: 'Nunito'}}
                        />

                    <br />
                    <br />
                    <Button 
                        onClick={handleSubmitVerifyPassword}
                        variant="contained" 
                        color="primary" 
                        className={classes.button} 
                    >
                        Masuk
                        {/* <CheckIcon /> */}
                    </Button>

                    <br />
                    <br />
                   
                </Grid>

                <Snackber 
                    handleCloseSnackbar200={handleCloseSnackbar200}
                    isOpenResponse200={isOpenResponse200}
                />

            </Grid>
        </MuiThemeProvider>
    )
};


export default withStyles(styles)(ViewChangePassword);



  /*
        `````````````````````````````````````````````````````````````````````````
        If you want styling Text Field without 'Theme Pallet', using below code : 

        `````````````````````````````````````````````````````````````````````````

    */

    // cssLabel: {
    //     '&$cssFocused': {
    //       color: purple[500],
    //     },
    // },
    // cssFocused: {},
    // cssUnderline: {

    //     '&:after': {
    //         borderBottomColor: purple[500],
    //     },
    // },
    // cssOutlinedInput: {
    //     '&$cssFocused $notchedOutline': {
    //       borderColor: purple[500],
    //     },
    // },