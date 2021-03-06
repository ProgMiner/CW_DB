import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { cn } from '@bem-react/classname';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import { useAllergens } from '../../hooks/useAllergens';
import { useCreateFood } from '../../hooks/useCreateFood';
import { useGoods } from '../../hooks/useGoods';
import { useFood } from '../../hooks/useFood';
import { useAddFoodAllergen } from '../../hooks/useAddFoodAllergen';
import { Good } from '../../models/good';
import { requiredValidator } from '../../utils/validators';


const cnFoodPage = cn('FoodPage');

export const FoodForm: React.FC = () => {
    const allergens = useAllergens();
    const allergensOptions = allergens?.map(({ id, name }) => ({ label: name, value: id })) || [];

    const food = useFood();
    const foodOptions = food?.map(({ id, name }) => ({ label: name, value: id })) || [];

    const goods = useGoods();
    const goodsOptions = goods
        ?.filter(good => !food?.some(food => food.good === good))
        ?.map(good => ({ label: good.name, value: good })) || [];

    const createFood = useCreateFood();
    const onSubmitFood = useCallback(
        async ({ name, good }, form) => {
            await createFood({ name, good, allergens: [] });
            setTimeout(() => form.reset());
        },
        [createFood]
    );

    const createFoodAllergen = useAddFoodAllergen();
    const onSubmitFoodAllergen = useCallback(
        async ({ food, allergen }, form) => {
            await createFoodAllergen({ foodId: food, allergenId: allergen });
            setTimeout(() => form.reset());
        },
        [createFoodAllergen]
    );

    return (
        <div>
            <Form onSubmit={onSubmitFood}>
                {({ handleSubmit }) => (
                    <form className={cnFoodPage('Form')} onSubmit={handleSubmit}>
                        <Field name="name" validate={requiredValidator()}>
                            {({ input }) => (
                                <InputText className={cnFoodPage('Input')}
                                           placeholder="Название" {...input} />
                            )}
                        </Field>

                        <Field<Good> name="good">
                            {({ input }) => (
                                <Dropdown className={cnFoodPage('Input')}
                                          value={input.value} onChange={input.onChange}
                                          placeholder="Товар" showClear={input.value?.id !== undefined} filter
                                          options={goodsOptions} />
                            )}
                        </Field>

                        <Button type="submit" label="Добавить еду" />
                    </form>
                )}
            </Form>

            <Form onSubmit={onSubmitFoodAllergen}>
                {({ handleSubmit }) => (
                    <form className={cnFoodPage('Form')} onSubmit={handleSubmit}>
                        <Field name="food">
                            {({ input }) => (
                                <Dropdown className={cnFoodPage('Input')}
                                          value={input.value} onChange={input.onChange}
                                          placeholder="Еда" showClear={input.value} filter
                                          options={foodOptions} />
                            )}
                        </Field>

                        <Field name="allergen">
                            {({ input }) => (
                                <Dropdown className={cnFoodPage('Input')}
                                          value={input.value} onChange={input.onChange}
                                          placeholder="Аллерген" showClear={input.value} filter
                                          options={allergensOptions} />
                            )}
                        </Field>

                        <Button type="submit" label="Добавить еде аллерген" />
                    </form>
                )}
            </Form>
        </div>
    );
};
