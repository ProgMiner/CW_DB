import React from 'react';
import { cn } from '@bem-react/classname';
import { Link, useLocation } from 'react-router-dom';

import './Sidebar.css';

import catsPageIcon from './icons/catsPage.svg';
import catBreedsIcon from './icons/catBreedsPage.svg';
import clientsPageIcon from './icons/clientsPage.svg';
import foodPageIcon from './icons/foodPage.svg';
import allergensPageIcon from './icons/allergensPage.svg';
import catPreferencesPageIcon from './icons/catPreferencesPage.svg';
import goodsPageIcon from './icons/goodsPage.svg';


const sidebarLinks = [
    ['/cats', catsPageIcon],
    ['/catBreeds', catBreedsIcon],
    ['/clients', clientsPageIcon],
    ['/food', foodPageIcon],
    ['/allergens', allergensPageIcon],
    ['/catPreferences', catPreferencesPageIcon],
    ['/goods', goodsPageIcon]
];

const cnSidebar = cn('Sidebar');

export const Sidebar: React.FC = () => {
    const { pathname: location } = useLocation();

    return (
        <div className={cnSidebar()}>
            {sidebarLinks.map(([link, icon]) => (
                <Link key={link} className={cnSidebar('Link', { active: link === location })} to={link}>
                    <img className={cnSidebar('Icon')} src={icon} alt={link} />
                </Link>
            ))}
        </div>
    );
};
