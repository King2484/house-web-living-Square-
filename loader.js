// Wait for the window to load
window.addEventListener('load', function() {
    // Get the loader element
    var loader = document.querySelector('.banter-loader');

    // Function to fade out the loader
    function fadeOutLoader() {
      // Set the initial opacity to 1
    loader.style.opacity = 1;

      // Function to decrease the opacity gradually
    function decreaseOpacity() {
        if (loader.style.opacity > 0) {
          loader.style.opacity -= 0.01; // Adjust the decrement value for faster/slower fade
        requestAnimationFrame(decreaseOpacity);
        } else {
          // Remove the loader from the DOM
        loader.parentNode.removeChild(loader);
        }
    }

      // Call the decreaseOpacity function to start fading out
    decreaseOpacity();
    }

    // Call the fadeOutLoader function immediately
    fadeOutLoader();
});
