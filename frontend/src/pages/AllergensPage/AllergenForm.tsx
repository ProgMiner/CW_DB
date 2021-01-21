import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { cn } from '@bem-react/classname';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

import { useCreateAllergen } from '../../hooks/useCreateAllergen';
import { useAllergens } from '../../hooks/useAllergens';
import { useCats } from '../../hooks/useCats';
import { useAddCatAllergen } from '../../hooks/useAddCatAllergen';
import {useBreeds} from '../../hooks/useBreeds';


const cnAllergensPage = cn('AllergensPage');

export const AllergenForm: React.FC = () => {

    const allergens = useAllergens();
    const allergensOptions = allergens?.map(({ id, name }) => ({ label: name, value: id })) || [];

    const cats = useCats();
    const catsOptions = cats?.map(({ id, name }) => ({ label: name, value: id })) || [];

    const createAllergen = useCreateAllergen();
    const onSubmitAllergen = useCallback(
        async ({ name }, form) => {
            await createAllergen({ name });
            setTimeout(() => form.reset());
        },
        [createAllergen]
    );

    const createCatAllergen = useAddCatAllergen();
    const onSubmitCatAllergen = useCallback(
        async ({ cat, allergen }, form) => {
            await createCatAllergen({ catId: cat, allergenId: allergen });
            setTimeout(() => form.reset());
        },
        [createCatAllergen]
    );

    return (
        <div>
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

            <Form onSubmit={onSubmitCatAllergen}>
                {({ handleSubmit }) => (
                    <form className={cnAllergensPage('Form')} onSubmit={handleSubmit}>
                        <Field name="cat">
                            {({ input }) => (
                                <Dropdown className={cnAllergensPage('Input')}
                                          value={input.value} onChange={input.onChange}
                                          placeholder="Кошка" showClear={input.value} filter
                                          options={catsOptions} />
                            )}
                        </Field>

                        <Field name="allergen">
                            {({ input }) => (
                                <Dropdown className={cnAllergensPage('Input')}
                                          value={input.value} onChange={input.onChange}
                                          placeholder="Аллерген" showClear={input.value} filter
                                          options={allergensOptions} />
                            )}
                        </Field>

                        <Button type="submit" label="Добавить кошке аллергию" />
                    </form>
                )}
            </Form>
        </div>
    );
};
