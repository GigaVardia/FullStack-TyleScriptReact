import React, {createContext, useState} from 'react';
import UserNameComp from './UserNameComp';
import UserAgeComp from './UserAgeComp';
import { Agent } from 'node:http';

export const TestContext = createContext<{username: string, userage: number}>({username:"", userage: 0});

const ContextTester = () => {
    const [userage, setUserage] = useState(20);
    const [localState, setLocalState] = useState(0);

    const onClickAge = () => {
        setUserage(userage+1)
    }

    const onClickLocalState = () => {
        setLocalState(localState + 1)
    }

    return (
        <>
            <button onClick={onClickAge}>Update age</button>
            <TestContext.Provider value={{username: "dave", userage: userage}}>
                <UserAgeComp/>
                <UserNameComp/>
            </TestContext.Provider>
            <br/>
            <button onClick={onClickLocalState}>Update local state</button>
            &nbsp; <label>{localState}</label>
        </>
    )
}

export default ContextTester;