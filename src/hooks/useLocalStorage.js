import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    //define some state --> will receive iniital value to set up localstorage property

    const item = JSON.parse(localStorage.getItem(key));
    const [storedValue, setStoredValue] = useState(item || initalValue);

    const setValue = value => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    };
    return [storedValue, setValue];
};