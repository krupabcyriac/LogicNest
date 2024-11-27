  //nav bar lock on scroll
  window.onscroll = function() 
  { var navbar = document.getElementById("navbar"); 
  if (window.scrollY > 100) 
  {  navbar.style.backgroundColor = "rgba(0, 0, 0, 0.2)";  } 
  else 
  { navbar.style.backgroundColor = "rgba(20, 30, 50, 1)";  } 
  }; 

  // Get the scroll-to-top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
          scrollTopBtn.style.display = "block";
      } else {
          scrollTopBtn.style.display = "none";
      }
  });

  // Scroll to top when button is clicked
  scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth" // Smooth scrolling
      });
  });

   // Initialize EmailJS
   emailjs.init("rB6dm_9axP2sjzNJa"); // Replace with your EmailJS Public Key

   document.getElementById("send-button").addEventListener("click", function(event) {
     event.preventDefault(); // Prevent default form submission

     // Collect form data
     const name = document.getElementById("name").value;
     const email_id = document.getElementById("email_id").value;
     const message = document.getElementById("message").value;

     // Send email using EmailJS
     emailjs.send("service_7iq6kx2", "template_d58ulxg", {
       name: name,
       email: email_id,
       message: message,
     }).then(
       function(response) {
         alert("Message sent successfully!");
         console.log("SUCCESS", response.status, response.text);
       },
       function(error) {
         alert("Failed to send message. Please try again later.");
         console.log("FAILED", error);
       }
     );
   });