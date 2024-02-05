import axios from "axios";
import { useEffect, useState } from "react";
import { GeoCodingData,GeoCodingProps } from "../../typing";

export default function GeoCoding({ location, updateLatLon }: GeoCodingProps) {
    const [data, setData] = useState<GeoCodingData[]>([]);

    const apiKey = process.env.NEXT_PUBLIC_API;


    useEffect(() => {
        const getData = async () => {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`;
            const response = await axios.get(url);
            setData(response.data);
            const [results] = response.data;
            updateLatLon(results.lat, results.lon);
            console.log(response.data)
        }
        getData()
            .catch(console.error);
    }, [])



}

