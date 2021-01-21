
export class ApiError<T = unknown> extends Error {

    public readonly name = 'ApiError';
    public readonly payload?: T;

    constructor(message: string, payload?: T) {
        super(message);

        this.payload = payload;
    }
}
