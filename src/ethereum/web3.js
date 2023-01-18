import Web3 from 'web3'

let web3

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is running.
    //window.ethereum.request({ method: 'eth_requestAccounts' }).then(r => console.log('Connected to ethereum', r))
    web3 = new Web3(window.web3.currentProvider)
    // const provider = new Web3.providers.HttpProvider(
    //     'https://goerli.infura.io/v3/39b610faa30949e4a9679fabb6a648ab'
    // );
    // web3 = new Web3(provider);
} else {
    // We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider('https://goerli.infura.io/v3/39b610faa30949e4a9679fabb6a648ab')
    web3 = new Web3(provider)
}

export default web3
