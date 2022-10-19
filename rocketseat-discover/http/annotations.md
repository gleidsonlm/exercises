source: https://app.rocketseat.com.br/discover/course/guia-estelar-de-http

# HTTP #

> Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents
source: https://developer.mozilla.org/en-US/docs/Web/HTTP

## Concepts ##

- Simple
- Client/Server
- Stateless
- Extensive

## Communication ##

- Client
    - User agent
    - Client start connection through request
- Server
    - Listen and serve
    - Respond requests
- Proxy
    - Interfaces between server and client
    - Cache, filter, ACL, LB, Auth, Authorize

## URI ##

> A URI (Uniform Resource Identifier) is a string that refers to a resource.

- Resource (or entity)
- Locator
    - Most famous:
        > Uniform Resource Locator (URL) is a text string that specifies where a resource (such as a web page, image, or video) can be found on the Internet
        - URL
            - required = Protocol : Domain : Resource
            - optional = subdomain / path / parameter / port / anchor
        
        > URN (Uniform Resource Name) is a URI in a standard format, referring to a resource without specifying its location or whether it exists    
        - URN
            - name
            - example: urn:oasis:names:specification:docbook:dtd:xml:4.1.2

## Messages ##

- Request 
    - Method (GET/POST/...)
    - Protocol version (HTTP/1.1 , HTTP/2 , QUIC, HTTP/3)
    - URI (http://gleidsonlm.com/)
- Response 
    - Protocol version
    - Status code (200,404,...)
    - Headers (curl -I)
    - Status message (response body)
- Request / Response
    - Headers (propriety:value)
    - Body (content-type:type/subtype)

## Methods ##

> HTTP defines a set of request methods to indicate the desired action to be performed for a given resource.

 - Safe
    > An HTTP method is safe if it doesn't alter the state of the server. In other words, a method is safe if it leads to a read-only operation
    - GET, HEAD, OPTIONS
    - All safe methods are also idempotent, but not all idempotent methods are safe.
 - Idempotent
    > An HTTP method is idempotent if an identical request can be made once or several times in a row with the same effect while leaving the server in the same state.
    - GET, HEAD, OPTIONS, PUT, DELETE
    - All safe methods are also idempotent.
 - cacheable
    > A cacheable response is an HTTP response that can be cached, that is stored to be retrieved and used later, saving a new request to the server.
    - GET, HEAD
    - POST or PATCH, depending on the user agent and server.
    - [Cache-Control] propriety in the response could prevent user agent to cache.    

- OPTIONS 
    > The OPTIONS method describes the communication options for the target resource.
- GET
    > The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
- HEAD
    > The HEAD method asks for a response identical to a GET request, but without the response body.
- POST
    > The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.
- PATCH
    > The PATCH method applies partial modifications to a resource.
- DELETE
    > The DELETE method deletes the specified resource.

todo: reference table listing methods by "safe, idempotent, cacheable, body request, body response, HTML form"

## HEADERS ##

> HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value is ignored.
> https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

## STATUS ##

> HTTP response codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes: informational responses, successful responses, redirections, client errors, and servers errors.
> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status