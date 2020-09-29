<style>
img {
    width: 200px;
}

</style>

# Ethereum

#### Table of contents

1. [Introduction](#introduction)
    - [What is Ethereum](#what-is-ethereum)
2. [Smart Contracts](#smart-contracts)
    - [The Oracle Problem](#the-oracle-problem)
3. [DAOs - Decentralized Autonomous Organizations](#DAOs)
    - [Subsection a](#subsection-a)
    - [Subsection b](#subsection-b)


## Introduction

### What is Ethereum?
Ethereum is hard to summarize in a single definition. I think it is easier to define by what it _has_ and _does_ rather than by what it _is_. Ethereum is a platform, based on two primary entities:
1. __The Ethereum blockchain__: Ethereum has a single main chain, used to log all transactions on the networks.
2. __The Ethereum Virual Machine (EVM)__: The EVM is a _[Turing complete](https://stackoverflow.com/questions/7284/what-is-turing-complete)_ computer that can execute code. The code on Ethereum is largely made up of _smart contracts_. Smart contracts are contracts written into code, designed to run autonomously.

If Bitcoin is the first crypto-currency, Ethereum is the first crypto-platform.

Bitcoin: The protocol is in service of the currency
Ethereum: The currency is in service of the protocol.

### Smart Contracts

The idea of a _[Smart Contract](https://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart_contracts_2.html)_ was introduced in 1996 in a paper by Nick Szabo, a cypherpunk, cryptographer and computer scientist. There was speculation that he was Satoshi Nakamoto--the inventor of Bitcoin--but that has been disproven.

>"The basic idea of smart contracts is that many kinds of contractual clauses (such as liens, bonding, delineation of property rights, etc.) can be embedded in the hardware and software we deal with, in such a way as to make breach of contract expensive (if desired, sometimes prohibitively so) for the breacher. A canonical real-life example, which we might consider to be the primitive ancestor of smart contracts, is the humble vending machine. Within a limited amount of potential loss (the amount in the till should be less than the cost of breaching the mechanism), the machine takes in coins, and via a simple mechanism, which makes a beginner's level problem in design with finite automata, dispense change and product fairly. Smart contracts go beyond the vending machine in proposing to embed contracts in all sorts of property that is valuable and controlled by digital means."

![vending machine](images/vending_machine.jpg)
Vending machine: A common analogy for a smart contract: Money goes into the system, the system waits for keypad input, the system dispenses items + change.

Other blockchains have smart contract capabilities, but Ethereum was of the first blockchains to foreground them. Today, Ethereum is second behind Bitcoin in terms of marketcap, but because of its endless amount of potential uses, its adoption is growing quickly.

Smart contracts on Ethereum are being used for all sorts of things, including but not limited to:
1. Authorizing ownership digital assets (of art, for example)
2. [Managing supply chains](https://cointelegraph.com/news/coca-cola-embraces-dlt-and-ethereum-for-supply-chain-efficiency)
3. Prediction Markets (Augur)
4. Decentralized Finance (Info coming soon)
5. Maintaining Decentralized Governance

It remains to be seen what the "killer app" for smart contracts will be. There are certainly [failures](https://mashable.com/2018/01/11/sexual-consent-legalfling-app-blockchain/)...

There are a number of concepts and historical events that are key to our understanding of Ethereum.

An expanding list of topics we'll be covering over the next few weeks:

1. __Smart Contracts:__ Autonomous, "unstoppable" code on the blockchain. "Code == Law"
2. __Environmental Impact:__ Ethereum plans to cut 99% of its energy use at some point in the near future. Until then, your average ETH transaction uses [nearly as much electricity as a day's worth of electricity in an average USA home](https://digiconomist.net/ethereum-energy-consumption/).
3. __The Oracle Problem:__ "Garbage in; garbage out." How do we verify the accuracy or truth of information so that it can satisfy a smart contract, and thus be added to the blockchain forever?
4. __Decentralized Autonomous Organizations:__ What alternative governance models do smart contract and blockchain-based protocol provide? Can an organization govern itself non-hierarchically through blockchains and cryptocurrency? How do DAOs intersect with posthumanism in a way that allows non-human entities to govern themselves, and be part of governance systems with humans?
5. __The Ethereum Virtual Machine and Planetary Scale Computation:__ What are the implications of a single global decentralized computer? Where does The EVM exist in Benjamin Bratton's hypothetical "Stack." What is IPFS and how do we store our files in a decentralized way?
6. __Altcoins and Ethereum:__ It turns out many of the tokens out in the world use Ethereum's "featureless" infrastructure as a baseline to build upon. Most of the tokens we engage with in the class find their way back to Ethereum at some point.
7. __Ethereum 1.0 --> 2.0:__ The jump from Proof-of-Work to Proof-of-stake, as well as sharding to address scaling. This seems like it will happen in the next 12-18 months.
8. __Crytpo Art and "Rare Digitals":__ At the time of writing this (late September, 2020), the hype for Crypto Art is at an all-time high, with more established artists finally getting into the scene...and a lot of them feel weird about it. What does this do to Art?
9. __State vs. non-State collaboration:__ Do protocols like Ethereum threaten state powers? Or do governments and their institutions adopt these technologies? We recently saw that the USPS filed a patent for a blockchain-facilitated mail-in voting system.
10. __Developing for Ethereum:__ Developing for Ethereum is challenging, but we can find ways to use it for our creative needs. Smart Contracts on Ethereum are primarily programmed with a language called Solidity. Companies such as OpenZeppelin have built fantastic open-source smart contract templates that help deal with the crucial, fundamental bits of code that are required for every smart contract to be secure. What are Token Standards (ERC-20, ERC 721), What are gas fees and why are they so high right now? How do we connect our smart contracts with a web page or web app?
11. __History:__ How did the DAO hack shape Ethereum's trajectory?
12. __Decentralized Finance (DeFi):__ ???
13. __Automation:__ If artificial intelligence allows software and robots and to take our jobs...it'll be the smart contracts that hire them to do it.
14. __Art:__ You think I'd forgotten? Separate from thinking about how blockchains are changing the way art operates in the art market, how can we make Art (in the critical art+technology) sense around blockchain? The list of concepts above circle around fundamental ideas of how we organize ourselves at the societal level, down through to the personal level. While blockchains and crypto have pulled our focus to some fundamental questions, these questions may not rely on blockchains to be relevant.




