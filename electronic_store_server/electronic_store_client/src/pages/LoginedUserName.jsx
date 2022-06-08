import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Context } from "../index";
import { Typography, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
}))

const LoginedUserName = observer(() => {
  const {user} = useContext(Context)
  const classes = useStyles();
  let userName = 'Unlogined'
  if (user.loginedUser) {
    userName = user.loginedUser.user
  }
  return (
  <Typography className={classes.title}>{userName}</Typography>
  )
}) 

export default LoginedUserName