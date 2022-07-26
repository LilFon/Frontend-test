import { api } from "./api";

export function putValue (payload,id) {

  return api.put(`${id}`,payload)
  .then(res => {return res});
  
};