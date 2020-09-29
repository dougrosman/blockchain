# Solidity Programming

## Terminology

- __Transaction (Tx):__ Any time you want to change some information on the blockchain using a smart contract, you will create a transaction. Every action that manipulates data on the blockchain is a transaction.




## Solidity Key Syntax

- Function Modifier Keywords
  - View: This makes it so the function will not affect the data stored in the smart contract. You only need to __view__ the data in the smart contract.
  - Pure: A read-only computation, but instead of returning a value from the blockchain, it will calculate some new data on the fly and return that (for example, calculate a hash, or add two random numbers together)
- Function Visibility Keywords: allow you to define who can have access to your function. General rule of thumb: always be as restrictive as possible. Variables as well as functions can be given visibility modifers.:
  - Private: can only be accessed _within_ the contract itself.
  - Internal: similar to private, but it can be called from contracts that inherit the contract with that function.
  - External: can only be called from outside the smart contract
  - Public: the most permissive, can be called from either within the contract (internal) or from outside (external)
- _Private caveat:_ this is a little annoying to wrap your head around, but technically, variables that you create as private are still publicly visible on the blockchain (since everything on a blockchain is publicly visible)
- Storage Types:
  - Storage:
  - Memory:
  - stack:
  - calldata: