# oauth2orize-pkce

[OAuth2orize](https://github.com/jaredhanson/oauth2orize) extension providing
support for [Proof Key for Code Exchange](https://tools.ietf.org/html/rfc7636).

## Install

```bash
$ npm install oauth2orize-pkce
```

## Usage

#### Parse Request Extensions

In order to parse the additional parameters used to establish a proof key for
code exchange, register support for this extension with a `Server` instance:

```js
server.grant(require('oauth2orize-pkce').extensions());
```

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015-2017 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/vK9dyjRnnWsMzzJTQ57fRJpH/jaredhanson/oauth2orize-pkce'>  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/vK9dyjRnnWsMzzJTQ57fRJpH/jaredhanson/oauth2orize-pkce.svg' /></a>
