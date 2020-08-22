import React,{useState,useEffect} from 'react';
 
 const CONTEXT_KEY = "3cdae6ae0939cd4d7"
 
 const API_KEY ="AIzaSyC_i23Vpby-gCFc-_igHjJxybLm0-nieIc"
 
 const useGoogleSearch=(term)=>{
      const [data, setData] = useState(null);

      useEffect(()=>{
            const fetchData= async()=>{
                fetch(
                        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=3cdae6ae0939cd4d7&q=${term}`

                )
                .then(response=>response.json())
                .then(result=>{
                        setData(result)
                        console.log(result);
                    })
            }        
            fetchData();

      },[term]);
        return{data}
  };

export default useGoogleSearch;
