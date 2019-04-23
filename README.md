# oauth2orize-pkce

[OAuth2orize](https://github.com/passport-next/oauth2orize) extension providing
support for [Proof Key for Code Exchange](https://tools.ietf.org/html/rfc7636).


## Install

```bash
$ npm install @passport-next/oauth2orize-pkce
```

## Usage

#### Parse Request Extensions

In order to parse the additional parameters used to establish a proof key for
code exchange, register support for this extension with a `Server` instance:

```js
server.grant(require('@passport-next/oauth2orize-pkce').extensions());
```

