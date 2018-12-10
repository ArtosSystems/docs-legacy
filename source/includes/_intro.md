# Introduction

We have developed the Aventus Protocol on behalf of the Aventus Foundation.

Below you will find a general architecture diagram outlining our core services and where data is being processed from the point of entry via our RESTful API. Each of these distinct services makes up the Artos Systems ecosystem and we aim to continue to develop these as our implementation matures.

![big](images/architecture-diagram-aws.png)

As shown in the above architecture diagram our technology stack is built in layers on top of the Ethereum blockchain and each product serves a purpose to ensure interaction via our endpoints is standardised and familiar for developers.

### Aventus Protocol

The Aventus Protocol is a global open standard for the exchange of tickets built upon the blockchain composed of smart contracts that allow for the creation and validation of events, the issuance and distribution of tickets in primary and secondary ticket markets. For more information, please refer to our [Whitepaper](https://aventus.io/doc/whitepaper.pdf) - or for a shorter read, our [Lightpaper](https://aventus.io/doc/lightpaper.pdf).

### Protocol Abstraction

Something of the blockchain are hard to deal with. We developed a family of services that help deal with the inherent challenges working with the blockchain provides.

**Patient** is a queuing system. A way to manage a large requests that will write to the blockchain. Think of the theortical ticket distribution systems that sends large amounts of requests to the blockchain, but the blockchain itself is really slow. Patient manages (i.e. queues) the transactions that are being sent to the blockchain. A user of Patient doesn’t need to know how to interact with the protocol as it operates as a high level layer between the protocol and the client. Patient users also don’t need to care about smart contracts, transaction fee’s etc. It auto adjusts the price paid for gas depending on the level of congestion on the blockchain.

**Honest** is a public API that allows any kind of application to look up information on the protocol. Anything that resides on the protocol can be seen and consumed by Honest.

**Modest** is our scaling solution for the blockchain, but firstly for the Aventus Protocol itself. It utilises Merkle trees to allow much quicker, concurrent processing of objects to the blockchain.

<aside class="notice">In the future we will add a specification for Modest here, and also a deeper explanation of how it works and how you can roll your own solution.</aside>

#### AWS Lambdas

We employ the use of AWS Lambdas throughout the technology stack as serverless middleware between services. These aren't distinct services themselves but simply allow for horizontally scalable data processing throughout the system.

### API Gateways

The core product you will be interacting with. A RESTful inteface to give you easy interaction with the protocol. For more, see below.

### SDKs

Including, but not exhaustive: Aventus4S - our Scala library for interacting with the protocol, and AventusJS - our Javascript library for interacting with the protocol. As we develop more SDKs, we will insert them here and in the relevant sub section.

### B2B/B2C Applications

#### White-Label Ticket Wallet

The Aventus Ticket Wallet is a white-label mobile application acting as the user facing client for loading and viewing tickets issued by the event creator. Originally designed as a proof-of-concept to show our end-to-end solution including access control but is built in a modular fashion to allow third parties to brand their own wallet using our technology under the hood.

<!--- Ermmmm??? This API documentation aims to make interacting the the Aventus Protocol as simple and straightforward as possible. --->

#### Ticket Wallet Modules

As we will elaborate on further down this documentation, the Ticket Wallet has been built in a modular fashion. As such, our white label solution _doesn't need_ to be the starting point of integrating our tickets with your application. In the section concerning the Ticket Wallet Modules specifically, we will list the options available for you.

#### METaL App

METaL is our protocol level interface for clients to create and manage events that will be delivered with the assistance of the Aventus Protocol. It enables users to create events and tickets with relevant CRUD functions. Further detail is provided later in this document.

# Before You Begin

This guide acts as developer reference for integrating with Aventus Protocol RESTful API covering interaction with events and tickets hence any language and instructional information assumes an existing technical knowledge of interacting via an API and the typical practices involved.

By sending HTTPS requests to specific URLs (endpoints) as a registered user you can easily harness the power of the Aventus Protocol allowing us to handle any corresponding complexity with writing and reading the Ethereum blockchain.

An API endpoint contains the URL of the resource that you want to access and the action that you want to complete on that resource. The action is indicated by the HTTP method of the request: GET, POST, PUT, or DELETE.

When you send an API request, the server returns an HTTP response. The HTTP response contains a status code to indicate whether the request succeeded and the details of the response in the response body. Most resources format this response as JavaScript Object Notation (JSON). You can use the JSON packages or libraries that are built in to the programming language that you use to extract the data.

Finally, Sandboxing abilities will be added to this document as we move towards completing our <kbd>Enterprise Grade</kbd> epic during Quarter 1.
