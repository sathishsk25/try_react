import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
    const [value, setValue]= useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(`Unable to get localstorage value of ${key}`, error)
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(`Unable to set localstorage value of ${key}: `, error)
        }
    })

    return [value, setValue];
}

export default useLocalStorage;