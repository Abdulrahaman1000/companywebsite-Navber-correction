import {useState, useEffect} from 'react';
const useFetch = (url) =>{
    const [dataFiles, setDataFiles] = useState(null);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const abortCont = new AbortController();
        fetch('http://localhost:5000/dataFiles/')
        fetch('url')
        .then(res => {
          if(!res.ok){
            throw Error('could not fetch data from database');
          }
          return res.json();
        })
        .then(data => {
          setDataFiles(data);
        })
        .catch(err =>{
        setError(err.message);
      }, 1000);

      return () => abortCont.abort();
      },[url]);

      return{dataFiles, error}
}
export default useFetch