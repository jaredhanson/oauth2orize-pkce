var chai = require('chai')
  , extensions = require('../../lib/request/extensions')
  , qs = require('querystring')


describe('authorization request extensions', function() {
  
  describe('module', function() {
    var mod = extensions();
    
    it('should be wildcard', function() {
      expect(mod.name).to.equal('*');
    });
    
    it('should expose request and response functions', function() {
      expect(mod.request).to.be.a('function');
      expect(mod.response).to.be.undefined;
    });
  });
  
  describe('request parsing', function() {
    
    describe('request with code_challenge parameter', function() {
      var err, ext;
      
      before(function(done) {
        chai.oauth2orize.grant(extensions())
          .req(function(req) {
            req.query = {};
            req.query.code_challenge = 'dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk';
          })
          .parse(function(e, o) {
            err = e;
            ext = o;
            done();
          })
          .authorize();
      });
      
      it('should not error', function() {
        expect(err).to.be.null;
      });
      
      it('should parse request', function() {
        expect(ext.codeChallenge).to.equal('dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk');
        expect(ext.codeChallengeMethod).to.equal('plain');
      });
    });
    
    describe('request with code_challenge and code_challenge_method parameter', function() {
      var err, ext;
      
      before(function(done) {
        chai.oauth2orize.grant(extensions())
          .req(function(req) {
            req.query = {};
            req.query.code_challenge = 'E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM';
            req.query.code_challenge_method = 'S256';
          })
          .parse(function(e, o) {
            err = e;
            ext = o;
            done();
          })
          .authorize();
      });
      
      it('should not error', function() {
        expect(err).to.be.null;
      });
      
      it('should parse request', function() {
        expect(ext.codeChallenge).to.equal('E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM');
        expect(ext.codeChallengeMethod).to.equal('S256');
      });
    });
    
    describe('request without parameters', function() {
      var err, ext;
      
      before(function(done) {
        chai.oauth2orize.grant(extensions())
          .req(function(req) {
            req.query = {};
          })
          .parse(function(e, o) {
            err = e;
            ext = o;
            done();
          })
          .authorize();
      });
      
      it('should not error', function() {
        expect(err).to.be.null;
      });
      
      it('should parse request', function() {
        expect(ext.codeChallenge).to.be.undefined;
        expect(ext.codeChallengeMethod).to.be.undefined;
      });
    });
    
  });
  
});
