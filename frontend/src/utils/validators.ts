
export const requiredValidator = (msg: string = 'Поле обязательно для заполнения') => <T>(value: T) =>
    value === undefined || value === null ? msg : undefined;

export const minValidator = (min: number, msg: string = `Значение должно быть не меньше ${min}`) => (value: number) =>
    value < min ? msg : undefined;

export const maxValidator = (max: number, msg: string = `Значение должно быть не больше ${max}`) => (value: number) =>
    value > max ? msg : undefined;

export const greaterValidator = (bound: number, msg: string = `Значение должно быть больше ${bound}`) => (value: number) =>
    value <= bound ? msg : undefined;

export const lowerValidator = (bound: number, msg: string = `Значение должно быть меньше ${bound}`) => (value: number) =>
    value >= bound ? msg : undefined;

export const composeValidators = <T>(...validators: ((value: T) => string | undefined)[]) => (value: T) =>
    validators.reduce<string | undefined>((error, validator) => error ?? validator(value), undefined);

export const minMaxValidator = (min?: number, max?: number, msg?: string) => {
    if (min === undefined) {
        if (max === undefined) {
            return () => undefined;
        }

        return maxValidator(max!, msg);
    }

    if (max === undefined) {
        return minValidator(min, msg);
    }

    const finalMsg = msg ?? `Значение должно быть не меньше ${min} и не больше ${max}`;
    return composeValidators(minValidator(min, finalMsg), maxValidator(max, finalMsg));
};

export const greaterLowerValidator = (greaterBound?: number, lowerBound?: number, msg?: string) => {
    if (lowerBound === undefined) {
        if (greaterBound === undefined) {
            return () => undefined;
        }

        return greaterValidator(greaterBound, msg);
    }

    if (greaterBound === undefined) {
        return lowerValidator(lowerBound, msg);
    }

    const finalMsg = msg ?? `Значение должно быть меньше ${lowerBound} и больше ${greaterBound}`;
    return composeValidators(lowerValidator(lowerBound, finalMsg), greaterValidator(greaterBound, finalMsg));
};
