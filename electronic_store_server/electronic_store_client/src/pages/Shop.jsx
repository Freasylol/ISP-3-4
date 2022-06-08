import FilterBar from '../components/FilterBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList'
import { Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  label: {
    paddingTop: 100,
  },
}))

const Shop = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.label}>
        <Grid item md={3}>
          <FilterBar></FilterBar>
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