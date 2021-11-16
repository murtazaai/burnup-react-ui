import React, { useEffect, createContext, useReducer, useContext } from 'react';
import ActionEvents from '../actions/ActionEvents';

import { loadBlockchain } from "../actions/AsyncActions";

const initialState = {
    web3: null,
    accounts: [],
    web3LoadingErrorMessage: "",
    web3Loaded: false,
    contract: null,
    Name: ""
}

export const BlockchainContext = createContext(initialState);

export const BlockchainProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ActionEvents, initialState);

    useEffect(() => {
        loadBlockchain(dispatch);
    }, []);

    return (
        <BlockchainContext.Provider value={[state, dispatch]}>
            {children}
        </BlockchainContext.Provider>
    );
}

export const useBlockchain = () => useContext(BlockchainContext);