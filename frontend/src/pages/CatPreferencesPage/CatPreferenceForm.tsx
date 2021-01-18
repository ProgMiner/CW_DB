import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { cn } from '@bem-react/classname';
import { Button } from 'primereact/button';

import {useCats} from "../../hooks/useCats";
import {Dropdown} from "primereact/dropdown";
import {useFood} from "../../hooks/useFood";
import {useCreateCatPreference} from "../../hooks/useCreteCatPreference";


const cnCatPreferencesPage = cn('CatPreferencesPage');

export const CatPreferenceForm: React.FC = () => {

    const {cats} = useCats();
    const catsOptions = cats?.map(({id, name}) => ({label: name, value: id})) || [];

    const {food} = useFood();
    const foodOptions = food?.map(({id, name}) => ({label: name, value: id})) || [];


    const createCatPreference = useCreateCatPreference();
    const onSubmit = useCallback(
        async ({cat, food}, form) => {
            await createCatPreference({catId: cat, foodId: food});
            setTimeout(() => form.reset());
        },
        [createCatPreference]
    );

    return (

            <Form onSubmit={onSubmit}>
                {({handleSubmit}) => (
                    <form className={cnCatPreferencesPage('Form')} onSubmit={handleSubmit}>
                        <Field name="food">
                            {({input}) => (
                                <Dropdown className={cnCatPreferencesPage('Input')}
                                          value={input.value} onChange={input.onChange}
                                          placeholder="Кошка" showClear={input.value} filter
                                          options={catsOptions}/>
                            )}
                        </Field>

                        <Field name="food">
                            {({input}) => (
                                <Dropdown className={cnCatPreferencesPage('Input')}
                                          value={input.value} onChange={input.onChange}
                                          placeholder="Еда" showClear={input.value} filter
                                          options={foodOptions}/>
                            )}
                        </Field>

                        <Button type="submit" label="Добавить предпочтение"/>
                    </form>
                )}
            </Form>


    );



};
