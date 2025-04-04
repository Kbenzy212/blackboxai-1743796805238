// Navigation script for employer journey
document.addEventListener('DOMContentLoaded', function() {
  // Handle navigation between pages
  const setupNavigation = () => {
    // Signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        window.location.href = 'onboarding.html';
      });
    }

    // Onboarding form submission
    const onboardingForm = document.getElementById('onboardingForm');
    if (onboardingForm) {
      onboardingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        window.location.href = 'agency-selection.html';
      });
    }

    // Agency selection buttons
    const agencyButtons = document.querySelectorAll('.select-agency');
    if (agencyButtons.length > 0) {
      agencyButtons.forEach(button => {
        button.addEventListener('click', function() {
          // Store selected agency name from button's data attribute
          const agencyName = this.closest('.agency-card').querySelector('h3').textContent;
          localStorage.setItem('selectedAgency', agencyName);
          window.location.href = 'kyc-verification.html';
        });
      });
    }

    // KYC form submission
    const kycForm = document.getElementById('kycForm');
    if (kycForm) {
      kycForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get selected verification method
        const verificationMethod = document.querySelector('input[name="verificationMethod"]:checked');
        
        if (!verificationMethod) {
          alert('Please select a verification method');
          return;
        }

        // Store verification method
        localStorage.setItem('verificationMethod', verificationMethod.id);
        
        // Show success message and redirect
        const methodName = verificationMethod.id === 'homeVisit' ? 'Home Visit' : 'Accompanied Placement';
        alert(`Verification submitted successfully!\nYour agency will contact you to schedule the ${methodName}.`);
        window.location.href = 'welcome.html';
      });
    }

    // Back button functionality
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(button => {
      button.addEventListener('click', function() {
        history.back();
      });
    });
  };

  // Initialize navigation
  setupNavigation();

  // Update active nav link in header
  const updateActiveNav = () => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('text-blue-200');
        link.classList.add('font-medium');
      } else {
        link.classList.remove('text-blue-200');
        link.classList.remove('font-medium');
      }
    });
  };

  // Initialize active nav
  updateActiveNav();
});