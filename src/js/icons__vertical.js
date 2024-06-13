document.addEventListener("DOMContentLoaded", function () {
  function activateVerticalScroll() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1460) {
      const banner = document.querySelector(".banner");
      const leftColumn = document.querySelector(".banner__column-left");
      const centerColumn = document.querySelector(".banner__column-center");
      const rightColumn = document.querySelector(".banner__column-right");

      function createVerticalInfiniteScroll(column, direction, speed) {
        const bannerHeight = banner.offsetHeight;

        let position = 0;
        let delay = 0;

        function scroll() {
          if (delay > 0) {
            delay--;
          } else {
            const firstItem = column.firstElementChild;
            const lastItem = column.lastElementChild;
            const firstItemHeight = firstItem.clientHeight + 30;
            const lastItemHeight = lastItem.clientHeight + 30;

            if (direction === "up") {
              position += speed;
              if (position >= firstItemHeight) {
                position -= firstItemHeight;
                column.appendChild(firstItem);
                delay = 1;
              }
            } else if (direction === "down") {
              position -= speed;
              if (position <= -lastItemHeight) {
                position += lastItemHeight;
                column.insertBefore(lastItem, firstItem);
                delay = 1;
              }
            }

            position = Math.round(position * 1000) / 1000;

            column.style.transform = `translateY(${-position}px)`;

            const visibleItems = column.querySelectorAll(
              ".banner__column-item"
            );
            visibleItems.forEach((item) => {
              const rect = item.getBoundingClientRect();
              const distanceFromTop = rect.top;
              const opacity = Math.max(
                0,
                Math.min(1, 1 - distanceFromTop / bannerHeight)
              );
              item.style.opacity = opacity;
            });
          }

          requestAnimationFrame(scroll);
        }

        scroll();
      }

      createVerticalInfiniteScroll(leftColumn, "down", 0.5);
      createVerticalInfiniteScroll(centerColumn, "up", 0.5);
      createVerticalInfiniteScroll(rightColumn, "down", 0.8);

      leftColumn.style.willChange = "transform";
      centerColumn.style.willChange = "transform";
      rightColumn.style.willChange = "transform";
    }
  }

  // Обработка событий изменения размеров окна и загрузки страницы
  window.addEventListener("load", activateVerticalScroll);
  window.addEventListener("resize", activateVerticalScroll);
});
