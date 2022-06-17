import { Button, Container, makeStyles, Grid, } from '@material-ui/core';
import React from 'react';
import CartList from '../components/CartList';
import Payment from '../components/Payment'

const useStyles = makeStyles((theme) => ({
  cart: {
    marginTop: 100
  },
  cartGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));


const Cart = () => {
  const classes = useStyles();
  return (
    <Container className={classes.cartContainer}>
      <Grid container className={classes.cartGrid}>
        <CartList md={12} className={classes.cart}></CartList>
      </Grid>
      <Payment></Payment>
    </Container>
  )
}

export default Cart