function simulateClick(element) {
  ["mousedown", "mouseup", "click"].forEach((eventType) => {
    element.dispatchEvent(
      new MouseEvent(eventType, {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    );
  });
}

window.addEventListener("load", function () {
  setInterval(() => {
    const pickerBtn = document.querySelector(
      "button.nr-css-DateTimeRangePicker-trigger",
    );

    // This label is only present if the static range has already been set.
    if (
      pickerBtn.getAttribute("aria-label") === "Time Picker, [object Object]"
    ) {
      return;
    }

    simulateClick(pickerBtn);

    setTimeout(() => {
      const datePopper = document.querySelector("div.nr-css-Popper");

      const setCustomElement = datePopper.querySelector('[title="Set custom"]');
      const clickableElement = setCustomElement.parentElement;
      simulateClick(clickableElement);

      setTimeout(() => {
        const popperSpans = datePopper.querySelectorAll("span");

        for (const span of popperSpans) {
          if (span.textContent === "Apply") {
            simulateClick(span.parentElement);
          }
        }

        console.log(
          "Set date range picker to static range to disable auto-refresh. Cha-ching $$$",
        );
      }, 10);
    }, 10);
  }, 1000);
});
