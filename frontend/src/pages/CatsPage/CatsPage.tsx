import React from 'react';
import { cn } from '@bem-react/classname';

import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { VerticalFormTablePanel } from '../../components/VerticalFormTablePanel/VerticalFormTablePanel';
import { Page } from '../../components/Page';
import { CatForm } from './CatForm';
import { CatsTable } from './CatsTable';
import { RandomCatImage } from '../../components/RandomCatImage/RandomCatImage';

import './CatsPage.css';


const cnCatsPage = cn('CatsPage');

export const CatsPage: React.FC = () => (
    <Page className={cnCatsPage()}>
        <MainLayout className={cnCatsPage('Layout')}>
            <VerticalFormTablePanel
                form={(
                    <div className={cnCatsPage('FormContainer')}>
                        <CatForm />

                        <div className={cnCatsPage('CatContainer')}>
                            <RandomCatImage className={cnCatsPage('Cat')} />
                        </div>
                    </div>
                )}
                table={<CatsTable />}
            />
        </MainLayout>
    </Page>
);
