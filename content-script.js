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
    // We have to set up the interval on any route on the domain, otherwise
    // we miss our chance to set up the interval when the user navigates via
    // client-side routing to the dashboard.
    // Because we do this, we need to filter all other paths and exit early for
    // those. This is dirty, but it does the trick for now.
    if (!/\/dashboards\/detail\/.*/.test(window.location.pathname)) {
      return;
    }
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
