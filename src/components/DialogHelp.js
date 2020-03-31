import React, { Component, useEffect, useState, Fragment } from "react";
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { Container, Paper, Typography, Grid, TextField, Checkbox, 
        FormControlLabel, Box, Button, MenuItem, Popover, Fab, Chip,
        Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, IconButton

    } from '@material-ui/core';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CloseIcon from '@material-ui/icons/Close';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import PictInfoWarningRed from '../assets/images/icon-info-24px.svg';
import Pict400 from '../assets/images/400.png';
import Pict500 from '../assets/images/500_wow.png';
import IconWarningYellow from '../assets/images/icon_warning_yellow.png';

import { styles } from './Style/StyleDialogHelp';

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

const useStyle = makeStyles(styles)

const DialogHelp = props => {

    const { isOpenDialogHelp, setOpenDialogHelp  } = props;

    const classes = useStyle();

    return (

        <Dialog
            open={isOpenDialogHelp}
            onClose={() => setOpenDialogHelp(false)}
            aria-labelledby="alert-dialog-title-422"
            aria-describedby="alert-dialog-description-422"            
            // fullWidth
        >
            <DialogTitle id="alert-dialog-title-422" style={{textAlign: "center"}}>

                <Grid container direction='row' justify='flex-end' alignItems='flex-start'>
                    <IconButton 
                        size='small' 
                        onClick={() => setOpenDialogHelp(false)} 
                    >
                        <HighlightOffIcon style={{color: 'grey', fontSize: '17px'}} />
                    </IconButton>
                </Grid>
            </DialogTitle>


            <DialogContent style={{textAlign: "center"}}>
                <DialogContentText id="text">
                    <Typography variant='h6' className={classes.title}>
                        <b>Kami senang jika bisa membantu Anda :)</b>
                    </Typography>     
                </DialogContentText>
            </DialogContent>

            <DialogContent style={{textAlign: "left"}}>               
                <Paper elevation={1} style={{backgroundColor: 'transparant', padding: 16}}>
                    <Box display='flex' flexDirection="row" >
                        <Typography variant='subtitle1' className={classes.title} style={{color: 'grey'}}>
                            Kirim pertanyaan, keluhan, atau usulan Anda ke email support kami ke
                            <b>
                                <i style={{color: 'red'}}>
                                    <a href="mailto:admin@performate.id" style={{color: 'red', textDecoration:'none'}}> 
                                        &nbsp;admin@performate.id 
                                    </a>
                                </i>
                            </b>. 
                            Pesan Anda akan kami balas maksimal dalam waktu 24 jam <i>(Office Hour)</i>
                        </Typography>
                    </Box>
                </Paper>
            </DialogContent>

            <br />
            <DialogActions style={{alignItems: "center", justifyContent:'center'}}>
                <Button 
                    variant='contained' 
                    onClick={() => setOpenDialogHelp(false)} 
                    color="primary" 
                    size='small'
                    className={classes.title}
                    // endIcon = {

                    //     <HighlightOffIcon style={{marginLeft: 4}} />
                    // }
                >  
                    <span style={{fontSize: 12}}>
                       Tutup                              
                    </span>                                     
                </Button>   
            </DialogActions>

            <br />
            <br />
        </Dialog>
    )
}

export default DialogHelp;