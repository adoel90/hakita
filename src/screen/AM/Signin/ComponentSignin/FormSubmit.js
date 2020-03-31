import React, { useRef, useEffect, useState, Fragment } from "react";
import axios from 'axios';
import {fromJS } from 'immutable';
import { 
    Container, Paper, Typography, Grid, TextField, Checkbox, FormControlLabel, Box, Button, CircularProgress,
    Card, CardActionArea, CardMedia, CardContent, CardActions, Dialog, DialogTitle, DialogContent, DialogContentText,
    DialogActions, Hidden

} from '@material-ui/core';
import Modal from 'react-responsive-modal';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import { navigate } from 'hookrouter';

import { URL_API } from '../../../../constants/config-api';
import PictInfo from '../../../../assets/images/icon-info-24px.svg';
import Redirect from '../../../../utilities/Redirect';
import { ToDashboard, ToMaintenance, ToLogin, ToCompletionMemberhipOptions, ToCompletionProfile } from '../../../../constants/config-redirect-url';
import { MessageErrorValidationEmail } from '../../../../constants/config-messages-user';

import DialogError from '../../../../components/DialogError';
const validatorEmail = require("email-validator");


const styles = theme => ({

    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        minWidth: 300,
        width: 425,
        [theme.breakpoints.only('xs')]: {
    
            width: 366,
            // backgroundColor: 'red',
        },
        fontFamily: 'Nunito'

    },

    textFieldPassword: {

        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        minWidth: 300,
        width: 425,
        [theme.breakpoints.only('xs')]: {
    
            width: 366,
            // backgroundColor: 'red',
        },
    },

    input: {

        color: 'grey',
        fontFamily: 'Nunito'

    },
    checkbox: {

        marginLeft:theme.spacing(1)
    },
    button: {

        width: '425px',
        height: '42px',
        borderRadius: 5,
        background: 'linear-gradient(1deg, #1a457f, #1a457f 30%, #3f62a2 67%, #3f62a2)',
        
        border:0,
        fontFamily:'Nunito',
        marginLeft:theme.spacing(1),
        [theme.breakpoints.only('xs')]: {
    
            width: 366,
            // backgroundColor: 'red',
        },
    },
    buttonModal: {

        height: '42px',
        borderRadius: 5,
        background: 'linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181)',
        border:0,
        fontFamily:'Nunito',
        marginLeft:theme.spacing(1)
    },
    media: {
        height: 80,
        width: 80,
        marginLeft: theme.spacing(7)
    },
    mediaOke: {
        height: 80,
        width: 80,
    },
    buttonModalDelete: {
        borderRadius: 5,
        background: 'linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181)',
        border:0,
        fontFamily:'Nunito',
        marginLeft:theme.spacing(1),
        textTransform: 'capitalize',
        marginRight: theme.spacing(4),
        color: 'white'
    },
    title: {

        fontFamily: 'Nunito'
    },

    titleBold: {

        fontFamily: 'Nunito',
        fontWeight: 'bold'
    },

})

const useStyle = makeStyles(styles);

const FormSubmit = props => {

    // const { classes } = props;
    const classes = useStyle();
    const textInputReff = useRef(null)

    const [response404, setResponse404] = useState(null);
    // const [isLoading, setIsLoading ] = useState(false);
    const [isResponse404, setIsResponse404] = useState(false);
    const [isResponse200, setIsResponse200] = useState(false);
    const [isResponse400, setIsResponse400] = useState(false);


    useEffect(() => {

        setTimeout(() => {
            if(textInputReff !== null){

                textInputReff.current.focus();
            };

        }, 100);
    },[])

    /*
        `````````````````````````````````````````````````````````````````````
        HANDLE CHANGE EMAIL
            
        `````````````````````````````````````````````````````````````````````
    */

    const [form, setFormEmail] = useState({

        email: ""

    });

    const [isErrorEmailValidation, setErrorEmailValidation ] = useState(false);

    const handleOnChangeEmail = (e) => {

        e.preventDefault();

        setErrorEmailValidation(validatorEmail.validate(e.target.value))
            
        setFormEmail({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const [response, setResponse] = useState({
        
        data: null,
        complete: false,
        pending: false,
        error: false
    });

    const [response200, setResponse200] = useState({
        data: null,
        complete: false,
        pending: false,
        error: false 
    });

    const [response400, setResponse400] = useState({
        data: undefined,
        complete: false,
        pending: false,
        error: false 
    });

    /*

        ``````````````````````
        Password 

        ``````````````````````

    */

    const [values, setValues] = useState({
        amount: '',
        password: '',
        showPassword: false

    });

    const [ errorMinSixCharacter, setErrorMinSixCharacter ] = useState(false);
    const [ errorHasDigit, setErrorHasDigit ] = useState(false);

    const handleChangePassword = prop => event => {

        setValues({ ...values, [prop]: event.target.value });

    };

    const handleClickShowPassword = () => {

        setValues({ ...values, showPassword: !values.showPassword });
    };

    /*

        ``````````````````````
        Checkbox 

        ``````````````````````

    */

    const [isChecked, setChecked] = useState({

        checkedA: true

    });

    const handleChangeCheckbox = name => event => {

        setChecked({ ...isChecked, [name]: event.target.checked });
    };

    /*

        ``````````````````````````````````
        MODAL LOADING, MODAL RESPONSE, etc

        ``````````````````````````````````

    */
    const [isLoading, setIsLoading] = useState(false);
    const handleCloseLoading = () => setIsLoading(false);

    const onCloseModalResponse404 = () => {

        setIsLoading(false);
        setIsResponse404(false);
    
    };

    const onCloseModalResponse400 = () => {

        setIsLoading(false);
        setIsResponse400(false);
        
    };

    /*
        ```````````````````````
        MODAL STATUS COMPLETION 

        ```````````````````````
    */
    const [ isStatusInEmailVerification, setStatusInEmailVerification ] = useState(false);



    /*

        ```````````````````````````
        HANDLE SUBMIT ENTER SIGN-IN

        ```````````````````````````
    */
    
    const handleSubmitEnter = (e) => {

        if(e.keyCode == 13){

            handleSubmit(e);
        };
    };

    /*

        ``````````````````````
        HANDLE SUBMIT SIGN-IN

        ``````````````````````

    */

    const [ errorStatus, setErrorStatus ] = useState(undefined);

    const handleSubmit = (e) => {

        e.preventDefault();
        setIsLoading(true); 

        let data = {
            Auth: {
                email: form.email,
                password: values.password
            }
        };
        
        const header =  {
            'Accept': "application/json",
            'Content-Type' : "application/json",
        };

        axios.defaults.headers.common = header;
        axios
            .post(URL_API + `/auth/login`, data)
            .then(function(response){
                
                setIsLoading(false);

                console.log("Response Original : ", response.data);

                if(response.data !== null){

                    if(response.data.data.completion_status_name === "otp" ){

                        setStatusInEmailVerification(true);

                    } else if(response.data.data.completion_status_name === "email"){

                        localStorage.setItem('userToken', response.data.data.access_token);
                        Redirect(ToCompletionMemberhipOptions);
        
                    } else if( response.data.data.completion_status_name === "membership"){
                        
                        localStorage.setItem('userToken', response.data.data.access_token);
                        Redirect(ToCompletionProfile);

                    } else {

                        localStorage.setItem('userToken', response.data.data.access_token);
                        localStorage.setItem('status_user_login', JSON.stringify(response.data.data));
    
                        // navigate(ToDashboard);
                        Redirect(ToDashboard);
                    }
                };
            })
            .catch(function(error){

                console.log("Error : ", error.response)
                const immutableError = fromJS(error.response);
                setIsLoading(false);

                
                if(immutableError !== undefined){
                    setErrorStatus(error.response.status)

                    if(immutableError.getIn(['status']) === 404 ){
    
                        if(immutableError.getIn(['data', 'info', 'message']) !== undefined){

                            setTextErrorInformation(immutableError.getIn(['data', 'info', 'message']));
                            setErrorStatus(404)
                            setOpenDialogError(true);
                        };
                    };
    
                    if(immutableError.getIn(['status']) === 400){

                        setErrorStatus(400)
                        if(error.response.data.info !== null){
                            if(error.response.data.info.errors !== null && error.response.data.info.errors !== undefined){

                                if(error.response.data.info.errors.length > 0){                                

                                    let email = error.response.data.info.errors.find(item => item.key === 'email');
                                    let password = error.response.data.info.errors.find(item => item.key === 'password');
                                  
                                    if(email !== undefined && password !== undefined ){

                                        setTextErrorInformation(`${email.description + ' & ' + password.description}`)
                                        setOpenDialogError(true);

                                    } else {

                                        if(email !== undefined){
    
                                            setTextErrorInformation(`${email.description}`)
                                            setOpenDialogError(true);
                                        };
    
                                        if(password !== undefined){
    
                                            setTextErrorInformation(`${password.description}`)
                                            setOpenDialogError(true);
                                        };
                                    }
                                };                        
                            }
                        }
                    };

                    if(immutableError.getIn(['status']) === 500){                    
                        
                        setErrorStatus(500)
                        setTextErrorInformation('Whoops, something went wrong !');
                        setOpenDialogError(true);
                        
                    };

                    if(immutableError.getIn(['status']) === 429){                    

                        setErrorStatus(429)
                        setTextErrorInformation('Too many request !');
                        setOpenDialogError(true);
                        
                    };

                } else {

                    setTextErrorInformation('Periksa koneksi internet Anda !');
                    setOpenDialogError(true);
                };
            })
    };


    /*
        ```````````````````````
        HANDLE NEW DIALOG ERROR

        ```````````````````````
    */
   
   const [ isOpenDialogError, setOpenDialogError ] = useState(false);
   const [ textErrorInformation, setTextErrorInformation ] = useState('');  

    return (

        <Grid 
            container 
            justify="center" 
            alignItems="center"
        >  

            <Grid item xs={12} sm={12}  style={{textAlign: 'center'}}>

                    <Typography variant="h5" component="h3" className={classes.title}>
                        Sign In
                    </Typography>

                    <br />
                    
                    <TextField
                        inputRef={textInputReff}
                        id="outlined-email-input"
                        // label="Email Address"
                        label = {
                            
                            <Typography variant="subtitle1" className={
                                isErrorEmailValidation !== true && form.email !== '' ? classes.titleBold : classes.title
                            }>
                                Alamat email
                                {/* {`Alamat email${isErrorEmailValidation !== true && form.email !== '' ? " yang dimasukan belum valid !" : ""}`} */}
                            </Typography>
                        }
                        
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="none"
                        variant="outlined"
                        inputProps={{
                            root:classes.title,
                            className: classes.input
                        }} //==> WORK
                        onChange= {handleOnChangeEmail}
                      
                        helperText={
                            isErrorEmailValidation !== true && form.email !== '' ?
                            <Typography variant="subtitle2" className={classes.title} style={{color: 'red'}}>
                                Email yang dimasukan belum valid !
                            </Typography> 
                             : ''
                        } 
                        // error={isErrorEmailValidation} //* ==> Waiting request from pak boz !
                    />

                    <br />
                    <br />
                    <TextField
                        id="outlined-adornment-password"
                        className={classes.textFieldPassword}
                        variant="outlined"
                        type={values.showPassword ? 'text' : 'password'}
                        label={
                            <Typography variant="subtitle1" className={classes.title}>
                                Password
                            </Typography>
                        }
                        value={values.password}
                        onChange={handleChangePassword('password')}
                        onKeyDown={handleSubmitEnter}
                        inputProps= {{
                            root:classes.title,
                            className: classes.title
                        }}

                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton 
                                        aria-label="Toggle password visibility" 
                                        onClick={handleClickShowPassword}
                                    >
                                        {values.showPassword ? <Visibility /> :  <VisibilityOff /> }
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}

                        // helperText={
                        //     // isErrorEmailValidation !== true && form.email !== '' ? 
                        //     // "password" : ''
                        //     <Fragment>
                        //         <Typography variant="subtitle2" className={classes.title} style={{color: 'red'}}>
                        //             { 
                        //                 errorMinSixCharacter == false && values.password !== '' && "Password harus minimal 6 karakter"
                        //             } 
                        //         </Typography> 
                        //         {/* <Typography variant="subtitle2" className={classes.title} style={{color: 'red'}}>

                        //             {
                        //             errorHasDigit !== true && values.password !== '' && "Password harus mengandung 1 karakter dalam bentuk angka"
                        //             }
                        //          </Typography>  */}
                        //     </Fragment>

                        // } 
                    />
            </Grid>
            
            <Grid item xs={12}>
                <FormControlLabel
                    value="ingat"
                    control={
                        <Checkbox 
                            color="primary" 
                            checked={isChecked.checkedA}
                            onChange={handleChangeCheckbox('checkedA')}
                            value="checkedA"
                            className={classes.checkbox}
                        />
                    }
                    label={
                        <Typography variant="subtitle2" className={classes.title}>
                            Ingat saya
                        </Typography>
                    }
                    labelPlacement="end"
                    style={{fontSize: 10, color: 'grey' }}
                    // className={classes.labelCheckbox}
                />
                <br />
                <br />
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button} 
                    onClick={handleSubmit}
                >
                    Sign In                         
                </Button>
            </Grid>

            <Modal 
                open={isLoading} 
                onClose={handleCloseLoading}  
                closeIconSize={20} 
                showCloseIcon={false}  
                center 
                styles={{ modal: { background: "transparent", boxShadow:'none' } }} 
            >
                <CircularProgress size={32} style={{color: 'red'}} />    
            </Modal>

            <Modal 
                open={isResponse404} 
                onClose={onCloseModalResponse404}  
                closeIconSize={20} 
                showCloseIcon={false}  
                center
                styles={{ modal: { background: "transparent", boxShadow:'none' } }}
            >
                <div className='text-center' style={{padding:'30px'}}>
                    <img src={PictInfo} className={classes.media} alt="info-icon" />                
                    <br/>
                    <br />
                    <h6>Password Anda salah !</h6>
                    <br />
                    <Button 
                        variant='contained' 
                        onClick={onCloseModalResponse404} 
                        color="primary" 
                        className={classes.buttonModal} 
                        size='small'
                    >  
                        Silahkan coba lagi
                    </Button>
                </div>
            </Modal>

            <Modal 
                open={isResponse400} 
                onClose={onCloseModalResponse400}  
                closeIconSize={20} 
                showCloseIcon={false}  
                center 
            >
                <div className='text-center' style={{padding:'30px'}}>
                    <img src={PictInfo} className={classes.media} alt="info-icon" />                
                    <br/>
                    <br />
                    <Typography variant='h6'>
                        {response400.data != undefined ? response400.data : 'Password Anda salah !'}
                    </Typography>
                    <br />
                    <Button 
                        variant='contained' 
                        onClick={onCloseModalResponse400}
                        color="primary" 
                        className={classes.buttonModal} 
                    >
                        Silahkan coba lagi
                    </Button>
                </div>
            </Modal>

        <Dialog
            open={isStatusInEmailVerification}
            onClose={() => console.log("Maaf ! Silahkan lakukan verifikasi email terlebih dahulu")}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            
        >
            <DialogTitle id="alert-dialog-title" style={{textAlign: "center"}}>
                <img src={PictInfo} className={classes.mediaOke} alt="info-icon" />                
            </DialogTitle>

            <DialogContent style={{textAlign: "center"}}>
                <DialogContentText id="alert-dialog-description">
                    <Typography variant='h5' className={classes.title} style={{color: 'black'}}>
                        <b>Silahkan lakukan verifikasi email terlebih dahulu !</b>
                    </Typography>
                </DialogContentText>
            </DialogContent>

            <DialogActions style={{alignItems: "center", justifyContent:'center'}}>
                <Button 
                    onClick={() => window.location.reload()}
                    variant='contained' 
                    className={classes.buttonModalDelete}
                    // fullWidth
                >  
                    Oke, mengerti ! 
                </Button>
            </DialogActions>
            <br />
        </Dialog>

            {/* 
                ````````````````````````````````````
                NEXT, BIKIN MODAL RESPONSE UNTUK 419

                ````````````````````````````````````
            */}

        <DialogError 
            classes = { classes }
            isOpenDialogError = { isOpenDialogError }
            setOpenDialogError = { setOpenDialogError } 
            textErrorInformation = { textErrorInformation } 
            errorStatus = {errorStatus }
        />
        </Grid>
    )
};

export default FormSubmit;