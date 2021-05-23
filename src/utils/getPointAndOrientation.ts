const getPointAndOrientation = (startPostition: string) => {
    const [x, y, , orientation] = startPostition.split('');
    return [parseInt(x, 10), parseInt(y, 10), orientation];
};

export default getPointAndOrientation;
