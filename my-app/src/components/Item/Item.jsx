import React from 'react';
import classes from './Item.module.css'
import { NavLink } from 'react-router-dom';
const Item = (props) => {
  console.log(props);
  return (
    <div className={classes.wrapper}>
      <NavLink className={classes.operator} to={() => '/checklist/' + props.id}>
        <img className={classes.logo} src={props.photo} alt="#" />
        <h3 className={classes.title}>{props.name}</h3>
      </NavLink>
    </div>
  );
}
export default Item;
