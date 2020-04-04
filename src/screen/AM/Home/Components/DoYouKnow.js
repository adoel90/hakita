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

import { styles } from '../Style/StyleHome';

import PictBackgroundImage from '../../../../assets/images/background_2.jpg';

const useStyle= makeStyles(styles);

const DoYouKnow = () => {

    const classes = useStyle();

    return (
        
        <Fragment>           
            <Grid container>
                <Grid item xs={12} md={12} xl={12} style={{textAlign: 'center'}}>
                    <Box marginTop={theme.spacing(1.5)}>
                        <Typography variant='h3' className={classes.title}>
                            Love Reading, Keep Reading
                        </Typography>
                    </Box>
                    <Box marginTop={theme.spacing(0.5)} marginBottom={theme.spacing(0.5)}>
                        <Typography variant='subtitle1' className={classes.title} style={{color: 'grey'}}>
                            Punya pertanyaan soal hukum ? <b><i>Temukan jawabannya di blog HAKITA</i></b>
                        </Typography>
                    </Box>
                </Grid>              
            </Grid>

            <Grid container>
                <Grid item xs={12} md={4} xl={4} style={{textAlign: 'left'}}>
                    <Box marginLeft={theme.spacing(1)}>
                        <Paper elevation={2} style={{borderRadius: 10}}>

                            <Box marginLeft={theme.spacing(0.5)} paddingTop={theme.spacing(0.5)}>

                                <Chip 
                                    style={{backgroundColor: '#5089C7'}}
                                    label={
                                        <Typography variant='subtitle2' className={classes.title} style={{color: 'white'}}>
                                            Hakita News
                                        </Typography>

                                    }
                                />
                            </Box>
                            
                            <Box marginLeft={theme.spacing(0.5)}  marginTop={theme.spacing(0.2)} marginRight={theme.spacing(0.2)} >
                                <Typography variant='h6' className={classes.title} style={{color: 'black'}}>
                                    Perlindungan Hukum Dalam Belanja Online
                                </Typography>

                                <Typography variant='caption' className={classes.title} style={{color: 'grey'}}>
                                    3 Weeks ago
                                </Typography>
                            </Box>

                            <Box marginLeft={theme.spacing(0.3)}  marginTop={theme.spacing(0.2)} paddingBottom={theme.spacing(0.2)}>
                                <Button variant='outlined' className={classes.buttonOutlined} style={{color:'#1a457f'}}>
                                    Read More
                                </Button>
                            </Box>
                        </Paper>
                        <br />
                        <br />
                        <br />

                    </Box>
                </Grid>

                <Grid item xs={12} md={4} xl={4} style={{textAlign: 'left'}}>
                    <Box marginLeft={theme.spacing(1)}>
                        <Paper elevation={2} style={{borderRadius: 10}}>

                            <Box marginLeft={theme.spacing(0.5)} paddingTop={theme.spacing(0.5)}>

                                <Chip 
                                    style={{backgroundColor: '#5089C7'}}
                                    label={
                                        <Typography variant='subtitle2' className={classes.title} style={{color: 'white'}}>
                                            Hakita News
                                        </Typography>

                                    }
                                />
                            </Box>
                            
                            <Box marginLeft={theme.spacing(0.5)}  marginTop={theme.spacing(0.2)} marginRight={theme.spacing(0.2)} >
                                <Typography variant='h6' className={classes.title} style={{color: 'black'}}>
                                    Aturan Razia secara Hukum
                                </Typography>

                                <Typography variant='caption' className={classes.title} style={{color: 'grey'}}>
                                    3 Weeks ago
                                </Typography>
                            </Box>
                            <br />
                            <br />  
                            <Box marginLeft={theme.spacing(0.3)}  marginTop={theme.spacing(0.2)} paddingBottom={theme.spacing(0.2)}>
                                <Button variant='outlined' className={classes.buttonOutlined} style={{color:'#1a457f'}}>
                                    Read More
                                </Button>
                            </Box>
                        </Paper>
                        <br />
                        <br />
                        <br />

                    </Box>
                </Grid>

                <Grid item xs={12} md={4} xl={4} style={{textAlign: 'left'}}>
                    <Box marginLeft={theme.spacing(1)}>
                        <Paper elevation={2} style={{borderRadius: 10}}>

                            <Box marginLeft={theme.spacing(0.5)} paddingTop={theme.spacing(0.5)}>

                                <Chip 
                                    style={{backgroundColor: '#5089C7'}}
                                    label={
                                        <Typography variant='subtitle2' className={classes.title} style={{color: 'white'}}>
                                            Hakita News
                                        </Typography>

                                    }
                                />
                            </Box>
                            
                            <Box marginLeft={theme.spacing(0.5)}  marginTop={theme.spacing(0.2)} marginRight={theme.spacing(0.2)} >
                                <Typography variant='h6' className={classes.title} style={{color: 'black'}}>
                                    Konvoi Mobil dan Motor di Indonesia, Apa Aturannya?
                                </Typography>

                                <Typography variant='caption' className={classes.title} style={{color: 'grey'}}>
                                    3 Weeks ago
                                </Typography>
                            </Box>

                            <Box marginLeft={theme.spacing(0.3)}  marginTop={theme.spacing(0.2)} paddingBottom={theme.spacing(0.2)}>
                                <Button variant='outlined' className={classes.buttonOutlined} style={{color:'#1a457f'}}>
                                    Read More
                                </Button>
                            </Box>
                        </Paper>
                        <br />
                        <br />
                        <br />

                    </Box>
                </Grid>


                
            </Grid>
        </Fragment>
    )
};


export default DoYouKnow;

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