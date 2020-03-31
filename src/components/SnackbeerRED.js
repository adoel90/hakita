import React, {useState, useEffect, useContext, useCallback} from 'react';
import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import { amber, green, red } from '@material-ui/core/colors';
import { Snackbar } from '@material-ui/core';

import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const styles = {
    
    close: {

        padding: 7 / 2,
    },
    warning: {

        backgroundColor: amber[700],
    },

    success: {

        backgroundColor: red[500],
    }
};

const SnackbeerRED = props => {

    const { 

        classes, 
        isOpenSnackbeer, 
        setOpenSnackbeer, 
        messages 

    } = props;

    return (
        
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={isOpenSnackbeer}
            autoHideDuration={8000}
            onClose={setOpenSnackbeer}
            ContentProps={{

                'aria-describedby': 'message-id',
                classes: {
                    root: classes.success
                }
            }}
            message={

                <span id="message-id">
                    {messages !== '' ? messages : 'Status berhasil !' } 
                </span>
            }
            action={[

                <IconButton
                    key="close"
                    aria-label="Close"
                    onClick={() => setOpenSnackbeer(false) }
                    color="inherit"
                    className={classes.close}
                    
                >
                    <HighlightOffIcon />
                </IconButton>,
            ]}
        />
    )
};

export default withStyles(styles)(SnackbeerRED);

