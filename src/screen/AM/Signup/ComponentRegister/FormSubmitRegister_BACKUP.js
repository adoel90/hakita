import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import {fromJS } from 'immutable';
import { 

    Container, Paper, Typography, Grid, TextField, Checkbox, FormControlLabel, Box, 
    Button, CircularProgress, Card, CardActionArea, CardMedia, CardContent, CardActions, 
    FormControl, MenuItem,Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions

} from '@material-ui/core';

import Modal from 'react-responsive-modal';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import { navigate } from 'hookrouter';
import PasswordInput from "react-password-indicator";

import { URL_API } from '../../../../constants/config-api';
import PictInfo from '../../../../assets/images/icon-info-24px.svg';
import Redirect from '../../../../utilities/Redirect';
import {ToDashboard, ToOTP} from '../../../../constants/config-redirect-url';
import { MessageErrorValidationEmail } from '../../../../constants/config-messages-user';


import LogoFB from '../../../../assets/images/logo-fb.png';
import LogoGoogle from '../../../../assets/images/logo-google.png';
import LogoLinked from '../../../../assets/images/logo-in.png';

import { useGetHttp} from '../../../../utilities-hook/useGetHttp';
import { GET_LABEL_REGISTER_GROUP, POST_REGISTER_GROUP } from '../../../../constants/config-endpoint-url-api';

import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import './phone.css';

const validatorEmail = require("email-validator");


// Custom error messages
const errorMessages = {
    minLen: "Password terlalu pendek !",
    maxLen: val => `Password terlalu panjang, maksimal ${val} karakter`,
    mustMatch: "Passwords harus sama",
    specialChars:"Password harus terdapat 1 karakter spesial !",
    digits: 'Password harus mengandung angka !',
    uppercaseChars: 'Password harus ada 1 karakter huruf kecil !'
    // customAtRule: "Missing @! This message will be overridden.",
    // mainPasswordValid: "Password has to be valid!",
  };

const FormSubmitRegister = props => {

    const { classes } = props;

    /*

        `````````````````````````````````````````````````````````````````````
        HANDLE GET LABEL, PLACEHOLDER, etc
            
        `````````````````````````````````````````````````````````````````````

    */
   
    const [loading, fetchedData] = useGetHttp(URL_API + GET_LABEL_REGISTER_GROUP, []);
    // console.log("Fetched data : ", fetchedData );
    
    let listTypesOfCompanies = undefined;
    let listTypesOfCompaniesArray = [];

    if(fetchedData !== null){
        
        listTypesOfCompanies = {...fetchedData};

        Object.getOwnPropertyNames(listTypesOfCompanies.categoryOptions).forEach((val, idx, array) => {

            const data = {
                key: val,
                value: listTypesOfCompanies.categoryOptions[val]
            };			

            listTypesOfCompaniesArray.push(data);

        });
    };

    /*

        `````````````````````````
        HANDLE CHANGE GROUP NAME
            
        ````````````````````````

    */
    // const [groupName, setGroupName] = useState();

    // const handleOnChangeGruopName = (e) => {

    //     e.preventDefault();
    //     setGroupName(e.target.value);
        
    // };

    /*

        `````````````````````````````````````````````````````````````````````
        HANDLE CHANGE EMAIL
            
        `````````````````````````````````````````````````````````````````````

    */
    const [email, setFormEmail] = useState('');

    const [isErrorEmailValidation, setErrorEmailValidation ] = useState(false);

    const handleOnChangeEmail = (e) => {

        e.preventDefault();   
        setFormEmail(e.target.value);

        setErrorEmailValidation(validatorEmail.validate(e.target.value))
    };

    /*

        ``````````````````````
        PASSWORD

        ``````````````````````

    */

    const [values, setValues] = useState({
        amount: '',
        password: '',
        showPassword: false

    });

    const [passwordValue, setPasswordValue] = useState('');

    const handleChangePassword = prop => event => {

        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {

        setValues({ ...values, showPassword: !values.showPassword });
    };

    /*

        ``````````````````````
        CONFIRM PASSWORD

        ``````````````````````

    */

    const [valuesConfirm, setValuesConfirm] = useState({

        amount: '',
        passwordConfirm: '',
        showPasswordConfirm: false

    });

    const handleChangePasswordConfirm = prop => event => {

        setValuesConfirm({ ...valuesConfirm, [prop]: event.target.value });
    };

    const handleClickShowPasswordConfirm = () => {

        setValuesConfirm({ ...valuesConfirm, showPasswordConfirm: !valuesConfirm.showPasswordConfirm });
    };

    /*

        ``````````````````````
        PHONE CHANGE NUMBER

        ``````````````````````

    */
  
    const [valuePhone, setValuePhone] = useState();
    const [valueCountryCode, setValueCountryCode] = useState();

    const onChangePhone = (numberPhone, countryData) => {

        const substringMobileNumber = numberPhone.replace(/^0/,'');     
        // setValuePhone(...inisiateDataPhoneNumber, {substringMobileNumber, phoneAreaCode: countryData.dialCode})
        setValuePhone(substringMobileNumber);
        setValueCountryCode(countryData.dialCode);

    };

    /*

        ``````````````````````
        Dropdown,
        *sementara ga PAKE ini !

        ``````````````````````

    */
    const [typeAccount, setTypeAccount] = useState({

        type: ''
    });   


    const handleChangeDropdown = name => event => {

        setTypeAccount({ ...typeAccount, [name]: event.target.value });
    };  

    /*

        ``````````````````````````````````
        MODAL LOADING, MODAL RESPONSE, etc

        ``````````````````````````````````

    */

    //*
    const [isLoading, setIsLoading] = useState(false);
    const handleCloseLoading = () => setIsLoading(false);

    //*
    const [isResponse400, setResponse400 ] = useState(false);
    const [infoErrorEmail, setInfoErrorEmail] = useState();
    const [infoErrorPassword, setInfoErrorPassword] = useState();
    const [infoErrorMobileNumber, setInfoErrorMobileNumber] = useState();
    const [infoErrorRequiredAccountType, setInfoErrorRequiredAccountType] = useState();

    const closeModalResponse400 = () => setResponse400(false);

    //*
    const [isResponse500, setResponse500 ] = useState(false);
    const [infoResponse500 ] = useState('')

    const closeModalResponse500 = () => setResponse500(false);

    //*
    const [isRedirectToOTP, setRedirectToOTP] = useState(false);
    const [infoOTPUrl, setInfoOTPUrl ] = useState();
    const [infoVerifyToken, setInfoVerifyToken] = useState();

    /*

        ``````````````````````
        HANDLE SUBMIT POST

        ``````````````````````

    */

    const handleSubmit = (e) => {

        e.preventDefault();

        localStorage.clear();

        setIsLoading(true);

        let data = {

            RegisterGroup : {

                email: email,
                // name: groupName,
                password: values.password,
                password_confirmation: valuesConfirm.passwordConfirm,
                mobile_number: valuePhone,
                // group_category_id: listTypesOfCompaniesArray.length > 0 ? listTypesOfCompaniesArray[1].key : [],
                group_category_id: 'b1479b80-069d-40c4-bca0-b22e55a9855b',
                // address: "+" + valueCountryCode,
                country_id: "+" + valueCountryCode,

                // email: email,
                // name: groupName,
                // password: values.password,
                // password_confirmation: valuesConfirm.passwordConfirm,
                // mobile_number: valuePhone,
                // group_category_id: listTypesOfCompaniesArray.length > 0 ? listTypesOfCompaniesArray[1].key : [],
                // address: {

                //     country_id: "+" + valueCountryCode,
                //     detail: address
                // }
            }
        };

        console.log(data);


    const header =  {

        'Accept': "application/json",
        'Content-Type' : "application/json",
     
    };

    axios.defaults.headers.common = header;

    
    axios
        .post(URL_API + POST_REGISTER_GROUP, data)
        .then((response) => {

            console.log("Response Original : ", response)
            const immutableDataRegister = fromJS(response);

            setIsLoading(false);
          
            if(immutableDataRegister.getIn(['status']) == 200){

                console.log("200");

                setInfoOTPUrl(immutableDataRegister.getIn(['data', 'data', 'otp_url']));

                if(immutableDataRegister.getIn(['data', 'data', 'verification_token']) !== null ){
                    setInfoVerifyToken(immutableDataRegister.getIn(['data', 'data', 'verification_token']));
                    localStorage.setItem("verifyToken", immutableDataRegister.getIn(['data', 'data', 'verification_token']) );
                };

                // navigate(ToOTP);
                Redirect(ToOTP);

            }
        })
        .catch((error) => {

            console.log("Error : ", error.response);

            setIsLoading(false);
            const immutableDataRegister = fromJS(error.response);

            if(error.response !== undefined){

                if(immutableDataRegister.getIn(['status']) == 400){ 
    
                    setResponse400(true);
                    setInfoErrorEmail(immutableDataRegister.getIn(['data', 'info', 'errors', 'email']));
                    setInfoErrorPassword(immutableDataRegister.getIn(['data', 'info','errors', 'password']));
                    setInfoErrorMobileNumber(immutableDataRegister.getIn(['data', 'info','errors', 'mobile_number']));
                    setInfoErrorRequiredAccountType(immutableDataRegister.getIn(['data', 'info','errors', 'group_category_id']));
    
                };
    
                if(immutableDataRegister.getIn(['status']) == 500){
                    setResponse500(true);
                };


            } else {

                alert('Whoops, something went wrong !');
            }


        })
    };

    return (

        <Grid 
            container 
            justify="center" 
            alignItems="center"
        >  
            <Grid item xs={12} style={{textAlign: 'center'}}>

                <Typography variant="h5" component="h3" style={{fontFamily: 'Nunito'}}>
                    Buat akun baru
                </Typography>
                <br />

                {/* <Typography  variant="subtitle2" className={classes.question}>
                    Daftar dengan : <img src={LogoGoogle} className={classes.AppLogoSocial} alt="logo" /> <img src={LogoFB} className={classes.AppLogoSocial} alt="logo" />  <img src={LogoLinked} className={classes.AppLogoSocial} alt="logo" />
                </Typography>
                <br /> */}

                <hr style={{borderColor: '#ffffff', opacity: '0.5'}}/>
                <br />
                {/* <TextField
                    id="outlined-email-input-group"
                    label="Nama Group"
                    className={classes.textField}
                    type="group"
                    name="group"
                    autoComplete="group"
                    margin="normal"
                    variant="outlined"
                    inputProps={{className: classes.input}} //==> WORK
                    onChange= {handleOnChangeGruopName}
                    // helperText={isErrorEmailValidation == true ? MessageErrorValidationEmail : ''} //* ==> Waiting request from pak boz !
                    // error={isErrorEmailValidation} //* ==> Waiting request from pak boz !
                    helperText='Masukan nama Perusahaan/ organisasi Anda'
                /> */}

                {/* <br /> */}
                <TextField
                    id="outlined-email-input"
                    label="Alamat email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    inputProps={{className: classes.input}} //==> WORK
                    onChange= {handleOnChangeEmail}
                    // helperText={isErrorEmailValidation == true ? MessageErrorValidationEmail : ''} //* ==> Waiting request from pak boz !
                    // error={isErrorEmailValidation} //* ==> Waiting request from pak boz !
                    helperText=
                    {
                        isErrorEmailValidation !== true && email !== '' ? 
                        <Typography variant="subtitle2" className={classes.title} style={{color: 'red'}}>
                            Email yang dimasukan belum valid !
                        </Typography> : 
                    
                        <Typography variant="subtitle2" className={classes.title}>
                            Email yang Anda masukkan akan di pakai untuk akun Superadmin
                        </Typography>
                    }
                />

                <br />
                <br />

                {/* 
                
                    ````````
                    PASSWORD

                    ````````            
                */}
               
                <TextField
                    id="outlined-adornment-password"
                    className={classes.textFieldPassword}
                    variant="outlined"
                    type={values.showPassword ? 'text' : 'password'}
                    label="Kata Sandi"
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
                        )
                    }}
                    helperText= {
                        <Typography variant="subtitle2" className={classes.title}>
                            Kata sandi harus terdiri dari minimum 6 karakter dan terdapat kombinasi angka
                        </Typography>
                    }
                    
                />

                <br />
                <br />
                <TextField
                    id="outlined-adornment-password-confirm"
                    className={classes.textFieldPassword}
                    variant="outlined"
                    type={valuesConfirm.showPasswordConfirm ? 'text' : 'password'}
                    label="Konfirmasi Kata Sandi"
                    value={valuesConfirm.passwordConfirm}
                    onChange={handleChangePasswordConfirm('passwordConfirm')}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton 
                                    aria-label="Toggle password confirm visibility" 
                                    onClick={handleClickShowPasswordConfirm}
                                >
                                    {valuesConfirm.showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    helperText='Kata sandi harus terdiri dari minimum 6 karakter dan terdapat kombinasi angka'
                />

                <br />
                <br />
                <Paper className={classes.paperPhone} elevation={0}>
                    <IntlTelInput
                        containerClassName="intl-tel-input"
                        inputClassName="form-control"
                        preferredCountries={['id']}
                        onPhoneNumberChange={(status, numberPhone, countryData) => onChangePhone(numberPhone, countryData)}
                        style={{width:'90%'}}
                        // className={classes.textFieldPhoneNumber}
                    
                    />  
                </Paper>
                <Typography  variant="caption" className={classes.phoneTextHelper}>
                    Kode <i>OTP</i> akan di kirimkan ke nomor <i>handphone</i> ini.
                </Typography>

                <br />               
                <br />               
                <br />
                <br />
                <Typography  variant="caption" className={classes.textPersetujuan}>
                    Dengan membuat akun saya setuju dengan : 
                </Typography>
                <br />
                <Typography  variant="caption" className={classes.textKetentuan}>
                    Ketentuan layanan & Rahasia pribadi
                </Typography>
                <br />
                <br />
                <Button 
                    variant="contained" 
                    // color="primary" 
                    className={classes.button} 
                    onClick={handleSubmit}
                >
                    Buat Akun                     
                </Button>


                {/* <PasswordInput 
                    minLen={6} // Optional predefined rule
                    digits={1} // Optional predefined rule
                    maxLen={10} // Optional predefined rule
                    // specialChars={1} // Optional predefined rule
                    // uppercaseChars={1} // Optional predefined rule
                    defaultMessages={errorMessages}            
                    onChange={(valuePassword) => {

                        setValues({ ...values, ["password"]: valuePassword });


                    } }
                    isVisible={values.showPassword}

                >
                    {({ getInputProps, valid, errors, touched }) => (
                        <Fragment>                                                
                         <TextField
                            {...getInputProps()} 
                            label="Kata Sandi"
                            id="outlined-adornment-password"
                            className={classes.textFieldPassword}
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton 
                                            aria-label="Toggle password visibility" 
                                            onClick={handleClickShowPassword}
                                        >
                                            {values.showPassword ?  <Visibility />  : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            helperText= {
                                <Typography variant="subtitle2" component='div' className={classes.title}>
                                   {touched && (
                                        valid
                                        ? "Password valid :)"
                                        : (
                                          
                                            <ul style={{listStyleType: 'none'}}>
                                                {errors.map((e) => (<li key={e.key}>{e.message}</li>))}
                                            </ul>

                                        )
                                    )}
                                </Typography>
                            }
                            
                        />
                        
                        
                        </Fragment>
                    )}
                    </PasswordInput>                 */}
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

            <Dialog
                open={isResponse400}
                onClose={closeModalResponse400}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{textAlign: "center"}}>
                    <img src={PictInfo} className={classes.media} alt="info-icon" />  
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography variant='h6'>
                            {infoErrorEmail != '' ? infoErrorEmail : ''}
                        </Typography>
                        
                        <Typography variant='h6'>
                            {infoErrorMobileNumber != '' ? infoErrorMobileNumber : ''}  
                        </Typography>

                        <Typography variant='h6'>
                            {infoErrorPassword != '' ? infoErrorPassword : ''}
                        </Typography>

                        <Typography variant='h6'>
                            {infoErrorRequiredAccountType != '' ? infoErrorRequiredAccountType : ''}    
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{alignItems: "center", justifyContent:'center'}}>
                     <Button 
                        variant='contained' 
                        onClick={closeModalResponse400} 
                        color="primary" 
                        size='small'
                        className={classes.buttonModal}
                    >  
                        Silahkan coba lagi
                    </Button>
                </DialogActions>
                <br />
                <br />
            </Dialog>

            <Dialog
                open={isResponse500}
                onClose={closeModalResponse500}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{textAlign: "center"}}>
                    <img src={PictInfo} className={classes.media} alt="info-icon" />  
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography variant='h6'>
                            {infoResponse500 != '' ? infoResponse500 : 'Oops, something went wrong !'}
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{alignItems: "center", justifyContent:'center'}}>
                     <Button 
                        variant='contained' 
                        onClick={closeModalResponse500} 
                        color="primary" 
                        size='small'
                        className={classes.buttonModal}
                    >  
                        Silahkan coba lagi
                    </Button>
                </DialogActions>
                <br />
                <br />
            </Dialog>
        </Grid>
    )
};

export default FormSubmitRegister;