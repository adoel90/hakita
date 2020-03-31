import React, { useCallback, useEffect, useState, useContext} from "react";
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { 

  Container, Paper, Typography, Grid, TextField, Checkbox, CircularProgress,
  FormControlLabel, Box, Button, MenuItem, Dialog, DialogTitle, DialogContent, 
  DialogContentText, DialogActions, Breadcrumbs, Link, List, ListItem, ListItemText, 
  ListItemAvatar, Avatar, IconButton, InputBase, Divider, Tooltip, Table, Icon,
  TableBody, TableRow, TableCell, TablePagination, TableSortLabel, TableHead, Menu,
  ListItemIcon
  
} from '@material-ui/core';

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

const LightTooltip = withStyles(theme => ({

    tooltip: {

        backgroundColor:'yellow',
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 12,
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        maxWidth: 400
        
    },

    arrow: {
        color: 'yellow'
    }
  }))(Tooltip);

export default LightTooltip;