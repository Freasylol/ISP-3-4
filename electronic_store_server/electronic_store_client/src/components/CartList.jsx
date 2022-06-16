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
  let filterArr = device.devices;
  if (device.selectedBrand.id && device.selectedType.id) {
    filterArr = device.devices.filter((deviceEl) => deviceEl.BrandId === device.selectedBrand.id)
    filterArr = filterArr.filter((deviceEl) => deviceEl.TypeId === device.selectedType.id)
  } else if (device.selectedType.id) {
    filterArr = device.devices.filter((deviceEl) => deviceEl.TypeId === device.selectedType.id)
  } else if (device.selectedBrand.id) {
    filterArr = device.devices.filter((deviceEl) => deviceEl.BrandId === device.selectedBrand.id)
  } 
  
  return (
    <div className={classes.deviceWrapper}>
      {filterArr.map((deviceEl) => 
        <CartItem device={deviceEl} types={device.types} brands={device.brands} deviceStore={device} basket={basket}></CartItem> 
      )}
    </div>
  )
})

export default CartList