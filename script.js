document.addEventListener('DOMContentLoaded', function() {
  // Get references to the button and the hidden content
  var toggleButtons = document.querySelectorAll('.toggleButton');
  var hiddenContents = document.querySelectorAll('.hiddenContent');

  // Add click event listeners to all toggle buttons
  toggleButtons.forEach(function(toggleButton, index) {
    toggleButton.addEventListener('click', function() {
      // Toggle the display property of the corresponding hidden content
      if (hiddenContents[index].style.display === 'none') {
        hiddenContents[index].style.display = 'block';
      } else {
        hiddenContents[index].style.display = 'none';
      }
    });
  });
});
