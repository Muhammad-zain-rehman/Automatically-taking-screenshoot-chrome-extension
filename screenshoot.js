// following code will work on click on capture  button
document.getElementById('capture').onclick = () => {
    chrome.tabs.captureVisibleTab(url => {
      const el = document.createElement('a');
      el.href = url;
      el.download = 'screenshot.png';
      document.body.appendChild(el);
      el.click();
      el.remove();
    });
};
// following code will work on click on capture button