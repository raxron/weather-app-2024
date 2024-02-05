import axios from "axios";
import { useEffect, useState } from "react";
import { FiveDayData, GeoCodingData, ListItem } from "../../typing";
import { tempConvert } from "@/utils/tempConvert";
import dateConvert from "@/utils/dateConverts";
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import weatherImage from "@/utils/weatherCase";

export default function FiveDayWeather({ lat, lon }: GeoCodingData) {
    const [listData, setListData] = useState<ListItem[]>([]);
    const apiKey = process.env.NEXT_PUBLIC_API;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get<FiveDayData>(url);

                console.log(response.data);

                const filteredList = response.data.list.filter((item, index, array) => {

                    const currentDate = dateConvert(item.dt);
                    const firstDate = dateConvert(array[0].dt);
                    const nextDate = index < array.length - 1 ? dateConvert(array[index + 1].dt) : null;
                    return currentDate !== nextDate && currentDate !== firstDate;
                });

                setListData(filteredList);
            } catch (error) {
                console.error(error);
            }
        };

        getData();
    }, [url]);


    return (
        <div>
            <h1 className="text-2xl font-bold pb-8">5 Day Forecast</h1>
            <div className="flex gap-4 flex-col md:flex-row">

                {listData.map((list, i) => (
                    <Card
                        className="py-4 border-none bg-blue-300/20 items-center "
                        shadow="sm"
                        key={i}
                    >
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <h3 className=" uppercase text-sm text-sky-200">{list && dateConvert(list.dt)}</h3>
                            {list && list.weather && list.weather.map((d, index) => (
                                <div key={index}>
                                    <p className="text-sm  text-sky-200">{d.main}</p>
                                </div>
                            ))}
                        </CardHeader>
                        <CardBody className="overflow-visible py-2 pb-16">
                            {list && list.weather && list.weather.map((d, index) => (

                                <Image
                                    key={index}
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    src={`/images/${weatherImage(d.id)}`}
                                    width={150}
                                />

                            ))}

                        </CardBody>
                        <CardFooter className="flex-col  bg-white/20 border-white/20 border-1 overflow-hidden py-2 absolute rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-tiny  text-white/80"> Temperature: <strong>{tempConvert(list.main.temp)} °C</strong> </p>
                            <p className="text-tiny text-white/80">Wind Speed: <strong>{list.wind.speed} m/s</strong></p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>

    );
}
