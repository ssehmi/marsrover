import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Mars from './components/Mars';
import Robot from './components/Robot';
import { ILocation, IPoint } from './robotMoves/moveTypes';
import getRobotRoutes from './services/getRobotRoutes';
import getWorldConfig from './services/getWorldConfig';
import buildPath from './utils/buildPath';
import { AvailableInstructionsType } from './utils/getMoveFromInstruction';

const App = () => {
    const [worldConfig, setWorldConfig] = useState<IPoint>({ x: 50, y: 50 });
    const [robotRoutes, setRobotRoutes] = useState<ILocation[][]>([]);
    const [nextPoint, setNextPoint] = useState({});
    const timerRef = useRef();

    useEffect(() => {
        (async () => {
            const config = await getWorldConfig();
            setWorldConfig(config);
        })();
    }, []);

    useEffect(() => {
        return () => timerRef.current && clearTimeout(timerRef.current);
    }, []);

    const buildInitialNextPoints = (routes: ILocation[][]) => {
        const initialValue: { [key: number]: IPoint } = {};
        return routes.reduce((acc, curr, index) => {
            acc[index] = { x: curr[0].position.x, y: curr[0].position.y };
            return acc;
        }, initialValue);
    };
    const loadRobots = async () => {
        const routes = await getRobotRoutes();
        const mapBounds = {
            minX: 0,
            minY: 0,
            maxX: worldConfig.x,
            maxY: worldConfig.y,
        };
        const robotRoutes = routes.map(({ startingPosition, instructions }) => {
            const path = buildPath(
                startingPosition,
                instructions.split('') as AvailableInstructionsType[],
                mapBounds
            );
            return path;
        });
        console.log('robotroutes', robotRoutes);
        setRobotRoutes(robotRoutes);
        const nextPoints = buildInitialNextPoints(robotRoutes);
        setNextPoint(nextPoints);
    };

    const playRoutes = () => {
        robotRoutes.forEach((route, routeIndex) => {
            route.forEach((routeSegment) => {
                // @ts-ignore
                timerRef.current = setTimeout(() => {
                    setNextPoint((prev) => {
                        return {
                            ...prev,
                            [routeIndex]: {
                                // @ts-ignore
                                ...prev[routeIndex],
                                x: routeSegment.position.x,
                                y: routeSegment.position.y,
                            },
                        };
                    });
                }, 1000);
            });
        });
    };

    return (
        <div className="App">
            <Mars maxSize={worldConfig}>
                {robotRoutes.map((r, i) => {
                    //@ts-ignore
                    console.log('.....', nextPoint[i]);
                    return (
                        // @ts-ignore
                        <Robot point={nextPoint[i] ?? 0} />
                    );
                })}
                {/* {robotRoutes.length > 0 && <Robot point={nextPoint}></Robot>} */}
            </Mars>
            <button onClick={loadRobots}>Load robots</button>
            <button onClick={playRoutes}>Play routes</button>
            <div>
                <ul>
                    {robotRoutes.map((route) => {
                        return (
                            <li key={JSON.stringify(route[route.length - 1])}>
                                <div>
                                    {JSON.stringify(route[route.length - 1])}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default App;
