const focusDirective = {
  mounted(el, binding) {
    const arg = binding.arg;
    const value = binding.value;
    // Position the handling of the focus and blur events
    el.addEventListener("focus", () => {
      if (arg == "color") el.style.color = value;
      if (arg == "backgroundcolor") el.style.backgroundColor = value;      
      if (arg == "colors") {
        el.style.color = value.color;
        el.style.backgroundColor = value.backgroundcolor;
      }      
    });
    el.addEventListener("blur", () => {
      if (arg == "color") el.style.color = "";
      if (arg == "backgroundcolor") el.style.backgroundColor = "";
      if (arg == "colors") {
        el.style.color = "";
        el.style.backgroundColor = "";
      }      
    });
    // and then give focus to the input field
    el.focus();
  }
};

export default focusDirective;