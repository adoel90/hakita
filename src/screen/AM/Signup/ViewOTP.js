import React, { Component, useEffect, useState } from "react";
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { 
    Container, Paper, Typography, Grid, TextField, Checkbox, CircularProgress,
    FormControlLabel, Box, Button, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions

} from '@material-ui/core';

import axios from 'axios';
import OtpInput from 'react-otp-input';
import Modal from 'react-responsive-modal';
import { fromJS } from 'immutable';

import { navigate } from 'hookrouter';


import { URL_API } from '../../../constants/config-api';
import Group_738 from './../../../assets/images/Group_738.png';
import Group_734 from './../../../assets/images/Group-734.png';
import PictInfoSuccess from './../../../assets/images/icon-info-24px-green.svg';
import PictInfo from './../../../assets/images/icon-info-24px.svg';

import Redirect from '../../../utilities/Redirect';
import { ToLogin } from "../../../constants/config-redirect-url";


const theme = createMuiTheme({
    
    palette: {

        primary: {
            main: '#cc0707', //#cc0707, #c62828
            light: '#ff5f52',
            dark: '#8e0000',
            contrastText: '#ffffff'
        }
    }       
});
    
// const useStyles = makeStyles(theme => ({
const styles = theme => ({

    root: {
        
        padding: theme.spacing(5, 2),
        marginTop: theme.spacing(4),
        // width: 575,
        borderRadius: 2

    },
    mediaThankyou: {
        
        width: 60,
        fontFamily: 'Nunito'
    },
    description: {
        color: '#212529',
        marginTop: theme.spacing(1),
        fontFamily: 'Nunito'
    },
    button: {
        width: '503px',
        height: '42px',
        borderRadius: 5,
        background: 'linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181)',
        // backgroundColor: 'cyan',
        border:0,
        fontFamily:'Nunito',
        marginLeft:theme.spacing(1)
    },
    media: {
        height: 80,
        width: 80,
        // marginLeft: theme.spacing(7)
    },
    titleDialog: {
       
        fontFamily: 'Nunito'
    },
    buttonModal: {
        fontFamily: 'Nunito',
        textTransform: 'capitalize',
        background: 'linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181)',
        color: 'white'
    }
});

const ViewOTP = props => {

    const { classes } = props;

    const[loader, setLoader] = useState(false);

    const [valueOTP, setValueOTP] = useState('');
    const handleChangeOTP = (value) => {

        // console.log("Value OTP : ", value);
        setValueOTP(value);
    };

    let verifyToken = localStorage.getItem('verifyToken');
    
    const [isResponseSuccess200, setResponseSuccess200 ] = useState(false); 
    const handleResponseSuccess200 = () => {

        setResponseSuccess200(false);
        navigate(ToLogin);
    };

    /*
        ```````````````````````
        HANDLE VERIFY OTP

        ```````````````````````
    */
    const handleVerifyOTP = () => {

        setLoader(true);

        const params = {

            onlyValidate: true,
            // token: verifyTokenFromRegister !== undefined ? verifyTokenFromRegister : null,
            token : verifyToken !== undefined ? verifyToken : null
        };

        const data = {
    
            RegisterGroup : {
                otp_code: valueOTP
            }
        };

        console.log("Data POST VERIFY : ", data);
        console.log("VERIFY TOKEN : ", params);
        
        
        const header =  {

            'Accept': "application/json",
            'Content-Type' : "application/json",

        };

        axios.defaults.headers.common = header;

        axios
            .post(URL_API + `/account-management/register-group/verify-otp?token=${params.token}`, data)
            .then((response) => {
                console.log("Response Original : ", response)
                const immutableOtp = fromJS(response);

                if(immutableOtp.getIn(['status']) == 200){
                   setLoader(false);
                   setResponseSuccess200(true);
                }
            })
            .catch((error) => {

                console.log("Error : ", error.response)
                const immutableOtpError = fromJS(error.response);

                if(immutableOtpError.getIn(['status']) == 422){

                    console.log(immutableOtpError.getIn(['data', 'info', 'message']))
                    setLoader(false);
                    setResponse400(true);
                    setInfoErrorResponse400InvalidToken(immutableOtpError.getIn(['data', 'info', 'message']))
                    // this.setState({
                    //     ...this.state,
                    //     isLoading: false,
                    //     isResponse400: true,
                    //     infoErrorResponse400InvalidToken: immutableOtpError.getIn(['data', 'info', 'message']),

                    // })
                };

                if(immutableOtpError.getIn(['status']) == 400){

                    console.log(immutableOtpError.getIn(['data', 'info', 'message']));

                    setLoader(false);
                    setResponse400(true);
                    setInfoErrorResponse400InvalidToken(immutableOtpError.getIn(['data', 'info', 'message']))
                    // this.setState({
                    //     ...this.state,
                    //     isLoading: false,
                    //     isResponse400: true,
                    //     infoErrorResponse400InvalidToken: immutableOtpError.getIn(['data', 'info', 'message']),
            
                    // })
                };

                if(immutableOtpError.getIn(['status']) == 498){

                    console.log(immutableOtpError.getIn(['data', 'info', 'message']));
                    setLoader(false);
                    setResponse498(true);
                    setInfoErrorResponse498InvalidOTP(immutableOtpError.getIn(['data', 'info', 'message']));

                    // this.setState({
                    //     ...this.state,
                    //     isLoading: false,
                    //     isResponse498: true,
                    //     infoErrorResponse498InvalidOTP:  immutableOtpError.getIn(['data', 'info', 'message'])
                    // })
                };

                if(immutableOtpError.getIn(['status']) === 419){

                    // alert(immutableOtpError.getIn(['statusText']))
                    alert(error.response.data.info.message)
                };

                if(immutableOtpError.getIn(['status']) == 404){
                    alert("Whoops, something went wrong !")
                }

                // ==> Next add response error when 404, 419
            })
    };

    /*

        ```````````````````````
        HANDLE SEND OTP AGAIN

        ```````````````````````
    */

    const [isModalOTPAgain200, setModalOTPAgain200] = useState(false);
    const handleSendOtpAgain = (e) => {

        e.preventDefault();
        
        setLoader(true);
        
        let params = {

            // token: verifyTokenFromRegister
            token: verifyToken
        };



        const header =  {
            'Accept': "application/json",
            'Content-Type' : "application/json",
        };

        axios.defaults.headers.common = header;

        axios
            .get(URL_API + `/account-management/register-group/reset-otp?token=${params.token}`)
            .then((response) => {

                console.log("Response Original : ", response)
                if(response.status == 200){
                    
                    setLoader(false);
                    setModalOTPAgain200(true)

                };                
            })
            .catch((error) => {
                
                console.log("Error : ", error.response)
            
            })
    };

    /*
        ```````````````````````
        MODAL, etc.

        ```````````````````````
    */
    const [ isResponse400, setResponse400 ] = useState(false);
    const [infoErrorResponse400InvalidToken, setInfoErrorResponse400InvalidToken] = useState('');

    const [ isResponse498, setResponse498 ] = useState(false);
    const [infoErrorResponse498InvalidOTP, setInfoErrorResponse498InvalidOTP ] = useState('');

    return (

        <MuiThemeProvider theme={theme}>
            <Container maxWidth="sm">
                <Paper className={classes.root} elevation={8}>
                    <Grid 
                        container 
                        justify="center" 
                        alignItems="center"
                    >  
                        <Grid item xs={12} style={{textAlign: 'center'}}>
                            <Typography variant="h5" component="h3">
                                Terima kasih
                            </Typography>

                            <br />
                            <img src={Group_738} className={classes.mediaThankyou} alt="logo" /> 

                            <Typography  variant="body2" className={classes.description}>
                                Tinggal selangkah lagi
                            </Typography>
                            <Typography  variant="body2" className={classes.description}>
                                Ayo verifikasi kode OTP Anda !
                            </Typography>

                            <br />
                            <Typography  variant="body2" className={classes.description}>
                                Kami telah mengirimkan kdoe OTP ke nomor telepon Anda, periksa pesan masuk Anda dan masukkan kode ke kolom dibawah
                            </Typography>

                            <br />
                            <OtpInput
                                onChange={(otp) => handleChangeOTP(otp)}
                                // isInputNum={true}
                                numInputs={4}
                                separator={<span>-</span>}
                                inputStyle={{padding: 14, margin: 7, color: 'grey', fontFamily: 'Nunito', fontSize: 17, borderRadius: '5px'}}
                                containerStyle={{display: 'flex', justifyContent: 'center' }}
                            />
                            
                            <br />
                            <Typography  variant="body2" className={classes.description}>
                                Jangan khawatir, sekali saja kode OTP Anda terverifikasi, Anda tidak perlu melakukannya lagi
                            </Typography>

                            <br />
                            <Typography  variant="body2" className={classes.description}>
                                <b>Belum menerima kode ? 
                                    <span 
                                        onClick={(e) => handleSendOtpAgain(e)}
                                        style={{color: '#cc0707', cursor: 'pointer'}}
                                    >
                                        &#8287;&#8287;Kirim ulang
                                    </span>
                                </b>
                            </Typography>

                            <br />
                            <br />
                            <Button 
                                variant="contained" 
                                color="primary" 
                                className={classes.button} 
                                onClick={handleVerifyOTP}
                            >
                                Verifikasi                  
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <br />
            <br />
            <br />
            <br />

            <Modal 
                open={loader} 
                onClose={() => setLoader(false)}  
                closeIconSize={20} 
                showCloseIcon={false}  
                center 
                styles={{ modal: { background: "transparent", boxShadow:'none' } }} 
            >
                <CircularProgress size={32} style={{color: 'red'}} />    
            </Modal>


            {/* 

                `````````````````````````````
                MODAL SUCCESS VERIFY OTP

                `````````````````````````````
            
            */}


            <Dialog
                open={isResponseSuccess200}
                // onClose={() => setResponseSuccess200(false)}
                onClose={handleResponseSuccess200}
                aria-labelledby="alert-dialog-title-otp"
                aria-describedby="alert-dialog-description-otp"
            >
                <DialogTitle id="alert-dialog-title-otp" style={{textAlign: "center"}}>
                    <img src={Group_734} className={classes.media} alt="info-icon" />  
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description-otp" style={{textAlign: "center"}}>
                        <Typography variant='h6' className={classes.titleDialog} >
                            <b>Selamat Verifikasi OTP berhasil !</b>
                        </Typography>       
                        <br />  
                        <Typography variant='subtitle1' className={classes.titleDialog}>
                            Silahkan periksa email Anda dan ikuti instruksi dari pesan yang telah kami kirimkan               
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <br />
                <br />
            </Dialog>


            {/* 

                `````````````````````````````
                MODAL SUCCESS SEND OTP AGAIN

                `````````````````````````````
            
            */}
            <Dialog
                open={isModalOTPAgain200}
                onClose={() => setModalOTPAgain200(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{textAlign: "center"}}>
                    <img src={PictInfoSuccess} className={classes.media} alt="info-icon" />  
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography variant='h6' className={classes.titleDialog}>
                            Kode OTP telah berhasil kami kirimkan
                        </Typography>                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{alignItems: "center", justifyContent:'center'}}>
                     <Button 
                        variant='contained' 
                        onClick={() => setModalOTPAgain200(false)} 
                        // color="primary" 
                        size='small'
                        className={classes.buttonModal}
                    >  
                        OK, mengerti !
                    </Button>
                </DialogActions>
                <br />
                <br />
            </Dialog>

            {/* 

                `````````````````````````````
                MODAL RESPONSE 400

                `````````````````````````````
            
            */}
          
            <Dialog
                open={isResponse400}
                onClose={() => setResponse400(false)}
                aria-labelledby="alert-dialog-title-400"
                aria-describedby="alert-dialog-description-400"
            >
                <DialogTitle id="alert-dialog-title-400" style={{textAlign: "center"}}>
                    <img src={PictInfo} className={classes.media} alt="info-icon" />  
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description-400">
                        <Typography variant='h6' className={classes.titleDialog}>
                            {infoErrorResponse400InvalidToken != '' ? infoErrorResponse400InvalidToken : ''}
                        </Typography>                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{alignItems: "center", justifyContent:'center'}}>
                     <Button 
                        variant='contained' 
                        onClick={() => setResponse400(false)} 
                        // color="primary" 
                        size='small'
                        className={classes.buttonModal}
                    >  
                     Silahkan coba lagi
                    </Button>
                </DialogActions>
                <br />
                <br />
            </Dialog>

            {/* 

                ```````````````````````````````````````
                MODAL RESPONSE 498 - INVALID TYPE CODE

                ```````````````````````````````````````
            
            */}
          
            <Dialog
                open={isResponse498}
                onClose={() => setResponse498(false)}
                aria-labelledby="alert-dialog-title-400"
                aria-describedby="alert-dialog-description-400"
            >
                <DialogTitle id="alert-dialog-title-400" style={{textAlign: "center"}}>
                    <img src={PictInfo} className={classes.media} alt="info-icon" />  
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description-400">
                        <Typography variant='h6' className={classes.titleDialog}>
                            {infoErrorResponse498InvalidOTP !== '' ? infoErrorResponse498InvalidOTP : ''}
                        </Typography>                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{alignItems: "center", justifyContent:'center'}}>
                     <Button 
                        variant='contained' 
                        onClick={() => setResponse498(false)} 
                        // color="primary" 
                        size='small'
                        className={classes.buttonModal}
                    >  
                     Silahkan coba lagi
                    </Button>
                </DialogActions>
                <br />
                <br />
            </Dialog>
        </MuiThemeProvider>
    )
};

export default withStyles(styles)(ViewOTP);

