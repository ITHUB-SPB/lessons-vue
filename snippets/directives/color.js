const color = {
  mounted(el, binding) {
    let colorStyle;
    if (binding.modifiers.toggle) {
      const colors = binding.value;
      el.addEventListener("click", () => {
        if (colorStyle == colors[0]) colorStyle = colors[1];
        else if (colorStyle == colors[1]) colorStyle = colors[0];
        else colorStyle = colors[0];
        // Change the background color of the element
        el.style.backgroundColor = colorStyle;
      });
    }
  },
};

export default color;