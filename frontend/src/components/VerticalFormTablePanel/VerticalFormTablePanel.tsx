import React from 'react';
import { cn } from '@bem-react/classname';

import { Panel } from '../Panel/Panel';

import './VerticalFormTablePanel.css';


export interface VerticalFormTablePanelProps {
    className?: string;
    form?: React.ReactNode;
    table?: React.ReactNode;
}

const cnVerticalFormTablePanel = cn('VerticalFormTablePanel');

export const VerticalFormTablePanel: React.FC<VerticalFormTablePanelProps> = ({ className, form, table }) => (
    <Panel className={cnVerticalFormTablePanel(null, [className])}>
        <div className={cnVerticalFormTablePanel('FormContainer')}>
            {form}
        </div>

        <div className={cnVerticalFormTablePanel('TableContainer')}>
            {table}
        </div>
    </Panel>
);
