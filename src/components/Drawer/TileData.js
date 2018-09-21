import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'

export const mailFolderListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
         <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItem>
  </div>
);