const container = document.getElementById("testimonialContainer");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const scrollAmount = 500;

leftArrow.addEventListener("click", () => {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".faq-item").forEach((item) => {
        const toggle = item.querySelector(".toggle img");

        item.addEventListener("click", () => {
            document.querySelectorAll(".faq-item").forEach((faq) => {
                if (faq !== item) {
                    faq.classList.remove("active");
                    const icon = faq.querySelector(".toggle img");
                    if (icon) icon.src = "./assets/icons/plus.png";
                }
            });

            const isActive = item.classList.toggle("active");
            if (toggle) {
                toggle.src = isActive
                    ? "./assets/icons/minus.png"
                    : "./assets/icons/plus.png";
            }
        });
    });
});
