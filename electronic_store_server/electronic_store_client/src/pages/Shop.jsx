import FilterBar from '../components/FilterBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList'
import { Container, Grid, makeStyles } from '@material-ui/core';
import CartButton from "../components/CartButton"

const useStyles = makeStyles((theme) => ({
  label: {
    paddingTop: 100,
  },
  brandsBox: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: 1000
  }
}))

const Shop = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.label}>
        <Grid item md={3}>
          <FilterBar></FilterBar>
          <CartButton></CartButton>
        </Grid>
        <Grid item md={9} className={classes.brandsBox}>
          <BrandBar></BrandBar>
          <DeviceList></DeviceList>
         
        </Grid>
      </Grid>
      
    </Container> 
  )
}

export default Shop;