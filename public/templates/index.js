define(function(){return function anonymous(locals){var buf=[];with(locals||{})buf.push('<div class="container"><div class="demo-headline"><h1 class="demo-logo">MapIt! Project Overlay<small>Convert Your Project\'s KML overlay for use with MapIt!</small></h1></div><div class="map-load"><div class="login-screen"><div class="login-icon"><img src="img/map.png" alt="Welcome to KML to geoJSON"/><h4>Welcome to <small>LogIT!</small></h4></div><div class="login-form"><form action="/upload" method="post" enctype="multipart/form-data"><div class="control-group"><div id="filebutn" class="login-field filebutn">Choose a File<input id="upfile" name="kmlfile" type="file"/><label for="login-name" class="login-field-icon fui-location-16"></label></div></div><div class="control-group"><input id="login-pass" type="text" value="" placeholder="Enter Project Name" name="projname" class="login-field"/><label for="login-pass" class="login-field-icon fui-new-16"></label></div><input type="submit" value="Send" class="btn btn-success btn-large btn-block"/></form></div></div><p><a href="#/about">about page</a></p></div></div>');return buf.join("")}})