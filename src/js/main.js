(function() {
  console.log('main.js loaded');
  // Track link clicks
  function trackLinkClick(event) {
    const link = event.currentTarget;
    const linkTitle = link.querySelector('.link-title').textContent;
    
    // If HubSpot tracking is available
    if (window._hsq) {
      window._hsq.push(['trackEvent', {
        id: 'Link Click',
        value: linkTitle
      }]);
    }
  }

  // Initialize link tracking
  function initializeLinkTracking() {
    const links = document.querySelectorAll('.link-item');
    links.forEach(link => {
      link.addEventListener('click', trackLinkClick);
    });
  }

  // Add loading animation
  function addLoadingAnimation() {
    const links = document.querySelectorAll('.link-item');
    links.forEach((link, index) => {
      link.style.animationDelay = `${index * 0.1}s`;
    });
  }

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    initializeLinkTracking();
    addLoadingAnimation();
  });
})(); 