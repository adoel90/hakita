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

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import { styles } from '../Style/StyleHome';

const useStyle= makeStyles(styles);

const Footer = () => {

    const classes = useStyle();

    return (

        <Fragment>

            <Grid container style={{backgroundColor: '#3a3b3c'}}>
                    
                <Grid item sm={12} md={6} xl={6}>
                    <Box marginTop={theme.spacing(1.5)} marginLeft={theme.spacing(1)}>
                        <Typography variant='h6' className={classes.title} style={{color: 'white'}}>                        
                            About us
                        </Typography>   
                        <br />  
                        <Typography variant='subtitle2' className={classes.title} style={{color: '#92959b'}}>                        
                            HAKITA adalah sebuah platform yang menjawab kebutuhan masyarakat Indonesia dalam membuat dan memproses dokumen legal yang aman dan terpercaya. Kami menggunakan teknologi otomasi untuk mempermudah proses pembuatan dokumen.
                        </Typography>            
                    </Box>
                </Grid>

                <Grid item sm={12} md={6} xl={6}>
                    <Box marginTop={theme.spacing(1.5)} marginLeft={theme.spacing(1)}>
                        <Typography variant='h6' className={classes.title} style={{color: 'white'}}>                        
                            Contact Us
                        </Typography>   
                        <br />  
                        <Typography variant='subtitle2' className={classes.title} style={{color: '#92959b'}}>                        
                            Mail: info@hakita.com Alamat: Jl. Boulevard Barat Raya No.27, RW. 9, <br />Kelapa Gading Barat - Jakarta Utara 14240
                        </Typography>  

                        
                            <IconButton>
                                <FacebookIcon style={{color: '#92959b' }} />
                            </IconButton>          
                        
                        <IconButton>
                            <InstagramIcon style={{color: '#92959b' }} />
                        </IconButton>          
                    </Box>
                </Grid>

            </Grid>

            <Grid container style={{backgroundColor: '#3a3b3c', borderTopColor: 'white', borderWidth: 1}}>
                <Grid item sm={12} md={12} xl={12} style={{textAlign: 'center', borderTopColor: 'white'}}>

                    <Box marginTop={theme.spacing(0.7)} margimBottom={theme.spacing(2)}>
                        <Typography variant='caption' className={classes.title} style={{color: '#92959b'}}>   
                            © PT Hakita Indonesia, 2020
                        </Typography>    
                        <br />                 
                        <br />                 
                        <br />                 
                    </Box>
                </Grid>
            </Grid>
        </Fragment>
    )

};

export default Footer;

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