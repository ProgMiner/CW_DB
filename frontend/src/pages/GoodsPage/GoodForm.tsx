import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { cn } from '@bem-react/classname';
import { Button } from 'primereact/button';

import {useCreateGood} from "../../hooks/useCreateGood";


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
                    <div className={cnGoodsPage('Row')}>
                    <Field name="name">
                        {({ input }) => (
                            <InputText className={cnGoodsPage('Input')}
                                       placeholder="Название" {...input} />
                        )}
                    </Field>


                    <Field name="price">
                        {({ input }) => (
                            <InputText className={cnGoodsPage('Input')}
                                       placeholder="Стоимость" {...input} />
                        )}
                    </Field>

                    </div>
                    <div className={cnGoodsPage('Row')}>

                    <Field name="type">
                        {({ input }) => (
                            <InputText className={cnGoodsPage('Input')}
                                       placeholder="Тип" {...input} />
                        )}
                    </Field>

                    <Button type="submit" label="Добавить" />
                    </div>
                </form>
            )}
        </Form>
    );
};
