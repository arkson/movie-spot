import {
    useState,
    useEffect,
    useReducer
  } from "react";
import axios from 'axios';
import dataFetchReducer from "./../reducers/dataFetchReducer";

const useDataApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);
    const [storage, setStorage] = useState(false);

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        isEmpty: false,
        data: initialData,
    });

    useEffect(() => {
        let didCancel = false;

        async function fetchData() {
            dispatch({ type: 'FETCH_INIT' });

            try {
            const result = await axios(url);

            if (!storage) {
                sessionStorage.setItem("initialData", JSON.stringify(result.data));
                setStorage(!storage);
            }

            if (!didCancel) {
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: 'FETCH_FAILURE' });
                }

            }

        };

        if (url === '') {
            dispatch({ type: 'GET_CACHED_DATA', payload: JSON.parse(sessionStorage.getItem("initialData")) });
        } else {
            fetchData();
        }

        return () => {
            didCancel = true;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return [state, setUrl];
};

export default useDataApi;