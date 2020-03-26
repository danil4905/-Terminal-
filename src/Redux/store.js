import { createStore } from "redux";
import Reducer from "./reducer";

let store = createStore(Reducer);
window.store = store;
export default store;