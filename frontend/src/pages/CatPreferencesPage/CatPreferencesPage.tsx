import React from 'react';
import { cn } from '@bem-react/classname';

import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Page } from '../../components/Page';
import { VerticalFormTablePanel } from '../../components/VerticalFormTablePanel/VerticalFormTablePanel';
import { CatPreferenceForm } from './CatPreferenceForm';
import { CatPreferencesTable } from './CatPreferencesTable';

import './CatPreferencesPage.css';


const cnCatPreferencesPage = cn('CatPreferencesPage');

export const CatPreferencesPage: React.FC = () => (
    <Page className={cnCatPreferencesPage()} title="Предпочтения">
        <MainLayout className={cnCatPreferencesPage('Layout')}>
            <VerticalFormTablePanel
                form={(
                    <div className={cnCatPreferencesPage('FormContainer')}>
                        <CatPreferenceForm />
                    </div>
                )}
                table={<CatPreferencesTable />}
            />
        </MainLayout>
    </Page>
);
