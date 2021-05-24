import { relative } from 'path';
import React from 'react';
import { IPoint } from '../../robotMoves/moveTypes';

interface IComponentProps {
    maxSize: IPoint;
    children: React.ReactNode;
}
const Mars = ({ maxSize, children }: IComponentProps) => {
    const worldWidth = `${maxSize.x * 100}px`;
    const worldHeight = `${maxSize.y * 100}px`;
    return (
        <div
            style={{
                width: worldWidth,
                height: worldHeight,
                position: 'relative',
                border: '1px solid #cccdd3',
            }}>
            {children}
        </div>
    );
};

export default Mars;
