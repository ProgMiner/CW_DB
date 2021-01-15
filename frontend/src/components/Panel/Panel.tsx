import React from 'react';
import { cn } from '@bem-react/classname';

import './Panel.css';


export interface PanelProps {
    className?: string;
}

const cnPanel = cn('Panel');

export const Panel: React.FC<PanelProps> = ({ className, children }) => (
    <div className={cnPanel(null, [className])}>
        {children}
    </div>
);
