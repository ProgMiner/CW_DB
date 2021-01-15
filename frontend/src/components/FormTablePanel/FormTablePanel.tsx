import React from 'react';
import { cn } from '@bem-react/classname';

import { Panel } from '../Panel/Panel';

import './FormTablePanel.css';


export interface FormTablePanelProps {
    className?: string;
    form?: React.ReactNode;
    table?: React.ReactNode;
}

const cnFormTablePanel = cn('FormTablePanel');

export const FormTablePanel: React.FC<FormTablePanelProps> = ({ className, form, table }) => (
    <Panel className={cnFormTablePanel(null, [className])}>
        <div className={cnFormTablePanel('FormContainer')}>
            {form}
        </div>

        <div className={cnFormTablePanel('TableContainer')}>
            {table}
        </div>
    </Panel>
);
