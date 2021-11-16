import Constants from '../constants/Constants';

export const setUpWeb3 = (web3) => {
    return {
        type: Constants.WEB3,
        payload: web3
    }
}

export const smartContract = (smartContract) => {
    return {
        type: Constants.SMART_CONTRACT,
        payload: smartContract
    }
}

export const ethereumAccounts = (ethereumAccounts) => {
    return {
        type: Constants.ETHEREUM_ACCOUNTS,
        payload: smartContract
    }
}

export const errorMessage = (errorMessage) => {
    return {
        type: Constants.ERROR_MESSAGE,
        payload: errorMessage
    }
}

export const name = (name) => {
    return {
        type: Constants.NAME,
        payload: name
    }
}


