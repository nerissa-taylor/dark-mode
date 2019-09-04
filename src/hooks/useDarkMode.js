import React from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [values, setValues] = useLocalStorage(key, initialValue)
    const darkMode = document.querySelector('.dark-mode');
    if (darkMode.classList.contains('dark-mode')) {
        darkMode.classList.remove('dark-mode');
    } else {
        darkMode.classList.add('dark-mode');

    }


}
darkButton
