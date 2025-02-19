function animateButton() {
    const button = document.querySelector(".cta-button")
    button.style.animation = "none"
    button.offsetHeight // Trigger reflow
    button.style.animation = "pulse 2s infinite"
  
    // Simulate a phone call (replace with actual functionality)
    alert("Calling 1-800-GET-JOBS")
  }
  
  // Add a subtle animation to the phone number
  const phoneNumber = document.getElementById("phoneNumber")
  let direction = 1
  let position = 0
  
  function animatePhoneNumber() {
    position += 0.5 * direction
    if (position > 5 || position < -5) {
      direction *= -1
    }
    phoneNumber.style.transform = `translateY(${position}px)`
    requestAnimationFrame(animatePhoneNumber)
  }
  
  animatePhoneNumber()
  
  document.addEventListener("DOMContentLoaded", function() {
    const text = "Jabardast-Job.com";
    let index = 0;
    const logoElement = document.querySelector(".logo");
    logoElement.textContent = ""; // Clear existing text

    function typeEffect() {
        if (index < text.length) {
            logoElement.textContent += text[index];
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
});  