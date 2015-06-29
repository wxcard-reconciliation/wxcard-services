var request = require('request');
var urlBase = "http://120.26.66.200:3000/api";
var options = {
  baseUrl: "http://120.26.66.200:3000/api"
}

describe('Account', function() {
  
  var loginedRequest = {}
  describe('# login', function() {
    it('should success', function(done) {
      request
      .post({url: urlBase+'/accounts/login?include=user', body: {
        email: "gbo@example.com",
        password: "123456"
      }, json:true}, function (err, res, body) {
        res.statusCode.should.equal(200);
        loginedRequest = request.defaults({baseUrl:urlBase, headers:{authorization:body.id}, uri:''})
        done()
      })
    });
    
  });
  
  describe('# logout', function() {
    it('should success', function(done) {
      loginedRequest.post({uri:'/accounts/logout'}, function (err, res, body) {
        // console.log(res.request.headers)
        res.statusCode.should.equal(204)
        done()
      })
    });
  });
});