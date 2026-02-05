const timer = {
  mounted(el, binding) {
    const ms = binding.modifiers.ms;
    const chrono = binding.modifiers.chrono;
    
    // Initialization of the clock or stopwatch.
    if (!chrono) {
      let time = getCurrentTime(ms);
      el.innerHTML = time;
    }
    else {
      if (!ms) el.innerHTML = "00:00:00";
      else el.innerHTML = "00:00:00.0";
    }
    
    setInterval(()=>{
      if (!chrono) {
        let time = getCurrentTime(ms);
        el.innerHTML = time;
      }
      else {
        const chronoTime = getChronoTime(ms);
        el.innerHTML = chronoTime;
      }
    }, 100);
  },
}

function getCurrentTime(ms = false) {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  let formattedTime = `${hours}:${minutes}:${seconds}`;

  if (ms) {
    const milliseconds = now.getMilliseconds().toString().slice(0, 1); // Obtaining tenths of a second
    formattedTime += `.${milliseconds}`;
  }

  return formattedTime;
}

let startChronoTime = new Date();  // Starting time of the stopwatch

function getChronoTime(ms = false) {
  const now = new Date();
  const elapsedMilliseconds = now.getTime() - startChronoTime.getTime();

  const hours = Math.floor(elapsedMilliseconds / (3600 * 1000));
  const remainingMilliseconds1 = elapsedMilliseconds % (3600 * 1000);

  const minutes = Math.floor(remainingMilliseconds1 / (60 * 1000));
  const remainingMilliseconds2 = remainingMilliseconds1 % (60 * 1000);

  const seconds = Math.floor(remainingMilliseconds2 / 1000);
  
  let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  if (ms) {
    const milliseconds = Math.floor(remainingMilliseconds2 % 1000);
    const tenthsOfSecond = Math.floor((milliseconds % 1000) / 100);
    formattedTime += `.${tenthsOfSecond.toString()}`;
  }

  return formattedTime;
}

export default timer;



//~ const timer = {
  //~ mounted(el, binding) {
    //~ const ms = binding.modifiers.ms;
    //~ const chrono = binding.modifiers.chrono;
    
    //~ // Initialization of the clock or stopwatch.
    //~ if (!chrono) {
      //~ let time = getCurrentTime(ms);
      //~ el.innerHTML = time;
    //~ }
    //~ else {
      //~ if (!ms) el.innerHTML = "00:00:00";
      //~ else el.innerHTML = "00:00:00.0";
    //~ }
    
    //~ setInterval(()=>{
      //~ if (!chrono) {
        //~ let time = getCurrentTime(ms);
        //~ el.innerHTML = time;
      //~ }
      //~ else {
        //~ const chronoTime = getChronoTime(ms);
        //~ el.innerHTML = chronoTime;
      //~ }
    //~ }, 100);
  //~ },
//~ }

//~ function getCurrentTime(ms = false) {
  //~ const now = new Date();
  //~ const hours = now.getHours().toString().padStart(2, '0');
  //~ const minutes = now.getMinutes().toString().padStart(2, '0');
  //~ const seconds = now.getSeconds().toString().padStart(2, '0');
  //~ let formattedTime = `${hours}:${minutes}:${seconds}`;

  //~ if (ms) {
    //~ const milliseconds = now.getMilliseconds().toString().slice(0, 1); // Obtaining tenths of a second.
    //~ formattedTime += `.${milliseconds}`;
  //~ }

  //~ return formattedTime;
//~ }

//~ let startChronoTime = new Date();  // Starting time of the stopwatch.

//~ function getChronoTime(ms = false) {
  //~ const now = new Date();
  //~ const elapsedMilliseconds = now.getTime() - startChronoTime.getTime();

  //~ const hours = Math.floor(elapsedMilliseconds / (3600 * 1000));
  //~ const remainingMilliseconds1 = elapsedMilliseconds % (3600 * 1000);

  //~ const minutes = Math.floor(remainingMilliseconds1 / (60 * 1000));
  //~ const remainingMilliseconds2 = remainingMilliseconds1 % (60 * 1000);

  //~ const seconds = Math.floor(remainingMilliseconds2 / 1000);
  
  //~ let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  //~ if (ms) {
    //~ const milliseconds = Math.floor(remainingMilliseconds2 % 1000);
    //~ const tenthsOfSecond = Math.floor((milliseconds % 1000) / 100);
    //~ formattedTime += `.${tenthsOfSecond.toString()}`;
  //~ }

  //~ return formattedTime;
//~ }

//~ export default timer;