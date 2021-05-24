const getRobotRoutes = () =>
    Promise.resolve([
        { startingPosition: '11 E', instructions: 'RFRFRFRF' },
        { startingPosition: '32 N', instructions: 'FRRFLLFFRRFLL' },
        { startingPosition: '03 W', instructions: 'LLFFFLFLFL' },
    ]);

export default getRobotRoutes;
