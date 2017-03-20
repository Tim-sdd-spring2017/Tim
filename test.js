var path = __dirname + "/tests/";
var tests = [];

require('fs').readdir( path, function( err, items ) {
  var total = 0, successful = 0;
  for( var i = 0; i < items.length; i++ ) {

    if( require( path + items[i] )() ) {
      successful++;
    } else {
      console.log( "[Failed]", items[i] );
    }

    total++;
  }

  console.log( "Testing complete" );
  console.log( "Successfully completed", successful, "/", total );
});
