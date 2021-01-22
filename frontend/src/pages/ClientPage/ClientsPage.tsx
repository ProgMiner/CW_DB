import React from 'react';
import { cn } from '@bem-react/classname';

import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Page } from '../../components/Page';
import { ClientForm } from './ClientForm';
import { ClientsTable } from './ClientsTable';
import { VerticalFormTablePanel } from '../../components/VerticalFormTablePanel/VerticalFormTablePanel';

import './ClientsPage.css';


const cnClientsPage = cn('ClientsPage');

export const ClientsPage: React.FC = () => (
    <Page className={cnClientsPage()} title="Клиенты">
        <MainLayout className={cnClientsPage('Layout')}>
            <VerticalFormTablePanel form={<ClientForm />} table={<ClientsTable />} />
        </MainLayout>
    </Page>
);
