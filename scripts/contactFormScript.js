// Validate contact form
function validateForm() {
    resetErrors();
    let e = !0;
    const t = document.getElementById("name"),
        n = document.getElementById("name-error");
    t.value.trim() || (n.classList.remove("hidden"), t.classList.add("border-red-500"), e = !1);
    const r = document.getElementById("email"),
        d = document.getElementById("email-error");
    r.value.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.value.trim()) || (d.classList.remove("hidden"), r.classList.add("border-red-500"), e = !1);
    const o = document.getElementById("phone"),
        s = document.getElementById("phone-error");
    o.value.trim() && /^\d{10}$/.test(o.value.trim()) || (s.classList.remove("hidden"), o.classList.add("border-red-500"), e = !1);
    const l = document.getElementById("service"),
        a = document.getElementById("service-error");
    return l.value.trim() || (a.classList.remove("hidden"), l.classList.add("border-red-500"), e = !1), e
}

function resetErrors() {
    document.querySelectorAll(".text-red-500").forEach((e => {
        e.classList.add("hidden")
    }));
    document.querySelectorAll(".border-red-500").forEach((e => {
        e.classList.remove("border-red-500")
    }))
}

function reCaptchaOnFocus() {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.type = 'text/javascript';
    script.src = 'https://www.google.com/recaptcha/api.js'
    head.appendChild(script);

};

function onSubmit(e) {
    if (event.preventDefault(), validateForm()) {
        var t = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            service: document.getElementById("service").value,
            comments: document.getElementById("comments").value,
            "g-recaptcha-response": e
        };
        emailjs.send("service_q50i25k", "template_n45n7ew", t).then((function(e) {
            alert("Your email has been sent successfully. We will get back to you as soon as possible."), document.getElementById("contactForm").reset(), grecaptcha.reset()
        }), (function(e) {
            alert("Something went wrong. Please try again later.")
        }))
    }
}
emailjs.init({
    publicKey: "tIjTyuya4luXd50B_"
}), document.addEventListener("DOMContentLoaded", (function() {
    document.getElementById('name').addEventListener('focus', reCaptchaOnFocus, false);
    document.getElementById("submitBtn").addEventListener("click", (function(e) {
        e.preventDefault();
        var t = grecaptcha.getResponse();
        t && onSubmit(t)
    }));
    const e = document.getElementById("nav-button"),
        t = document.getElementById("mobile-menu");
    e.addEventListener("click", (function() {
        t.classList.toggle("h-0"), t.classList.toggle("h-72")
    }))
}));