const integersOnly = {
  mounted(el, binding) {
    
    if (binding.modifiers.upper) {
      // Convert the displayed field to uppercase with an initial value
      // (for this to work, the v-model directive must be written before this one in the input field)
      el.value = el.value.toUpperCase();
      
      // Simulate an input event to mimic a keyboard keypress
      // (necessary for the reactive variable linked to the field to be updated)
      el.dispatchEvent(new Event("input"));
    }
    
    el.addEventListener("keydown", (event) => {
      const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const letters = ["a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"];
      const moves = ["Backspace", "ArrowLeft", "ArrowRight",
                     "Delete", "Tab", "Home", "End"];
      
      let authorized;  // Allowed keys in the input field
      
      // Allow hexadecimal characters if the hexa modifier is present
      if (binding.modifiers.hexa) authorized = [...numbers, ...letters, ...moves];
      else authorized = [...numbers, ...moves];
      
      // If the key is not allowed, do not take it into account
      if (!authorized.includes(event.key)) event.preventDefault();
      
      // Handle the upper modifier
      if (binding.modifiers.upper) {
        // If the key is a hexadecimal letter, convert it to uppercase
        if (letters.includes(event.key)) {
          const start = el.selectionStart;
          const end = el.selectionEnd;
          const text = el.value;

          // Insert the character at the cursor position
          const newText = text.substring(0, start) + event.key + text.substring(end);
          // Update the value of the input field (in uppercase)
          el.value = newText.toUpperCase();
          // Move the cursor after the inserted character
          el.setSelectionRange(start + 1, start + 1);          
          
          // Prevent further processing of the key (as it has already been handled above)
          event.preventDefault(); 
          
          // Simulate an input event to mimic a keyboard keypress
          // (necessary for the reactive variable linked to the field to be updated)
          el.dispatchEvent(new Event("input"));
        }
      }
    });
  },
}

export default integersOnly;