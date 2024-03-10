$(document).ready(function () {
  // Using $.each() to iterate over the child divs of main-container
  $('.main-container svg text textpath').each(function (index, element) {
      var originalText = $(this).text();
      let textlength = $(this).text().length;
      // Split the text into an array of characters
      var charArray = originalText.split('');

      // Join the array with a space between each character
      var newText = charArray.join(' ');

      // Set the new text to the element
      $(this).text(newText);
  });
});