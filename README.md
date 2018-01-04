# oauth2orize-pkce

[![Version](https://img.shields.io/npm/v/oauth2orize-pkce.svg?label=version)](https://www.npmjs.com/package/oauth2orize-pkce)
[![Build](https://img.shields.io/travis/jaredhanson/oauth2orize-pkce.svg)](https://travis-ci.org/jaredhanson/oauth2orize-pkce)
[![Quality](https://img.shields.io/codeclimate/github/jaredhanson/oauth2orize-pkce.svg?label=quality)](https://codeclimate.com/github/jaredhanson/oauth2orize-pkce)
[![Coverage](https://img.shields.io/coveralls/jaredhanson/oauth2orize-pkce.svg)](https://coveralls.io/r/jaredhanson/oauth2orize-pkce)
[![Dependencies](https://img.shields.io/david/jaredhanson/oauth2orize-pkce.svg)](https://david-dm.org/jaredhanson/oauth2orize-pkce)


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


