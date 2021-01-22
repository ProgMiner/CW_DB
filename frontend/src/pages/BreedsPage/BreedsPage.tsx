import React from 'react';
import { cn } from '@bem-react/classname';

import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Page } from '../../components/Page';
import { BreedForm } from './BreedForm';
import { BreedsTable } from './BreedsTable';
import { VerticalFormTablePanel } from '../../components/VerticalFormTablePanel/VerticalFormTablePanel';

import './BreedsPage.css';


const cnBreedsPage = cn('BreedsPage');

export const BreedsPage: React.FC = () => (
    <Page className={cnBreedsPage()} title="Породы">
        <MainLayout className={cnBreedsPage('Layout')}>
            <VerticalFormTablePanel form={<BreedForm />} table={<BreedsTable />} />
        </MainLayout>
    </Page>
);
