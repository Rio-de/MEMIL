document.addEventListener('DOMContentLoaded', function() {
  // Get references to the button and the hidden content
  var toggleButton = document.getElementById('toggleButton');
  var hiddenContent = document.getElementById('hiddenContent');

  // Add a click event listener to the button
  toggleButton.addEventListener('click', function() {
    // Toggle the display property of the hidden content
    if (hiddenContent.style.display === 'none') {
      hiddenContent.style.display = 'block';
    } else {
      hiddenContent.style.display = 'none';
    }
  });
});
