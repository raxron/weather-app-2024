const dateConvert = (dateId: number): string => {
    const event = new Date(dateId * 1000);
    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    return event.toLocaleDateString(undefined, options);
};

export default dateConvert