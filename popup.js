let ctHelper = document.getElementById("ctHelper");

ctHelper.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: helpMe,
  });
});

function helpMe(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    
    today = yyyy + '-' + mm + '-' + dd;
    
    var name = 'Morris, Jacob';
    var phone = '206-867-5309';
    var netid = 'uwnetid';
    var building = '4545+Building';
    var notes = '4th floor';

    /* BUILDINGS

    '4545+Building'
    'UW+Tower'
    'UDB'
    'MGH'
    'Other+campus+location+(enter+below)'
    */

    url = 'https://docs.google.com/forms/d/e/1FAIpQLSciSn-hBjK-XNVPa1kj9IR79VM2GkR0tPj_Of0dk22u3c9ERA/viewform?usp=pp_url'
    + '&entry.1856794426=I+attest+that+prior+to+coming+in+to+work+that+I+AM+NOT+experiencing+any+Covid-19+symptoms.&entry.1935343127=' 
    + name 
    + '&entry.1453294910='
    + phone
    + '&entry.2009734546='
    + netid
    + '&entry.2027746959='
    + today 
    + '+08:00'
    + '&entry.371416444='
    + today 
    + '+17:00'
    + '&entry.153424875='
    + building 
    + '&entry.855049499=' 
    + notes;
    
    window.open(url);
}