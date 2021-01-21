import React from 'react';
import { cn } from '@bem-react/classname';

import './RandomCatImage.css';


export interface RandomCatImageProps {
    readonly className?: string;
}

const cnRandomCatImage = cn('RandomCatImage');

export const RandomCatImage: React.FC<RandomCatImageProps> = ({ className }) => (
    <div className={cnRandomCatImage(null, [className])} />
);
