import { ApiError } from './apiError';


const apiUrl = '//localhost:8080/api/v1';

export const doApiRequest = async (resource: string, fetchParams?: RequestInit): Promise<unknown> => {
    const response = await fetch(`${apiUrl}/${resource}`, {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...fetchParams?.headers
        },
        ...fetchParams
    });

    if (!response.ok) {
        throw new ApiError('RESP_NOT_OK', response);
    }

    return response.json();
};
