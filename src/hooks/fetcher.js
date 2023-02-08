import axios from "axios";
const { useState } = require("react")

const useFetcher =  () =>  {
    const [fetcher, fetcherSet] = useState();

    const getFetcher = async (config) => {
        try {
            const {data} = await axios({
                method: 'GET',
                url: config.url,
                responseType: 'json',
            });
            fetcherSet(data);
            setLoad(false);
        } catch (error) {
            console.log(error);
        }
    }

    const [load, setLoad] = useState(true);

    return  {fetcher, load, getFetcher};
}

export default useFetcher;