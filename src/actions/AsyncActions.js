import {setUpWeb3, smartContract, ethereumAccounts, errorMessage, name} from './Actions';
import Web3 from 'web3';
import {ADDRESS, ABI} from '../smart-contracts/BurnupSmartContract';

const web3 = new Web3(Web3.givenProvider);

export const loadBlockchain = async(dispatch) => {

    try {

        if (Web3.givenProvider) {

            await Web3.givenProvider.enable();

            dispatch(setUpWeb3());

            const contract = new web3.eth.Contract(ABI, ADDRESS);

            dispatch(smartContract(contract));

            const accounts = await web3.eth.getAccounts();

            dispatch(ethereumAccounts(accounts));

            const name = await contract.methods.name().call({from: accounts[0]});

            dispatch(name(name));

            console.log ('name', name);
        }


    } catch (error) {
        console.log('Error in loading Web3 = ', error);

        if(error.code === 4001) {

            dispatch(errorMessage((error.message)));
        }
    }
}


export const SetName = async(contract, accounts, transaction, dispatch) => {

    const receipt = await contract.methods.name(transaction.name).send({from: accounts[0]});

    const updatedName = await contract.methods.name().call({from: accounts[0]});

    dispatch(setupName(updatedName));
}

