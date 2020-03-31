import React, {useState, useEffect, useContext, useCallback} from 'react';
import { withStyles } from '@material-ui/core/styles';

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

const Snackber = props => {

    const { classes, isOpenResponse200, handleCloseSnackbar200 } = props;

    // const [isOpenResponse200 , setOpenResponse200 ] = useState(false);

    // const handleCloseSnackbar200 = () => setOpenResponse200(false);

    return(
        <Snackbar

            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={isOpenResponse200}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar200}
            ContentProps={{
                'aria-describedby': 'message-id',
                classes: {
                    root: classes.success
                }

            }}
            message={<span id="message-id">Berhasil ubah kata sandi baru :)</span>}
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={handleCloseSnackbar200}
                >
                    <i className="material-icons">
                            done
                    </i>
                </IconButton>,
            ]}
        />
    )
};

export default withStyles(styles)(Snackber);

