import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error('not fetch response data')
                }
                return  response.json()
            }).then(data => {
            setData(data)
            setLoad(false)
        }).catch(err => {
            console.log(err.message)
        })
    },[url])

    return {data, load}
}

export default useFetch