function getHBTemplate(tab) {
  $.get(`scripts/handlebarsTemplates/${tab}.hbs`, (t) => {

    let template = Handlebars.compile(t);
    $('.main-content').html(template());

    // below is how to enter data into template
    // $('.main-content').html(template(data));
  });
}

getHBTemplate('home');
// Nav clicking. Clicking on a nav loads a different handlebars template into main content div
$('.svg-parent svg').on('click', function(e) {
  let clickedSVG = $(this).attr('id').replace('SVG', '');

  // load template based on nav selected
  getHBTemplate(clickedSVG);

  // Hide all navs except home.
  $('.svg-parent svg').not('#homeSVG').hide();

  // clicking on home should show nav bar again.
  if (clickedSVG === 'home' && $('.svg-parent svg').not('#homeSVG').not(':visible')) {
    $('.svg-parent svg').not('#homeSVG').show();
  }

});