const aboutBtn = document.getElementById("abt");
const policyBtn = document.getElementById("hst");
const faqBtn = document.getElementById("faqs");

const aboutModal = document.getElementById("aboutModal");
const policyModal = document.getElementById("policyModal");
const faqModal = document.getElementById("faqModal");

const closes = document.querySelectorAll(".close");

aboutBtn.onclick = () => aboutModal.style.display = "flex";
policyBtn.onclick = () => policyModal.style.display = "flex";
faqBtn.onclick = () => faqModal.style.display = "flex";

closes.forEach(btn => {
  btn.onclick = () => {
    btn.parentElement.parentElement.style.display = "none";
  };
});

window.onclick = e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};
