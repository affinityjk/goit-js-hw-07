const fontSizeControlEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

const onFontSizeControlChange = (event) => {
  const currentValue = event.currentTarget.value;

  console.log(textEl.style.fontSize = `${currentValue}px`);
};

fontSizeControlEl.addEventListener('input', onFontSizeControlChange);