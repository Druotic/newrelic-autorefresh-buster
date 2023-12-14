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
      "button.AAUNAC-wnd-TimePicker-triggerContent",
    );

    // This label is only present if the static range has already been set.
    if (
      pickerBtn.getAttribute("aria-label") === "Time Picker, [object Object]"
    ) {
      return;
    }

    simulateClick(pickerBtn);

    setTimeout(() => {
      const setCustomBtn = document.querySelector(
        "div.AAUNAC-wnd-TimePicker-customRange",
      );
      simulateClick(setCustomBtn);

      setTimeout(() => {
        const applyBtn = document.querySelector(
          "button.nr-css-DTRP-CustomDialog-applyButton",
        );
        simulateClick(applyBtn);

        console.log(
          "Set date range picker to static range to disable auto-refresh. Cha-ching $$$",
        );
      }, 10);
    }, 10);
  }, 1000);
});
