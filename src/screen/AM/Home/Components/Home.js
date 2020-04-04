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

import PictBackgroundImage from '../../../../assets/images/main-hero-man2.jpg';
import IconOne from '../../../../assets/images/icon_home_1.png';
import IconSecond from '../../../../assets/images/icon_home_2.png';
import IconThird from '../../../../assets/images/icon_home_3.png';

const useStyle= makeStyles(styles);

const Home = () => {

    const classes = useStyle();

    return (


        <Grid container style={{ padding: 0, marginBottom: 48}}>
            <Grid item sm={12} md={12} xl={12} style={{textAlign: 'left', padding: 0}}>
                
                <br />
                <Paper 
                    square={true}
                    elevation={0}  
                    style={{
                        // marginLeft:'16px', 
                        // marginRight: '16px',
                        backgroundImage: 'url(' + PictBackgroundImage + ')', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        padding: 0

                    }}
                >
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Box marginLeft={theme.spacing(2)}>

                        <Typography variant='h3' className={classes.title} style={{color: 'white'}}>
                            <b>URUSAN LEGAL JADI LEBIH <br />GAMPANG DENGAN HAKITA</b>
                        </Typography>
                        
                    </Box>

                    <Box marginLeft={theme.spacing(2)} marginTop={theme.spacing(1)}>
                        <Button variant='contained' className={classes.button}>
                            <Typography variant='subtitle1' className={classes.title} style={{color: 'white', textTransform: 'capitalize'}}> 
                                Baca Artikel
                            </Typography>
                        </Button>
                    </Box>

                    <br />
                    <br />
                    <br />
                    <br />                        
                </Paper>
            </Grid>


            <Grid sm={12} md={4} xl={4}>
                <Box marginTop={theme.spacing(1.5)} marginLeft={theme.spacing()}>
                    <Typography variant='h6' className={classes.title} style={{ textTransform: 'capitalize'}}>                        
                        <img src={IconOne} width={40} height={40} alt="1" style={{marginRight: 16, marginBottom: -8}} />
                        <b>We Meet People's Needs</b>
                    </Typography> 

                    <Box marginLeft={theme.spacing(0.9)} marginTop={theme.spacing(0.2)}>
                        <Typography variant='subtitle2' className={classes.title}>                        
                            Kami sadar bahwa hukum masih dianggap sebagai sesuatu yang menakutkan dan belum terjangkau untuk semua golongan. Inilah mengapa kami ada; untuk melawan stigma dan menjawab segala kebutuhan legal Anda.
                        </Typography>
                    </Box>
                </Box>
                
            </Grid>

            <Grid sm={12} md={4} xl={4}>
                <Box marginTop={theme.spacing(1.5)} marginLeft={theme.spacing(0.7)}>
                    <Typography variant='h6' className={classes.title} style={{ textTransform: 'capitalize'}}>                        
                        <img src={IconSecond} width={40} height={32} alt="1" style={{marginRight: 16, marginBottom: -8}} />
                        <b>We Provide Protection</b>                            
                    </Typography> 

                    <Box marginLeft={theme.spacing(0.9)} marginTop={theme.spacing(0.2)}>
                        <Typography variant='subtitle2' className={classes.title}>                        
                            Dibantu oleh praktisi hukum dengan pengalaman lebih dari 10 tahun, HAKITA memastikan bahwa Anda mendapatkan perlindungan hukum yang sesuai dengan hak Anda sebagai warga negara
                        </Typography>
                    </Box>
                </Box>
            </Grid>

            <Grid sm={12} md={4} xl={4}>
                <Box marginTop={theme.spacing(1.5)} marginLeft={theme.spacing(0.7)} marginRight={theme.spacing(1)}>
                    <Typography variant='h6' className={classes.title} style={{ textTransform: 'capitalize'}}>                        
                        <img src={IconThird} width={40} height={32} alt="1" style={{marginRight: 16, marginBottom: -8}} />
                        <b>We Are Trustworthy</b>                                               
                    </Typography> 

                    <Box marginLeft={theme.spacing(0.9)} marginTop={theme.spacing(0.2)}>
                        <Typography variant='subtitle2' className={classes.title}>                        
                            HAKITA hadir karena kami percaya bahwa hukum adalah hak semua orang. Semua yang kami lakukan di HAKITA selalu selaras dengan misi kami untuk menjadikan hukum sebagai sesuatu yang mudah dimengerti dan dapat diakses oleh semua orang.
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )

};

export default Home;

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