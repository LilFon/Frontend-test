import { api } from "./api";

export function putValue (id,payload) {

  return api.put(`${id}`,payload)
  .then(res => {return res});
  
};