(function () {
    var slidersContainer = document.querySelector(".sliders-container");
  
    // Initializing the numbers slider
    var msNumbers = new MomentumSlider({
      el: slidersContainer,
      cssClass: "ms--numbers",
      range: [1, 4],
      rangeContent: function (i) {
        return "0" + i;
      },
      style: {
        transform: [{ scale: [0.4, 1] }],
        opacity: [0, 1],
      },
      interactive: false,
    });
  
    // Initializing the titles slider
    var titles = ["WORLD CUP 2024", "THE BEST DUO", "WINNING MOMENTS", "RO-HITMAN"];
    var msTitles = new MomentumSlider({
      el: slidersContainer,
      cssClass: "ms--titles",
      range: [0, 3],
      rangeContent: function (i) {
        return '<h3 class="ms-title">' + titles[i] + '</h3>';
      },
      vertical: true,
      reverse: true,
      style: {
        opacity: [0, 1],
      },
      interactive: false,
    });
  
    // Initializing the links slider with descriptions
    var descriptions = [
      "Experience the thrill of the World Cup 2024.",
      "Discover the best cricketing duo in history.",
      "Relive the most exciting winning moments.",
      "Meet the legendary Ro-Hitman."
    ];
    var msLinks = new MomentumSlider({
      el: slidersContainer,
      cssClass: "ms--links",
      range: [0, 3],
      rangeContent: function (i) {
        return '<p class="ms-slide__description">' + descriptions[i] + '</p>';
      },
      vertical: true,
      interactive: false,
    });
  
    // Get pagination items
    var pagination = document.querySelector(".pagination");
    var paginationItems = [].slice.call(pagination.children);
  
    // Initializing the images slider
    var msImages = new MomentumSlider({
      el: slidersContainer,
      cssClass: "ms--images",
      range: [0, 3],
      rangeContent: function () {
        return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
      },
      sync: [msNumbers, msTitles, msLinks],
      style: {
        ".ms-slide__image": {
          transform: [{ scale: [1.5, 1] }],
        },
      },
      change: function (newIndex, oldIndex) {
        if (typeof oldIndex !== "undefined") {
          paginationItems[oldIndex].classList.remove("pagination__item--active");
        }
        paginationItems[newIndex].classList.add("pagination__item--active");
      },
    });
  
    // Select corresponding slider item when a pagination button is clicked
    pagination.addEventListener("click", function (e) {
      if (e.target.matches(".pagination__button")) {
        var index = paginationItems.indexOf(e.target.parentNode);
        msImages.select(index);
      }
    });
  
    // Previous and Next buttons
    var prevButton = document.querySelector('.nav-button--prev');
    var nextButton = document.querySelector('.nav-button--next');
  
    prevButton.addEventListener('click', function() {
      msImages.prev();
    });
  
    nextButton.addEventListener('click', function() {
      msImages.next();
    });
  })();
  