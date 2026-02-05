const clearable = {
  mounted(el) {
    const clearButton = document.createElement("button");
    clearButton.innerHTML = "Clear";
    clearButton.style = "position:relative; left:10px;";
    
    // Handle the click on the button (clear the content of the input field).
    clearButton.addEventListener("click", () => {
      // Clear the content of the input field.
      el.value = "";
      // Simulate an input event to mimic a keyboard key press
      // (mandatory to ensure that the reactive variable linked to the input field is updated)
      el.dispatchEvent(new Event("input"));
      // Give focus to the input field
      el.focus();
    });
    
    // Insert the button after the input field
    el.parentNode.insertBefore(clearButton, el.nextSibling);
  }
};

export default clearable;

