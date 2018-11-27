---
title: API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - json

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/AventusProtocolFoundation/protocol'>Aventus Protocol on GitHub</a>

includes:
  - Wallet Modularisation
  - SDKs
  - errors
  - glossary

search: true
---

# Introduction

Welcome, to your bridge to Blockchain; Artos. We have developed the Aventus Protocol on behalf of the Aventus Foundation.

Below you will find a general architecture diagram outlining our core services and where data is being processed from the point of entry via our RESTful API. Each of these distinct products makes up the Artos Systems ecosystem and we aim to continue to develop these as our implementation matures.

![big](images/architecture-diagram-aws.png)

As shown in the above architecture diagram our technology stack is built in layers on top of the blockchain and each product serves a purpose to ensure interaction via our endpoints is standardised and familiar for developers.

### Aventus Protocol

The Aventus Protocol is a global open standard for the exchange of tickets built upon the Ethereum blockchain composed of smart contracts that allow for the creation and validation of events, the issuance, sale and distribution of tickets in primary and secondary ticket markets (under parameters designed and customised by inventory holders and event organisers) and the allocation of defined proportions of ticket sale revenue between event organisers, ticket promoters, artists, secondary resellers, etc.

### Virtue Services

#### Patient

Patient is a queuing system. A way to manage a large requests that will write to the blockchain. Think of the IMS that sends large amounts of requests to the blockchain, but the blockchain itself is really slow. Patient manages (i.e. queues) the transactions that are being sent to the blockchain. A user of Patient doesn’t need to know how to interact with the protocol as it operates as a high level layer between the protocol and the client. Patient users also don’t need to care about smart contracts, transaction fee’s etc. It auto adjusts the price paid for gas depending on the level of congestion on the blockchain.

#### Honest

Honest is a public API that allows any kind of application to look up information on the protocol. Anything that resides on the protocol can be seen and consumed by Honest.

#### Modest

The last, and largest of our virtue services. Modest, as the name suggests, is our scaling solution for the blockchain, but firstly for the Aventus Protocol itself. It utilises Merkle trees to allow much quicker, concurrent processing of objects to the blockchain.

### AWS Lambdas

We employ the use of AWS Lambdas throughout the technology stack as serverless middleware between services. These aren't distinct services themselves but simply allow for horizontally scalable data processing throughout the system.

### Ticket Wallet

The Aventus Ticket Wallet is a white-label mobile application acting as the user facing client for loading and viewing tickets issued by the event creator. Originally designed as a proof-of-concept to show our end-to-end solution including access control but is built in a modular fashion to allow third parties to brand their own wallet using our technology under the hood.

This API documentation aims to make interacting the the Aventus Protocol as simple and straightforward as possible.

# Before You Begin

This guide acts as developer reference for integrating with Aventus Protocol RESTful API covering interaction with events and tickets hence any language and instructional information assumes an existing technical knowledge of interacting via an API and the typical practices involved.

By sending HTTPS requests to specific URLs (endpoints) as a registered user you can easily harness the power of the Aventus Protocol allowing us to handle any corresponding complexity with writing and reading the Ethereum blockchain.

An API endpoint contains the URL of the resource that you want to access and the action that you want to complete on that resource. The action is indicated by the HTTP method of the request: GET, POST, PUT, or DELETE.

When you send an API request, the server returns an HTTP response. The HTTP response contains a status code to indicate whether the request succeeded and the details of the response in the response body. Most resources format this response as JavaScript Object Notation (JSON). You can use the JSON packages or libraries that are built in to the programming language that you use to extract the data.

Finally, Sandboxing abilities will be added to this document as we move towards completing our <kbd>Enterprise Grade</kbd> epic during Quarter 1.

# Authentication

All requests to the Aventus APIs go over the web. Essentially this means that any system that can speak to the web, can speak to our APIs. Any and all language specific libraries and SDKs provided are really just wrappers which are providing some convenience and linguistic niceties to help you work with a simple, RESTful API.

Aventus will create an Auth0 login for you to use, and thereafter: the Aventus API requires a header authorisation key/value pair for each request.

> To authorize, use this code:


```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: ticketticket"
```

> Make sure to replace `ticketticket` with your API key.

Aventus expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: ticketticket`

<aside class="notice">
As of now, there is no need to authenticate. Please see this section in the future for authentication details.
</aside>

# Getting Started

If this is your first time here, scan this section before digging deeper into the documentation. The sections after this page assume you know the basics about the Aventus Protocol. For further information, read our Whitepaper [here](https://aventus.io/doc/whitepaper.pdf) or for a shorter read, our Lightpaper is [here](https://aventus.io/doc/lightpaper.pdf).

What you can do?

- Create an Event (POST)
- Retrieve Event List (GET)
- Create Tickets (POST)
- Retrieve Ticket List (GET)

# API Guides
Aventus makes creating and managing events and tickets on the blockchain easy. Find the documentation, sample code, and developer tools you need to build exactly what you want, fast. We’ll handle the complexity of blockchain and the Aventus Protocol. Let’s get building!

<aside class="warning">
**Please note**: As of now, these API endpoints and resources are a "Work In Progress". They will be updated as soon as possible to reflect the product as is. However, the guides themselves are relevant and correct.
</aside>

## Create Event
The first thing we'd recommend you do is create an event. Events are the foundation of any content on the Aventus Protocol and must be in place before tickets can be issued and thus comes first in this guided flow.

Using our Aventus RESTful API, you can create events on the protocol direct from your language of choice. In this guide, we'll explore how you can use the Aventus API to:

  - Create a new event
  - Set parameters for your event

First, take note of the method, and sample request. In this example guide you'll be creating your new event for 8000 people.

### Method: `POST`

`POST /events`

> The following is an empty sample request

```json
{
	"eventDesc": "string",
	"eventSupportURL": "string",
	"onSaleTime": number,
	"offSaleTime": number,
}
```

### Request Headers

Parameter | Type | Description
--------- | ------- | -----------
eventDesc | string | A brief description of the event you are hosting, 200 characters maximum.
eventSupportURL | string | If your event has a supporting link, to say the event on the artist website, please place here..
onSaleTime | number | The time that tickets will go on sale. Seconds since Epoch.
offSaleTime | number |  The time that tickets will go off sale. Seconds since Epoch.


> The following sample request has inputs for a potential event

```json
[
  {
	"eventDesc": "Kendrick Lamar, Brixton Academy, London, 18+",
	"eventSupportURL": "www.kendricklamar.com/tour",
	"onSaleTime": 1574500752,
	"offSaleTime": 1573250035,
}
]
```

## Retrieve Event List
Now that you have created an event you may want to retrieve these details from the protocol in order to keep track of your live events.

Using our Aventus RESTful API, you can query for a list of active events from your language of choice. In this guide, we'll explore how you can use the Aventus API to:
- See a list of active events

First, take note of the method, and sample request. In this example guide you'll be retrieving the details of an event recently created.

### Method: `GET`

`GET /events`

> Sample Response: The following is the expected response for asking for a list of active events

```json
[
  {
    "eventId": 1,
    "description": "Kendrick Lamar, Brixton Academy, London, 18+",
    "onSaleTime": 1574500752,
    "offSaleTime": 1573250035,
    "price": 1000,
    "avtDeposit": "1000"
  },
  {
    "eventId": 2,
    "description": "Beyonce, Wembley Stadium, London",
    "onSaleTime": 1542986560,
    "offSaleTime": 1574544160,
    "price": 1000,
    "avtDeposit": "1000"
  },
  {
    "eventId": 3,
    "description": "A Tribe Called Quest, The Apollo, Harlem",
    "onSaleTime": 1542991411430,
    "offSaleTime": 1542991415430,
    "price": 1000,
    "avtDeposit": "1000"
  },
]
```

## Create Tickets
Now that you have created an event you can now generate and distribute tickets to customers

Using our Aventus RESTful API, you can create new tickets for an event you created from your language of choice. In this guide, we'll explore how you can use the Aventus API to:
- Generate new tickets
- Distribute tickets via email

First, take note of the method, and sample request. In this example guide you'll be creating tickets for an event you recently created.

### Method: `POST`

`POST /tickets`

> Sample Request: The following will create a number of tickets for a specific event

```json
{
  "eventId": "string",
  "email": "string",
}
```

### Request Headers

Parameter | Type | Description
--------- | ------- | -----------
eventId  | string  | a unique identifier used to reference an event on the Aventus Protocol
email  |  string | customer email address

> Sample Response: The following is the expected response for creating a number of tickets for a specific event

```json
[
  {
    "vendorReference": "ref 1543329264762",
    "eventId": "3",
    "payload": "payload",
    "email": "customer@aventus.io",
    "secret": "5b7e7593-ff70-4c57-b1da-565380f1e964",
    "link": "artos.ticketwallet://+?payload=W3siZXZlbnRJZCI6IjUiLCJ0aWNrZXRSZWZlcmVuY2UiOiJyZWYgMTU0MzMyOTI2NDc2MiIsInBheWxvYWQiOiJ7c29tZVN0dWZmV2hhdGV2ZXJGb3JtYXRQYXlsb2FkfSIsImRhdGFTaWduYXR1cmUiOiIweGI3ZTMxZWVjMjUzZDI2ZTIzZDQwNjg3Nzc0MjM5NDZmMmZjNDk1YjlhMWE5YmNlODk2ZDQ0ZWQyM2E5OGU5ZWMwNDNiNDc4OWYzN2UxYTEwMmMxOTQ2NzRlMzNhMzE0MjY4Y2U3NzJhMDdmODg3ZGZlMmQ3ZWNkZmQ5MDIwNjNjMDEiLCJzZWNyZXQiOiJNeSBhbWF6aW5nIHNlY3JldCIsInNlY3JldFNpZ25hdHVyZSI6IjB4YzY5MWUyMTdhOTZlNGVhZTQ5MDhmYzM4MjlmNGVmNDk0MDBlNDc1MGIxNzZmMWJiMDhlYWE3MjM2NTkzOTJjNDY3NTZhMGMzODQ0Yzk0NTEwZTkxNDdjYjllZDhiOWY0Yjc2MGJlZGM2YjZiNTJhOWM0MTMyMDA5ODAyNTk1YjMwMCJ9XQ==",
    "status": "status"
  }
]
```

## Retrieve Ticket List
Now that you have created an event with tickets you can now retrieve a list of tickets associated with an event and see the status of each ticket

Using our Aventus RESTful API, you can fetch a list of tickets for an event you created from your language of choice. In this guide, we'll explore how you can use the Aventus API to:
- Fetch a list of tickets

First, take note of the method, and sample request. In this example guide you'll be retrieving a list of ticket for an event you recently created.

### Method: `GET`

`GET /events/*eventId*/tickets`

> Sample Response: The following is the expected response for retrieving a list of tickets for a specified event

```json
[
  {
    "vendorReference": "ref 1543005210191",
    "eventId": "3",
    "payload": "payload",
    "email": "customer2@aventus.io",
    "secret": "7b52931c-e1a9-4b7d-bf06-c2f0d9562d3a",
    "link": "artos.ticketwallet://+?payload=W3siZXZlbnRJZCI6IjUiLCJ0aWNrZXRSZWZlcmVuY2UiOiJyZWYgMTU0MzAwNTIxMDE5MSIsInBheWxvYWQiOiJ7c29tZVN0dWZmV2hhdGV2ZXJGb3JtYXRQYXlsb2FkfSIsImRhdGFTaWduYXR1cmUiOiIweDE2MGRlMjIzNDc1NmY0MWNlYzU1MDZmNGZjZWUxZTg3MTUzNmYwZmI3YWVlN2EyMDE4ZmJjODdjOWRhNzNiZmM3Zjg5ZDQ0MDA2ZDAzN2Y5YmEzZTc0NmIxNDIzMTJiNWU5Nzc1MTRkZDAwNjlhNDUwODdlNDRmZGY1Y2VhNmM2MDEiLCJzZWNyZXQiOiJNeSBhbWF6aW5nIHNlY3JldCIsInNlY3JldFNpZ25hdHVyZSI6IjB4YzY5MWUyMTdhOTZlNGVhZTQ5MDhmYzM4MjlmNGVmNDk0MDBlNDc1MGIxNzZmMWJiMDhlYWE3MjM2NTkzOTJjNDY3NTZhMGMzODQ0Yzk0NTEwZTkxNDdjYjllZDhiOWY0Yjc2MGJlZGM2YjZiNTJhOWM0MTMyMDA5ODAyNTk1YjMwMCJ9XQ==",
    "status": "status"
  },
  {
    "vendorReference": "ref 1542993837015",
    "eventId": "3",
    "payload": "payload",
    "email": "customer3@aventus.io",
    "secret": "cb80109a-22aa-41bf-9e28-eea721d5b4ab",
    "link": "artos.ticketwallet://+?payload=W3siZXZlbnRJZCI6IjUiLCJ0aWNrZXRSZWZlcmVuY2UiOiJyZWYgMTU0Mjk5MzgzNzAxNSIsInBheWxvYWQiOiJ7c29tZVN0dWZmV2hhdGV2ZXJGb3JtYXRQYXlsb2FkfSIsImRhdGFTaWduYXR1cmUiOiIweDRkM2FjZTAxNzY5NzhkYjczMjkyN2Y4MWY1OWYyZTQxYTMxNWRmOTAxOTI3OTgyZjE1OGE4MmEzNzY1ODBkNzA0MWFjNzY5NTJhZmMyMTc2OGNkZWJlNjFkMTk5ZGI2M2Y2YzE5OGI1ZDJmMTc4ZmE5OGQ0NzlhODIyMmJiZGYxMDAiLCJzZWNyZXQiOiJNeSBhbWF6aW5nIHNlY3JldCIsInNlY3JldFNpZ25hdHVyZSI6IjB4YzY5MWUyMTdhOTZlNGVhZTQ5MDhmYzM4MjlmNGVmNDk0MDBlNDc1MGIxNzZmMWJiMDhlYWE3MjM2NTkzOTJjNDY3NTZhMGMzODQ0Yzk0NTEwZTkxNDdjYjllZDhiOWY0Yjc2MGJlZGM2YjZiNTJhOWM0MTMyMDA5ODAyNTk1YjMwMCJ9XQ==",
    "status": "status"
  },
  {
    "vendorReference": "ref 1542993841495",
    "eventId": "3",
    "payload": "payload",
    "email": "customer4@aventus.io",
    "secret": "9f7ab0e5-7d7d-4ab4-a142-faa2c2df1399",
    "link": "artos.ticketwallet://+?payload=W3siZXZlbnRJZCI6IjUiLCJ0aWNrZXRSZWZlcmVuY2UiOiJyZWYgMTU0Mjk5Mzg0MTQ5NSIsInBheWxvYWQiOiJ7c29tZVN0dWZmV2hhdGV2ZXJGb3JtYXRQYXlsb2FkfSIsImRhdGFTaWduYXR1cmUiOiIweDljYjY5NjYwODQ3YzE5ZGNkMTJjZmVmNzcxZDU4NzI0NTkwMmMzOTBmOGZmZjNlYTM4MzhiZTQxMDFjYmViNGUzNjQzZDgxZmVkNGY0NjZjZTUzOGRlMWFkOGIyYTcyOTRlNWZhYWQ0MThlNDRkODAyNTEwY2NkNTM2NzRlYzM3MDEiLCJzZWNyZXQiOiJNeSBhbWF6aW5nIHNlY3JldCIsInNlY3JldFNpZ25hdHVyZSI6IjB4YzY5MWUyMTdhOTZlNGVhZTQ5MDhmYzM4MjlmNGVmNDk0MDBlNDc1MGIxNzZmMWJiMDhlYWE3MjM2NTkzOTJjNDY3NTZhMGMzODQ0Yzk0NTEwZTkxNDdjYjllZDhiOWY0Yjc2MGJlZGM2YjZiNTJhOWM0MTMyMDA5ODAyNTk1YjMwMCJ9XQ==",
    "status": "status"
  },
  {
    "vendorReference": "ref 1542993828967",
    "eventId": "3",
    "payload": "payload",
    "email": "customer5@aventus.io",
    "secret": "47fb3d8d-f480-42c1-aec9-c267790841be",
    "link": "artos.ticketwallet://+?payload=W3siZXZlbnRJZCI6IjUiLCJ0aWNrZXRSZWZlcmVuY2UiOiJyZWYgMTU0Mjk5MzgyODk2OSIsInBheWxvYWQiOiJ7c29tZVN0dWZmV2hhdGV2ZXJGb3JtYXRQYXlsb2FkfSIsImRhdGFTaWduYXR1cmUiOiIweDNkNWU2NmZlNDQxZWJkY2ZiNTM2MmVmNTVjNTA2MWIzMTg4ODg4Yjk4ODRlNWUzZjFkNzllNTgxNjVlMTcyYzEyNzEzZDcxZjY1MmVhYTllMjBhZmNlNzhlOTE4MDZhNDIwY2NmNGU2NGVlMTMyYjQ1YTc0OWI1M2M0NzQ1OGVkMDAiLCJzZWNyZXQiOiJNeSBhbWF6aW5nIHNlY3JldCIsInNlY3JldFNpZ25hdHVyZSI6IjB4YzY5MWUyMTdhOTZlNGVhZTQ5MDhmYzM4MjlmNGVmNDk0MDBlNDc1MGIxNzZmMWJiMDhlYWE3MjM2NTkzOTJjNDY3NTZhMGMzODQ0Yzk0NTEwZTkxNDdjYjllZDhiOWY0Yjc2MGJlZGM2YjZiNTJhOWM0MTMyMDA5ODAyNTk1YjMwMCJ9XQ==",
    "status": "status"
  },
  {
    "vendorReference": "ref 1542993839534",
    "eventId": "3",
    "payload": "payload",
    "email": "customer6@aventus.io",
    "secret": "750a3cd7-4301-4e97-9dc3-e79b30d906be",
    "link": "artos.ticketwallet://+?payload=W3siZXZlbnRJZCI6IjUiLCJ0aWNrZXRSZWZlcmVuY2UiOiJyZWYgMTU0Mjk5MzgzOTUzNCIsInBheWxvYWQiOiJ7c29tZVN0dWZmV2hhdGV2ZXJGb3JtYXRQYXlsb2FkfSIsImRhdGFTaWduYXR1cmUiOiIweGViZDVmNzRlNjcyYWRkMDRiNjUzNDY1YzYyMDhlMjQ0MTA4ZDlmMzU1MGJhNDk4YzZmNWQ4M2U5MTUxMWJjZDczMTQzZDU5YmFlNjI4NGZlNTljZmRkYmNhOTIwNDZkMmNlNDIwNTQxMGQ2ZTA5N2RiZjExZTM0ZDBkMzhlYjY0MDAiLCJzZWNyZXQiOiJNeSBhbWF6aW5nIHNlY3JldCIsInNlY3JldFNpZ25hdHVyZSI6IjB4YzY5MWUyMTdhOTZlNGVhZTQ5MDhmYzM4MjlmNGVmNDk0MDBlNDc1MGIxNzZmMWJiMDhlYWE3MjM2NTkzOTJjNDY3NTZhMGMzODQ0Yzk0NTEwZTkxNDdjYjllZDhiOWY0Yjc2MGJlZGM2YjZiNTJhOWM0MTMyMDA5ODAyNTk1YjMwMCJ9XQ==",
    "status": "status"
  }
]
```

<!--- YOU ARE NOW ENTERING... KITTENs

# Here Be Kittens

## Get All Kittens (retaining as nice format example)


```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```


> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```shell
curl "http://example.com/api/kittens/2"
  -H "Authorization: meowmeowmeow"
```


> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Max",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve

<aside class="notice">
This error section is stored in a separate file in <code>includes/_errors.md</code>. Slate allows you to optionally separate out your docs into many files...just save them to the <code>includes</code> folder and add them to the top of your <code>index.md</code>'s frontmatter. Files are included in the order listed.
</aside>

## Delete a Specific Kitten

```shell
curl "http://example.com/api/kittens/2"
  -X DELETE
  -H "Authorization: meowmeowmeow"
```


> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "deleted" : ":("
}
```

This endpoint deletes a specific kitten.

### HTTP Request

`DELETE http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to delete


 --->
