import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { cn } from '@bem-react/classname';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';

import { useCreateBreed } from '../../hooks/useCreateBreed';
import { composeValidators, minValidator, requiredValidator } from '../../utils/validators';


const cnBreedsPage = cn('BreedsPage');

export const BreedForm: React.FC = () => {

    const createBreed = useCreateBreed();

    const onSubmit = useCallback(
        async ({ name, price }, form) => {
            await createBreed({ name, price });
            setTimeout(() => form.reset());
        },
        [createBreed]
    );

    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form className={cnBreedsPage('Form')} onSubmit={handleSubmit}>
                    <Field name="name" validate={requiredValidator()}>
                        {({ input }) => (
                            <InputText className={cnBreedsPage('Input')}
                                       placeholder="Название" {...input} />
                        )}
                    </Field>

                    <Field<number> name="price"
                                   initialValue={undefined}
                                   validate={composeValidators(requiredValidator(), minValidator(0))}>
                        {({ input }) => (
                            <InputNumber className={cnBreedsPage('Input')}
                                         placeholder="Стоимость"
                                         maxFractionDigits={0}
                                         value={input.value}
                                         onValueChange={input.onChange}
                                         onFocus={input.onFocus as unknown as (e: Event) => void}
                                         onBlur={input.onBlur as unknown as (e: Event) => void} />
                        )}
                    </Field>

                    <Button type="submit" label="Добавить" />
                </form>
            )}
        </Form>
    );
};
