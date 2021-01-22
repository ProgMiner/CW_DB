
export const requiredValidator = (msg: string = 'Поле обязательно для заполнения') =>
    <T>(value: T) => value !== undefined ? undefined : msg;
