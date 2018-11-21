# Product-Level Glossary

A glossary of specific names, objects and functions referenced by Artos and the Aventus Protocol

<!--- Specifically relating to the errors connected to THIS guide. -->

## A
* **Access Control** is the method of entry (along with security protocols) to an _event (aventus)_, granted by a _ticket_
* **Activity** is a message used to communicate between services of the system. It can take two forms; _service events_ and _commands_
* **Aragon** is a platform for building blockchain companies (_DAOs_) on top of Ethereum. [More info](https://aragon.one/network/)
* **AvEntity** is a catch-all term used internally to refer to _challenge_-able members on the _Protocol_
* **Aventlink** refers to the links produced by the [Aventus Link Generator](https://github.com/AventusSystems/link-generator), which creates links that our Ticket Wallet can consume.
* **Aventus Community** is made up of _AVT_ token holders
* **Aventus Protocol** is composed of Ethereum _smart contracts_ that allow for the creation and validation of _events_, the issuance and sale of tickets in primary and secondary ticket markets (customisable by the event organisers), and the distribution of ticket sale revenue and market/event fees between the event organizers, ticket promoters, market matchers, attendees, etc.
* **Aventus Registry** tracks third parties using the _Protocol_, _events_ listed, and algorithmic parameters related to fees and time periods
* **AVT** the token used in the _Aventus Protocol_, originally reffered to as an AventCoin

## B
* **Bronze** is a new music format built on the blockchain [More info](http://bronze.ai.s3-website.eu-west-2.amazonaws.com/)
* **Business Unit** is any kind of client of Aventus (promoters, ticket sellers, etc.)

## C
* **Challenge (Proposal)** The _Aventus Community_ can _challenge_ the legitimacy of an _AvEntity_ on the _Protocol_ by adding a deposit and voting on it using a _stake_ of AVT
* **Client** see _Business Unit_
* **Command** is an _activity_ that asynchronously requests an action from a service. These activities are usually sent directly to the service's _queue_
* **Customer** our _business unit_'s clients

## D
* **DAO** (Decentralized Autonomous Organization) aims to hard-code certain company rules allowing an organization to exist without typical top-down hierarchical leadership structure via the blockchain. They rely on _smart contracts_, or pre-programmed rules that describe what can happen in the defined system. Rules of the DAO can be amended via a _governance proposal_
* **ÐApps** (Decentralized Applications) are digital applications or programs that run on the _Ethereum_ blockchain
* **Delegate Calls** Execute the code of another contract, but with the state (storage) of the calling contract. [More info](https://zupzup.org/smart-contract-interaction/)
* **Deposit** the AVT attached to the creation of a _Governance Proposal_ or _Event Challenge_
* **Deposit Fund** the section in the voting wallet _ÐApp_ that supports the initiation of a _Governance Proposal_ or _Event Challenges_ by a member of the _Aventus Community_. Once a deposit is used against either of these, the price of that deposit becomes locked within the fund until the proposal is complete

## E
* **ENS** is the equivalent of common DNS on the Ethereum network. [More info](https://medium.com/the-ethereum-name-service/a-beginners-guide-to-buying-an-ens-domain-3ccac2bdc770)
* **ERC20** token standard describes the functions and events (solidity) that an Ethereum token contract has to implement
* **Ether** is the name of the currency used within Ethereum. It is used to pay for computation within the _EVM_. This is done indirectly by purchasing _gas_ for _ether_
* **Ethereum** is a decentralized platform for applications that run exactly as programmed without any chance of fraud, censorship or third-party interference. [More info](https://github.com/ethereum/wiki/wiki/White-Paper)
* **Event (Aventus)** is an AFK physical ticketed event (eg. live music, sports game), with an _event owner_, title, location, date, ticket total and a deposit (for voting)
* **Event (Solidity)** is an _activity_ that notifies to any listener that something happened on the originating service. This activities are usually published to a _topic_
* **Event Owner** the rightsholder of an _event (aventus)_, or more accurately the specific Ethereum address of said rightsholder
* **EVM Code** is the binary code of Ethereum contracts compiled from _Solidity_ which is then executable by the Ethereum Virtual Machine. [More info](https://github.com/ethereum/wiki/wiki/Ethereum-Virtual-Machine-(EVM)-Awesome-List)

## G
* **Ganache** is a Node.js based Ethereum client for testing and development (previously referred to as 'testRPC'). [More info](http://truffleframework.com/ganache/)
* **Gas** is the _ether_ execution fee for every operation made on the Ethereum network. [More info](https://blockgeeks.com/guides/ethereum-gas-step-by-step-guide/)
* **Governance Proposal** _Aventus Community members_ can propose governance changes to the algorithmic parameters (_Magic Numbers_) on the _Parameter Registry_ and vote on whether they are applied using a _stake_ of AVT

## H
* **Hashing** takes an input string of any length and gives out an encrypted output of a deterministic fixed length string. [Give it a go here :P](https://emn178.github.io/online-tools/keccak_256.html)

## I
* **IMS** (Inventory Management Service) is a Scala application that can be used as an off-chain central store of inventory

## K
* **KECCAK-256** is the cryptographic _hashing_ function used within _Ethereum_

## L
* **Lambda** is an event-driven, serverless computing platform provided by Amazon as a part of the Amazon Web Services (AWS). It is a computing service that runs code in response to events and automatically manages the computing resources required by that code [More info](https://aws.amazon.com/lambda/)
* **Libraries** in Ethereum are special types of contract which do not store data and cannot hold _ether_. They are are only required to be deployed once and their functions can then be called by any _smart contract_ via _delegate calls_. [More info](https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736)
* **Lobbying Period** is the 2 week time slot at the start of the proposal process where the _Aventus Community_ can externally discuss and debate a _Governance Proposal_ or _Event Challenge_, followed by the _Voting Period_

## M
* **Magic Numbers** are the algorithmic parameters stored in the _Aventus Registry_
* **Merkle Tree** is a tree constructed by _hashing_ paired binary data (the leaves), then pairing and _hashing_ the results until a single hash remains, which is known as the merkle root. A possible solution for blockchain transaction scaling. Our implementation is our newest virtue service: Modest.
* **MetaMask** is a browser extension which enables you to interact with the any Ethereum blockchain without having to run a full _node_. [More info](https://metamask.io/##how-it-works)
* **Migrations** in Truffle are Javascript files which help you deploy contracts to the Ethereum network. A history of migrations is recorded on-chain via the Migrations.sol contract. [More info](https://ethereum.stackexchange.com/questions/8299/what-are-truffle-migrations)
* **Modest** The name of our Merkle Tree based scaling solution, see above.
* **Multi-Signature Wallets** are used to safeguard ether or tokens held by an entity. [More info](https://medium.com/hellogold/ethereum-multi-signature-wallets-77ab926ab63b)

## N
* **Node** is a piece of software that connects to other nodes, thus participating in the formation of the network. A node stores the blockchain, and a node can mine (but doesn't have to)

## O
* **Oraclize** Blockchain _smart contracts_ cannot access and directly fetch the data they require so an Oracle is a party which provides data. [More info](https://docs.oraclize.it/##home)

## P
* **Partial-lock voting** is a token-based voting system where votes are hidden during a voting period before being revealed during the reveal period. As soon as one vote enters the reveal period all committed tokens are locked until all votes have been revealed. [More info](https://blog.colony.io/towards-better-ethereum-voting-protocols-7e54cb5a0119)
* **Plasma** is a suggested mechanism for managing Ethereum child-chains, which can be used to process transactions off the Ethereum main-chain, in order to provide greater network transaction capacity and speed, and cost reduction. [More info](https://medium.com/@argongroup/ethereum-plasma-explained-608720d3c60e)
* **Private Key** In cryptography, a private key (secret key) is a variable that is used with an algorithm to encrypt and decrypt code
* **Proxy Library Pattern** in _Solidity_ is a means to upgrade Solidity libraries via the use of _delegate calls_ and a library address storage intermediary. [More info](https://blog.zeppelin.solutions/proxy-libraries-in-solidity-79fbe4b970fd)
[More detailed info](https://blog.zeppelinos.org/proxy-patterns/)

## Q
* **Quorum** is the minimum number of _votes_ required to be allowed to perform an operation
* **Queue** is an asynchronous message based communication system that aims to decouple different parts of the platform

## R
* **Remix** is a simple, browser-based, IDE for _Solidity_ development. [More info](https://github.com/AventusSystems/wiki/Remix)
* **Reservation Cancellation** is an operation performed when the client wants to remove a _ticket reservation_. It will invalidate the _ticket reservation_ and return the _tickets_ to the available pool. This should be executed when the _client_ cancels a _customer_'s _ticket_
* **Reveal Period** is the 1 week time slot following a _Voting Period_ at the end of the proposal process where the _Aventus Community_ can reveal their vote by re-submitting a secret signed _vote_ on a _Governance Proposal_ or _Event Challenge_. Once all votes have been revealed then the proposal process can be concluded and _vote_ _stakes_ are tallied to decide a winner
* **Rinkeby** is our public test network for the Protocol

## S
* **Sale Channel** is an integrated sale point, it will belong to a _business unit_
* **Schelling Point** is from game theory, a solution people will tend to converge upon in the absence of communication, because it seems natural, special, or relevant to them. [More info](https://en.wikipedia.org/wiki/Focal_point_(game_theory))
* **Secret** is the term used to refer to the unique _ticket_ reference required in the instance when the _access control_ setup of a venue is not integrated with Aventus, meaning they will not perform any processing on the door. Anyone with the _secret_ can gain entry to the venue so it is only known by the primary agent and the buyer of the ticket and not stored openly on the blockchain
* **Smart Contract** is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. [More info](https://www.coindesk.com/information/ethereum-smart-contracts-work/)
* **Solidity** is a contract-oriented programming language for writing smart contracts that runs on _EVM Code_. [More info](http://solidity.readthedocs.io/en/v0.4.24/)
* **Stake** The AVT value stake laid down during voting on a _challenge proposal_ or _governance proposal_ which cannot be amended during a pending _vote_
* **Stake Fund** is the section in the voting wallet _ÐApp_ that holds AVT _stake_

## T
* **Ticket** is a unique identifier assigned to the purchaser of a _ticket_ (ticket owner) that allows access to an _event (aventus)_ which will have an allocation (eg. row and seat number) and price properties describing it's transfer conditions
* **TicketKey** see: Secret
* **Ticket Lock** is a system entity that will ensure that the best _tickets_ for the selection requested at the time of the _ticket reservation_ will be allocated to the user. A ticket lock does not have a direct link to a particular allocation as that will be determined at the time the _ticket reservation_ is created. It will only ensure that the _ticket reservation_ can be executed at any time before the timeout occurs. This operation will be requested by the _client_ prior to taking the payment
* **Ticket Reservation** is a system entity that takes a set of _tickets_ permanently out of sale, this operation will be requested by the _client_ after the payment is taken
* **Token Curated Registry** is a design pattern which provides a means of curating a list (such as a list of non-fraudulent events) via stake-weighted voting. [More info](https://medium.com/coinmonks/token-curated-registry-tcr-design-patterns-4de6d18efa15)
* **Topic** is a message source to which applications can subscribe their own _queues_. Messages on a topic will be multicast to all the subscribed _queues_

## V
* **Virtues** these are referencing our three servies to interact with the protocol: Honest, Patient & Modest.
* **Vote** the _Aventus Community_ can vote during a _challenge proposal_ or _governance proposal_ by laying down a _stake_ of AVT with their vote choice
* **Voting Period** is the 1 week time slot following a _Lobbying Period_ during the proposal process where the _Aventus Community_ can submit secret signed _votes_ on a _Governance Proposal_ or _Event Challenge_

## W
* **Wei** is a base _ether_ denomination, like cents to dollars, equivalent to Bitcoin Satoshis [More info](http://ethdocs.org/en/latest/ether.html)



# Technical Glossary

A more developer focussed glossary to keep track of variable names, ID types, methods and functions within Artos Systems

## Roles

* **Event Owner** The registered event owner. The only one who can create or cancel an event and the only one who can register/deregister roles on the event. Can also sell, resell or return (refund) tickets. Can also act as a _broker_.
* **Primary** A ticket vendor for the primary market (initial ticket sales), registered on the event. Can also act as a _broker_.
* **Secondary** A third party ticket reseller for the secondary market (secondhand tickets for resale), registered on the event. Can also act as a _broker_.
* **Vendor** Primary market ticket seller: either a _primary_ or an _event owner_.
* **Reseller** Secondary market ticket reseller: either a _secondary_ or an _event owner_.
* **Ticket Owner** The owner of the ticket. Initially the buyer but from there on always the person who could currently attend the event, as the ticket changes states from owned to listed to resold/transferred etc
* **Friend** Someone trusted by the _ticket owner_ they are willing to transfer the _door data_ to.
* **Broker** Able to interact with the protocol on behalf of any of the above roles (_event owner, ticket owner, primary, secondary_). If they have individually granted them permission via the correct proof. Can (optionally) be registered on an event. Must be registered if they're dealing with blank tickets or transferring tickets.

# Scaling


## Merkle Tree

A tree data structure constructed by hashing the leaves, then packing leaves pair-wise  and hashing the results until a single hash remains, which is known as the _merkle root_. This is the basis of our solution for blockchain scaling. It is the latest virtue service named Modest.


## Merkle Leaf

Data in a merkle leaf - this is hashed when used in the proof. Existence of a leaf in a _merkle tree_ can be efficiently computed from the leaf and a _Merkle Path (Merkle Proof)_.

Existing terms:



*   **Merkle Leaf** - is a tuple of LeafContent and id
*   LeafContent
*   Leaf Hash


## Merkle Leaf Data

the ordered leaf contents to create the merkle leaf hash:

	(eventId, vendorTicketRefHash, ticketMetadata, ticketOwner, listTicketVendorProof, doorData)


## Merkle Root

The final hash generated by hashing each level of the tree which is the only thing being added to the blockchain in the scaling case

Existing terms:



*   **Merkle Root**
*   Root Hash


## Merkle Path

Array of all the sibling hashes between the leaf and the root (excludes the _leaf hash_ and _root hash_ themselves)


## Merkle Proof

An abstract term, the means of proving a _merkle leaf_'s inclusion in the _merkle tree_. Calculated from the leaf hash, the merkle path, and the merkle root. In the protocol the merkle path and components of the merkle leaf data are passed separately, the merkle leaf hash is then generated, and the merkle root is calculated from the merkle path and merkle leaf hash and then checked against its registered existence in the blockchain. This is used to efficiently prove a ticket has been registered in the blockchain.

Existing terms:



*   **Merkle Proof**
*   originalProof
*   Merkle Path


# IDs


## Vendor Ticket Ref

External reference unique to that particular _vendor_ for that particular event


## VendorTicketRefHash

The vendor ticket ref is passed in hashed, it is then appended with the vendor address and hashed again to ensure uniqueness across vendors, before being cast into the protocol _Ticket ID_

Existing terms:



*   **VendorTicketRefHash**
*   ticketReference
*   Ticket ID


## Ticket ID

A unique ticket reference for each ticket made up of the _VendorTicketRefHash_ and the vendor address to ensure proper uniqueness across multiple _primary_ vendors. In a uint256 format


## Event ID

A unique (always incrementing) ID number associated with each event that is assigned by the Protocol. Globally unique across the protocol and all events to ever exist in it - nothing to do with any external event ID a particular event owner might use


## Key Pair 1

public and private key of _ticket owner_, generated by wallet, only used for proof of ownership to blockchain (and proof at door if AC is integrated)

Existing terms:



*   **Key Pair 1**
*   PuK1
*   Proof Public Key


## Key Pair 2

public and private key of _ticket owner_, generated by wallet, used for proof of ticket at the door in the non-integrated AC scenarios

Existing terms:



*   **Key Pair 2**
*   PuK2
*   Access Control Public Key


## Signed Proofs (currently under construction)

**NOTE**: See [signingTestHelper.js](https://github.com/AventusSystems/protocol/blob/master/test/helpers/signingTestHelper.js) for how to construct each of these.

The mandatory, unique proofs required by all Event and Ticket transactions on the protocol.

Naming format: [function name + authorising role + "Proof"]


## creatEventEventOwnerProof


## cancelEventEventOwnerProof


## sellTicketVendorProof


## cancelTicketVendorProof


## resellTicketTicketOwnerProof


## resellTicketResellerProof


## listTicketTicketOwnerProof


## listTicketVendorProof

Existing terms:



*   **listTicketVendorProof**
*   originalProof


## sendToFriendTicketOwnerProof


## Ticket Owner Proof

Signed data by _ticket owner_ using _Key Pair 1 _that _brokers_ can use to interact with the protocol (must contain broker PuK)


# Tickets


## Sell Ticket

Initial creation of a ticket


## Resell Ticket

Change the ownership of a ticket


## Cancel Ticket

Cancels a ticket

Existing terms:



*   **Cancel Ticket**
*   Return Ticket
*   Refund Ticket


## Onsale

The time at which tickets are available to buy from a _primary _or be resold via the secondary market

Existing terms:



*   **Onsale**
*   Ticket Sale Period


## Offsale

The time at which tickets are no longer available to buy from a _primary_

Existing terms:



*   **Offsale**
*   Event Time


## Ticket Metadata

Data points associated with tickets that are not required by the protocol, like; venue, event time, seat number, etc

Existing terms:



*   **Ticket Metadata**
*   ticketData
*   Ticket Details
*   Meta


## Door Data

The piece of data only known by the _primary_ and the _ticket holder_ used to derive the valid public key associated with a ticket at the door. The secret is signed twice - by the primary then by the ticket owner - and stored on the blockchain in this state so it is obscured unless EC Recovered by the relevant parties.

Existing terms:



*   **doorData**
*   Secret
*   TicketKey
*   Doubly Signed Secret


# Ticket Statuses


## Event Based


## Pending

Time-Based State: When a ticket holder initially purchases their ticket and clicks the link sent to them via email the wallet will load up a ticket whilst the ticket in an initial state while it is being added to a Merkle tree. This 'Pending' state is not clickable and remains until the Merkle proof is returned from Modest


## Ready

Time-Based State: Once the Merkle proof is returned to the wallet the ticket enters a 'Ready' state where it also becomes 'Actionable' (see Action-Based States). This state is the default normal time-based state of a ticket and remains in place until X hours before the event


## Active

Time-Based State: X hours before the event the ticket enters an 'Active' state in which the QR code becomes visible and can be used for access control


## Expired

Time-Based State: X hours after the event time the ticket enters an 'Expired' inactive state in which the ticket cannot be interacted with. The ticket remains in a visible state as a history for the user


## Ticket Based


## Actionable

Action-Based State: A ticket is in an 'Actionable' state once it has reached a 'Ready' time-based state (ie. it is fully loaded into the wallet), which means actions can be taken on it (List for Resale, Transfer, etc). This is the default normal action-based state of a ticket and remains in place for the tickets lifespan


## Listing

Action-Based State: Once a user enacts the 'List for Resale' function on a ticket the ticket enters a loading state whilst behind the scenes the ticket is being listed on the blockchain from a merkle tree


## Listed

Action-Based State: Once the ticket has been copied over to the blockchain from a merkle tree the ticket enters a 'Listed' state meaning it's ready to post with a secondary


## Posting

Action-Based State: Once a user enacts the 'List for Resale' function on a ticket the ticket enters a loading state whilst behind the scenes the ticket is being listed with the secondary. This step can only take place once the ticket has been 'Listed' on the blockchain


## Posted

Action-Based State: Once the ticket has been posted on a secondary market site the ticket enters a 'Posted' state until someone purchases it via the secondary


## Confirm Resale

Action-Based State: Once the secondary finds a buyer for the ticket, they communicate this back to the seller at which point the sellers wallet prompts the user to approve the resale


## Sold

Action-Based State: Once someone buys the listed ticket via the secondary and the sale is approved by the seller, the ticket enters a 'Sold' inactive state in which the ticket cannot be interacted with. The ticket remains in a greyed out visible state as a history for the user


# Events


## eventDesc

A human readable string associated with an event to act as a descriptive title for that event, eg. "Adele at Wembley Stadium", which is used alongside other parameters (eventSupportURL,onSaleTime, offSaleTime) to create a unique reference for the event


# Event States


## Non-existent

Never existed or has been completely shut down via failing a challenge or ending naturally


## Reporting

before the "on-sale" period; waiting for a potential challenge


## Trading

in the "on-sale" period


## Inactive

after sales period, waiting for endEvent to be called in order to release the deposit: a.k.a. Z O M B I E event


<!-- GD2md-html version 1.0β13 -->
