
      var drawercloseIcon = document.getElementById("drawercloseIcon");
      if (drawercloseIcon) {
        drawercloseIcon.addEventListener("click", function (e) {
          var popup = e.currentTarget.parentNode;
          function isOverlay(node) {
            return !!(
              node &&
              node.classList &&
              node.classList.contains("popup-overlay")
            );
          }
          while (popup && !isOverlay(popup)) {
            popup = popup.parentNode;
          }
          if (isOverlay(popup)) {
            popup.style.display = "none";
          }
        });
      }
      
      var drawerlink = document.getElementById("drawerlink");
      if (drawerlink) {
        drawerlink.addEventListener("click", function (e) {
          window.location.href = "/";
        });
      }
      
      var drawerrowContainer = document.getElementById("drawerrowContainer");
      if (drawerrowContainer) {
        drawerrowContainer.addEventListener("click", function (e) {
          window.location.href = "/";
        });
      }
      
      var drawerrowContainer1 = document.getElementById("drawerrowContainer1");
      if (drawerrowContainer1) {
        drawerrowContainer1.addEventListener("click", function (e) {
          window.location.href = "./all-projects.html";
        });
      }
      
      var drawerrowContainer2 = document.getElementById("drawerrowContainer2");
      if (drawerrowContainer2) {
        drawerrowContainer2.addEventListener("click", function (e) {
          window.location.href = "./about.html";
        });
      }
      
      var drawerrowContainer3 = document.getElementById("drawerrowContainer3");
      if (drawerrowContainer3) {
        drawerrowContainer3.addEventListener("click", function (e) {
          window.location.href = "./contact.html";
        });
      }
      var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
      var observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              const targetElement = entry.target;
              targetElement.classList.add("animate");
              observer.unobserve(targetElement);
            }
          }
        },
        {
          threshold: 0.15,
        }
      );
      
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.observe(scrollAnimElements[i]);
      }
      
      var link = document.getElementById("link");
      if (link) {
        link.addEventListener("click", function (e) {
          window.location.href = "/";
        });
      }
      
      var link1 = document.getElementById("link1");
      if (link1) {
        link1.addEventListener("click", function (e) {
          window.location.href = "./all-projects.html";
        });
      }
      
      var link2 = document.getElementById("link2");
      if (link2) {
        link2.addEventListener("click", function (e) {
          window.location.href = "./about.html";
        });
      }
      
      var hamburgerMenu = document.getElementById("hamburgerMenu");
      if (hamburgerMenu) {
        hamburgerMenu.addEventListener("click", function () {
          var drawerOverlay = document.getElementById("hamburgerDrawer");
          if (!drawerOverlay) return;
          var drawerOverlayStyle = drawerOverlay.style;
          if (drawerOverlayStyle) {
            drawerOverlayStyle.display = "flex";
            drawerOverlayStyle.zIndex = 99;
            drawerOverlayStyle.backgroundColor = "#000";
            drawerOverlayStyle.alignItems = "center";
            drawerOverlayStyle.justifyContent = "";
          }
          drawerOverlay.setAttribute("closable", "");
      
          var onClick =
            drawerOverlay.onClick ||
            function (e) {
              if (
                e.target === drawerOverlay &&
                drawerOverlay.hasAttribute("closable")
              ) {
                drawerOverlayStyle.display = "none";
              }
            };
          drawerOverlay.addEventListener("click", onClick);
        });
      }
      
      var button = document.getElementById("button");
      if (button) {
        button.addEventListener("click", function (e) {
          window.location.href = "./contact.html";
        });
      }
