﻿document.querySelector("#loginButton").addEventListener("click", function (event) {
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let loginModel = {
        E_MAIL: email,
        PASSWORD: password
    }
    if (email && password) {
        Array.from(document.querySelectorAll(".info-boxes:not(.json)")).forEach(item => { item.remove() })
        event.target.classList.add("loading")
        event.target.disabled = true
        $.ajax({
            url: "/Account/SignIn?returnUrl=" + window.location.href.split("?ReturnUrl=")[1],
            data: loginModel,
            type: "post",
            success: function (data) {
                if (data.Status) {
                    if (data.ReturnUrl) {
                        window.location = data.ReturnUrl
                    }
                    else {
                        window.location = "/Panel/ListUserRoles"
                    }
                }
                else {
                    event.target.classList.remove("loading")
                    event.target.disabled = false
                    document.querySelector("#loginJsonError").classList.remove("none")
                    document.querySelector("#loginJsonError").innerHTML = data.Message
                }
            },
            error: function (err) {
                window.location = "/Account/Login"
            }
        })
    }
    else {
        event.target.classList.remove("loading")
        event.target.disabled = false
        document.querySelector("#loginJsonError").classList.remove("none")
        document.querySelector("#loginJsonError").innerHTML = "Lütfen geçerli birer e-posta ve şifre sağlayın."
    }
})