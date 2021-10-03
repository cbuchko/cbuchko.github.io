/** The SideBarBtns class */
class SideBarBtns {

    /** Used to register the scroll event handler */
    Initialize() {
      /** When the user scrolls down 300px from the top of the document, show the buttons */
      window.addEventListener("scroll", this.ToggleButtons)    
      /** Event handler for scroll to top button */
      document.getElementById("scroll-btn").addEventListener("click", this.ScrollToTop);
    }
  
    /** Displays/Hides the buttons */
    ToggleButtons() {
      /** If the current current scroll is 300px or more */
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        /** The scroll to top button is displayed */
        document.getElementById("scroll-btn").style.opacity = 1;      
        document.getElementById("scroll-btn").style.left = "92%";  
      } else {
        /** The scroll to top button is hidden */
        document.getElementById("scroll-btn").style.opacity = 0;    
        document.getElementById("scroll-btn").style.left = "100%";  
      }
    }
  
    /** When the user clicks on the button, scroll to the top of the document */
    ScrollToTop() {
      /** The user is scrolled to the top of the page */
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
  
  exports.onRouteUpdate = () => {
    /** The SideBarBtns object is created */
    let sidebarbtns = new SideBarBtns();
    /** If the current page is an article page */
    if (document.getElementById("scroll-btn")) {
      /** The SideBarBtns object is initialized */
      sidebarbtns.Initialize();
    }
  }