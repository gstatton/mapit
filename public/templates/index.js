define(function(){return function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<div class="row"><div class="span2"><div class="well sidebar-nav"><ul class="nav nav-list"><li class="nav-header">Navigation</li><li><a>Test</a></li></ul></div></div><div class="span10"><div class="row">'),function(){if("number"==typeof people.length)for(var e=0,t=people.length;e<t;e++){var n=people[e];buf.push('<div class="well span4"><h4>'+escape((interp=n.FirstName)==null?"":interp)+" "+escape((interp=n.LastName)==null?"":interp)+"</h4><p>"+escape((interp=n.PhoneNumber)==null?"":interp)+"</p></div>")}else{var t=0;for(var e in people){t++;var n=people[e];buf.push('<div class="well span4"><h4>'+escape((interp=n.FirstName)==null?"":interp)+" "+escape((interp=n.LastName)==null?"":interp)+"</h4><p>"+escape((interp=n.PhoneNumber)==null?"":interp)+"</p></div>")}}}.call(this),buf.push("</div></div></div>")}return buf.join("")}})