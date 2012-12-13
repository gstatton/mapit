var __slice = [].slice;

define(["app/server", "app/sso", "app/mixpanel"], function(server, sso, mix) {
  server.ready(function(services) {
    return console.log.apply(console, ["Server connected:"].concat(__slice.call(services)));
  });
  return sso.check(function(err, user) {
    if (err != null) {
      return util.handleError(err);
    }
    mix.load(user);
    return dermis.route('/');
  });
});
