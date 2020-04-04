import React, { useCallback, useEffect, useState, useContext, Fragment, useRef } from "react";
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { 

    Container, Paper, Typography, Grid, TextField, Checkbox, CircularProgress,
    FormControlLabel, Box, Button, MenuItem, Dialog, DialogTitle, DialogContent, 
    DialogContentText, DialogActions, Breadcrumbs, Link, List, ListItem, ListItemText, 
    ListItemAvatar, Avatar, IconButton, InputBase, Divider, Tooltip, Table, Icon,
    TableBody, TableRow, TableCell, TablePagination, TableSortLabel, TableHead, Menu,
    ListItemIcon, Chip, Slide, Tabs, Tab, Toolbar
    
} from '@material-ui/core';

import {useRoutes, A, navigate} from 'hookrouter';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';

import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Blog from './Components/Blog';

import Footer from './Components/Footer';

import { styles } from './Style/StyleHome';
import logo from '../../../assets/images/hakita_2.png';



const routeNested = { 

    '/': () => (

       <Home />
    ),
    '/about': () => (<About />),
    '/services': () => (<Services />),
    '/contact': () => (<Contact />),
    '/blog': () => (<Blog />)
};

const useStyle= makeStyles(styles);

const ViewHome = () => {


    const classes = useStyle();

    const routeNestedResult = useRoutes(routeNested);

    return (

        <Fragment>

            <Toolbar>     
                <Box flexGrow = {1} marginTop={theme.spacing(0.5)} marginLeft={theme.spacing(0.2)}>
                    <img 
                        src={logo} 
                        alt='logo-text' 
                        // className={classes.logoText} 
                        style={{
                            
                            width: 124,
                            height: 48

                        }}
                    />
                </Box>

                <Box marginRight={theme.spacing(0.5)}>
                    <Typography 
                        onClick={() => navigate('/home')}
                        variant='subtitle1' className={classes.title} style={{cursor: 'pointer'}}>
                    Home
                    </Typography>  
                </Box>   

                <Box marginRight={theme.spacing(0.5)}>
                    <Typography 
                        onClick={() => navigate('/home/about')}
                        variant='subtitle1' className={classes.title} style={{cursor: 'pointer'}}>
                        About
                    </Typography>  
                </Box>   

                <Box marginRight={theme.spacing(0.5)}>
                    <Typography 
                        onClick={() => navigate('/home/services')}
                        variant='subtitle1' className={classes.title} style={{cursor: 'pointer'}}>
                    Services
                    </Typography>  
                </Box>   

                <Box marginRight={theme.spacing(0.5)}>
                    <Typography 
                        onClick={() => navigate('/home/blog')}
                        variant='subtitle1' className={classes.title} style={{cursor: 'pointer'}}>
                        Blog
                    </Typography>  
                </Box>                      
                <Box marginRight={theme.spacing(0.5)}>
                    <Typography 
                        onClick={() => navigate('/home/contact')}
                        variant='subtitle1' className={classes.title} style={{cursor: 'pointer'}}>
                        Contact
                    </Typography>                           
                </Box>                
            </Toolbar>

                {
                    routeNestedResult
                }

            <Footer />


        </Fragment>
        
    )
};

export default ViewHome;



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