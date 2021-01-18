import React from 'react';
import { cn } from '@bem-react/classname';

import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Page } from '../../components/Page';

import './AllergensPage.css';
import {VerticalFormTablePanel} from "../../components/VerticalFormTablePanel/VerticalFormTablePanel";
import {AllergenForm} from "./AllergenForm";
import {AllergensTable} from "./AllergensTable";


const cnAllergensPage = cn('AllergensPage');

export const AllergensPage: React.FC = () => (
    <Page className={cnAllergensPage()}>
        <MainLayout className={cnAllergensPage('Layout')}>
            <VerticalFormTablePanel
                form={(
                    <div className={cnAllergensPage('FormContainer')}>
                        <AllergenForm />
                    </div>
                )}
                table={<AllergensTable />}
            />
        </MainLayout>
    </Page>
);
