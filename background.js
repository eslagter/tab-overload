function onUpdate() {
  browser.tabs.query({})
    .then((tabs) => {
      console.log(tabs)
      let urls = tabs.map((tab) => tab.url)
    });
}

browser.tabs.onRemoved.addListener(onUpdate);
browser.tabs.onCreated.addListener(onUpdate);

updateCount();
