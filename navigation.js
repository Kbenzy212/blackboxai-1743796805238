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

    // Enhanced agency selection handling
    document.addEventListener('click', function(e) {
      const button = e.target.closest('.select-agency');
      if (button) {
        const agencyCard = button.closest('.agency-card, .bg-white');
        if (agencyCard) {
          const agencyName = agencyCard.querySelector('h3').textContent;
          const agencyId = button.dataset.agencyId || 
                          agencyName.toLowerCase().replace(/\s+/g, '-');
          
          localStorage.setItem('selectedAgency', agencyName);
          localStorage.setItem('selectedAgencyId', agencyId);
          
          // Ensure navigation occurs
          setTimeout(() => {
            window.location.href = 'kyc-verification.html';
          }, 100);
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

    // Task management navigation
    document.addEventListener('click', function(e) {
      if (e.target.closest('[href="task-management.html"]')) {
        e.preventDefault();
        window.location.href = 'task-management.html';
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