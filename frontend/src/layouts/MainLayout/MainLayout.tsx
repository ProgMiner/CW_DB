import React from 'react';
import { cn } from '@bem-react/classname';

import { Sidebar } from '../../components/Sidebar/Sidebar';

import './MainLayout.css';


export interface MainLayoutProps {
    className?: string;
    sidebar?: React.ReactNode;
}

const cnMainLayout = cn('MainLayout');

export const MainLayout: React.FC<MainLayoutProps> = ({
    className,
    sidebar = <Sidebar />,
    children
}) => (
    <div className={cnMainLayout(null, [className])}>
        <div className={cnMainLayout('OuterContainer')}>
            <div className={cnMainLayout('Header')}>
                Cat's Paradise
            </div>

            <div className={cnMainLayout('InnerContainer')}>
                <div className={cnMainLayout('SidebarContainer')}>
                    {sidebar}
                </div>

                <div className={cnMainLayout('ContentContainer')}>
                    {children}
                </div>
            </div>
        </div>
    </div>
);
