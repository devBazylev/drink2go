function changePrice () {
  const slider = document.getElementById('slider');

  if (slider) {
    noUiSlider.create(slider, {
      start: [0, 900],
      connect: true,
      step: 10,
      range: {
        'min': [0],
        'max': [972]
      }
    });
    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];
    slider.noUiSlider.on('update', (values, handle) => {
      inputs[handle].value = Math.round(values[handle]);
    });
    const setRangeSlider = (i, value) => {
      const arr = [null, null];
      arr[i] = value;
      slider.noUiSlider.set(arr);
    };
    inputs.forEach((element, index) => {
      element.addEventListener('change', (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    });
  }
}

export { changePrice };
