import { useEffect, useState} from 'react';
import { getValue } from '../utils/getValue';

  export function useLastestArticles () {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(undefined);
  
    useEffect(() => {
      setLoading(true);
        getValue()
        .then(response => {
            setResults( response.slice(0,4));
            setLoading(false);
        }).catch (error => console.log("ha ocurrido un error:::"+error) )  
       
    }, []);
  
    return { results, loading }
  };