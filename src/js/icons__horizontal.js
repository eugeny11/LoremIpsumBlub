document.addEventListener("DOMContentLoaded", function () {
  let horizontalScrollActive = false;

  function activateHorizontalScroll() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1460) {
      const leftColumn = document.querySelector(
        ".banner__horizontal__column-left"
      );
      const centerColumn = document.querySelector(
        ".banner__horizontal__column-center"
      );
      const rightColumn = document.querySelector(
        ".banner__horizontal__column-right"
      );

      function createHorizontalInfiniteScroll(column, direction, speed) {
        let position = 0;
        let delay = 0;
        const columnWidth = column.clientWidth;

        function scroll() {
          if (delay > 0) {
            delay--;
          } else {
            const firstItem = column.firstElementChild;
            const lastItem = column.lastElementChild;
            const firstItemWidth = firstItem.clientWidth + 12;
            const lastItemWidth = lastItem.clientWidth + 12;

            if (direction === "left") {
              position -= speed;
              if (position <= -lastItemWidth) {
                position += lastItemWidth;
                column.insertBefore(lastItem, column.firstElementChild);
                delay = 1;
              }
            } else if (direction === "right") {
              position += speed;
              if (position >= firstItemWidth) {
                position -= firstItemWidth;
                column.appendChild(firstItem);
                delay = 1;
              }
            }

            column.style.transform = `translateX(${-position}px)`;

            const visibleItems = column.querySelectorAll(
              ".banner__horizontal__column-item"
            );
            visibleItems.forEach((item) => {
              const rect = item.getBoundingClientRect();
              const distanceFromLeft = rect.left;
              const opacity = Math.max(
                0,
                Math.min(1, 1 - distanceFromLeft / columnWidth)
              );
              item.style.opacity = opacity;
            });
          }

          requestAnimationFrame(scroll);
        }

        scroll();
      }

      createHorizontalInfiniteScroll(leftColumn, "left", 0.5);
      createHorizontalInfiniteScroll(centerColumn, "right", 0.5);
      createHorizontalInfiniteScroll(rightColumn, "left", 0.5);

      leftColumn.style.willChange = "transform";
      centerColumn.style.willChange = "transform";
      rightColumn.style.willChange = "transform";
    }
  }

  function handleWindowSizeChange() {
    const newScreenWidth = window.innerWidth;

    if (newScreenWidth <= 1460 && !horizontalScrollActive) {
      activateHorizontalScroll();
      horizontalScrollActive = true;
    } else if (newScreenWidth > 1460 && horizontalScrollActive) {
      horizontalScrollActive = false;
    }
  }

  // Обработка событий изменения размеров окна и загрузки страницы
  window.addEventListener("load", handleWindowSizeChange);
  window.addEventListener("resize", handleWindowSizeChange);
});
