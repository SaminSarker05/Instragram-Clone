const wrapper = document.querySelector('.wrapper'), form = wrapper.querySelectorAll('.form'), submitInput = form[0].querySelector('input[type="submit"]');

function getDataForm(e) {
  e.preventDefault();
  var formData = new FormData(form[0]);
  console.log(formData.get('username'));
  console.log(formData.get('password'));
}

document.addEventListener('DOMContentLoaded', function(){
  submitInput.addEventListener('click',getDataForm,false);
}, false);

