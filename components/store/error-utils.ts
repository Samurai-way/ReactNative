import {AxiosError} from "axios";

export const handleAppRequestError = (error: any) => {
    if (error instanceof AxiosError) {
        return (
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        );
    }
    throw new Error(error);
};