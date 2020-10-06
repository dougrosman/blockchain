$(document).ready(function(){
    
    var basicExampleToken;
    var userAccount;
    var currentWallet;
    var dougWallet2 = "0xFd892bB9b092294ec828B4cC4Ad8c621030c92B2";
    var web3js;

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
        //console.log(web3js);
        
        console.log("you have metamask");
    } else {
        // Handle the case where the user doesn't have web3. Probably
        // show them a message telling them to install Metamask in
        // order to use our app.
        console.log("you should download metamask");
    }
    
    // Now you can start your app & access web3js freely:

    // instantiate contract

    function startApp() {
        var myContractAddress = "0x062908cA7AB6478FC1267b97351d1e372090F18c";
        basicExampleToken = new web3js.eth.Contract(myABI, myContractAddress);
        currentWallet = web3js.eth.accounts;
        console.log("current wallet: " + currentWallet)

        var accountInterval = setInterval(function() {
            // Check if account has changed
            if (web3.eth.accounts[0] !== userAccount) {
              userAccount = web3.eth.accounts[0];
              // Call some function to update the UI with the new account
              updateInterface();
            }
          }, 100);
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
    
    startApp();


    // getBalance(dougWallet).then(function(result){
    //     console.log("Balance: " + JSON.stringify(result));
    // });

    // sendTokens(dougWallet2, "20000");


      
})