import React, { useCallback, useEffect, useState, Fragment } from "react";
import TitleIcon from '../assets/images/icon-info-24px.svg';

/**
 * Core
 */
import { Container, Paper, Typography, Grid, TextField, Checkbox, 
    FormControlLabel, Box, Button, MenuItem, Popover, Fab, Chip,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions

} from '@material-ui/core';

const DialogInfoError = props => {

    /**
     * 
     * 
     * 
     * Init
     */

    let {
        classes,
        open,
        title, 
        titleIcon,
        setTitleIcon,
        content,
        okButtonText,
    } = props;

    useEffect(() => {
        if (classes !== undefined) {
            setThisClasses(classes);
        }
        if (open !== undefined) {
            setThisOpen(open);
            console.log(open);
        }
        if (title !== undefined) {
            setThisTitle(title);
        }
        if (titleIcon !== undefined) {
            setTitleIcon(titleIcon);
        }
        if (content !== undefined) {
            setThisContent(content);
        }
        if (okButtonText !== undefined) {
            setThisOkButtonText(okButtonText);
        }
    },[]);

    /**
     * Handling classes
     * 
     *      
     * 
     */

    let [ thisClasses, setThisClasses ] = useState({});

    /**
     * Handling open
     * 
     */
    let [ thisOpen, setThisOpen ] = useState(true);

    /**
     * Handling dialog title
     * 
     */
    let [ thisTitle, setThisTitle ] = useState('Error');

    /**
     * Handling dialog text content
     * 
     */
    let [ thisContent, setThisContent ] = useState('Whoops something went wrong');

    /**
     * Handling OK button
     * 
     */
    let [ thisOkButtonText, setThisOkButtonText ] = useState('OK, mengerti!');

    /**
     * Handling Title pict
     * 
     */
    let [ thisTitleIcon, setThisTitleIcon ] = useState(TitleIcon);

    /**
     * Handling close
     * 
     */
    let thisHandleClose = (evt) => {
        setThisOpen(false);
    }

    return (
        <Dialog
                open={ thisOpen }
                onClose={ thisHandleClose }
            >
                <DialogTitle style={{textAlign: "center"}}>
                    <img src={ thisTitleIcon } style={{ height: '96px' }} alt='Pict Info '/>
                    <br />
                    <br />
                    <Typography variant='h4' className={thisClasses.title} style={{color: 'black'}}>
                        <b>{ thisTitle }</b>
                    </Typography>
                    <Typography variant='subtitle1' className={thisClasses.title}>
                        { thisContent }
                    </Typography>
                </DialogTitle>

                <DialogContent style={{textAlign: "center"}}>
                    <DialogContentText style={{textAlign: "center"}}>
                        
                    <Grid container>
                        <Grid item xs={12}>
                            <Button 
                                variant='contained' 
                                onClick={ thisHandleClose }
                                size='medium'
                                className={ classes.button }
                            >  
                                { thisOkButtonText }
                            </Button>
                        </Grid>
                    </Grid>
                    
                    </DialogContentText>
                </DialogContent>
                <br />
                <br />
            </Dialog>
    );
};

export default DialogInfoError;