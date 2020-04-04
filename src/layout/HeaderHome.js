import React, { Component, useEffect } from 'react';
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography, Hidden, Grid, Box} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

import { navigate } from 'hookrouter';


import logo from '../assets/images/hakita_2.png';

import { ToLogin, ToRegister, ToLandingPage} from '../constants/config-redirect-url';


export const theme = createMuiTheme({


    palette: {
        primary: {
            main: '#1a457f', //#cc0707, #c62828
            light: '#ff5f52',
            dark: '#8e0000',
            contrastText: '#ffffff'
        }
    },
    overrides: {

       MuiToolbar : {

        root:{
            backgroundColor: 'white'
          }
        }       
    }

  });


// const useStyles = makeStyles(theme => ({
const styles = theme => ({

    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      color: 'grey',
      paddingBottom: theme.spacing(0),
    //   marginTop: theme.spacing(1)    
    },
    question: {
        color: 'grey',
        textTransform : 'capitalize',
        fontFamily: 'Nunito'
        
    },
    buttonAction: {
        textTransform : 'capitalize',
        fontFamily: 'Nunito'

    },
    logoText: {
        flexGrow: 1,
        // width: 32,
        // height: 32
    },
    logo: {
        width: 30,
        height: 30
    },

    buttonOutlined : {

        fontFamily:'Nunito',
        textTransform: 'capitalize',
        color: '#1a457f',
        borderWidth: 0,
        '&:hover' : {
          borderWidth: 0,
          
        }
      },
  });

const Header = props => {

    const { classes} = props;
    const currentUrl = window.location.pathname;

    return (
        
        <MuiThemeProvider theme={theme}>
             <AppBar position="sticky">
                <Toolbar>     
                    <Box flexGrow = {1}>
                        <Button 
                            variant='outlined' 
                            className={classes.buttonOutlined}
                            startIcon={
                                <EmailIcon />
                            }
                        >
                            Email : info@hakita.com
                        </Button>
                    </Box>

                    <Box marginRight={theme.spacing(0.2)}>
                        <IconButton>
                            <FacebookIcon style={{color: '#1a457f'}} fontSize='small' />
                        </IconButton>   
                    </Box>                      
                    <Box marginRight={theme.spacing(0.2)}>
                        <IconButton>
                            <InstagramIcon style={{color: '#1a457f'}} fontSize='small' />
                        </IconButton>                            
                    </Box>    
                    
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    )
};

// export default Header;
export default withStyles(styles)(Header);