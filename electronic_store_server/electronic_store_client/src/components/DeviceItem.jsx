import { Card, CardContent, Grid, makeStyles, requirePropFactory, Typography } from "@material-ui/core";
import Button from '@mui/material/Button';
import appleIphone13  from '../img/apple-iphone13.jpg'


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

  const classes = useStyles();
  let deviceType = '';
  let deviceBrand = '';
  for (let type of types) {
    if (device.TypeId === type.id) {
      deviceType = type.name;
    }
  }

  for (let brand of brands) {
    if (device.BrandId === brand.id) {
      deviceBrand = brand.name;
    }
  }

  const imgPath = '../img/iphone13.jpg'

  return (
    <Grid container className={classes.deviceItem}>
      <Grid className={classes.cardItem}>
        <Card>
          <CardContent className={classes.cardContent}>
            {/* <img src='http://via.placeholder.com/150x150' height="150" width="150"  alt="device img"></img> */}
            <img src={appleIphone13} height="200" width="150"  alt="device img"></img>
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