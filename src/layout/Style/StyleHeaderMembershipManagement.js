import { cyan, lightBlue, lightGreen, grey, red, green } from "@material-ui/core/colors";
import { fade } from '@material-ui/core/styles';


export  const styles = theme => ({

    list: {
            
        width: 250,
    },

    fullList: {
        
        width: 'auto',
    },

    menuButton: {

        marginLeft: -12,
        marginRight: 20,
    },

    search: {

        position: 'relative',
        borderRadius: 3,
        // borderRadius: 40,

        backgroundColor: grey,
        marginRight: 1 * 2,
        marginLeft: 0,
        width: '100%',
    },
    searchIcon:{

        color:'grey',
    },  
    sectionDesktop: {

        display: 'flex',
    },
    root: {
        
        flexGrow: 1,
    },
    grow: {

        flexGrow: 1,
    },
    menuButton: {
        
        marginLeft: -12,
        marginRight: 20,
    },
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
    list: {
        backgroundColor: 'red'

    },
    listDrawer: {
        backgroundColor: 'red'
    },

    /* DRAWER */
    drawerRoot: {
        width: '100%',
        maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: 'transperent',
        color: '#707070'
    },
    nested: {
        // paddingLeft: theme.spacing.unit * 4,
        paddingLeft: 7
    },

    icon: {
        // margin: theme.spacing.unit * 2,
        margin: 1 * 2
    },
    iconHover: {
        // margin: theme.spacing.unit * 2,
        margin: 1 * 2,
        '&:hover': {
        color: red[800],
        },
    },

    imageSvg: {
        width: 27,
        height: 27,
        marginLeft: 8
    },
    iconMenuOffCanvass:{
        width: 27,
        height: 27,
        
    },
    buttonIconMenuOffCanvass: {
        
        padding: 0, 
        marginLeft: 127, 
        marginBottom: 12 
    },
    iconSmall: {
        fontSize: 20,
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    buttonBackDashboard: {  
        
        marginLeft:theme.spacing(1),
        marginTop:theme.spacing(2),
        marginBottom:theme.spacing(3),
        borderRadius: 5,
        fontFamily:'Nunito',
        textTransform : 'capitalize',
        color: 'grey',
    },
    iconArrowLeft: {

        marginRight: theme.spacing(1)
    },
    buttonMenuBesiArrowLeft: {

        width: '27px',
        height: '27px',
        borderRadius: 2,
        background: 'linear-gradient(1deg, #c1272d, #c1272d 30%, #d1354a 67%, #f28181)',
        border:0,
        padding: 0
    },
    nav :{
        color: '#707070', 
        fontFamily: 'Nunito' 
    },
    navActive: {
        color: '#c1272d',
        fontFamily: 'Nunito' 
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
        // color: '#cc0707'
        color: 'grey'
    },

        /*
        ```````````````````````
        NAMA PERUSAHAAN & FOTO 

        ```````````````````````
    */
    namaPerusahaan : {

        color: 'grey', 
        fontFamily: 'Nunito',
        fontWeight: 'bold'

    },
    bigRealFoto: {
        // margin: 10,
        width: 24,
        height: 24,
        borderRadius: 20
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
    title : {
        fontFamily: 'Nunito'

    }
});