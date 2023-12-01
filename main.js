const selectEl = document.querySelector("#translatorEl");

selectEl.addEventListener("change", (e) => { 
    const val = e.target.value; //getting our value from the event
    // console.log(e.target.value);
    const selectedEn = document.querySelector(".goog-te-combo"); //Get's the google select element
    selectedEn.value=val; //set's the value to our selected value
    selectedEn.dispatchEvent(new Event("change")); //we dispatch an event, change, which is the same event we are using
})