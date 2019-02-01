import { createStore } from "redux";
import reducer from "../reducers/contacts";

const store = createStore(reducer);

export default store;
