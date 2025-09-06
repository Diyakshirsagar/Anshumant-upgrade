//Counter Animatio
document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("years");
    let count = 0;
    let target = 25; // Change number of years
    let interval = setInterval(() => {
      if (count < target) {
        count++;
        counter.textContent = count;
      } else {
        clearInterval(interval);
      }
    }, 80);
  });
//Font Awesome CDN
<script src="https://kit.fontawesome.com/a2d9d6a66c.js" crossorigin="anonymous"></script>
//Smooth Scroll Script
document.querySelectorAll('.scroll-top').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  // Blog Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const blogItems = document.querySelectorAll(".blog-item");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    blogItems.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
        item.classList.add("fadeIn");
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Scroll Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.blog-card, .newsletter').forEach(card => {
  observer.observe(card);
});
// button down
let selectedAmount = null;

document.querySelectorAll('.donate-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedAmount = btn.getAttribute('data-amount');
    document.getElementById('customAmount').value = ""; // clear custom
    alert("Selected Donation: ₹" + selectedAmount);
  });
});

document.getElementById('donateNow').addEventListener('click', () => {
  let custom = document.getElementById('customAmount').value;
  let amount = custom || selectedAmount;

  if (amount) {
    alert("Thank you for choosing to donate ₹" + amount + "! Redirecting to payment...");
    // redirect to payment gateway here
  } else {
    alert("Please select or enter an amount to donate.");
  }
});
// Bounce effect on hover for social icons
document.querySelectorAll('.footer-social a').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = "scale(1.2)";
    icon.style.transition = "transform 0.3s ease";
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = "scale(1)";
  });
});