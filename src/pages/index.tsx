import Image from "next/image";
import CurrentWeather from "../components/CurrentWeather";
import GeoCoding from "@/components/GeoCoding";
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [location, setLocation] = useState<string>("");
  const router = useRouter();

  const submitLocation = () => {
    console.log(location);
    if (location !== "") {
      router.push({
        pathname: '/weather',
        query: {
          location: location,
        },
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitLocation();
    }
  }


  return (
    <main className={`flex flex-col min-h-screen bg-slate-800 items-center justify-between`}>
      <Header/>
      <div className={`flex items-center justify-center gap-4 w-1/2  flex-col  min-w-60 sm:flex-row`}>
        <Input
          label="Location"
          radius="full"
          variant="flat"
          size="lg"
          type="text"
          id="location"
          placeholder="Which city are you seeking?"
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={handleKeyDown}
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "placeholder:text-white/50",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-blue-200/50",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
            ],
          }}
        ></Input>
        <Button
        type="submit"
          radius="full"
          onClick={submitLocation}
          className="bg-gradient-to-tr from-blue-500 to-emerald-500 text-white shadow-lg"
        >
          Search
        </Button>
      </div>
      <Footer/>
    </main>
  );
}
