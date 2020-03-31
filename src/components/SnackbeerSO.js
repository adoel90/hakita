import React, {useState, useEffect, useContext, useCallback} from 'react';
import { fade, makeStyles, withStyles, useTheme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import { amber, green } from '@material-ui/core/colors';
import { Snackbar } from '@material-ui/core';


import ContextNewSO from '../screen/NEW-SO/Context/ContextNewSO';

const stylesTest = {
    
    close: {

        padding: 7 / 2,
    },
    warning: {

        backgroundColor: amber[700],
    },

    success: {

        backgroundColor: green[500],
    }
};

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

const styles = theme => ({

    title: {
      
      fontFamily: 'Nunito'   

    },

    close: {

        padding: 7 / 2,
    },
    warning: {

        backgroundColor: amber[700],
    },

    success: {

        backgroundColor: green[500],
    }


});
   
const useStyles = makeStyles(styles);

const SnackbeerSO = props => {

    // const { 

    //     classes, 
    //     isSnackbarResponse200, 
    //     setSnackbarResponse200, 
    //     messages 
    // } = props;

    // isSnackbarResponse200, setSnackbarResponse200

    const context = useContext(ContextNewSO);

    const classes = useStyles();
    const theme = useTheme();

    return (

        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}

            open={ context.isSnackbarResponse200 }

            autoHideDuration={3000}
            onClose={context.setSnackbarResponse200}
            ContentProps={{

                'aria-describedby': 'message-id',
                classes: {
                    root: classes.success
                }
            }}
            message={

                <span id="message-id">
                    {context.messages !== '' ? context.messages : 'Status berhasil !' } 
                </span>
            }
            action={[
                
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={context.setSnackbarResponse200}
                >
                    <i className="material-icons">
                        done
                    </i>
                </IconButton>,
            ]}
        />
    )
};

export default SnackbeerSO;
// export default withStyles(styles)(SnackbeerSO);

