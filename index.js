// let text = $('.rotating-items p');
// text.innerHTML = text.innerText.split("").map((char, i) =>
//     `<span>${char}</span>`
// ).join("");

// var text = $(".curved-text").text();

// var newText = $.map(text.split(""), function (char,i) {
//   return `<span style="transform:rotate(${i*16}deg)">${char}</span>`;
// }).join("");

// $(".curved-text").html(newText);

// $(document).ready(function () {
//   // Using $.each() to iterate over the child divs of main-container
//   $('.main-container svg text textpath').each(function (index, element) {
//       // 'index' is the index of the current div (0-based)
//       // 'element' is the current div element
//       if ($(element).text().length >= 10 && $(element).text().length <= 12) {
//         $(this).parent().siblings('small-circle').addclass('small-text');
//         console.log(index, 'classaddes')
//       }
//       console.log(index, $(element).text().length);

//       // You can perform operations for each div here
//   });
// });