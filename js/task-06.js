const validationInputEl = document.querySelector('#validation-input');

const validationInputBlur = (event) => {
  const el = event.currentTarget;
  const elValueLength = el.value.length;
  const validLength = Number(el.dataset.length);

  console.log(elValueLength, validLength);

  el.classList.add(elValueLength === validLength ? 'valid' : 'invalid')
};

validationInputEl.addEventListener('blur', validationInputBlur);