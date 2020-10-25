function renderHello() {
  //var template = document.getElementById('template').innerHTML;
  //var template = 'Hello {{ name }} !';
  //var rendered = Mustache.render(template, { name: 'Luke' });
  //document.getElementById('target').innerHTML = rendered;

  fetch('template.mustache')
    .then((response) => response.text())
    .then((template) => {
      var rendered = Mustache.render(template, { name: 'Luke' });
      document.getElementById('target').innerHTML = rendered;    
    });
}