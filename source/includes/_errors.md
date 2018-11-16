# Errors

<aside class="notice">
This error section is stored in a separate file in <code>includes/_errors.md</code>. Slate allows you to optionally separate out your docs into many files...just save them to the <code>includes</code> folder and add them to the top of your <code>index.md</code>'s frontmatter. Files are included in the order listed.
</aside>

The Aventus RESTful API uses the following error codes:


<!--- Specifically the errors relating to THIS guide. -->

HTTP response Code | HTTP error category | Typical Failure Case
-- | -- | --
400 | BAD REQUEST | One of the expected parameters is not present or in an incorrect format
401 | UNAUTHORIZED | Owner Proof does not correspond to an approved member on the protocol
500 | INTERNAL SERVER ERROR | Unexpected internal server error, our services are down
