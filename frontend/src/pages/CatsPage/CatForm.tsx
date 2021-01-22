import React, { useCallback } from 'react';
import { Field, Form } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { cn } from '@bem-react/classname';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { ColorPicker } from 'primereact/colorpicker';

import { useBreeds } from '../../hooks/useBreeds';
import { SexInput } from '../../components/SexInput/SexInput';
import { useClients } from '../../hooks/useClients';
import { useCreateCat } from '../../hooks/useCreateCat';
import { Sex } from '../../models/sex';
import { Breed } from '../../models/breed';
import { requiredValidator } from '../../utils/validators';


const cnCatsPage = cn('CatsPage');

export const CatForm: React.FC = () => {
    const breeds = useBreeds();
    const breedsOptions = breeds?.map(breed => ({ label: breed.name, value: breed })) || [];

    const clients = useClients();
    const clientsOptions = clients?.map(({ id, name }) => ({ label: name, value: id })) || [];

    const createCat = useCreateCat();
    const onSubmit = useCallback(
        async ({ name, breed, birthday, sex, color, owner }, form) => {
            await createCat({ name, breed, birthday, sex, color: parseInt(color, 16), ownerId: owner });
            setTimeout(() => form.reset());
        },
        [createCat]
    );

    return (
        <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form className={cnCatsPage('Form')} onSubmit={handleSubmit}>
                    <Field name="name" validate={requiredValidator()}>
                        {({ input }) => (
                            <InputText className={cnCatsPage('Input')}
                                       placeholder="Имя" {...input} />
                        )}
                    </Field>

                    <Field<Breed | undefined> name="breed">
                        {({ input }) => (
                            <Dropdown className={cnCatsPage('Input')}
                                      value={input.value} onChange={input.onChange}
                                      placeholder="Порода" showClear={input.value !== undefined} filter
                                      options={breedsOptions} />
                        )}
                    </Field>

                    <Field name="birthday">
                        {({ input }) => (
                            <Calendar className={cnCatsPage('Input')}
                                      value={input.value} onChange={input.onChange}
                                      placeholder="День рождения" showIcon />
                        )}
                    </Field>

                    <Field<Sex> name="sex" initialValue="M">
                        {({ input }) => (
                            <SexInput className={cnCatsPage('Input')}
                                      value={input.value} onChange={input.onChange} />
                        )}
                    </Field>

                    <Field name="color" initialValue="234234">
                        {({ input }) => (
                            <div className={cnCatsPage('Input')}>
                                Цвет:{' '}

                                <ColorPicker {...input} />
                            </div>
                        )}
                    </Field>

                    <Field name="owner">
                        {({ input }) => (
                            <Dropdown className={cnCatsPage('Input')}
                                      value={input.value} onChange={input.onChange}
                                      placeholder="Хозяин" showClear={input.value} filter
                                      options={clientsOptions} />
                        )}
                    </Field>

                    <Button type="submit" label="Добавить" />
                </form>
            )}
        </Form>
    );
};
