const weatherImage = (weatherID:number) =>{
    if (weatherID === 800) {
        return 'sunny.png';
    } else if (weatherID > 800 && weatherID <= 804){
        return 'cloud.png'
    } else if (weatherID >= 700 && weatherID <= 781){
        return 'wind.png'
    } else if (weatherID >= 600 && weatherID <= 622){
        return 'snow.png';
    } else if (weatherID >= 500 && weatherID <= 531){
        return 'rain.png'
    } else return 'sunny.png'
}

export default weatherImage