import React, { Component, useEffect, useState, Suspense } from "react";
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { Container, Paper, Typography, Grid, TextField, Checkbox, FormControlLabel, Box, Button, MenuItem, Hidden, CircularProgress } from '@material-ui/core';

import Redirect from '../../../utilities/Redirect';
import { ToPreForgetPassword } from '../../../constants/config-redirect-url';

import LogoFB from '../../../assets/images/logo-fb.png';
import LogoGoogle from '../../../assets/images/logo-google.png';
import LogoLinked from '../../../assets/images/logo-in.png';
import PictBackgroundImage from '../../../assets//images/Group_765.png';
import FormSubmit from './ComponentSignin/FormSubmit';
    
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
        width: 443,
        borderRadius: 8,
        [theme.breakpoints.only('xs')]: {
    
            width: 370,
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            
        },
    },
    
    buttonAction: {

        textTransform : 'capitalize'

    },
    question: {

        color: 'grey'

    },
    AppLogoSocial: {
        width: 17,
        height: 17,
        marginLeft: theme.spacing(1),
        // paddingTop: theme.spacing(16),
    },
    dropDown: {
        // flexBasis: 200,
        minWidth: 300,
        width: 425,
    
    },
    marginDropdown: {

        margin: theme.spacing(1),
    },
    /* 
        ````````````````
        GRID VIEW IMAGES
        
        ````````````````
    */
    rootGridView: {

        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper

    },
    gridList: {

        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    text: {

        color: theme.palette.primary.light,
    },
    titleBar: {

        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
    },
    title: {
        fontFamily: 'Nunito'
    },
    input: {

        color: 'grey',
        fontFamily: 'Nunito'

    },
    

})

const ViewSignin = props => {

    const { classes } = props;
    /*
        ````````
        Dropdown

        ````````
    */
    const [languages, setLanguage] = useState({

        language: ''
    });   

    const handleChangeDropdown = name => event => {

        setLanguage({ ...languages, [name]: event.target.value });
    };
    
    return (
 
        <MuiThemeProvider theme={theme}>
            <Container 
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

                        <FormSubmit props={classes} />                    

                        <Grid 
                            container 
                            justify="center" 
                            alignItems="center"
                        >

                            <Grid item sm={12} xs={12} style={{textAlign: 'center'}}>
                                <br />
                                <Button 
                                    color="primary" 
                                    className={classes.buttonAction}
                                    onClick={() => Redirect(ToPreForgetPassword)}
                                >
                                    <Typography variant='subtitle2' className={classes.title}>
                                        Forgot Password ? 
                                    </Typography>
                                </Button>
                                <br />
                                <br />                                                                          
                            </Grid>
                        </Grid>     
                
                    </Paper>
                </Grid>      
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Container>
        </MuiThemeProvider>
    )
};

export default withStyles(styles)(ViewSignin);

// const ranges = [
//     {
//       value: 'Indonesia',
//       label: 'Indonesia',
//     },
//     {
//       value: 'Inggris',
//       label: 'Inggris',
//     },
//     {
//       value: 'Arab',
//       label: 'Arab',
//     },
//   ];

