const navLinks = document.querySelectorAll('.nav-itens a');

navLinks.forEach(navLink => {
  
  navLink.addEventListener('click', function(event) {
  
    event.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
    });

    targetSection.style.display = 'block';
  });
});