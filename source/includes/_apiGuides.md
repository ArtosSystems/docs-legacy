# API Guides

The following guides outline the individual actions available via the Aventus Protocol. Navigate to the required section to get more information on; how to access an endpoint, what data structure is expected to be sent, and what data structure a receiver will get back from an endpoint for a specific call. The methods are arranged in an order that a user would most likely follow when interacting with the Protocol in a typical event lifecycle (so some dependencies exist on previous API calls) but each endpoint can be accessed at any time by a valid user with the correct data input.

The sections below assume knowledge of the basic mechanics of the Aventus Protocol. If this is your first time here, have a look over the sections [above](#introduction) before digging deeper into the documentation to get an overview of how our system works.

Below find guides for the following:

- Create an Event (POST)
- Retrieve Event List (GET)
- Create Tickets (POST)
- Retrieve Ticket List (GET)

<aside class="warning">
Please note: As of now, these API endpoints and resources are a "Work In Progress" and functionality has not been fully finalised. This guide will be updated as changes are made.
</aside>

## Create Event

> The following is an empty sample request

```json
{
	"eventDesc": "string",
	"eventSupportURL": "string",
	"onSaleTime": number,
	"offSaleTime": number,
}
```

Using our RESTful API, you can create events on the protocol direct from your language of choice.

_Events must be in place before tickets can be issued._


### Method: `POST`

`POST /events`


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

### Request Headers

Parameter | Type | Description
--------- | ------- | -----------
eventDesc | string | A brief description of the event you are hosting, 200 characters maximum.
eventSupportURL | string | If your event has a supporting link, e.g. the event on the artist website, place here.
onSaleTime | interger | The time that tickets will go on sale. Seconds since Epoch.
offSaleTime | interger |  The time that tickets will go off sale. Seconds since Epoch.



## Retrieve Event List
Query for a list of active events from your language of choice.

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

### Response Headers

Parameter | Type | Description
--------- | ------- | -----------
eventId  | interger  | Identifier for the event
description  |  string | Brief description of the event you are hosting, 200 characters maximum
onSaleTime  | interger  | The time that tickets will go on sale. Seconds since Epoch.
offSaleTime  | interger  | The time that tickets will go off sale. Seconds since Epoch.
price  | interger  | Average price of the tickets in USD (cents)
avtDeposit  | interger  | Deposit cost for the event in AVT _(to be depricated)_



## Create Tickets
Create new tickets for an event you created from your language of choice.

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
eventId  | string  | a unique identifier used to reference an event on the Protocol
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

### Response Headers

Parameter | Type | Description
--------- | ------- | -----------
vendorReference  | string  | a unique identifier used to reference a vendor on the  Protocol
eventId  |  string | a unique identifier used to reference an event on the  Protocol
payload  | string  | contextual, non-unqiue data which is attached to a ticket. includes but not exclusive to: event name, data, time, location
email  | string  | customer email address
secret  | string  |
link  | string  | the link to be sent to a customer which will open on their device
status  | string  | _Currently unused_, later will become: status of the link, sent, unsent

## Retrieve Ticket List
Retrieve a list of tickets associated with an event and see the status of each ticket


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


### Response Headers

Parameter | Type | Description
--------- | ------- | -----------
vendorReference  | string  | a unique identifier used to reference a vendor on the  Protocol
eventId  |  string | a unique identifier used to reference an event on the  Protocol
payload  | string  | contextual, non-unqiue data which is attached to a ticket. includes but not exclusive to: event name, data, time, location
email  | string  | customer email address
secret  | string  |
link  | string  | the link to be sent to a customer which will open on their device
status  | string  | _Currently unused_, later will become: status of the link, sent, unsent

## Ticket Definition


> Example of what is used by a wallet to send to the API

```
secret -> very_very_secret,
payload -> {\"eventName\": \"Stubborn Event\", \"eventTime\": 1543255200, \"eventVenue\": \"Hell\"},
ticketRef -> stubborn-4064,
eventId -> 1,
primarySignedSecret -> 0x7a4a1ade9fa66db3227574384fcd20dd244bed5ef36ed7fbab08e92f0ffa3e2949c1df37a5cf0f360bf500c72509f313238a2935158eb940753285505dfff25c00,
doublySignedSecret -> 0x655b1710acd74d630352bb25ad031d9803fdba094b3a921399300abbf85e95d83d3805b7b6057148f9134ce3ce52e3114614b15ab585b285fa45c7e55d99655000,
primarySignedTicketData -> 0xf126ffc2a84ed5bfec1a40a02be5af6fbddaee19796ae36feee1471c38aa6a80625cd3933a9739529c595e0544886cfbf0555f9d2a35a434f31f5dc963a8a37500,
customerSignedData -> 0x50256df6e9173f1396d018125936efa3b909df0831e7f55cbd59074d5f9616ad316054c658838dcc0286cb7dbb4d9057a7dddb69480d3f1cef19fe993e77327300
```

Following on from the guides on interacting with tickets - a brief explainer on what a ticket consists of.

The example provided is what a white label consumer app would send to our API.

#### Reference

Parameter | Type | Description
--------- | ------- | -----------
secret  | string  |
payload  |  string | contextual, non-unqiue which is attached to a ticket. includes but not exclusive to: event name, data, time, location
ticketRef  | string  | unique identifier for a ticket
eventId  | string  | a unique identifier used to reference an event on the Protocol
primarySignedSecret  | string  |
doublySignedSecret  | string  |
primarySignedTicketData  | string  |
customerSignedData  | string  |

Anything that is `primarySigned` is sent from a link generator on completion of a ticket. What has been signed by the customer (including `doublySignedSecret`) comes from a customer device.

**customerSignedData contains:**

`customerSignedData = sign(“$payload|$eventId|$ticketRef|${link.secret}|$secretSignature|$doublySignedSecret|$ticketDataSignature”, customerPrivateKey)`

**doublySignedSecret contains:**


`doublySignedSecret = sign(primarySecretSignature, customerPrivateKey)`


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
