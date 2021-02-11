ScrollReveal({ reset: false });
	ScrollReveal().reveal('.section-title', 
		{
		  delay:300,distance:'0px', 
      origin:'bottom',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      distance: '30px',
      duration: 1000,

		}
	);
  
	/* Hero Section */
	ScrollReveal().reveal('.hero-title', 
		{ 
		  delay: 500, 
      origin: window.innerWidth > 768 ? 'left' : 'bottom',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      distance: '30px',
      duration: 1000,

		}
	);
	
	ScrollReveal().reveal('.hero-cta', 
		{
		  delay: 1000, 
      origin: window.innerWidth > 768 ? 'left' : 'bottom',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      distance: '30px',
      duration: 1000,

		}
	);
  
	/* About Section */
	ScrollReveal().reveal('.about-wrapper__image', 
		{
		  delay: 600,
      origin: 'bottom',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      distance: '30px',
      duration: 1000,

		}
	);
  
	ScrollReveal().reveal('.about-wrapper__info', 
		{
		  delay: 1000,
      origin: window.innerWidth > 768 ? 'left' : 'bottom',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      distance: '30px',
      duration: 1000,

		}
	);
  
	/* Projects Section */
	ScrollReveal().reveal('.project-wrapper__text', 
		{
		  delay: 500,
      origin: window.innerWidth > 768 ? 'left' : 'bottom',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      distance: '30px',
      duration: 1000,

		}
	);
  
	ScrollReveal().reveal('.project-wrapper__image', 
		{
		  delay: 1000,
      origin: window.innerWidth > 768 ? 'right' : 'bottom',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      distance: '30px',
      duration: 1000,

		}
	);
  
	/* Contact Section */
	ScrollReveal().reveal('.contact-wrapper', 
		{
		  delay: 800,
      origin: 'bottom',
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      distance: '30px',
      duration: 1000,

		}
	);

  $('#nav').onePageNav({
    currentClass: 'current',
    changeHash: true,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
      //I get fired when the animation is starting
    },
    end: function() {
      //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
      console.log($currentListItem)
    }
  });