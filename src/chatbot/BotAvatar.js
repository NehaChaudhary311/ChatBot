import React from 'react';
// import FaceIcon from '@material-ui/icons/Face';
import { makeStyles } from '@material-ui/core';

const BotAvatar = () => {
  const classes = useStyles();
  return <div className={classes.sampleAvatar}>B</div>;
};

const useStyles = makeStyles(() => ({
  sampleAvatar: {
    width: '35px',
    height: '35px',
    borderRadius: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.9rem',
    backgroundColor: 'purple',
    color: 'white',
  },
}));

export default BotAvatar;
