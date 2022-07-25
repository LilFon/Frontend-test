import { api } from "./api";

export function getValue (payload) {

    return api()
    .then(res => res.data)
    .then(response => {
        
       return response.data.sort( (a,b)=> {
            if (new Date(a.date) > new Date(b.date) ) return -1;
            if (new Date(a.date) < new Date(b.date)) return 1;
            return 0;
        },[]) });
    
  };