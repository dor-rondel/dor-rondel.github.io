particlesJS.load('particles-js', 'src/scripts/particles.json', () => {
  console.log('callback - particles.js config loaded');
});

$(() => {

  // Cache DOM
  let portfolioHeight = $('#portfolio').height();
  let aboutHeight = $('#about').height();
  $nav = $('nav');
  $homeLogo = $('.homeLogo');
  $buttonCollapse = $(".button-collapse");
  $typed = $('#typed');

  $(window).scroll(function() {
    if ($(this).scrollTop() > aboutHeight && $(this).scrollTop() < portfolioHeight) { //about
      $nav.addClass("sticky lightRed").removeClass("darkGray");
      $homeLogo.html("Rondel | רונדל");
    } else if ($(this).scrollTop() > aboutHeight && $(this).scrollTop() > portfolioHeight) { //portfolioHeight
      $nav.removeClass("lightRed").addClass("darkGray");
      $homeLogo.html("Dor | דור");
    } else { // back to landing section or passed portfolio
      $nav.removeClass("sticky darkGray lightRed");
      $homeLogo.html("Dor | דור");
    }
  });

  $buttonCollapse.sideNav();

  $typed.typed({
    strings: ["Aspiring Full-Stack Web Developer", "Hobbyist Bioinformatician", "Computer Security Enthusiast", "Just Your Typical Teenager"],
    typeSpeed: 0
  });
})
