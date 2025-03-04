// BACK TO TOP ============================
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// =====================================


// SERVICES CHANGE ============================
document.getElementById('service-1').addEventListener('click', function() {
  showServiceContent('content-1');
});
document.getElementById('service-2').addEventListener('click', function() {
  showServiceContent('content-2');
});
document.getElementById('service-3').addEventListener('click', function() {
  showServiceContent('content-3');
});
document.getElementById('service-4').addEventListener('click', function() {
  showServiceContent('content-4');
});
document.getElementById('service-5').addEventListener('click', function() {
  showServiceContent('content-5');
});
document.getElementById('service-6').addEventListener('click', function() {
  showServiceContent('content-6');
});
document.getElementById('service-7').addEventListener('click', function() {
  showServiceContent('content-7');
});
document.getElementById('service-8').addEventListener('click', function() {
  showServiceContent('content-8');
});
document.getElementById('service-9').addEventListener('click', function() {
  showServiceContent('content-9');
});
document.getElementById('service-10').addEventListener('click', function() {
  showServiceContent('content-10');
});

function showServiceContent(contentId) {
  var contents = document.querySelectorAll('.service-content');
  contents.forEach(function(content) {
      content.classList.remove('active');
  });

  document.getElementById(contentId).classList.add('active');
}
// =====================================


// SERVICES RENDERING ============================
function loadContent() {
  const services = [
      { id: 1, file: 'partials/services/corte.html' },
      { id: 2, file: 'partials/services/barba.html' },
      { id: 3, file: 'partials/services/barboterapia.html' },
      { id: 4, file: 'partials/services/luzes.html' },
      { id: 5, file: 'partials/services/platinado.html' },
      { id: 6, file: 'partials/services/pigmentacao.html' },
      { id: 7, file: 'partials/services/lavagem.html' },
      { id: 8, file: 'partials/services/manicure.html' },
      { id: 9, file: 'partials/services/pedicure.html' },
      { id: 10, file: 'partials/services/all.html' },
  ];

  const container = document.getElementById('services-container');

  services.forEach(service => {
    fetch(service.file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(`content-${service.id}`).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${service.file}:`, error));
  });
}

document.addEventListener('DOMContentLoaded', function() {
  loadContent();
  showServiceContent('content-10');
});
// =====================================


// CAROUSEL RENDERING ============================
function loadCarousel() {
  fetch('partials/carousel.html')
      .then(response => response.text())
      .then(data => {
          document.querySelectorAll('.carousel-container').forEach((container, index) => {
              const uniqueId = index + 1;
              container.innerHTML = data.replace(/{{id}}/g, uniqueId);
          });
      })
      .catch(error => console.error('Error loading carousel:', error));
}

document.addEventListener('DOMContentLoaded', function() {
  loadCarousel();
});
// =====================================


// CAROUSEL MODAL ============================
function updateModalTitle() {
  const activeContent = document.querySelector('.service-content.active');
  
  if (activeContent) {
      const contentTitle = activeContent.querySelector('h5').textContent;
      const modalTitle = document.getElementById('carouselModalLabel');
      modalTitle.textContent = `Imagens do Serviço - ${contentTitle}`;
  }
}

document.getElementById('carouselModal').addEventListener('show.bs.modal', updateModalTitle);
// =====================================


// ADD ACTIVE CSS SERVICE ============================
function showServiceContent(contentId) {
  var contents = document.querySelectorAll('.service-content');
  contents.forEach(function(content) {
      content.classList.remove('active');
  });
  var activeContent = document.getElementById(contentId);
  activeContent.classList.add('active');
  
  var serviceAll = document.querySelector('.service-10');
  serviceAll.classList.remove('active-this');
  var services = document.querySelectorAll('.landing-page_main-service .service');
  services.forEach(function(service) {
      service.classList.remove('active-this');
  });
  
  var serviceId = 'service-' + contentId.split('-')[1];
  var activeService = document.getElementById(serviceId);
  if (activeService) {
      activeService.classList.add('active-this');
  }
}
// =====================================

// TOOLTIP ============================
document.addEventListener('DOMContentLoaded', function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl, {
          delay: { "show": 0, "hide": 100 },
          template: '<div class="tooltip custom-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
      });
  });
});
// =====================================


// ANIMAÇÃO IN HEADER MAIN ============================
document.addEventListener('DOMContentLoaded', () => {
  const imgFrame = document.querySelector('.landing-page_header-main-img-frame');
  const infoFrame = document.querySelector('.landing-page_header-main-info');
  const content = document.querySelector('.landing-page_header-main-content');

  const animateDivs = () => {
      const rect = content.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowCenterY = windowHeight / 2;

      const contentCenterY = rect.top + rect.height / 2;
      const distanceFromCenter = Math.abs(windowCenterY - contentCenterY);

      const maxDistance = 1500; 
      const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);

      const maxTranslateX = 50;
      const translateX = maxTranslateX * normalizedDistance;

      imgFrame.style.transform = `translateX(${-translateX}%)`;
      infoFrame.style.transform = `translateX(${translateX}%)`;
  };

  // window.addEventListener('scroll', animateDivs);
  // window.addEventListener('resize', animateDivs);
  
  // animateDivs();
});
// =====================================


// ANIMAÇÃO IN HEADER MAIN ============================
document.addEventListener('DOMContentLoaded', () => {
  const imgFrame = document.querySelector('.landing-page_main-about-us-img');
  const infoFrame = document.querySelector('.landing-page_main-about-us-info');
  const content = document.querySelector('.landing-page_main-about-us-content');

  const animateDivs = () => {
      const rect = content.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowCenterY = windowHeight / 2;

      const contentCenterY = rect.top + rect.height / 2;
      const distanceFromCenter = Math.abs(windowCenterY - contentCenterY);

      const maxDistance = 1500; 
      const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);

      const maxTranslateX = 50;
      const translateX = maxTranslateX * normalizedDistance;

      imgFrame.style.transform = `translateX(${-translateX}%)`;
      infoFrame.style.transform = `translateX(${translateX}%)`;
  };

  // window.addEventListener('scroll', animateDivs);
  // window.addEventListener('resize', animateDivs);
  
  // animateDivs();
});
// =====================================

document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("menu-toggle");
  const menuLinks = document.querySelectorAll(".landing-page_header-nav-menu a");

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      checkbox.checked = false;
      document.body.classList.remove("menu-open"); // Remove a classe para restaurar o scroll
    });
  });
});