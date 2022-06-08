import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import ListItemButton from '@mui/material/ListItemButton';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  label: {
    paddingTop: 100,
  }
}))

const FilterBar = observer(() => {
  const {device} = useContext(Context)
  const classes = useStyles();
  return (
    <div>
      {device.types.map((type) =>
          <ListItemButton onClick={() => device.setSelectedType(type)} selected={type.id === device.selectedType.id}
            key={type.id}>
            {type.name}
          </ListItemButton>
      )}
    </div>
  );
});

export default FilterBar;