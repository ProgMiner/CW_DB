import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { cn } from '@bem-react/classname';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';


import { useAllergens } from '../../hooks/useAllergens';
import { useCats } from '../../hooks/useCats';
import { useAddCatAllergen } from '../../hooks/useAddCatAllergen';


const cnAllergensPage = cn('AllergensPage');

export const CatAllergenForm: React.FC = () => {

    const cats = useCats();
    const catsOptions = cats?.map(({ id, name }) => ({ label: name, value: id })) || [];

    const allergens = useAllergens();
    const allergensOptions = allergens?.map(({ id, name }) => ({ label: name, value: id })) || [];

    const createCatAllergen = useAddCatAllergen();
    const onSubmitCatAllergen = useCallback(
        async ({ cat, allergen }, form) => {
            await createCatAllergen({ catId: cat, allergenId: allergen });
            setTimeout(() => form.reset());
        },
        [createCatAllergen]
    );

    return(

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
    );
};
