import { transform } from 'typescript';
import { IPoint } from '../../robotMoves/moveTypes';

interface IComponentProps {
    point: IPoint;
}
const Robot = ({ point: { x, y } }: IComponentProps) => {
    const nextX = `${x * 100}px`;
    const nextY = `${y * 100}px`;
    return (
        <div
            style={{
                position: 'absolute',
                left: nextX,
                bottom: nextY,
                width: '10px',
                height: '10px',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: 'translate(-5px, 5px)',
                transition: 'all 1s ease-out',
            }}
        />
    );
};

export default Robot;
