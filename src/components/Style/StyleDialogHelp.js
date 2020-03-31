import React, { useCallback, useEffect, useState, useContext, Fragment} from "react";
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider, fade} from '@material-ui/core/styles';

export const styles = theme => ({     

    button: {

        // width: '503px',
        // height: '42px',
        borderRadius: 5,
        background: 'linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181)',
        border:0,
        fontFamily:'Nunito',
        marginLeft:theme.spacing(1),
        textTransform: 'capitalize',
        color: 'white'

    },
    buttonDisabled: {
        fontFamily:'Nunito',
        textTransform: 'capitalize',
        color: 'grey',
        fontWeight: 'bold'
    },
    buttonOutlined : {

        fontFamily:'Nunito',
        textTransform: 'capitalize',
        color: '#d64253',
        borderWidth: 0,
        '&:hover' : {
          borderWidth: 0,
          
        }
      },
    title: {

        fontFamily: 'Nunito'
    },

    titleTextField: {

        fontFamily: 'Nunito',
        width: 72
    },

    titleTextFieldNote: {

        fontFamily: 'Nunito',
    },

    titleListChoose: {

        fontFamily: 'Nunito',
        cursor: 'pointer',
        fontWeight: 'bold'


    },
    titleListChooseAktif: {

        fontFamily: 'Nunito',
        color: '#d6d3d3', 
        cursor: 'pointer',
    },

  

});

