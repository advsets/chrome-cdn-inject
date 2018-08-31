chrome.browserAction.onClicked.addListener((event) => {
  // chrome.extension.getURL('http://www.staticfile.org/');
  const url = new URL('http://www.staticfile.org/')
  const selected = true
  chrome.windows.getAll({
    populate: true
  }, (windows) => {
    let existing = null
    windows.forEach((win) => {
      existing = win.tabs.find(tab => {
        return (new URL(tab.url)).origin === url.origin
      })
    })
    if (existing) {
      chrome.tabs.update(existing.id, {selected})
    } else {
      chrome.tabs.create({url: url.origin, selected})
    }
  });
});
