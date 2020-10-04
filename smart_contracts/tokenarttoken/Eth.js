class Eth {
    constructor() {
        this.projectId = '13faf753dc0c47f7827dfdee5e1cc43a';
        this.infuraWSMainnet = 'wss://mainnet.infura.io/ws/v3/';
        this.infuraWSRopsten='wss://ropsten.infura.io/ws/v3/';

        // Setup the websocket provider.
        // this.web3Provider = new Web3.providers.WebsocketProvider(this.infuraWSRopsten + this.projectId);
        // this.web3 = new Web3(this.web3Provider);
        // console.log(this.web3);

        // Amber

    }

    setProvider(provider) {
        this.web3 = provider;
        console.log('Web3 provider' + this.web3);
    }

    setContract() {
        // Store the contract
        this.tokenArtToken = new this.web3.eth.Contract(contractABI, contractAddress);

        console.log(this.tokenArtToken);
    }

    getPatterns() {
        this.tokenArtToken.methods.getPatterns().call().then((data) => {
            console.log(data);
        });
    }

    // this function allows communication between our javascript and the contract's createPattern Function.
    createPattern(pattern) {
        this.tokenArtToken.methods.createPattern(pattern).send({from : `${window.web3.currentProvider.selectedAddress}`})
        .then((receipt) => {
            console.log(receipt);
        })
        .on('r')
    }

    ownerOf(tokenId) {
        this.tokenArtToken.methods.ownerOf(3031).call().then((data) => {
            console.log(data);
        });
    }
}
