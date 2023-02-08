import axios from "axios";
import { useState } from "react"

const useFetcher = () => {
    const [data, dataSet] = useState([]);
    
    const fetcher = async (config) => {
        try {
            const {data: dataFromApi} = await axios({
                method: config?.method || 'GET',
                url: `https://reqres.in/api${config?.path}`,
                responseType: 'json',
            });
            dataSet(dataFromApi);
        } catch (error) {
            console.log(error);
        }
    }

    return {data, fetcher};
}

export default useFetcher;