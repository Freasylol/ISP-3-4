import { useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Context } from '../index'
import { observer } from 'mobx-react-lite'

const useStyles = makeStyles((theme) => ({
  
  
}));

const CartList = observer(() => {
  const classes = useStyles();
  const {device, basket} = useContext(Context)
  let basketItems = basket.basketItems;
  let sum = 0;
  if (basketItems) {
    for (let basketItem of basketItems) {
      sum += basketItem.price;
    }
  } else {
    sum = 0
  }
  
  return (
    <Typography>
      {`Paylable amount is ${sum}`}
    </Typography>
  )
})

export default CartList