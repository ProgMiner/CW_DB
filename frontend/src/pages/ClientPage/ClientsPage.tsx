import React from 'react';
import { cn } from '@bem-react/classname';

import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Page } from '../../components/Page';
import { ClientForm } from './ClientForm';
import { ClientsTable } from './ClientsTable';

import './ClientsPage.css';
import {VerticalFormTablePanel} from "../../components/VerticalFormTablePanel/VerticalFormTablePanel";


const cnClientsPage = cn('ClientsPage');

export const ClientsPage: React.FC = () => (
    <Page className={cnClientsPage()}>
        <MainLayout className={cnClientsPage('Layout')}>
            <VerticalFormTablePanel
                form={(
                    <div className={cnClientsPage('FormContainer')}>
                        <ClientForm />
                    </div>
                )}
                table={<ClientsTable />}
            />
        </MainLayout>
    </Page>
);
