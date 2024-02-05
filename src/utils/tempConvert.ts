export const tempConvert = (temp: number): string => {
    const convertedTemp = Number((temp - 273.15).toFixed(1));

    if (Number.isInteger(convertedTemp)) {
        return `${convertedTemp}.0`;
    }

    return convertedTemp.toString();
};
