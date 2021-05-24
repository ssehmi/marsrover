import React, { useEffect, useState } from 'react';
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
    const [robotRoutes, setRobotRoutes] = useState<
        {
            startingPosition: string;
            instructions: string;
            destination?: string;
        }[]
    >([]);
    const [nextPoint, setNextPoint] = useState<IPoint>({ x: 0, y: 0 });
    const [results, setResults] = useState<ILocation[]>([]);

    useEffect(() => {
        (async () => {
            const config = await getWorldConfig();
            setWorldConfig(config);
        })();
    }, []);

    const loadRobots = async () => {
        const routes = await getRobotRoutes();
        setRobotRoutes(routes);
    };

    const playRoutes = () => {
        let tally: ILocation[] = [];
        const mapBounds = {
            minX: 0,
            minY: 0,
            maxX: worldConfig.x,
            maxY: worldConfig.y,
        };
        robotRoutes.forEach((route, routeIndex) => {
            const path = buildPath(
                route.startingPosition,
                route.instructions.split('') as AvailableInstructionsType[],
                mapBounds
            );
            path.forEach((segment) => {
                setNextPoint({ x: segment.position.x, y: segment.position.y });
            });
            tally.push(path.pop() as ILocation);
        });

        //@ts-ignore
        setResults(tally);
    };

    return (
        <div className="App">
            <Mars maxSize={worldConfig}>
                {robotRoutes.length > 0 && <Robot point={nextPoint}></Robot>}
            </Mars>
            <button onClick={loadRobots}>Load robots</button>
            <button onClick={playRoutes}>Play routes</button>
            <div>
                <ul>
                    {results.map((route) => {
                        return (
                            <li key={JSON.stringify(route)}>
                                <div>{JSON.stringify(route)}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default App;
