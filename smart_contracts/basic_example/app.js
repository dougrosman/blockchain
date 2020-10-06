
    
    var basicExampleToken;
    var userAccount;
    var currentWallet;
    var dougWallet2 = "0xFd892bB9b092294ec828B4cC4Ad8c621030c92B2";

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    window.addEventListener('load', function() {

        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.ethereum !== 'undefined') {

            web3js = new Web3(web3.givenProvider);
            console.log('MetaMask is installed!');
        } else {
          // Handle the case where the user doesn't have Metamask installed
          // Probably show them a message prompting them to install Metamask
        }

        // Now you can start your app & access web3 freely:
        startApp()

      })
    
    

    function startApp() {
        var myContractAddress = "0x062908cA7AB6478FC1267b97351d1e372090F18c";
        basicExampleToken = new web3js.eth.Contract(myABI, myContractAddress);
        let currentAccount = null;
        ethereum.request({ method: 'eth_accounts' }).then(handleAccountsChanged).catch((err) => {
            // Some unexpected error.
            // For backwards compatibility reasons, if no accounts are available,
            // eth_accounts will return an empty array.
            console.error(err);
        });
    }
    
    function getBalance(id) {
        return basicExampleToken.methods.balanceOf(id).call()
    }

    function sendTokens(toId, amount) {
        basicExampleToken.methods.transfer(toId, amount).send({from: dougWallet}, function(error, result) {
            if(error) {
                console.log("An error occured", error);
                return;
            }
            console.log("Hash of the transaction: " + result);
        })
    }
    
    


    // getBalance(dougWallet).then(function(result){
    //     console.log("Balance: " + JSON.stringify(result));
    // });

    // sendTokens(dougWallet2, "20000");

    // async function handleOnLoad() {
    //     var provider;
    //     if (window.ethereum) {
    //       provider = new Web3(ethereum);
    //       eth.setProvider(provider);
      
    //       try {
    //           await ethereum.enable();
      
    //           // Once MetaMask is enable, set the contract
    //           eth.setContract();
    //       } catch(error) {
    //           console.error('error');
    //       }
      
    //       // if there is a different web3 provider, set that provider
    //     } else if (window.web3) {
    //       provider = new Web3(web3.currentProvider);
    //       ethereum.setProvider(provider);
      
    //       // if the user has not installed MetaMask
    //     } else {
    //       console.error("Non-Ethereum browser detected");
    //     }
    //   }
      
