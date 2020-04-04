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

import HaveQuestion from './HaveQuestion';
import { styles } from '../Style/StyleHome';


const useStyle= makeStyles(styles);

const Contact = () => {

    const classes = useStyle();

    return (

        <HaveQuestion />
           
    )

};

export default Contact;

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