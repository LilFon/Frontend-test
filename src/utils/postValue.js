import { api } from "./api";

export function postValue (payload) {

    return api.post('',payload)
    .then(res => {return res});
    
  };