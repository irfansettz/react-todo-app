import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetcher  from '../../hooks/fetcher';

const About = () => {
    const {data, fetcher} = useFetcher();

    useEffect(() => {
        fetcher({path:'/users'});
    },[]);
    return (
        <div className="container">
            <h1>About</h1>
            {
                data?.data?.map((item, i) => (
                    <Link to = {`/about/${item.id}`} key = {i}>
                        <div >
                            <p>{item.first_name}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}

export default About;