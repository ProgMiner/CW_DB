import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { cn } from '@bem-react/classname';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';

import { useCreateClient } from '../../hooks/useCreateClient';
import { composeValidators, minMaxValidator, requiredValidator } from '../../utils/validators';


const cnClientsPage = cn('ClientsPage');

export const ClientForm: React.FC = () => {

    const createClient = useCreateClient();

    const onSubmit = useCallback(
        async ({ name, discount }, form) => {
            await createClient({ name, discount: discount / 100 });
            setTimeout(() => form.reset());
        },
        [createClient]
    );

    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form className={cnClientsPage('Form')} onSubmit={handleSubmit}>
                    <Field name="name" validate={requiredValidator()}>
                        {({ input }) => (
                            <InputText className={cnClientsPage('Input')}
                                       placeholder="Имя" {...input} />
                        )}
                    </Field>

                    <Field<number> name="discount"
                                   initialValue={undefined}
                                   validate={composeValidators(requiredValidator(), minMaxValidator(0, 100))}>
                        {({ input }) => (
                            <InputNumber className={cnClientsPage('Input')}
                                         placeholder="Размер скидки"
                                         minFractionDigits={2}
                                         maxFractionDigits={2}
                                         suffix=" %"
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
