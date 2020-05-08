import { fade } from '@material-ui/core/styles/colorManipulator';
const rootWraper = {
    display: 'flex',
    width: '100%',
    zIndex: 1,
    position: 'relative'
};
const wrapper = (theme, opacity) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    backgroundColor: fade(theme.palette.background.paper, opacity),
    backgroundRepeat: 'no-repeat',
    color: theme.palette.text.primary,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
});

const styles = theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            overflow: 'hidden'
        },
    },
    userFormWrap: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 720
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(3)
        },
    },
    topBar: {
        display: 'flex',
        justifyContent: 'space-between',
        '& $icon': {
            marginRight: theme.spacing(1)
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            marginBottom: theme.spacing(3),
            '& a': {
                display: 'none'
            }
        }
    },
    icon: {},
    brand: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px 10px',
        position: 'relative',
        fontSize: 22,
        fontWeight: 500,
        color: theme.palette.text.primary,
        textDecoration: 'none',
        '&$outer': {
            color: theme.palette.common.white,
        },
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(2)
        },
        '& img': {
            width: 30,
            marginRight: 10,
        },
    },
    outer: {

    },
    paperWrap: {
        ...wrapper(theme, 1),
    },
    buttonLink: {
        background: 'none',
        padding: 0,
        textTransform: 'none',
        transition: 'color ease 0.3s',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: '0.875rem',
        '&:hover': {
            background: 'none',
            color: theme.palette.secondary.main
        }
    },
    title: {
        color: theme.palette.primary.main,
    },
    formWrap: {
        [theme.breakpoints.up('sm')]: {
            padding: '0 100px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '0 150px'
        },
    },
    fullFormWrap: {
        height: '100%',
        width: '100%'
    },
    fullWrap: {
        ...wrapper(theme, 0.9),
        height: '100%',
        borderRadius: 0,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& $topBar': {
            width: '100%'
        }
    },
    signUpFormWrap: {
        marginTop: `${theme.spacing(2)}px`,
        [theme.breakpoints.up('sm')]: {
            padding: '0 100px',
        },
        [theme.breakpoints.up('md')]: {
            padding: '0 50px',
            display: 'flex',
        },
        '& div': {
            [theme.breakpoints.up('md')]: {
                marginRight: `${theme.spacing(0.5)}px`
            }
        }
    },
    formControl: {
        width: '100%',
        marginBottom: theme.spacing(1)
    },
    optArea: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: `0 ${theme.spacing(0.5)}px`
    },
    buttonLink: {
        background: 'none',
        padding: 0,
        textTransform: 'none',
        transition: 'color ease 0.3s',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: '0.875rem',
        '&:hover': {
            background: 'none',
            color: theme.palette.secondary.main
        }
    },
    navBtn: {
        textDecoration: 'none'
    },

    label: {},
    signupBtn: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: `${theme.spacing(4)}px 0`,
        fontSize: 12,
        '& $label': {
            fontSize: 12,
            '& span': {
                fontSize: 12
            }
        },
        '& button': {
            margin: `0 ${theme.spacing(1)}px`
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            '& button': {
                width: '100%',
                margin: 5
            }
        },
    },
    rootFull: {
        ...rootWraper,
        height: '100%',
    },
    btnArea: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: `${theme.spacing(2)}px 0`,
        fontSize: 12,
        '& $label': {
            fontSize: 12,
            '& span': {
                fontSize: 12
            }
        },
        '& button': {
            margin: `0 ${theme.spacing(1)}px`
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            '& button': {
                width: '100%',
                margin: 5
            }
        },
    },
})

export default styles;