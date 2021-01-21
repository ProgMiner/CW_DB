import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { cn } from '@bem-react/classname';
import { Button } from 'primereact/button';

import { useCreateClient } from '../../hooks/useCreateClient';


const cnClientsPage = cn('ClientsPage');

export const ClientForm: React.FC = () => {

    const createClient = useCreateClient();

    const onSubmit = useCallback(
        async ({ name, discount }, form) => {
            await createClient({ name, discount });
            setTimeout(() => form.reset());
        },
        [createClient]
    );

    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form className={cnClientsPage('Form')} onSubmit={handleSubmit}>
                    <Field name="name">
                        {({ input }) => (
                            <InputText className={cnClientsPage('Input')}
                                       placeholder="Имя" {...input} />
                        )}
                    </Field>

                    <Field name="discount">
                        {({ input }) => (
                            <InputText className={cnClientsPage('Input')}
                                       placeholder="Размер скидки" {...input} />
                        )}
                    </Field>

                    <Button type="submit" label="Добавить" />
                </form>
            )}
        </Form>
    );
};
