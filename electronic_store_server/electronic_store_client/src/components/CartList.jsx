import { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import CartItem from './CartItem'

const useStyles = makeStyles((theme) => ({
  deviceList: {
    paddingTop: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  deviceWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 100
  }
}));

const CartList = observer(() => {
  const classes = useStyles();
  const {device, basket} = useContext(Context)
  basket.setBasketItems([
    {id: 5, name: 'IPhone 13', price: 1000, rating: 5, img: 'http://via.placeholder.com/150x150', TypeId: 35, BrandId: 5 },
    {id: 5, name: 'IPhone 13 pro', price: 1500, rating: 5, img: 'http://via.placeholder.com/150x150', TypeId: 35, BrandId: 5 },
    {id: 5, name: 'Samsung galaxy', price: 800, rating: 5, img: 'http://via.placeholder.com/150x150', TypeId: 35, BrandId: 15 },
    {id: 5, name: 'DeepCool gammax 400', price: 800, rating: 5, img: 'http://via.placeholder.com/150x150', TypeId: 25, BrandId: 35 },
  ])
  let basketItems = basket.basketItems
  

  return (
    <div className={classes.deviceWrapper}>
      {basketItems.map((deviceEl) => 
        <CartItem device={deviceEl} types={device.types} brands={device.brands} deviceStore={device} basket={basket}></CartItem> 
      )}
    </div>
  )
})

export default CartList