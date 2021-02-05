import { useReducer, useEffect } from "react";

function UseLocalStorageReducer(key, defaultVal, reducer) {
    // make piece of state, based off of value in localstorage (or default)
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        let value;
        try {
            value = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        }
        catch (e) {
            value = defaultVal
        }
        return value;
    })
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))

    }, [state])




    // useEffect to update 

    return [state, dispatch];


}

export { UseLocalStorageReducer };