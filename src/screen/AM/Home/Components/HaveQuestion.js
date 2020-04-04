import React, { useCallback, useEffect, useState, useContext, Fragment, useRef } from "react";
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { 

    Container, Paper, Typography, Grid, TextField, Checkbox, CircularProgress,
    FormControlLabel, Box, Button, MenuItem, Dialog, DialogTitle, DialogContent, 
    DialogContentText, DialogActions, Breadcrumbs, Link, List, ListItem, ListItemText, 
    ListItemAvatar, Avatar, IconButton, InputBase, Divider, Tooltip, Table, Icon,
    TableBody, TableRow, TableCell, TablePagination, TableSortLabel, TableHead, Menu,
    ListItemIcon, Chip, Slide, Tabs, Tab, Toolbar, Card, CardContent
    
} from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';

import { styles } from '../Style/StyleHome';

const useStyle= makeStyles(styles);

const HaveQuestion = () => {

    const classes = useStyle();

    return (

        <Fragment>    
            <Grid container>
                <Grid item xs={12} md={12} xl={12} style={{textAlign: 'center'}}>
                    <Box marginTop={theme.spacing(1.5)}>
                        <Typography variant='h3' className={classes.title}>
                            <b>Have a question ?</b>
                        </Typography>
                    </Box>
                </Grid>              
            </Grid>

            <Grid container>
                
                <Grid item xs={12} md={3} xl={3}>

                </Grid>

                <Grid item xs={12} md={3} xl={3} style={{textAlign: 'center'}}>
                    <Box marginTop={theme.spacing(0.5)}>
                        <Card className={classes.rootCard}>
                            <CardContent>
                                <Box marginTop={theme.spacing(0.3)}>
                                    <IconButton size='medium' style={{backgroundColor: '#1a457f'}}>
                                        <EmailIcon fontSize='large' style={{color: 'white'}} />
                                    </IconButton>
                                </Box>
                                <br />
                                <Typography variant='subtitle2' className={classes.title}>
                                    <b>info@hakita.com</b>
                                </Typography>

                                <br />                                
                            </CardContent>
                        </Card>
                    </Box>
                    <br />
                    <br />
                    <br />

                </Grid>


               
                <Grid item xs={12} md={3} xl={3} style={{textAlign: 'center'}}>
                    <Box marginTop={theme.spacing(0.5)}>
                        <Card className={classes.rootCard}>
                            <CardContent>
                                <Box marginTop={theme.spacing(0.3)}>
                                    <IconButton size='medium' style={{backgroundColor: '#1a457f'}}>
                                        <RoomIcon fontSize='large' style={{color: 'white'}} />
                                    </IconButton>
                                </Box>
                                <br />
                                <Typography variant='subtitle2' className={classes.title}>
                        Jl. Boulevard Barat Raya No. 27, Kelapa Gading Barat, Jakarta Utara
                    </Typography>

                            </CardContent>
                        </Card>
                    </Box>
                    <br />
                    <br />
                    <br />

                </Grid>

                <Grid item xs={12} md={3} xl={3} >
                    
                    </Grid>

            </Grid>
        </Fragment>
    )
};


export default HaveQuestion;

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