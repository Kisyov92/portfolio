"use strict";

// sending email via contact form

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("8_rOWxpyZMGn60G5h");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const sender = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      const btn = document.querySelector(".btn-submit");

      if (
        sender.value === "" ||
        email.value === "" ||
        !email.value.includes("@") ||
        message.value === ""
      ) {
        alert("Please fill the form correctly");
        return;
      }
      // generate a five digit number for the contact_number variable
      btn.textContent = "SUBMITTING";
      btn.disabled = true;

      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_rfsrlj7", "template_8l98z0p", this).then(
        function () {
          console.log("SUCCESS!");
          sender.value = "";
          email.value = "";
          message.value = "";
          btn.textContent = "SUBMIT";
          btn.disabled = false;
          alert("Your message was successfully delivered!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};

// navigation scrolling

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (!href.startsWith("#")) window.open(href, "_blank");
  });
});
