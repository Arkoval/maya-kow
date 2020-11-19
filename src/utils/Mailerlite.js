const Mailerlite = param => {
  (function (m, a, i, l, e, r) {
    m['MailerLiteObject'] = e;
    function f() {
      var c = { a: arguments, q: [] };
      var r = this.push(c);
      return 'number' != typeof r ? r : f.bind(c.q);
    }
    f.q = f.q || [];
    m[e] = m[e] || f.bind(f.q);
    m[e].q = m[e].q || f.q;
    r = a.createElement(i);
    var _ = a.getElementsByTagName(i)[0];
    r.async = 1;
    r.src = l + '?v' + ~~(new Date().getTime() / 1000000);
    _.parentNode.insertBefore(r, _);
  })(
    window,
    document,
    'script',
    'https://static.mailerlite.com/js/universal.js',
    'ml',
  );
  var ml_account = ml('accounts', '2472946', 'k9f7u2i6y0', 'load');
  var ml_webform_2990594 = ml_account('webforms', '2990594', 'u8h2k3', 'load');
  ml_webform_2990594('animation', 'fadeIn');
  ml_webform_2990594(param);
};

export default Mailerlite;
