# Errors

The Aventus RESTful API uses the following error codes:

<!--- Specifically the errors relating to THIS guide. -->

HTTP response Code | HTTP error category | Typical Failure Case
-- | -- | --
400 | BAD REQUEST | One of the expected parameters is not present or in an incorrect format
404| NOT FOUND | Resource not found
500 | INTERNAL SERVER ERROR | Unexpected internal server error, our services are down
503  | SERVICE UNAVAILABLE  | Server overloaded or down for maintainence
