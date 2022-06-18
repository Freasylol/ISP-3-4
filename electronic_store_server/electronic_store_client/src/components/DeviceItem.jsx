import { Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import Button from '@mui/material/Button';
import appleIphone13  from '../img/apple-iphone13.jpg';
import appleIphone13ProMax from '../img/apple-iphone13promax.jpg';
import amdRyzen5600x from '../img/amd-ryzen5600x.jpg';


const useStyles = makeStyles((theme) => ({
  deviceItem: {
    display: 'flex',
    width: '33%',
    marginBottom: 30
  },
  cardItem: {
    display: 'flex',
    cursor: 'pointer'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardTitle: {
    paddingTop: 10
  }
}));


const DeviceItem = ({device, types, brands, deviceStore, basket}) => {
  const addToCart = async () => {
      if (!basket.isBasketCreated) {
        basket.setUserId(5);
        await basket.createBasket();
        basket.setDeviceId(device.id);
        await basket.createBasketItem();
      } else {
        console.log(basket.basket.id)
        basket.setDeviceId(device.id);
        await basket.createBasketItem();
      }
     
  }

  const setImg = (img) => {
    switch(img) {
      case 'apple-iphone13.jpg':
        return appleIphone13;
        break;
      case 'apple-iphone13promax.jpg':
        return appleIphone13ProMax;
        break;
      case 'amd-ryzen5600x.jpg':
        return amdRyzen5600x;
        break;
    }
  }

  const classes = useStyles();
  let deviceType = '';
  let deviceBrand = '';
  for (let type of types) {
    if (device.typeId === type.id) {
      deviceType = type.name;
    }
  }

  for (let brand of brands) {
    if (device.brandId === brand.id) {
      deviceBrand = brand.name;
    }
  }

  return (
    <Grid container className={classes.deviceItem}>
      <Grid className={classes.cardItem}>
        <Card>
          <CardContent className={classes.cardContent}>
            {/* <img src='http://via.placeholder.com/150x150' height="150" width="150"  alt="device img"></img> */}
            <img src={setImg(device.img)} height="200" width="150"  alt="device img"></img>
            <Typography className={classes.cardTitle}>{deviceType}</Typography>
            <Typography className={classes.cardTitle}>{deviceBrand}</Typography>
            <Typography className={classes.cardTitle}>{device.name}</Typography>
            <Typography className={classes.cardTitle}>{`Price: ${device.price}`}</Typography>
            <Button onClick={addToCart}>Add to cart</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default DeviceItem