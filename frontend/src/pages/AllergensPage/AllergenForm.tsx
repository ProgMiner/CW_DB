import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { cn } from '@bem-react/classname';
import { Button } from 'primereact/button';


import { useCreateAllergen } from '../../hooks/useCreateAllergen';


const cnAllergensPage = cn('AllergensPage');

export const AllergenForm: React.FC = () => {

    const createAllergen = useCreateAllergen();
    const onSubmitAllergen = useCallback(
        async ({ name }, form) => {
            await createAllergen({ name });
            setTimeout(() => form.reset());
        },
        [createAllergen]
    );

    return (
            <Form onSubmit={onSubmitAllergen}>
                {({ handleSubmit }) => (
                    <form className={cnAllergensPage('Form')} onSubmit={handleSubmit}>
                        <Field name="name">
                            {({ input }) => (
                                <InputText className={cnAllergensPage('Input')}
                                           placeholder="Наименование" {...input} />
                            )}
                        </Field>

                        <Button type="submit" label="Добавить аллерген" />
                    </form>
                )}
            </Form>
    );
};
