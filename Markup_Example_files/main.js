function register() {
  var alertDiv = document.getElementById('alertDiv');
  var nameElt = document.getElementById('name');
  if (!alertDiv || !nameElt) return false;
  alertDiv.innerText = 'Thanks for registering, ' + nameElt.value + '!';
}

function fakeCheckboxClick() {
  var checkbox = document.getElementById('fake-checkbox');
  if (!checkbox) return false;
  checkbox.classList.toggle('checked');
}

function ariaCheckboxClick() {
  var checkbox = document.getElementById('fake-checkbox-aria');
  if (!checkbox) return false;
  checkbox.classList.toggle('checked');
  checkbox.setAttribute('aria-checked', checkbox.classList.contains('checked'));
}
