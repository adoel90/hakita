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

import DoYouKnow from '../Components/DoYouKnow';

import PictBackgroundImage from '../../../../assets/images/background_2.jpg';
import IconOne from '../../../../assets/images/icon_service_1.png';
import IconSecond from '../../../../assets/images/icon_service_2.png';
import IconThird from '../../../../assets/images/icon_service_3.png';


const useStyle= makeStyles(styles);

const Services = () => {

    const classes = useStyle();

    return (

        <Fragment>

            <Grid container>
                <Grid item xs={12} md={12} xl={12} style={{textAlign: 'center'}}>
                    <Box marginTop={theme.spacing(1.5)}>
                        <Typography variant='h3' className={classes.title}>
                            Product and Services
                        </Typography>
                    </Box>
                    <Box marginTop={theme.spacing(0.5)} marginBottom={theme.spacing(0.5)}>
                        <Typography variant='subtitle1' className={classes.title}>
                            Apapun kebutuhan legal Anda, biar HAKITA yang urus.
                        </Typography>
                    </Box>
                </Grid>


                <Grid item xs={12} md={4} xl={4} style={{textAlign: 'center'}}>
                    
                    <Box marginLeft={theme.spacing(1)}>
                        <Paper elevation={2}  style={{borderRadius: 10}}>
                            <Box paddingTop={theme.spacing(0.7)} paddingBottom={theme.spacing(0.7)}>
                                <img src={IconOne} width={88} height={72} alt="1" />
                            </Box>
                        </Paper>
                    </Box>

                    <Box marginTop={theme.spacing(0.3)} marginLeft={theme.spacing(1)}>              
                        <Typography variant='h6' className={classes.title}>
                            <b>Jasa Pembuatan PT</b>
                        </Typography>
                    </Box>

                    <Box marginTop={theme.spacing(0.3)}  marginLeft={theme.spacing(1)}>              
                        <Typography variant='subtitle2' className={classes.title} style={{color: 'grey'}}>
                            Sekarang buat PT tidak harus mahal dan lama. Kami mengerti bahwa bisnis Anda perlu dilindungi hukum. Di HAKITA, kami membantu Anda membuat PT dengan proses yang cepat dan aman dengan harga terjangkau.                
                        </Typography>
                    </Box>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </Grid>

                <Grid item xs={12} md={4} xl={4} style={{textAlign: 'center'}}>

                    <Box marginLeft={theme.spacing(1)}>
                        <Paper elevation={2} style={{borderRadius: 10}}>
                            <Box paddingTop={theme.spacing(0.7)} paddingBottom={theme.spacing(0.7)}>
                                <img src={IconSecond} width={88} height={72} alt="1" />
                            </Box>
                        </Paper>
                    </Box>

                    <Box marginTop={theme.spacing(0.3)} marginLeft={theme.spacing(1)}>              
                        <Typography variant='h6' className={classes.title}>
                            <b>Otomasi Dokumen</b>
                        </Typography>
                    </Box>

                    <Box marginTop={theme.spacing(0.3)}  marginLeft={theme.spacing(1)}>              
                        <Typography variant='subtitle2' className={classes.title} style={{color: 'grey'}}>
                            Buat dokumen sudah tidak perlu ribet lagi. Dokumen yang biasa butuh waktu berminggu-minggu sekarang bisa selesai dalam hitungan menit dengan template dari HAKITA.
                        </Typography>
                    </Box>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </Grid>

                <Grid item xs={12} md={4} xl={4} style={{textAlign: 'center'}}>
                    <Box marginLeft={theme.spacing(1)} marginRight={theme.spacing(1)}>
                        <Paper elevation={2} style={{borderRadius: 10}}>
                            <Box paddingTop={theme.spacing(0.7)} paddingBottom={theme.spacing(0.7)}>
                                <img src={IconThird} width={88} height={72} alt="1" />
                            </Box>
                        </Paper>
                    </Box>

                    <Box marginTop={theme.spacing(0.3)}>              
                        <Typography variant='h6' className={classes.title}>
                            <b>Sistem Manajemen Dokumen</b>
                        </Typography>
                    </Box>

                    <Box marginTop={theme.spacing(0.3)}  marginLeft={theme.spacing(1)}  marginRight={theme.spacing(1)} >              
                        <Typography variant='subtitle2' className={classes.title} style={{color: 'grey'}}>
                            Kerja lebih efisien dengan HAKITA! Tidak hanya memantau ribuan dokumen yang Anda miliki, teknologi kami juga dapat memberi tahu Anda jika ada dokumen yang membutuhkan perhatian khusus lewat fitur reminder kami.
                        </Typography>
                    </Box>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                
                </Grid>
            </Grid>

            <Grid container style={{ padding: 0}}>
                <Grid item sm={12} md={12} xl={12} style={{textAlign: 'center'}}>
                    
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
                        <Box>

                            <Typography variant='h3' className={classes.title} style={{color: 'white'}}>
                                <b>APAKAH ANDA TAHU ? </b>
                            </Typography>
                            
                        </Box>

                        <Box marginTop={theme.spacing(0.7)} marginLeft={theme.spacing(1)} marginRight={theme.spacing(1) }>
                            <Typography variant='h4' className={classes.title} style={{color: 'white'}}>
                                <b>Kalau dari kasus tabrakan, Anda tidak perlu memberi SIM atau KTP kepada orang yang ditabrak</b>
                            </Typography>
                        </Box>

                        <br />
                        <br />
                        <br />
                        <br />                        
                    </Paper>
                </Grid>
            </Grid>

            <DoYouKnow />
          
        </Fragment>
        
    )

};

export default Services;

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