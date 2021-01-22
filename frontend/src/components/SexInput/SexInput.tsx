import React, { useCallback } from 'react';
import { cn } from '@bem-react/classname';
import { Button } from 'primereact/button';

import { Sex } from '../../models/sex';

import './SexInput.css';


export interface SexInputProps {
    readonly className?: string;

    readonly value?: Sex;
    readonly onChange?: (value: Sex) => void;
}

const sexValues = ['M', 'F'] as const;

const cnSexInput = cn('SexInput');

export const SexInput: React.FC<SexInputProps> = ({
    className,
    value,
    onChange
}) => {
    const onClick = useCallback((value: Sex) => onChange ? () => onChange(value) : undefined, [onChange]);

    return (
        <div className={cnSexInput(null, [className])}>
            {sexValues.map(sex => (
                <Button key={sex}
                        className={cnSexInput('Button', { active: value === sex })} onClick={onClick(sex)}
                        icon={cnSexInput('Icon', { [sex.toLowerCase()]: true })} type="button" />
            ))}
        </div>
    );
};
