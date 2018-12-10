# Authentication

For operations where the output interacts with consumer held applications within our ecosystem, authentication will be given by Artos. We expect the Aventus API to require a header authorisation key/value pair for each request.

> To authorize, use this code:


```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: ticketticket"
```

> Make sure to replace `ticketticket` with your API key.

We expect for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: ticketticket`

<aside class="notice">
Currently, there is no need to authenticate. Please see this section in the future for authentication details.
</aside>
