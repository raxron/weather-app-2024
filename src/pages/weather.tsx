import Image from "next/image";
import { useRouter } from "next/router";
import GeoCoding from "@/components/GeoCoding";
import CurrentWeather from "@/components/CurrentWeather";
import { useState, useEffect } from "react";
import FiveDayWeather from "@/components/FiveDayWeather";
import ErrorMsg from "@/components/ErrorMsg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Weather() {
    const router = useRouter();
    const { location } = router.query;
    const [lat, setLat] = useState<number>(0);
    const [lon, setLon] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const updateLatLon = (lat: number, lon: number) => {
        setLat(lat);
        setLon(lon);
        setIsLoading(false);
    }

    useEffect(() => {
        if (location) {
            setIsLoading(true);
        }
    }, [location]);

    const capitalize = (str: any) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <main className={`flex flex-col min-h-screen bg-slate-800 items-center justify-between`}>
            <Header/>
            <div
            className="flex flex-col min-h-screen bg-slate-800 items-center 
            justify-center text-white gap-16 mt-8">
            <GeoCoding
                location={location}
                updateLatLon={updateLatLon}
            />
            {isLoading ? (
                <ErrorMsg />
            ) : (
                <>
                    <div className="flex justify-between items-center gap-32 flex-col sm:flex-row">
                        <div className="flex flex-col gap-28">
                            {location && (
                                <div className="flex flex-col items-center">
                                    <h1 className="text-4xl font-bold">{capitalize(location)}</h1>
                                    <p>Weather Forecast</p>
                                </div>

                            )}
                            <Image src="/images/city.png" alt="city draw"
                                width={250} height={200}
                                className="h-auto" />

                        </div>


                        <CurrentWeather lat={lat} lon={lon} />
                    </div>
                    <FiveDayWeather lat={lat} lon={lon} />
                </>
            )}
        </div>
        <Footer/>
        </main>
    );
}
