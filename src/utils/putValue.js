import { api } from "./api";

export function putValue (payload) {

  return api.put('',payload)
  .then(res => {return res});
  
};