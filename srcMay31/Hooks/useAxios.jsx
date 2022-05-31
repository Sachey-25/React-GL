import { useState, useEffect } from 'react'

const useAxios = (configobj) => {
    const {
        axiosInstance,
        method,
        url,
        requestConfig = {}
    } = configobj

    // servers =====> 3 types 1. request and response 
    //                        2. error 
    //                        3. load ======> https://www.facebook.com || load || request (user) || response
    
    const [ response , setResponse ] = useState([]);
    const [ error, setError ] = useState('');
    const [ loading, setLaoding ] = useState(true); //200
    const [ reload, setReload ] = useState(0)

    const refetch = () => setReload(prev => prev + 1)

    
    useEffect ( () => {
        const controller = new AbortController();

        const fetchData = async () => {
            try{
                const response = await axiosInstance[method.toLowerCase()](url,{
                    ...requestConfig,
                    signal:controller.signal
                })
                console.log(response);
                setResponse(response.data)
            } catch(error){
                console.log(error.message)
                setError(error.message)
            }finally{
                setLaoding(false)
            }
        } 
        fetchData();

        return () => controller.abort()

    },[reload])

    return [ response, error, loading, refetch ]
}
export default useAxios;