const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
navMenu.classList.toggle("active");

});

// Close menu when a link is clicked
navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

/* Dark Mode */

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
themeIcon.classList.remove("fa-moon");
themeIcon.classList.add("fa-sun");
localStorage.setItem("theme", "dark");
}else{
themeIcon.classList.remove("fa-sun");
themeIcon.classList.add("fa-moon");
localStorage.setItem("theme", "light");
}

});

// Load saved theme on page load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  if(savedTheme === "dark"){
    document.body.classList.add("dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
});

// PROGRAM - Join Class
const joinButtons = document.querySelectorAll(".join-class");

joinButtons.forEach(button => {

button.addEventListener("click", () => {

alert("You have successfully joined this class! Our trainer will contact you soon.");

});

});

// ===== TRAINER FORM MODAL =====

function openTrainerForm(trainerName){
  const modal = document.getElementById("trainerModal");
  document.getElementById("trainerName").textContent = trainerName;
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeTrainerForm(){
  const modal = document.getElementById("trainerModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  document.getElementById("trainerForm").reset();
}

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  const modal = document.getElementById("trainerModal");
  if(event.target === modal){
    closeTrainerForm();
  }
});

function handleTrainerForm(event){
  event.preventDefault();
  
  const name = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const plan = document.querySelector("input[name='plan']:checked").value;
  
  let planText = "";
  if(plan === "monthly") planText = "Monthly (₹2,999/month)";
  else if(plan === "6months") planText = "6 Months (₹15,999/6 months)";
  else planText = "Yearly (₹24,999/year)";
  
  const message = `New Trainer Enrollment:
Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${address}
Plan: ${planText}`;
  
  alert("Your enrollment has been submitted! We will contact you soon.\n\n" + message);
  
  // Reset form and close
  event.target.reset();
  closeTrainerForm();
  
  // Here you can add code to send this data to a server
  console.log({name, phone, email, address, plan});
}

// ===== CONTACT FORM =====

function handleContactForm(event){
  event.preventDefault();
  
  const form = event.target;
  const name = form.elements[0].value;
  const email = form.elements[1].value;
  const phone = form.elements[2].value;
  const plan = form.elements[3].value;
  const message = form.elements[4].value;
  
  alert(`Thank you ${name}! Your message has been received. We will contact you shortly.`);
  
  // Reset form
  form.reset();
  
  // Here you can add code to send this data to a server
  console.log({name, email, phone, plan, message});
}

// ===== SMOOTH SCROLL =====

function scrollToSection(sectionId){
  const section = document.querySelector(sectionId);
  if(section){
    section.scrollIntoView({behavior: "smooth"});
  }
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href !== '#' && document.querySelector(href)){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ===== ACTIVE NAVIGATION HIGHLIGHT =====

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;
    
    if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight){
      navLinks.forEach(link => {
        link.style.color = 'white';
      });
      const activeLink = document.querySelector(`.nav-menu a[href="#${section.id}"]`);
      if(activeLink){
        activeLink.style.color = '#4CAF50';
      }
    }
  });
});