import Constants from '../constants/Constants';

export default (state, action) => {
    switch (action.type) {
        case Constants.WEB3:
            return {
                ...state,
                web3: action.payload,
                web3LoadingErrorMessage: 'Error Loading Web3!',
                web3Loaded: true
            }

        case Constants.CONTRACT:
            return {
                ...state,
                contract: action.payload
            }

        case Constants.ETHEREUM_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload
            }

        case Constants.ERROR_MESSAGE:
            return {
                ...state,
                web3: action.payload,
                web3LoadingErrorMessage: 'Generic Loading Error!',
                web3Loaded: true
            }

        case Constants.NAME:
            return {
                ...state,
                web3: action.payload
            }

        default:
            return state;
    }
}