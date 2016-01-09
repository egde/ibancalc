var btnCopyIBAN = document.getElementById('btnCopyIBAN');

btnCopyIBAN.addEventListener('click', function(event) {
  var txtIBAN = document.getElementById('txtIBAN');
  txtIBAN.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});
