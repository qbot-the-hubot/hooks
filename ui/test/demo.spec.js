var expect = require('expect.js');

describe("just a demo test!", function() {

  function pad(s, a) {
    s = ""+s;

    while(s.length < a)
      s = "0" + s;

    return s;
  }
  
  for(var i = 0; i < 200; i++) {
    it("should be ok on test #" + pad(i + 1, 3), function(done) {
      setTimeout(done, 40);
    });
  }

});
