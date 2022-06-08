import { Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  deviceItem: {
    display: 'flex'
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

const DeviceItem = ({device, types, brands}) => {
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
  return (
    <Grid container className={classes.deviceItem}>
      <Grid className={classes.cardItem}>
        <Card>
          <CardContent className={classes.cardContent}>
            <img src='http://via.placeholder.com/150x150'></img>
            <Typography className={classes.cardTitle}>{deviceType}</Typography>
            <Typography className={classes.cardTitle}>{device.name}</Typography>
            <Typography className={classes.cardTitle}>{`Цена: ${device.price}`}</Typography>
            <Button>Добавить в корзину</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default DeviceItem