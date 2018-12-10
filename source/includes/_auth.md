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
