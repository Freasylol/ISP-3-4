import React from "react";
import { AppBar, Container, IconButton, Toolbar, Button, Typography, Box, makeStyles, Dialog, DialogTitle, useTheme, useMediaQuery, Menu, MenuItem, Link} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import RegistrationForm from "./RegistrationForm.jsx";
import LoginForm from "./LoginForm";
import LoginedUserName from "./LoginedUserName.jsx";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundOverlay: 'rgba(0, 0, 0, .3)',
        display: 'block'
    },
}))

const DashBoard = () => {
    const classes = useStyles();

    const preventDefault = event => event.preventDefault();

    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const[openLogInDialog, setOpenLogInDialog] = React.useState(false);

    const[openSignUpDialog, setOpenSignUpDialog] = React.useState(false);

    const[openMenu, setOpenMenu] = React.useState(false);

    const handleOpenMenu = () => setOpenMenu(true);

    const handleCloseMenu = () => setOpenMenu(false);

    const handleOpenLogInDialog = () => setOpenLogInDialog(true);

    const handleCloseLogInDialog = () => setOpenLogInDialog(false);

    const handleOpenSignUpDialog = () => setOpenSignUpDialog(true);
    
    const handleCloseSignUpDialog = () => setOpenSignUpDialog(false);

    return (
    <AppBar position="fixed">
        <Container fixed>
            <div className={classes.overlay} />
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={handleOpenMenu}>
                    <MenuIcon />
                </IconButton>
                {/* <Typography className={classes.title}>Unauthorized</Typography> */}
                <LoginedUserName></LoginedUserName>
                <Box mr={3}>
                    <Button mr={3} color="inherit" variant="outlined" onClick={handleOpenLogInDialog}>Log in</Button>
                    <Dialog  fullScreen={fullScreen} open ={openLogInDialog} onClose={handleCloseLogInDialog} aria-labelledby='loginForm'>
                        <DialogTitle id="logInFormTitle">
                            Log in
                        </DialogTitle>
                        <LoginForm />
                    </Dialog>
                </Box>
                <Box>
                        <Button color="secondary" variant="contained" onClick={handleOpenSignUpDialog}>Sign up</Button>
                    <Dialog open ={openSignUpDialog} onClose={handleCloseSignUpDialog} aria-labelledby='registrationForm'>
                        <DialogTitle id="LogInFormTitle">
                            Sign up
                        </DialogTitle>
                        <RegistrationForm />
                    </Dialog>
                </Box>
               
            </Toolbar>
        </Container>
    </AppBar>
    )
}

export default DashBoard;
