document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            delay: { "show": 0, "hide": 100 }, // Mostra instantaneamente
            template: '<div class="tooltip custom-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        });
    });
});

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

document.addEventListener('DOMContentLoaded', function() {
  showServiceContent('content-10');
});