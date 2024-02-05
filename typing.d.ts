export interface CurrentWeatherData {
    weather: {
        main: string;
        description: string;
        id:number;
    }[];
    wind: {
        speed: number;
    };
    main: {
        temp: number;
    };
    dt: number;
}

export interface GeoCodingData {
    lat: number;
    lon: number;
}

export interface GeoCodingProps {
    location?: string ;
    updateLatLon: (lat: number, lon: number) => void;
}

export interface ListItem {
    item: any;
    index: number;
    array: any[];
    dt:number;
    main:{
        temp:number;
    }
    weather:{
        main:string;
        id:number;
    }[];
    wind:{
        speed:number
    }
}

export interface FiveDayData {
    list: ListItem[];
}