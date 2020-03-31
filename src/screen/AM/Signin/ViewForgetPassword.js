import React, { Component, useEffect, useState } from "react";
import axios from 'axios';
import { Grid, TextField, Button, CircularProgress, Typography} from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import {red, green, purple } from "@material-ui/core/colors";

import DialogError from '../../../components/DialogError';

import Redirect from '../../../utilities/Redirect';
import Capitalize from '../../../utilities/Capitalize';
import { ToLogin } from '../../../constants/config-redirect-url';
import { URL_API } from '../../../constants/config-api';
import ImageOKEBerhasil from '../../../assets/images/Group_24.png';
import ImageForgetPassword from '../../../assets/images/Mask_Group_7.png';

const theme = createMuiTheme({

    palette: {
        primary: {
            main: '#cc0707', //#cc0707, #c62828
            light: '#ff5f52',
            dark: '#8e0000',
            contrastText: '#ffffff'
        }
    }
    
})

const styles = theme => ({

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

    button: {
        width: '400px',
        height: '42px',
        borderRadius: 5,
        background: 'linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181)',
        // backgroundColor: 'cyan',
        border:0,
        fontFamily:'Nunito',

    },
    buttonProgress: {
        // color: red[500],
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },
      title: {

          fontFamily: 'Nunito'
      }
});


const ViewForgetPassword = props => {

    const { classes } = props;

    /*

        ``````````````````` 
        ONCHANGE EMAIL

        ```````````````````
    */
    const [email, setEmail ] = useState();
    const handleChangeEmail = (e) => setEmail(e.target.value);



    /*
        ```````````````````
        HANDLE DIALOG ERROR

        ```````````````````
    */
    const [ isOpenDialogError, setOpenDialogError ] = useState(false);
    const [ textErrorInformation, setTextErrorInformation ] = useState('');
    const [ errorStatus, setErrorStatus ] = useState(false);
   
    /*

        ````````````````````````````````
        POST SUBMIT EMAIL RESET PASSWORD

        ````````````````````````````````
    */
    const [sentEmailSuccess, setSentEmailSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleResetPassword = (params) => {

        setLoading(true);

        const data = {

            Auth : {
                email: params
            }
        };

        // console.log(data)

        const header =  {

            'Accept': "application/json",
            'Content-Type' : "application/json",

        };

        axios.defaults.headers.common = header;

        axios
            .post(URL_API + `/auth/forgot`, data)
            .then((response) => {
                
                console.log("Response Original : ", response)
                setSentEmailSuccess(true);
                setLoading(false)

            })
            .catch((error) => {

                setLoading(false)
                console.log("Error : ", error.response)

                if(error.response !== undefined){
                    
                    if(error.response.status === 400){
                        
                        setErrorStatus(400)
                        if(error.response.data.info.errors !== null && error.response.data.info.errors !== undefined){
                            // if(error.response.data.info.errors.hasOwnProperty('email')){
                                setTextErrorInformation('Error 400 : ' + Capitalize(error.response.data.info.errors.email))
                                setOpenDialogError(true);  
                                                          
                            // };                        

                        };
                    };

                } else {

                    setTextErrorInformation("Whoops, something went wrong !")
                    setOpenDialogError(true)
                }
               
            })
    };

    /*

        ```````````````
        REDIRECT LOGIN 

        ```````````````
    */
    const [ isRedirectToLogin, setRedirectToLogin] = useState(false)
    const redirectToLogin = () => setRedirectToLogin(true);


    if(isRedirectToLogin == true){

        // return <Redirect to='/login' />
        Redirect(ToLogin)
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
                    <img src={ImageForgetPassword} alt='Image Forget Password' />
                    <br />
                    <br />

                    {
                        sentEmailSuccess !== false ? (
                            <div>
                                <img src={ImageOKEBerhasil} style={{marginTop: 14}} />
                                <br />
                                <br />

                                <Typography variant='h6' style={{color: 'grey', lineHeight: '1.5'}}>
                                {/* <h6 style={{color: 'grey', lineHeight: '1.5'}}> */}
                                    Kami telah mengirimkan pesan baru ke email Anda.
                                    <br />
                                    Periksa email Anda untuk mengikuti instruksi lebih lanjut
                                </Typography>
                            </div>

                        ) : (
                            <div>
                                <Typography variant='h5' className={classes.title}>
                                    <b>Lupa kata sandi</b>
                                </Typography>
                                
                                <br />
                                <br />
                                <TextField
                                    // className={classes.margin}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            // root: classes.width,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
                                    label="Email"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    // className={classes.width}
                                    style={{width: 400}}
                                    onChange={handleChangeEmail}
                                    
                                />
                            </div>
                        )
                    }

                    
                    <br />
                    {
                        sentEmailSuccess !== true ? (

                            <Button 
                                // onClick={redirectToRoleTambah}                                
                                variant="contained" 
                                color="primary" 
                                className={classes.button} 
                                onClick={() => handleResetPassword(email)}
                            >
                                { loading !== true ? "Reset Password" : null }
                                { loading && <CircularProgress size={24} className={classes.buttonProgress} /> }  
                                
                            </Button>

                        ) : null
                    }

                    <br />
                    <br />
                    <Typography variant='h6' className={classes.title}
                        onClick={redirectToLogin}                     
                        style={{color: '#cc0707', cursor: 'pointer' }}
                    >
                            <b>Kembali ke halaman masuk</b>    
                    </Typography>
                </Grid>

                <DialogError 
                    classes = { classes }                    
                    isOpenDialogError = { isOpenDialogError }
                    setOpenDialogError = { setOpenDialogError }
                    textErrorInformation = {textErrorInformation}
                    errorStatus = { errorStatus}
                />
            </Grid>
        </MuiThemeProvider>
    )
};


export default withStyles(styles)(ViewForgetPassword);