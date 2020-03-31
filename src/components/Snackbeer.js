import React, {useState, useEffect, useContext, useCallback} from 'react';
import { withStyles, makeStyles} from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import { amber, green } from '@material-ui/core/colors';
import { Snackbar } from '@material-ui/core';

const styles = {
    
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

const useStyle = makeStyles(styles);

const Snackbeer = props => {

    const { 

        // classes, 
        isModalResponse200, 
        setModalResponse200, 
        messages 

    } = props;

    const classes = useStyle();

    return (
        
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={isModalResponse200}
            autoHideDuration={3000}
            onClose={setModalResponse200}
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
                    color="inherit"
                    className={classes.close}
                    onClick={setModalResponse200}
                >
                    <i className="material-icons">
                            done
                    </i>
                </IconButton>,
            ]}
        />
    )
};

export default withStyles(styles)(Snackbeer);

