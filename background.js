chrome.action.onClicked.addListener(function (tab) {
  // Inject content script into the current tab
  chrome.tabs.executeScript(
    {
      code: "window.getSelection().toString();",
    },
    function (selection) {
      // If there's a selection and it's base64 encoded, decode it and show in popup
      let selectedText = selection[0];
      if (selectedText && /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/i.test(selectedText)) {
        try {
          let decodedText = atob(selectedText);
          // Save the decoded string to storage
          chrome.storage.sync.set({ decodedStrings: [decodedText] });
        } catch (error) {
          console.error(error);
        }
      }
    }
  );
});
