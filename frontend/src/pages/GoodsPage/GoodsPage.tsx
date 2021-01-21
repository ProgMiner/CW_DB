import React from 'react';
import { cn } from '@bem-react/classname';

import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Page } from '../../components/Page';

import './GoodsPage.css';
import { VerticalFormTablePanel } from '../../components/VerticalFormTablePanel/VerticalFormTablePanel';
import { GoodForm } from './GoodForm';
import { GoodsTable } from './GoodsTable';


const cnGoodsPage = cn('GoodsPage');

export const GoodsPage: React.FC = () => (
    <Page className={cnGoodsPage()} title="Товары">
        <MainLayout className={cnGoodsPage('Layout')}>
            <VerticalFormTablePanel
                form={(
                    <div className={cnGoodsPage('FormContainer')}>
                        <GoodForm />
                    </div>
                )}
                table={<GoodsTable />}
            />
        </MainLayout>
    </Page>
);
