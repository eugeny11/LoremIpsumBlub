document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".blub__content");
  const scrollbar = document.querySelector(".blub__scrollbar");
  const scrollbarThumb = document.querySelector(".blub__scrollbar-thumb");

  let contentHeight = content.scrollHeight;
  let visibleHeight = content.clientHeight;
  let scrollbarHeight = scrollbar.clientHeight;
  let thumbHeight = scrollbarThumb.clientHeight;

  let isDragging = false;
  let startY;
  let startThumbTop;

  content.addEventListener("scroll", () => {
    if (!isDragging) {
      const scrollRatio = content.scrollTop / (contentHeight - visibleHeight);
      const thumbTop = scrollRatio * (scrollbarHeight - thumbHeight);
      updateScrollPosition(scrollRatio, thumbTop);
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const deltaY = e.clientY - startY;
      let thumbTop = startThumbTop + deltaY;
      thumbTop = Math.min(Math.max(thumbTop, 0), scrollbarHeight - thumbHeight);
      const scrollRatio = thumbTop / (scrollbarHeight - thumbHeight);
      updateScrollPosition(scrollRatio, thumbTop);
    }
  });

  scrollbarThumb.addEventListener("mousedown", (e) => {
    isDragging = true;
    startY = e.clientY;
    startThumbTop = parseInt(window.getComputedStyle(scrollbarThumb).top, 10);
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.userSelect = "";
    }
  });

  scrollbarThumb.addEventListener("touchstart", (e) => {
    isDragging = true;
    startY = e.touches[0].clientY;
    startThumbTop = parseInt(window.getComputedStyle(scrollbarThumb).top, 10);
    document.body.style.userSelect = "none";
  });

  scrollbarThumb.addEventListener("touchmove", (e) => {
    if (isDragging) {
      const deltaY = e.touches[0].clientY - startY;
      let thumbTop = startThumbTop + deltaY;
      thumbTop = Math.min(Math.max(thumbTop, 0), scrollbarHeight - thumbHeight);
      const scrollRatio = thumbTop / (scrollbarHeight - thumbHeight);
      updateScrollPosition(scrollRatio, thumbTop);
    }
  });

  scrollbarThumb.addEventListener("touchend", () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.userSelect = "";
    }
  });

  window.addEventListener("resize", () => {
    contentHeight = content.scrollHeight;
    visibleHeight = content.clientHeight;
    scrollbarHeight = scrollbar.clientHeight;
    thumbHeight = scrollbarThumb.clientHeight;
  });

  content.addEventListener("wheel", (e) => {
    e.preventDefault();

    let newScrollTop = content.scrollTop + e.deltaY;
    newScrollTop = Math.max(
      0,
      Math.min(newScrollTop, contentHeight - visibleHeight)
    );

    const scrollRatio = newScrollTop / (contentHeight - visibleHeight);
    const thumbTop = scrollRatio * (scrollbarHeight - thumbHeight);

    updateScrollPosition(scrollRatio, thumbTop);
  });

  function updateScrollPosition(scrollRatio, thumbTop) {
    content.scrollTop = scrollRatio * (contentHeight - visibleHeight);
    scrollbarThumb.style.top = `${thumbTop}px`;
  }
});
