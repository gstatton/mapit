define(function(){return function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<div class="navbar navbar-fixed-top navbar-inverse"><div class="navbar-inner"><div class="container"><button type="button" data-toggle="collapse" data-target=".nav-collapse" class="btn btn-navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="#" class="brand">ApplicationName</a><div class="nav-collapse subnav-collapse"><ul class="nav nav-group"><li id="home"><a href="#/"><i class="icon-home"></i> Home</a></li><li id="about"><a href="#/about"><i class="icon-heart"></i> About</a></li><li class="divider-vertical"></li><form onsubmit="return lookupuser();" class="navbar-search"><input type="text" placeholder="Search" name="q" id="usersearch" class="search-query"/></form></ul><ul class="nav pull-right"><li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle avatar-toggle"><img'),buf.push(attrs({src:"http://avatars.io/email/"+emailaddress+"",height:"24",width:"24","class":"avatar-small"},{src:!0,height:!0,width:!0})),buf.push("/>"+escape((interp=name.first)==null?"":interp)+" "+escape((interp=name.last)==null?"":interp)+' <span class="caret"></span></a><ul class="dropdown-menu"><li><a tabindex="-1" href="#/settings/">Settings</a></li><li class="divider"></li><li><a tabindex="-1" href="" onclick="logout()">Logout</a></li></ul></li></ul></div></div></div></div>')}return buf.join("")}})