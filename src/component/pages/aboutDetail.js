import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetcher from "../../hooks/fetcher";

const AboutDetail = () => {
    const {data, fetcher} = useFetcher();
    const params = useParams();
    
    useEffect(() => {
        fetcher({path: `/users/${params.id}`});
    },[data, fetcher, params.id]);
    
    return (

        <div className="container">
            <h1>Detail</h1>
            <div style={{ textAlign:"center" }}>
                <p> {data?.data?.first_name} {data?.data?.last_name}</p>
                <p>{data?.data?.email}</p>
                <img alt="profile" src={data?.data?.avatar} style={{ width:"100px", height:"100px" }}></img>
            </div>
        </div>
    );
}

export default AboutDetail;