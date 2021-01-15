import React from 'react';
import { cn } from '@bem-react/classname';


export interface PageProps {
    className?: string;
}

const cnPage = cn('Page');

export const Page: React.FC<PageProps> = ({ className, children }) => (
    <div className={cnPage(null, [className])}>
        {children}
    </div>
);
