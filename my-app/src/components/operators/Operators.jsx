import React from 'react';
import classes from './Operators.module.css'
import Item from '../Item/Item';
const Operators = (props) => {
  let listOfItems = props.operators.map(i => <Item id={i.id} name={i.name} photo={i.photoURL} />)
    
    return (
      <div className={classes.item__wrapper}>
        <h3 className={classes.title}>Выбирите вашего оператора</h3>
        <div className={classes.items} >
        {listOfItems}
        </div>
      </div>
    );
        }
export default Operators;
