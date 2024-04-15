const darkButton = document.getElementById("Dark");

darkButton.addEventListener('click', () => {
    
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id, allFrames: false },
                files: ['dark_script.js']
            });
        });
    
});


const lightButton= document.getElementById("Light");

lightButton.addEventListener('click', () =>{
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id, allFrames: false },
            files: ['light_script.js']
        });
    });
})