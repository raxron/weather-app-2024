import axios from "axios";
import { useEffect, useState } from "react";
import { CurrentWeatherData, GeoCodingData } from "../../typing";
import { tempConvert } from "@/utils/tempConvert";
import dateConvert from "@/utils/dateConverts";
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import weatherImage from "@/utils/weatherCase";

export default function CurrentWeather({ lat, lon }: GeoCodingData) {
    const [data, setData] = useState<CurrentWeatherData | null>(null);
    const apiKey = process.env.NEXT_PUBLIC_API;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get<CurrentWeatherData>(url);
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getData();
    }, [url]);

    return (
        <>
            <Card
                className="py-4 border-none bg-blue-300/40"
                shadow="sm"
            >
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">

                    <h3 className="font-bold uppercase">{data && `${dateConvert(data.dt)}`}</h3>
                    {data && data.weather && data.weather.map((d, index) => (
                        <div key={index}>
                            <p className="text-sm font-bold">{d.main}</p>
                        </div>
                    ))}

                </CardHeader>
                <CardBody className="overflow-visible py-2 pb-12">
                    {data && data.weather && data.weather.map((d, index) => (
                      
                            <Image
                                key={index}
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src={`/images/${weatherImage(d.id)}`}
                                width={270}
                            />
                  
                    ))}

                </CardBody>
                <CardFooter className="justify-between bg-white/20 border-white/20 border-1 overflow-hidden py-2 absolute rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-sm font-bold text-white/80">{data && `Temperature: ${tempConvert(data.main.temp)} °C`}</p>
                    <p className="text-sm font-bold text-white/80">{data && `Wind Speed: ${data.wind.speed}`}</p>
                </CardFooter>
            </Card>

        </>
    );
}
