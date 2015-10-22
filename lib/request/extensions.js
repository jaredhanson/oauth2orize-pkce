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
  mod.name = '*';
  mod.request = request;
  return mod;
}