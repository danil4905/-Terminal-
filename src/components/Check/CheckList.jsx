import React from 'react';
import classes from './CheckList.module.css';
import PhoneInput from 'react-phone-input-2'

let onSendRequestClick = () => {
  let a = Math.random() >= 0.5;
  if (a === false) { return alert("Ошибка , попробуйте еще раз") }
  else { return alert("Запрос успешно отправлен!") }
}

const CheckList = (props) => {
  let currentID = props.match.params.operatorId;
  currentID = Number.parseInt(currentID) - 1;
  let currentName = props.operators[currentID].name;
  return (
    <div className={classes.wrapper}>
      <h3>{currentName}</h3> <br />
      <form className={classes.form}>
        <label className={classes.tel__wrapper}>
          Введите номер телефона <br />
          <div className={classes.tel}>
            <PhoneInput
              country={"ru"}
              enableAreaCodes={true}
              disableCountryCode={false}
              disableDropdown={true}
              countryCodeEditable={false}
              required
            />
          </div>
        </label>
        <label className={classes.sum__wrapper}>
          <br />
            Введите сумму (100-1000 руб)
            <br />
          <div className={classes}>
          </div>
          <input
            type="number"
            className={classes.sum}
            placeholder="Сумма"
            required
            min="100"
            max="1000"
          />
        </label>
        <br />
        </form>
        <button onClick={onSendRequestClick} className={classes.btn}>
          Оплатить
          </button>
    </div>
  );
}
export default CheckList;
