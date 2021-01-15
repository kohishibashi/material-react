import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}))

function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>ヘッダー</Typography>
                <AccountCircleOutlinedIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header
