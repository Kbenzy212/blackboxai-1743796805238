
Built by https://www.blackbox.ai

---

```markdown
# Home-Staff Pro

## Project Overview

Home-Staff Pro is a web application designed to connect employers with trusted domestic help agencies. This platform streamlines the hiring process for domestic help, allowing users to navigate through a seamless onboarding experience, from account creation to agency selection and verification. 

## Installation

To set up the project locally, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/home-staff-pro.git
   cd home-staff-pro
   ```

2. Open the `index.html` file in your preferred web browser:
   ```bash
   open index.html
   ```

3. Optionally, you can set up a local server to serve the HTML files. If you have Python installed, you can do so with:
   ```bash
   # For Python 3
   python -m http.server
   ```

4. Navigate to `http://localhost:8000` in your browser.

## Usage

1. **Create an Employer Account:**
   - Navigate to the homepage and click on "Create Employer Account".
   - Fill in your details including full name, email, mobile number, and password.
   - Submit the form to proceed to the next step.

2. **Set Location:**
   - Input your location via a map interface on the onboarding page.
   - Fill in your address details and select your home type.

3. **Select Agency:**
   - Browse through a list of domestic help agencies.
   - Use the search and filter options to narrow down your choices.
   - Click on "Select Agency" to proceed with your chosen agency.

4. **Complete Verification:**
   - Choose your preferred verification method (Home Visit or Accompanied Placement).
   - Upload necessary documents and provide emergency contact information.
   - Submit the verification form.

5. **Welcome Screen:**
   - After verification submission, you will be redirected to a welcome page confirming your agency contact details.

## Features

- **Responsive Design:** The application is built with a mobile-first approach, ensuring a great user experience on any device.
- **Integrated Google Maps:** Users can easily pin their location on a map during onboarding.
- **Agency Selection:** A list of agencies is presented with filtering options based on distance, rating, and services offered.
- **Document Upload:** Users can upload necessary documents for verification directly through the platform.
- **Progress Tracking:** The onboarding process is broken into steps with progress indicators for user convenience.
- **Password Strength Indicator:** This feature helps users create strong passwords during the account creation process.

## Dependencies

The project utilizes the following external resources:

- **Tailwind CSS:** A utility-first CSS framework used for styling the application.
- **Font Awesome:** For incorporating icons into the UI.
- **Google reCAPTCHA:** For validating form submissions.
- **Google Maps JavaScript API:** Used for the location setting functionality.

```json
{
  "dependencies": {
    "tailwindcss": "^2.x.x",
    "font-awesome": "^6.x.x"
  }
}
```

## Project Structure

Here is a brief overview of the project structure:

```
.
├── index.html               # Main entry point for the application
├── onboarding.html          # Location setup page
├── agency-selection.html     # Page for selecting domestic help agencies
├── kyc-verification.html     # Page for verification form submission
├── welcome.html              # Welcome page after successful verification
├── header.html               # Navigation header component
├── footer.html               # Footer component
├── navigation.js             # JavaScript file for handling page navigation and events
├── styles.css                # Custom CSS stylesheet if any
```

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request. 

## License

This project is open source and available under the [MIT License](LICENSE).
```