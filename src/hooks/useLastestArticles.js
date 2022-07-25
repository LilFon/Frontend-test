import { useEffect, useState} from 'react';
import { api } from '../utils/api';


  export function useLastestArticles () {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(undefined);
  
    useEffect(() => {
      setLoading(true);
        api()
        .then(res => res.data)
        .then(response => {
            setResults(
            response.data.sort( (a,b)=> {
                if (new Date(a.date) > new Date(b.date) ) return -1;
                if (new Date(a.date) < new Date(b.date)) return 1;
                return 0;
            },[]).slice(0,4));
            setLoading(false);
        }).catch (error => console.log("ha ocurrido un error:::"+error) )  
       
    }, []);
  
    return { results, loading }
  };