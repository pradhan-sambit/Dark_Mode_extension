const darkButton = document.querySelector(".toggle-switch");
var darkMode=true;

if(darkMode){
    console.log(darkMode);
    darkButton.addEventListener('click', () =>{
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id, allFrames: false },
                files: ['light_script.js']
            });
        });
    })
}
else{
    darkMode=false;
    darkButton.addEventListener('click', () => {
    
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id, allFrames: false },
                files: ['dark_script.js']
            });
        });
    
});
}



