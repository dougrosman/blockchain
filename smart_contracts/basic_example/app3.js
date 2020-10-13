var basicExampleToken;
    var userAccount;
    var currentAccount;
    var dougWallet2 = "0xFd892bB9b092294ec828B4cC4Ad8c621030c92B2";

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

let currentAccount = null;
ethereum
  .request({ method: 'eth_accounts' })
  .then(handleAccountsChanged)
  .catch((err) => {
    // Some unexpected error.
    // For backwards compatibility reasons, if no accounts are available,
    // eth_accounts will return an empty array.
    console.error(err);
  });

// Note that this event is emitted on page load.
// If the array of accounts is non-empty, you're already
// connected.
ethereum.on('accountsChanged', handleAccountsChanged);

// For now, 'eth_accounts' will continue to always return an array
function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or the user has not connected any accounts
    console.log('Please connect to MetaMask.');
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    console.log(currentAccount);
    // Do any other work!
  }
}

