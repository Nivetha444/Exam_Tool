import bg from './../../assets/bg.svg';

const appFrame = {
    display: 'flex',
    width: '100%',
    minHeight: '100%',
    zIndex: 1,
    justifyContent: 'center',

};
const styles = theme => ({
    bg: {
        background: `url(${bg}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        width: '100%',
        height: '100%',
        position: 'fixed'
    },
    appFrameOuter: {
        color: theme.palette.text.primary,
        ...appFrame,
    },
    outerContent: {
        width: '100%',
        backgroundSize: 'cover',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default styles;