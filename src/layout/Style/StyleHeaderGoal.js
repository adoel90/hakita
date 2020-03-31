import { fade } from '@material-ui/core/styles';

const drawerWidth = 303;

export const styles = theme => ({

    root: {

        display: 'flex',

    },
    appBar: {

        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    appBarShift: {

        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {

        marginRight: 36,
        // marginRight: 24,
    },
    hide: {

        display: 'none',
    },
    
    /* DRAWER */
    drawerRoot: {
        width: '100%',
        // maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: 'transperent',
        color: 'white'
    },
    drawer: {

        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    drawerOpen: {

        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {

        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),

        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,

    },
    content: {

        flexGrow: 1,
        padding: theme.spacing(3),
    },

    /*
        ````````````````
        ICON POJOK KANAN

        ````````````````
    */
    accountCircle: {

        color: 'grey',

    },
    menuIcon: {

        color: 'grey'
    },
    mail: {

        color: 'grey'
    },

    notifIcon: {

        color: 'grey'
    },

    /*
        ```````
        SEARCH

        ```````
    */
    search: {

        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.1),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.35),
            },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
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
    },
    inputRoot: {

        color: 'inherit',
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
        ```````````````````````
        NAMA PERUSAHAAN & FOTO 

        ```````````````````````
    */
    namaPerusahaan : {

        color: 'white', 
        fontFamily: 'Nunito',
        fontWeight: 'bold'

    },
    bigRealFoto: {
        // margin: 10,
        width: 24,
        height: 24,
        borderRadius: 20
    },

    superBigRealFoto: {
        // margin: 10,
        width: 48,
        height: 48,
        borderRadius: 24
    },

    bigRealFotoDrawer: {

        width: 40,
        height: 40,
        borderRadius: 20,
        // paddingLeft: 0
    },
    textHeaderGoal: {

        color: 'black',
        fontFamily: 'Nunito'
    },

    /*
        `````````
        ICON MENU

        `````````
    */
    iconMenuOffCanvass:{
  
        width: 30,
        height: 30,
        cursor: 'pointer',
        // marginTop: 24
    },
    title: {

        fontFamily: 'Nunito'
    }
});