# Glossary

* **Access Control** is the method of entry (along with security protocols) to an _event (aventus)_, granted by a _ticket_
* **Aventus Community** is made up of _AVT_ token holders
* **Aventus Protocol** is composed of Ethereum _smart contracts_ that allow for the creation and validation of _events_, the issuance and sale of tickets in primary and secondary ticket markets (customisable by the event organisers), and the distribution of ticket sale revenue and market/event fees between the event organizers, ticket promoters, market matchers, attendees, etc.
* **Aventus Registry** tracks third parties using the _Protocol_, _events_ listed, and algorithmic parameters related to fees and time periods
* **AVT** the token used in the _Aventus Protocol_, originally reffered to as an AventCoin
* **Challenge (Proposal)** The _Aventus Community_ can _challenge_ the legitimacy of an _AvEntity_ on the _Protocol_ by adding a deposit and voting on it using a _stake_ of AVT
* **Deposit** the AVT attached to the creation of a _Governance Proposal_ or _Event Challenge_
* **Deposit Fund** the section in the voting wallet _ÐApp_ that supports the initiation of a _Governance Proposal_ or _Event Challenges_ by a member of the _Aventus Community_. Once a deposit is used against either of these, the price of that deposit becomes locked within the fund until the proposal is complete
* **Event (Aventus)** is an AFK physical ticketed event (eg. live music, sports game), with an _event owner_, title, location, date, ticket total and a deposit (for voting)
* **Event Owner** the rightsholder of an _event (aventus)_, or more accurately the specific Ethereum address of said rightsholder
* **Governance Proposal** _Aventus Community members_ can propose governance changes to the algorithmic parameters (_Magic Numbers_) on the _Parameter Registry_ and vote on whether they are applied using a _stake_ of AVT
* **Hashing** takes an input string of any length and gives out an encrypted output of a deterministic fixed length string. [Give it a go here :P](https://emn178.github.io/online-tools/keccak_256.html)
* **Lambda** is an event-driven, serverless computing platform provided by Amazon as a part of the Amazon Web Services (AWS). It is a computing service that runs code in response to events and automatically manages the computing resources required by that code [More info](https://aws.amazon.com/lambda/)
* **Lobbying Period** is the 2 week time slot at the start of the proposal process where the _Aventus Community_ can externally discuss and debate a _Governance Proposal_ or _Event Challenge_, followed by the _Voting Period_
* **Modest** The name of our Merkle Tree based scaling solution, see above.
* **Reveal Period** is the 1 week time slot following a _Voting Period_ at the end of the proposal process where the _Aventus Community_ can reveal their vote by re-submitting a secret signed _vote_ on a _Governance Proposal_ or _Event Challenge_. Once all votes have been revealed then the proposal process can be concluded and _vote_ _stakes_ are tallied to decide a winner
* **Stake** The AVT value stake laid down during voting on a _challenge proposal_ or _governance proposal_ which cannot be amended during a pending _vote_
* **Stake Fund** is the section in the voting wallet _ÐApp_ that holds AVT _stake_
* **Ticket** is a unique identifier assigned to the purchaser of a _ticket_ (ticket owner) that allows access to an _event (aventus)_ which will have an allocation (eg. row and seat number) and price properties describing it's transfer conditions
* **Vote** the _Aventus Community_ can vote during a _challenge proposal_ or _governance proposal_ by laying down a _stake_ of AVT with their vote choice
* **Voting Period** is the 1 week time slot following a _Lobbying Period_ during the proposal process where the _Aventus Community_ can submit secret signed _votes_ on a _Governance Proposal_ or _Event Challenge_

## Blockchain
* **Ether** is the name of the currency used within Ethereum. It is used to pay for computation within the _EVM_. This is done indirectly by purchasing _gas_ for _ether_
* **Ethereum** is a decentralized platform for applications that run exactly as programmed without any chance of fraud, censorship or third-party interference. [More info](https://github.com/ethereum/wiki/wiki/White-Paper)
* **Event (Solidity)** is an _activity_ that notifies to any listener that something happened on the originating service. This activities are usually published to a _topic_
* **Ganache** is a Node.js based Ethereum client for testing and development (previously referred to as 'testRPC'). [More info](http://truffleframework.com/ganache/)
* **Gas** is the _ether_ execution fee for every operation made on the Ethereum network. [More info](https://blockgeeks.com/guides/ethereum-gas-step-by-step-guide/)
* **Libraries** in Ethereum are special types of contract which do not store data and cannot hold _ether_. They are are only required to be deployed once and their functions can then be called by any _smart contract_ via _delegate calls_. [More info](https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736)
* **Rinkeby** is a public test Ethereum network for the Protocol
* **Solidity** is a contract-oriented programming language for writing smart contracts that runs on _EVM Code_. [More info](http://solidity.readthedocs.io/en/v0.4.24/)

## Roles
* **Event Owner** The registered event owner. The only one who can create or cancel an event and the only one who can register/deregister roles on the event. Can also sell, resell or return (refund) tickets. Can also act as a _broker_.
* **Primary** A ticket vendor for the primary market (initial ticket sales), registered on the event. Can also act as a _broker_.
* **Secondary** A third party ticket reseller for the secondary market (secondhand tickets for resale), registered on the event. Can also act as a _broker_.
* **Vendor** Primary market ticket seller: either a _primary_ or an _event owner_.
* **Reseller** Secondary market ticket reseller: either a _secondary_ or an _event owner_.
* **Ticket Owner** The owner of the ticket. Initially the buyer but from there on always the person who could currently attend the event, as the ticket changes states from owned to listed to resold/transferred etc
* **Friend** Someone trusted by the _ticket owner_ they are willing to transfer the _door data_ to.
* **Broker** Able to interact with the protocol on behalf of any of the above roles (_event owner, ticket owner, primary, secondary_). If they have individually granted them permission via the correct proof. Can (optionally) be registered on an event. Must be registered if they're dealing with blank tickets or transferring tickets.

## Scaling
* **Merkle Tree** A tree data structure constructed by hashing the leaves, then packing leaves pair-wise  and hashing the results until a single hash remains, which is known as the _Merkle root_. This is the basis of our solution for blockchain scaling. It is the latest virtue service named Modest.
* **Merkle Leaf** Data in a Merkle leaf - this is hashed when used in the proof. Existence of a leaf in a _Merkle tree_ can be efficiently computed from the leaf and a _Merkle Path (Merkle Proof)_. is a tuple of LeafContent and id.
* **Merkle Leaf Data** the ordered leaf contents to create the Merkle leaf hash: `(eventId, vendorTicketRefHash, ticketMetadata, ticketOwner, listTicketVendorProof, doorData)`
* **Merkle Root** The final hash generated by hashing each level of the tree which is the only thing being added to the blockchain in the scaling case
* **Merkle Path** Array of all the sibling hashes between the leaf and the root (excludes the _leaf hash_ and _root hash_ themselves)
* **Merkle Proof** An abstract term, the means of proving a _Merkle leaf_'s inclusion in the _Merkle tree_. Calculated from the leaf hash, the Merkle path, and the Merkle root. In the protocol the Merkle path and components of the Merkle leaf data are passed separately, the Merkle leaf hash is then generated, and the Merkle root is calculated from the Merkle path and Merkle leaf hash and then checked against its registered existence in the blockchain. This is used to efficiently prove a ticket has been registered in the blockchain.

## IDs
* **Vendor Ticket Ref** External reference unique to that particular _vendor_ for that particular event.
* **VendorTicketRefHash** The vendor ticket ref is passed in hashed, it is then appended with the vendor address and hashed again to ensure uniqueness across vendors, before being cast into the protocol _Ticket ID_.
* **Ticket ID** A unique ticket reference for each ticket made up of the _VendorTicketRefHash_ and the vendor address to ensure proper uniqueness across multiple _primary_ vendors. In a uint256 format.
* **Event ID** A unique (always incrementing) ID number associated with each event that is assigned by the Protocol. Globally unique across the protocol and all events to ever exist in it - nothing to do with any external event ID a particular event owner might use
* **Key Pair 1** public and private key of _ticket owner_, generated by wallet, only used for proof of ownership to blockchain (and proof at door if AC is integrated)
* **Key Pair 2** public and private key of _ticket owner_, generated by wallet, used for proof of ticket at the door in the non-integrated AC scenarios

## Signed Proofs

The mandatory, unique proofs required by all Event and Ticket transactions on the protocol.

<aside class="notice">
Naming format: [function name + authorising role + "Proof"]
</aside>

* **createEventEventOwnerProof** `sign(eventOwner, hash(eventDescHash, urlHash, onSaleTime, offSaleTime, averageTicketPriceInUSCents)`
* **cancelEventEventOwnerProof** `sign(eventOwner, hash(eventId))`
* **sellTicketVendorProof ("blank ticket" only)** Same as _listTicketVendorProof_
`sign(vendor, hash(eventId, vendorTicketRefHash))`
* **cancelTicketVendorProof** `sign(vendor, hash(eventId, ticketId, ticketOwner))`
* **resellTicketTicketOwnerProof** `sign(currentOwner, hash(eventId, ticketId, currentOwner))`
* **resellTicketResellerProof ("blank ticket" only)** `sign(reseller, hash(eventId, ticketId, ticketOwnerProof))`
* **listTicketTicketOwnerProof** `sign(ticketOwner, hash(vendorTicketRef))`
* **listTicketVendorProof ("blank ticket" only)** Same as _sellTicketVendorProof_ `sign(vendor, hash(eventId, vendorTicketRefHash))`
* **ticketOwnerProof**
Signed data by ticket owner using Key Pair 1 that brokers can use to interact with the protocol (must contain broker PuK)

## Tickets
* **Sell Ticket** Initial creation of a ticket
* **Resell Ticket** Change the ownership of a ticket
* **Cancel Ticket** Cancels a ticket
* **Onsale** The time at which tickets are available to buy from a _primary_ or be resold via the secondary market.
* **Offsale** The time at which tickets are no longer available to buy from a _primary_.
* **Ticket Metadata** Data points associated with tickets that are not required by the protocol, like; venue, event time, seat number, etc
* **Door Data** The piece of data only known by the _primary_ and the _ticket holder_ used to derive the valid public key associated with a ticket at the door. The secret is signed twice - by the primary then by the ticket owner - and stored on the blockchain in this state so it is obscured unless EC Recovered by the relevant parties.

## Ticket Statuses

### Event Based
* **Pending** Time-Based State: When a ticket holder initially purchases their ticket and clicks the link sent to them via email the wallet will load up a ticket whilst the ticket in an initial state while it is being added to a Merkle tree. This 'Pending' state is not clickable and remains until the Merkle proof is returned from Modest
* **Ready** Time-Based State: Once the Merkle proof is returned to the wallet the ticket enters a 'Ready' state where it also becomes 'Actionable' (see Action-Based States). This state is the default normal time-based state of a ticket and remains in place until X hours before the event
* **Active** Time-Based State: X hours before the event the ticket enters an 'Active' state in which the QR code becomes visible and can be used for access control
* **Expired** Time-Based State: X hours after the event time the ticket enters an 'Expired' inactive state in which the ticket cannot be interacted with. The ticket remains in a visible state as a history for the user

### Ticket Based
* **Actionable** Action-Based State: A ticket is in an 'Actionable' state once it has reached a 'Ready' time-based state (ie. it is fully loaded into the wallet), which means actions can be taken on it (List for Resale, Transfer, etc). This is the default normal action-based state of a ticket and remains in place for the tickets lifespan
* **Listing** Action-Based State: Once a user enacts the 'List for Resale' function on a ticket the ticket enters a loading state whilst behind the scenes the ticket is being listed on the blockchain from a Merkle tree
* **Listed** Action-Based State: Once the ticket has been copied over to the blockchain from a Merkle tree the ticket enters a 'Listed' state meaning it's ready to post with a secondary
* **Posting** Action-Based State: Once a user enacts the 'List for Resale' function on a ticket the ticket enters a loading state whilst behind the scenes the ticket is being listed with the secondary. This step can only take place once the ticket has been 'Listed' on the blockchain
* **Posted** Action-Based State: Once the ticket has been posted on a secondary market site the ticket enters a 'Posted' state until someone purchases it via the secondary
* **Confirm Resale** Action-Based State: Once the secondary finds a buyer for the ticket, they communicate this back to the seller at which point the sellers wallet prompts the user to approve the resale
* **Sold** Action-Based State: Once someone buys the listed ticket via the secondary and the sale is approved by the seller, the ticket enters a 'Sold' inactive state in which the ticket cannot be interacted with. The ticket remains in a greyed out visible state as a history for the user

## Events
* **eventDesc** A human readable string associated with an event to act as a descriptive title for that event, eg. "Adele at Wembley Stadium", which is used alongside other parameters (eventSupportURL, onSaleTime, offSaleTime) to create a unique reference for the event
* **Non-existent** Never existed or has been completely shut down via failing a challenge or ending naturally
* **Reporting** Before the "on-sale" period; waiting for a potential challenge
* **Trading** in the "on-sale" period
* **Inactive** After sales period, waiting for endEvent to be called in order to release the deposit: a.k.a. Z O M B I E event
