import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { cn } from '@bem-react/classname';
import { Button } from 'primereact/button';

import { useCreateBreed } from '../../hooks/useCreateBreed';


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
                    <Field name="name">
                        {({ input }) => (
                            <InputText className={cnBreedsPage('Input')}
                                       placeholder="Название" {...input} />
                        )}
                    </Field>

                    <Field name="price">
                        {({ input }) => (
                            <InputText className={cnBreedsPage('Input')}
                                       placeholder="Стоимость" {...input} />
                        )}
                    </Field>

                    <Button type="submit" label="Добавить" />
                </form>
            )}
        </Form>
    );
};
