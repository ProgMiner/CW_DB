import React from 'react';
import { cn } from '@bem-react/classname';
import { Helmet } from 'react-helmet';


export interface PageProps {
    className?: string;
    title?: string;
}

const siteTitle = 'Cat\'s Paradise';

const cnPage = cn('Page');

export const Page: React.FC<PageProps> = ({ className, title, children }) => (
    <div className={cnPage(null, [className])}>
        <Helmet>
            {title ? (
                <title>{title} | {siteTitle}</title>
            ) : (
                <title>{siteTitle}</title>
            )}
        </Helmet>

        {children}
    </div>
);
