document.querySelector(".btn-submit").addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.getElementById("Name").value;
    const subject = document.getElementById("Subject").value;
    const email = document.getElementById("Email").value;
    const phone = document.getElementById("Phone").value;
    const message = document.getElementById("Message").value;

    if (!name || !subject || !email || !phone || !message) {
        alert("Harap isi semua kolom form.");
    } else {
        // Kirim data form ke server atau lakukan tindakan lain sesuai kebutuhan Anda.
        alert("Form berhasil dikirim!");
    }
});

document.querySelectorAll(".menu a").forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});

window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 100) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
