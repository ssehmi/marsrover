const getPointAndOrientation = (startPostition: string) => {
    const [x, y, , orientation] = startPostition.split('');
    return [x, y, orientation];
};

export default getPointAndOrientation;
