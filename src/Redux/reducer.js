const SEND_REQUEST = "SEND_REQUEST";
let initialState = {
  operators: [
    {
      id: 1,
      name: "MTC",
      photoURL: `https://cdn.rns.online/imgs/2019/06/24/16/422604/392cf6e9fd55964ef87593ad2970feef68d05fed.png`
    },
    {
      id: 2,
      name: "Beeline",
      photoURL: `https://img2.freepng.ru/20180803/trg/kisspng-%D0%9F%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B-%D0%91%D0%B8%D0%B7-%D0%A2%D0%B5%D0%BB%D0%B5%D0%BA%D0%BE%D0%BC-5b6420666bc143.6107165715332885504414.jpg`
    },
    {
      id: 3,
      name: "Megafone",
      photoURL: `https://technovolga.ru/upload/iblock/ecd/ecdfb7358b8c6d3c2842e6b786cc9c69.png`
    }
  ],
  addNewOperator() {}
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_REQUEST: {
      return Math.random() >= 0.5;
    }
    default:
      return state;
  }
};
export default Reducer;
export const sendRequestCreator = () => ({ type: SEND_REQUEST });
