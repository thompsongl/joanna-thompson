module.exports = ({
  html = '',
  css = '',
  scripts,
  js,
  publicPath,
  title = 'x0',
  meta = [],
  links = [],
  static: staticBuild
}) =>
`<!DOCTYPE html>
<head>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width,initial-scale=1'>
<meta name='generator' content='Compositor x0'>
<title>${title}</title>
${meta.map(({ name, content }) => `<meta name='${name}' content='${content}'>`).join('\n')}
${links.map(({ rel, href }) => `<link rel='${rel}' href='${href}' />`).join('\n')}
<style>*{box-sizing:border-box}</style>
${css}
</head>
<div id=root>${html}</div>
<script>
    function sendData() {
      var XHR = new XMLHttpRequest();
      var FD  = new FormData(document.getElementById("contactForm"));

      // Define what happens on successful data submission
      XHR.addEventListener('load', function(event) {
        alert('Success! I will be in touch soon!');
      });

      // Define what happens in case of error
      XHR.addEventListener('error', function(event) {
        alert('Oops! Something went wrong.');
      });

      // Set up our request
      XHR.open('POST', 'https://hooks.zapier.com/hooks/catch/3585647/gdx4uq/');

      // Send our FormData object; HTTP headers are set automatically
      XHR.send(FD);
    }
</script>
${staticBuild ? '' : scripts}
`
