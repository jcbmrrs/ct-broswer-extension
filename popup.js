let ctHelper = document.getElementById("ctHelper");


ctHelper.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: helpMe,
  });
});

// The body of this function will be executed as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });


function helpMe(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    
    today = yyyy + '-' + mm + '-' + dd;
    
    var name = 'Morris, Jacob';
    var division = 
     'Office+of+the+VP+and+CIO';
    
    var building =
    '4545+Building' ;
    
    var notes = '4th floor';
    
    url = 'https://docs.google.com/forms/d/e/1FAIpQLSciSn-hBjK-XNVPa1kj9IR79VM2GkR0tPj_Of0dk22u3c9ERA/viewform?usp=pp_url&entry.1856794426=Daily+Contact+Tracing&entry.1935343127=' 
    + name 
    + '&entry.1090617439=' 
    + division 
    + '&entry.2027746959=' 
    + today 
    + '&entry.594192865=08:30&entry.371416444=17:30&entry.153424875='
    + building
    + '&entry.855049499='
    + notes;
    
    window.open(url);
}