/**
 * Parse request parameters used as proof key for code exchange.
 *
 * This module is a wildcard parser that parses authorization requests for
 * extensions parameters defined for use as proof key for code exchange (PKCE).
 * Using PKCE establishes a verifier in order to confirm authorization code
 * exchange by public clients, mitigating authorization code interception
 * attacks.
 *
 * Examples:
 *
 *     server.grant(pkce.extensions());
 *
 * References:
 *  - [Proof Key for Code Exchange by OAuth Public Clients](https://tools.ietf.org/html/rfc7636)
 *
 * @return {Object} module
 * @api public
 */
module.exports = function() {
  
  function request(req) {
    var q = req.query
      , ext = {};
    
    if (q.code_challenge) {
      ext.codeChallenge = q.code_challenge;
      ext.codeChallengeMethod = q.code_challenge_method || 'plain';
    }
    
    return ext;
  }
  
  var mod = {};
  mod.name = 'code';
  mod.request = request;
  return mod;
}