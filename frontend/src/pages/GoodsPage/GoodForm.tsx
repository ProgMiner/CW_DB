import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { cn } from '@bem-react/classname';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';

import { useCreateGood } from '../../hooks/useCreateGood';
import { composeValidators, minValidator, requiredValidator } from '../../utils/validators';


const cnGoodsPage = cn('GoodsPage');

export const GoodForm: React.FC = () => {

    const createGood = useCreateGood();

    const onSubmit = useCallback(
        async ({ name, price, type }, form) => {
            await createGood({ name, price, type });
            setTimeout(() => form.reset());
        },
        [createGood]
    );

    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form className={cnGoodsPage('Form')} onSubmit={handleSubmit}>
                    <Field name="name" validate={requiredValidator()}>
                        {({ input }) => (
                            <InputText className={cnGoodsPage('Input')}
                                       placeholder="Название" {...input} />
                        )}
                    </Field>

                    <Field<number> name="price"
                                   initialValue={undefined}
                                   validate={composeValidators(requiredValidator(), minValidator(0))}>
                        {({ input }) => (
                            <InputNumber className={cnGoodsPage('Input')}
                                         placeholder="Стоимость"
                                         minFractionDigits={2}
                                         maxFractionDigits={2}
                                         value={input.value}
                                         onValueChange={input.onChange}
                                         onFocus={input.onFocus as unknown as (e: Event) => void}
                                         onBlur={input.onBlur as unknown as (e: Event) => void} />
                        )}
                    </Field>

                    <Field name="type" validate={requiredValidator()}>
                        {({ input }) => (
                            <InputText className={cnGoodsPage('Input')}
                                       placeholder="Тип" {...input} />
                        )}
                    </Field>

                    <Button type="submit" label="Добавить"/>
                </form>
            )}
        </Form>
    );
};
