const computeSubmit = document.querySelector('#compute');
const fetchTestURL = 'https://api.quotable.io/quotes/random?minLength=100&maxLength=140';

computeSubmit.addEventListener('click', async () => {
    try {
        const response = await fetch(fetchTestURL, {
            method : "GET",
            mode: 'cors',
            headers: {}
        });

        if (!response.ok) 
            throw new Error('Network response was not ok: ' + response.statusText);

        const result = await response.json();
        console.log(result);

        displayHTML(result[0].content);
    } catch (error) {
        console.error('Fetch error:', error.message);
    }
});

computeSubmit.addEventListener('click', windowOnLoad);

async function windowOnLoad() {
    // chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
    //     var activeTab = tabs[0];
    //     var activeTabId = activeTab.id;

    //     console.log(activeTabId)

    //     return chrome.scripting.executeScript({
    //         target: { tabId: activeTabId },
    //         // injectImmediately: true,
    //         func: extractImageURLs,
    //     });

    // }).then(res => {
    //     console.log(imgRow);
    //     const imgRow = document.querySelector('#img-row');
    //     imgRow.innerHTML = '';

    //     res.array.forEach(element => {
    //         imgRow.innerHTML += `<img src=${element} alt=""></img>`
    //     });
    // }).catch((e) => {})
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    
    chrome.tabs.query(queryOptions).then((tabs) => {
        const firstTab = tabs[0];
        const firstTabId = firstTab.id;

        chrome.scripting
            .executeScript({
            target : {tabId : firstTabId},
            func : extractImageURLs,
            })
            .then((res) => {
                const imageList = res[0].result;
                const imgRow = document.querySelector('#img-row');
                imgRow.innerHTML = '';
                imageList.forEach(element => {
                    imgRow.innerHTML += `<img src=${element} alt=""></img>`
                });
            });
    })
}

function displayHTML(content) {
    document.querySelector('#display-quote').innerHTML = content;
}

function extractImageURLs() {
    const imgTagList = document.querySelectorAll('img');
    const imgURLList = [];

    for (img of imgTagList) {
        imgURLList.push(img.src);
    }
    
    return imgURLList;
}