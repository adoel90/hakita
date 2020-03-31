import React, { Component, useEffect, useState } from "react";
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider, useTheme } from '@material-ui/core/styles';
import { Container, Paper, Typography, Grid, TextField, Checkbox, FormControlLabel, Box, Button, MenuItem} from '@material-ui/core';


import FormSubmitRegister from './ComponentRegister/FormSubmitRegister';
import PictBackgroundImage from '../../../assets//images/Group_765.png';

const theme = createMuiTheme({
    
    palette: {

        primary: {
            main: '#1a457f', //#cc0707, #c62828
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
        width: 575,
        borderRadius: 7
    },
    
    buttonAction: {

        textTransform : 'capitalize'
    },
    question: {

        color: 'grey',
     
    },
    AppLogoSocial: {

        width: 17,
        height: 17,
        marginLeft: theme.spacing(1),
    },
    dropDown: {

        minWidth: 300,
        width: 503,
    
    },
    marginDropdown: {

        margin: theme.spacing(1),
    },
    textPersetujuan: {
        color: '#0000008a'
    },
    textKetentuan: {
        color: '#cc0707'
    },

    /*

        ``````````````````````````````````````````
        CSS JS FOR COMPONENT 'FormSubmitRegister'
        ``````````````````````````````````````````

    */
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        minWidth: 300,
        width: 503
    },
    textFieldPassword: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        minWidth: 300,
        width: 503
    },
    textFieldPhoneNumber: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        minWidth: 300,
        width: 503
    },
    input: {
        color: 'grey',
        fontFamily: 'Nunito'
    },
    checkbox: {
        
        marginLeft:theme.spacing(1)

    },
    button: {
        width: '503px',
        height: '42px',
        borderRadius: 5,
        // background: 'linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181)',
        background: 'linear-gradient(1deg, #1a457f, #1a457f 30%, #3f62a2 67%, #3f62a2)',

        border:0,
        fontFamily:'Nunito',
        marginLeft:theme.spacing(1),
        color: 'white'
    },
    buttonModal: {

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
    paperPhone: {

        width: 503,
        height: 48,
        marginLeft: theme.spacing(4.5),
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor:'#c3c3c3',
        borderRadius: 4,
        padding: 0
        
    },
    phoneTextHelper: {

        color: '#0000008a',
        position: 'absolute',
        left: '34%',
        marginTop: theme.spacing(1)

    },
    title: {
        fontFamily: 'Nunito'

    },
    titleRed: {
        fontFamily: 'Nunito',
        color: 'red'

    },
    titleGreen: {
        fontFamily: 'Nunito',
        color: 'green'
    }    
});

const ViewRegister = props => {

    const { classes } = props;

    return (
        <MuiThemeProvider theme={theme}>
            <Container 
                // maxWidth="sm"
                style={{
                    backgroundImage: 'url(' + PictBackgroundImage + ')', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'bottom',
                    // backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    background: 'contain'
                    // background-size: cover;
                    // background-position:bottom;
                    // background-repeat:no-repeat;
                }}
            >
                <Grid container alignItems='center' justify='center'>
                    <Paper className={classes.root} elevation={8}>                        
                        <FormSubmitRegister classes={classes} />
                    </Paper>
                </Grid>

                    <br />
                    <br />
            </Container>
        </MuiThemeProvider>
    )
};

export default withStyles(styles)(ViewRegister);

const typesOfCompany = [
    {
      value: '',
      label: 'Pilih tipe Akun : ',
    },
    {
      value: 'family',
      label: 'Family',
    },
    {
      value: 'company',
      label: 'Company',
    },
  ];