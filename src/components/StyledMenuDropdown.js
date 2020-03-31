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

export const StyledMenu = withStyles({

    paper: {
      border: '1px solid #d3d4d5',
    },

  })(props => (

    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
export const StyledMenuItem = withStyles(theme => ({

    root: {
      '&:focus': {
        // backgroundColor: theme.palette.primary.main,
        backgroundColor: '#d64253',
        color: 'white',
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    
    },
  }))(MenuItem);