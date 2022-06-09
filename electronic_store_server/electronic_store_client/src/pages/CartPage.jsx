import { Button } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core';
import CartList from '../components/CartList';

const useStyles = makeStyles((theme) => ({
  cart: {
    marginTop: 100
  }
}));


const Cart = () => {
  const classes = useStyles();
  return (
    <CartList className={classes.cart}></CartList>
  )
}

export default Cart