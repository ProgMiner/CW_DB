import React from 'react';
import { cn } from '@bem-react/classname';

import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Page } from '../../components/Page';
import { VerticalFormTablePanel } from '../../components/VerticalFormTablePanel/VerticalFormTablePanel';
import { GoodForm } from './GoodForm';
import { GoodsTable } from './GoodsTable';

import './GoodsPage.css';


const cnGoodsPage = cn('GoodsPage');

export const GoodsPage: React.FC = () => (
    <Page className={cnGoodsPage()} title="Товары">
        <MainLayout className={cnGoodsPage('Layout')}>
            <VerticalFormTablePanel form={<GoodForm />} table={<GoodsTable />} />
        </MainLayout>
    </Page>
);
