import { combineReducers } from "redux";
import { listCart } from "./listCart";
import { listProduct } from "./listProduct";
export const reducer = combineReducers({ listProduct, listCart });
