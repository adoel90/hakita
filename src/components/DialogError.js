import React, { Component, useEffect, useState, Fragment } from "react";
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { Container, Paper, Typography, Grid, TextField, Checkbox, 
        FormControlLabel, Box, Button, MenuItem, Popover, Fab, Chip,
        Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, IconButton

    } from '@material-ui/core';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CloseIcon from '@material-ui/icons/Close';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import {grey} from '@material-ui/core/colors'

import DialogHelp from './DialogHelp';

import PictInfoWarningRed from '../assets/images/icon-info-24px.svg';
import Pict400 from '../assets/images/400.png';
import Pict500 from '../assets/images/500_wow.png';
import IconWarningYellow from '../assets/images/icon_warning_yellow.png';

const DialogError = props => {

    const { 
        classes, 
        isOpenDialogError, 
        setOpenDialogError, 
        textErrorInformation, 
        errorStatus, 
        listError  
    } = props;

    const [ isOpenDialogHelp, setOpenDialogHelp ] = useState(false);

    return (
        <Fragment>

            <Dialog
                open={isOpenDialogError}
                onClose={() => setOpenDialogError(false)}
                aria-labelledby="alert-dialog-title-422"
                aria-describedby="alert-dialog-description-422"            
                // fullWidth
            >
                <DialogTitle id="alert-dialog-title-422" style={{textAlign: "center"}}>
                    <Grid container direction='row' justify='flex-end' alignItems='flex-start'>
                        <IconButton 
                            size='small' 
                            onClick={() => setOpenDialogError(false)} 
                        >
                            <HighlightOffIcon style={{color: 'grey', fontSize: '17px'}} />
                        </IconButton>
                    </Grid>

                    {
                        errorStatus === 401 && (

                            <Box marginTop={4}>
                                <img src={IconWarningYellow} alt="info-icon-pict-info" style={{width: 48, height: 40 }} /> 
                            </Box>
                        ) 
                    }

                    {
                        errorStatus === 403 && (

                            <Box marginTop={4}>
                                <img src={IconWarningYellow} alt="info-icon-pict-info" style={{width: 48, height: 40 }} /> 
                            </Box>
                        ) 
                    }

                    {
                        errorStatus === 404 && (
                            <Box marginTop={4}>
                                <img src={IconWarningYellow} alt="info-icon-pict-info" style={{width: 48, height: 40 }} /> 
                            </Box>
                        ) 
                    }

                    {
                        errorStatus === 409 && (
                            <Box marginTop={4}>
                                <img src={IconWarningYellow} alt="info-icon-pict-info" style={{width: 48, height: 40 }} /> 
                            </Box>
                        ) 
                    }
                    {
                        errorStatus === 400 && (
                            <Box marginTop={4}>
                                <img src={Pict400} alt="info-icon-pict-info" style={{width: 136, height: 100 }} />  
                            </Box>
                        ) 
                    }

                    {
                        errorStatus === 422 && (
                            <Box marginTop={4}>
                                <img src={IconWarningYellow} alt="info-icon-pict-info" style={{width: 48, height: 40 }} /> 
                            </Box>
                        ) 
                    }

                    {
                        errorStatus === 500 && (

                            <Box marginTop={4}>
                                <img src={Pict500} alt="info-icon-pict-info" style={{width: 96, height: 88 }} />  
                            </Box>
                        )                     
                    }
                    
                    {
                        errorStatus === undefined && (
                            
                            // <img src={PictInfoWarningRed} alt="info-icon-pict-info" style={{width: 300, height: 100 }} />  
                            // <img src={IconWarningYellow} alt="info-icon-pict-info" style={{width: 48, height: 40 }} />  
                            <img src={Pict500} alt="info-icon-pict-info" style={{width: 96, height: 88 }} />  

                        ) 
                    }
                </DialogTitle>
                
                <DialogContent style={{textAlign: "center"}}>
                
                    <DialogContentText id="alert-dialog-description-422">    

                        {                        
                            errorStatus === 400 && (
                                <Fragment>
                                    <Typography variant='h6' className={classes.title}>
                                        <b>Whoops! Error {errorStatus}</b>
                                    </Typography>          
                                    <Typography variant='subtitle1' className={classes.title}>
                                        {textErrorInformation !== '' ? textErrorInformation : 'Whops, something went wrong !'}
                                    </Typography>
                                </Fragment>
                            )
                        }


                        {                        
                            errorStatus === 401 && (
                                <Fragment>
                                    <Typography variant='h6' className={classes.title}>
                                        <b>Whoops! Error {errorStatus}</b>
                                    </Typography>          
                                    <Typography variant='subtitle1' className={classes.title}>
                                        {textErrorInformation !== '' ? textErrorInformation : 'Whops, something went wrong !'}
                                    </Typography>
                                </Fragment>
                            )
                        }

                        {                        
                            errorStatus === 403 && (
                                <Fragment>
                                    <Typography variant='h6' className={classes.title}>
                                        <b>Whoops! Error {errorStatus}</b>
                                    </Typography>          
                                    <Typography variant='subtitle1' className={classes.title}>
                                        {textErrorInformation !== '' ? textErrorInformation : 'Whops, something went wrong !'}
                                    </Typography>
                                </Fragment>
                            )
                        }

                        {                        
                            errorStatus === 404 && (
                                <Fragment>
                                    <Typography variant='h6' className={classes.title}>
                                        <b>Whoops! Error {errorStatus}</b>
                                    </Typography>          
                                    <Typography variant='subtitle1' className={classes.title}>
                                        {textErrorInformation !== '' ? textErrorInformation : 'Whops, something went wrong !'}
                                    </Typography>
                                </Fragment>
                            )
                        }

                        {                        
                            errorStatus === 409 && (
                                <Fragment>
                                    <Typography variant='h6' className={classes.title}>
                                        <b>Whoops! Error {errorStatus}</b>
                                    </Typography>          
                                    <Typography variant='subtitle1' className={classes.title}>
                                        {textErrorInformation !== '' ? textErrorInformation : 'Whops, something went wrong !'}
                                    </Typography>
                                </Fragment>
                            )
                        }

                        {
                            errorStatus === 500 && (

                                <Fragment>
                                    <Typography variant='h6' className={classes.title}>
                                        <b>Whoops! Error {errorStatus}</b>
                                    </Typography>  

                                    <Typography variant='subtitle1' className={classes.title}>
                                        {textErrorInformation !== '' ? textErrorInformation : 'Whops, something went wrong !'}
                                    </Typography>
                                </Fragment>
                            )
                        }

                        {
                            errorStatus === undefined && (

                                <Typography variant='h6' className={classes.title}>
                                    <b>Whoops! Error</b>
                                </Typography>  
                            )
                        }

                        {
                            errorStatus === undefined && (
                                <Fragment>
                                    <Box marginTop={4}>
                                        <Paper elevation={0} style={{backgroundColor: grey[100], padding: 16}} >
                                            <Typography variant='subtitle2' className={classes.title}>
                                                <b>Bantu kami meningkatkan pengalaman Anda menggunakan <i>Performate</i></b>
                                            </Typography>  

                                            <Typography variant='subtitle2' className={classes.title}>
                                                Apakah Anda membutuhkan bantuan untuk masalah ini ? 
                                            </Typography>  
                                        </Paper>
                                    </Box>
                                </Fragment>
                            )
                        }

                        

                        {
                            listError !== undefined !== null && listError !== undefined && listError.length > 0 && listError.map((item, i) => {

                                return (

                                    <Typography variant='subtitle2' className={classes.title} key ={i}>
                                        {item.description}
                                    </Typography>

                                )
                            })
                        }

                        {
                            errorStatus === 500 && (
                                <Fragment>
                                    <Box marginTop={4}>
                                        <Paper elevation={0} style={{backgroundColor: grey[100], padding: 16}} >
                                            <Typography variant='subtitle2' className={classes.title}>
                                                <b>Bantu kami meningkatkan pengalaman Anda menggunakan <i>Performate</i></b>
                                            </Typography>  

                                            <Typography variant='subtitle2' className={classes.title}>
                                                Apakah Anda membutuhkan bantuan untuk masalah ini ? 
                                            </Typography>  
                                        </Paper>
                                    </Box>
                                </Fragment>
                            )
                        }

                    </DialogContentText>
                </DialogContent>

                <DialogActions style={{alignItems: "center", justifyContent:'center'}}>


                    {/* {
                        errorStatus == undefined && (//<b>admin@performate.id</b>

                            <Fragment>
                                <Button 
                                    variant='contained' 
                                    onClick={() => setOpenDialogError(false)} 
                                    color="primary" 
                                    size='small'
                                    className={classes.title}
                                    // startIcon={
                                    //     <AlternateEmailIcon />
                                    // }
                                >  
                                    <span style={{fontSize: 12}}>
                                        Tutup
                                    </span>                                     
                                </Button>                                                             
                            </Fragment>
                        )
                    } */}

                    {
                        errorStatus == undefined && (

                            <Fragment>
                                <Button 
                                    variant='contained' 
                                    onClick={
                                        () => {
                                            setOpenDialogHelp(true);
                                            setOpenDialogError(false);
                                        }
                                    } 
                                    color="primary" 
                                    size='small'
                                    className={classes.title}
                                
                                >  
                                    <span style={{fontSize: 12}}>
                                        Ya
                                    </span>                                     
                                </Button>   

                                <Button 
                                    variant='outlined' 
                                    onClick={() => setOpenDialogError(false)} 
                                    color="primary" 
                                    size='small'
                                    className={classes.title}
                                
                                >  
                                    <span style={{fontSize: 12}}>
                                        Tidak
                                    </span>                                     
                                </Button>                                                              
                            </Fragment>
                        )
                    }

                    {
                        errorStatus == 500 && (

                            <Fragment>
                                <Button 
                                    variant='contained' 
                                    onClick={
                                        () => {
                                            setOpenDialogHelp(true);
                                            setOpenDialogError(false);
                                        }
                                    } 
                                    color="primary" 
                                    size='small'
                                    className={classes.title}
                                
                                >  
                                    <span style={{fontSize: 12}}>
                                        Ya
                                    </span>                                     
                                </Button>   

                                <Button 
                                    variant='outlined' 
                                    onClick={() => setOpenDialogError(false)} 
                                    color="primary" 
                                    size='small'
                                    className={classes.title}
                                
                                >  
                                    <span style={{fontSize: 12}}>
                                        Tidak
                                    </span>                                     
                                </Button>                                                              
                            </Fragment>
                        )
                    }
                </DialogActions>
                <br />
                <br />
            </Dialog>

            <DialogHelp
                isOpenDialogHelp = { isOpenDialogHelp }
                setOpenDialogHelp = { setOpenDialogHelp }
                
            />
        </Fragment>
    )

};

export default DialogError;
 