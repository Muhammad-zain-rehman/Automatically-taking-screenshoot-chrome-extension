function start(){
    chrome.runtime.sendMessage({msg: "capture"}, function(response) {
        console.log(response.imgSrc);
        const el = document.createElement('a');
        el.href = response.imgSrc;
        el.download = 'screenshot.png';
        document.body.appendChild(el);
        el.click();
        el.remove();
    });
    setTimeout(
        start
        ,180000)    
}

start();


   



// on install following code will work
