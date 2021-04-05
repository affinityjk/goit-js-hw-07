const refs = {
  input: document.querySelector('#controls [type="number"]'),
  renderBtn: document.querySelector('#controls [data-action="render"]'),
  destroyBtn: document.querySelector('#controls [data-action="destroy"]'),
  boxesContainer: document.querySelector('#boxes'),
};

const createRandomColor = () => {
  const maxRange = 255;
  return `
    rgb(${Math.floor(Math.random() * maxRange)}, ${Math.floor(Math.random() * maxRange)}, ${Math.floor(Math.random() * maxRange)})
    `
};

const createBoxes = (amount) => {
  let boxesMarkup = '';

  for (let i = 0; i < amount; i+=1) {
    const boxSize = 30 + i * 10;

    boxesMarkup += `
      <div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${createRandomColor()};">
      </div>
    `
  }

  refs.boxesContainer.insertAdjacentHTML('beforeend', boxesMarkup);
};

const destroyBoxes = () => {
  refs.boxesContainer.innerHTML = '';
};

const onDestroyBtnClick = () => {
  destroyBoxes();
  refs.input.value = '';
};

const onRenderBtnClick = () => {
  destroyBoxes();
  createBoxes(refs.input.value);
};

refs.destroyBtn.addEventListener('click', onDestroyBtnClick);
refs.renderBtn.addEventListener('click', onRenderBtnClick);