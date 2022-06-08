import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { CardContent, makeStyles, Box, Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({

  label: {
    paddingTop: 100,
  },
  box: {
    cursor: 'pointer'
  },
  cardWrapper: {
    display: 'flex'
  },
}))

const BrandBar = observer(() => {
  const {device} = useContext(Context)
  const classes = useStyles();
  return (
    <div className={classes.cardWrapper}>
      {device.brands.map((brand) =>
        <Box>
          <Button key={brand.id} className={classes.box} onClick={() => device.setSelectedBrand(brand)} color={brand.id === device.selectedBrand.id ? 'primary' : 'secondary'}>
            <CardContent>
              {brand.name}
            </CardContent>
          </Button>
        </Box>
      )}
    </div>
  );
});

export default BrandBar;