import axios from "axios";
import { useEffect, useState } from "react";
import { GeoCodingProps, GeoCodingData } from "../../typing";

const GeoCoding: React.FC<GeoCodingProps> = ({ location, updateLatLon }) => {
    const [data, setData] = useState<GeoCodingData[]>([]);
    const apiKey = process.env.NEXT_PUBLIC_API;

    useEffect(() => {
        const getData = async () => {
            try {
                const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`;
                const response = await axios.get(url);
                setData(response.data);
                const [results] = response.data;
                updateLatLon(results.lat, results.lon);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getData();
    }, [location]);

    return (
        <></>
    );
};

export default GeoCoding;