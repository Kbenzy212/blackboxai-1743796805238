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

    // Agency selection button handling
    document.addEventListener('click', function(e) {
      if (e.target.closest('.select-agency')) {
        const button = e.target.closest('.select-agency');
        const agencyCard = button.closest('.agency-card');
        if (agencyCard) {
          const agencyName = agencyCard.querySelector('h3').textContent;
          const agencyId = button.dataset.agencyId || agencyName.toLowerCase().replace(/\s+/g, '-');
          
          localStorage.setItem('selectedAgency', agencyName);
          localStorage.setItem('selectedAgencyId', agencyId);
          
          window.location.href = 'kyc-verification.html';
        }
      }
    });

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

    // Protected route navigation
    document.addEventListener('click', function(e) {
      // Task management (protected)
      if (e.target.closest('[href="task-management.html"]')) {
        e.preventDefault();
        if (localStorage.getItem('loggedIn') === 'true') {
          window.location.href = 'task-management.html';
        } else {
          window.location.href = 'login.html';
        }
      }

      // Daily Planner (protected)
      if (e.target.closest('[href="daily-planner.html"]')) {
        e.preventDefault();
        if (localStorage.getItem('loggedIn') === 'true') {
          window.location.href = 'daily-planner.html';
        } else {
          window.location.href = 'login.html';
        }
      }
      
      // Login navigation
      if (e.target.closest('[href="login.html"]')) {
        e.preventDefault();
        window.location.href = 'login.html';
      }
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