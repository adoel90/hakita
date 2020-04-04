import React, { useCallback, useEffect, useState, useContext, Fragment} from "react";
import { makeStyles, createMuiTheme, withStyles, MuiThemeProvider, fade} from '@material-ui/core/styles';

export const theme = createMuiTheme({
  
    palette: {

        primary: {
            
            main: '#cc0707', //#cc0707, #c62828
            light: '#ff5f52',
            dark: '#8e0000',
            contrastText: '#ffffff'
        }
    }
});


export const styles = theme => ({

    root: {
      
        width: '100%',
        marginTop: 1 * 3
  
    },
    rootCard: {
        width: 275
    },
    layoutMarginLeftAndTop: {

        marginLeft: 72, 
        marginTop: 56
    },
    layoutMarginTop: {

        // marginLeft: 72, 
        marginTop: 56
    },
    layoutMarginTopNew: {

        marginTop: theme.spacing(10)
    },
    layoutMarginLeftList: {

        marginLeft: theme.spacing(4), 
        marginTop: theme.spacing(1)
        
    },

    // button: {

    //     // width: '503px',
    //     // height: '42px',
    //     borderRadius: 5,
    //     background: 'linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181)',
    //     border:0,
    //     fontFamily:'Nunito',
    //     marginLeft:theme.spacing(1),
    //     textTransform: 'capitalize',
    //     color: 'white'

    // },
    button: {

        // width: '425px',
        // height: '42px',
        borderRadius: 5,
        // background: 'linear-gradient(1deg, #1a457f, #1a457f 30%, #3f62a2 67%, #3f62a2)',
        backgroundColor: '#1a237e',
        border:0,
        fontFamily:'Nunito',
        marginLeft:theme.spacing(1),
        [theme.breakpoints.only('xs')]: {
    
            width: 366,
            // backgroundColor: 'red',
        },
        '&:hover': {
            backgroundColor: '#000051'
        }
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
    titleWithOpacity: {

        fontFamily: 'Nunito',
        opacity: 0.3
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

    timeFrameIcon: {
        fontFamily: 'Nunito',
        color: 'grey', //#4aa9fb
        textTransform: 'capitalize',
        // marginRight: theme.spacing(4),
        // marginTop: theme.spacing(9),
        // backgroundColor: '#cfe8fd'
    },
    timeFrameIcontDateRangeText: {
        fontFamily: 'Nunito',
        color: '#4aa9fb',
        textTransform: 'capitalize',
        backgroundColor: '#edf6ff'
    },

    timeFrameIconInModal: {

        fontFamily: 'Nunito',
        color: 'grey',
        textTransform: 'capitalize',
        '&:hover': {
            color: '#edcfd8',//#edcfd8, #cc0707
        },
        borderWidth: 0
    },

    /*
        ```````
        SEARCH

        ```````
    */
    search: {

        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        // borderRadius: '5',
        backgroundColor: fade(theme.palette.common.black, 0.1),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.35),
            },

        // backgroundColor: grey,
        //     '&:hover': {
        //         backgroundColor: green,
        //     },
        marginRight: theme.spacing(2),
        // marginLeft: 0,
        width: '50%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
                width: 'auto',
            },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    inputRoot: {
        color: 'inherit',
        fontFamily: 'Nunito'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
        color: 'grey'
        // color: '#cc0707'
    },
    /*
        ````````````````````````````
        PAPER, CIRCULAR PROGRESS BAR

        ````````````````````````````        
    */
    paperList: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        padding: theme.spacing(0.2),
        
    },
    paperListKebakaran: {
        
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        padding: theme.spacing(0.2),
        background: '#edcfd8',
        borderBottom: '0.5em solid #c6332d'
        // borderBottom: '0.5em solid red'    
        // borderBottom:  `${0.5em solid  red[800]}`



    },
    circularProgressBar : {
        
        width: 65, 
        height: 65,
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(2)        
    },
    circularBeside : {
        
        width: 65, 
        height: 65,
        // marginLeft: theme.spacing(2),
        // marginTop: theme.spacing(0.5),
        // marginBottom: theme.spacing(2)
        
    },
    /*
        ````````````
        MODAL CREATE 

        ````````````
    */
    textField: {
        minWidth: 425,
        [theme.breakpoints.only('xs')]: {
                   
            minWidth: 200,
        } 
    },

    /*
        `````````````````````````````
        FOTO REAL USER NAME, USERNAME

        `````````````````````````````
    */
    userRealFoto: {
        // margin: 10,
        width: 48,
        height: 48,
        borderRadius: 24
    },
    imageAvatar: {

        width: 50,
        height: 40
    },
    userRealFotoInCardItemGoal: {
        // margin: 10,
        width: 32,
        height: 32,
        borderRadius: 16
    },


    /*
        ````
        TAB 

        ````
    */
    tabList: {
        borderWidth: 1, 
        paddingLeft: 0, 
        borderColor: '#d9dada', 
        borderStyle: 'solid'
    },
    tabListWithoutBorder: {
        borderWidth: 0, 
        paddingLeft: 0, 
        borderColor: '#d9dada', 
        borderStyle: 'solid'
    },

    /*

        ``````````
        DATE RANGE

        ``````````
    */
    dateRangePerbaruiSampul: {
        fontFamily: 'Nunito',
        color: 'grey',
        textTransform: 'capitalize',
        // marginRight: theme.spacing(4),
        // marginTop: theme.spacing(9),

    },

    /*

        ````````````
        YOU - ACTIVE

        ````````````
    */
    moreDetail: {

        fontFamily: 'Nunito',
        color: 'black', //#4aa9fb
        textTransform: 'capitalize',
        fontSize: 11,
        cursor: 'pointer',
        paddingTop:0,
        paddingBottom:0, 
        paddingRight: 3,
        paddingLeft: 3,
        backgroundColor: 'yellow'

    },

    /*
        ````````````````````````
        MODAL CREATE GOAL WIZARD

        ````````````````````````
    */
   colorIconCancel: {

       color: 'red'

   },
   colorPrimaryAppbar: {

       backgroundColor: 'white'
   },
   moreDetailForMoreVert: {

    fontFamily: 'Nunito',
    // color: 'black', //#4aa9fb
    textTransform: 'capitalize',
    fontSize: 11,
    cursor: 'pointer',
    // paddingTop:0,
    // paddingBottom:0, 
    // paddingRight: 3,
    // paddingLeft: 3,
    // backgroundColor: 'yellow'
    },

    /*
        ````````````````````
        HANDLE TAB ALL & YOU

        ````````````````````
    */

    outlinedTabActive: {

        borderBottom: `3px solid #d64253`,
        borderTop: `1px solid transparent`,
        borderLeft: `1px solid transparent`,
        borderRight: `1px solid transparent`,
        padding: '1px 2px',
        borderRadius: 3

    },

    outlinedTabNotActive: {

        borderBottom: `3px solid transparent`,
        borderTop: `1px solid transparent`,
        borderLeft: `1px solid transparent`,
        borderRight: `1px solid transparent`,
        padding: '1px 2px',
        borderRadius: 3
    },

    table: {
        minWidth: 1020,
  
    },
    tableWrapper: {
        overflowX: 'auto',
        // margin: 12
    },
    noBorderBottom: {
        
        borderBottom: "none"
    },

    /*
        ````````````````````````
        TOOLBAR PAGINATION TABLE

        ````````````````````````
    */

   toolbar: {
       
        backgroundColor: 'transparent'
    },

    linearProgress: {
        height: 2
    },

    /*
        ``````````````````````
        NEW TAB IN STATUS GOAL

        ``````````````````````
    */
   widthTab: {
        minWidth: 72, // a number of your choice
        width: 72, // a number of your choice
        marginLeft: 24,
        marginRight: 24
    }
});

