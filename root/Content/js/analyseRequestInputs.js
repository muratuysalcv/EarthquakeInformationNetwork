﻿let cities = [
    { "id": "15", "name": "BURDUR" },
    { "id": "26", "name": "ESKİŞEHİR" },
    { "id": "18", "name": "ÇANKIRI" },
    { "id": "80", "name": "OSMANİYE" },
    { "id": "41", "name": "KOCAELİ" },
    { "id": "27", "name": "GAZİANTEP" },
    { "id": "31", "name": "HATAY" },
    { "id": "38", "name": "KAYSERİ" },
    { "id": "29", "name": "GÜMÜŞHANE" },
    { "id": "54", "name": "SAKARYA" },
    { "id": "16", "name": "BURSA" },
    { "id": "69", "name": "BAYBURT" },
    { "id": "17", "name": "ÇANAKKALE" },
    { "id": "57", "name": "SİNOP" },
    { "id": "74", "name": "BARTIN" },
    { "id": "503", "name": "MAĞUSA (KIBRIS)" },
    { "id": "33", "name": "MERSİN" },
    { "id": "51", "name": "NİĞDE" },
    { "id": "42", "name": "KONYA" },
    { "id": "60", "name": "TOKAT" },
    { "id": "2", "name": "ADIYAMAN" },
    { "id": "6", "name": "ANKARA" },
    { "id": "66", "name": "YOZGAT" },
    { "id": "52", "name": "ORDU" },
    { "id": "53", "name": "RİZE" },
    { "id": "1", "name": "ADANA" },
    { "id": "40", "name": "KIRŞEHİR" },
    { "id": "76", "name": "IĞDIR" },
    { "id": "45", "name": "MANİSA" },
    { "id": "21", "name": "DİYARBAKIR" },
    { "id": "64", "name": "UŞAK" },
    { "id": "501", "name": "LEFKOŞE (KIBRIS)" },
    { "id": "5", "name": "AMASYA" },
    { "id": "24", "name": "ERZİNCAN" },
    { "id": "32", "name": "ISPARTA" },
    { "id": "502", "name": "GİRNE (KIBRIS)" },
    { "id": "23", "name": "ELAZIĞ" },
    { "id": "78", "name": "KARABÜK" },
    { "id": "30", "name": "HAKKARİ" },
    { "id": "36", "name": "KARS" },
    { "id": "67", "name": "ZONGULDAK" },
    { "id": "68", "name": "AKSARAY" },
    { "id": "44", "name": "MALATYA" },
    { "id": "10", "name": "BALIKESİR" },
    { "id": "20", "name": "DENİZLİ" },
    { "id": "49", "name": "MUŞ" },
    { "id": "73", "name": "ŞIRNAK" },
    { "id": "48", "name": "MUĞLA" },
    { "id": "59", "name": "TEKİRDAĞ" },
    { "id": "39", "name": "KIRKLARELİ" },
    { "id": "56", "name": "SİİRT" },
    { "id": "28", "name": "GİRESUN" },
    { "id": "63", "name": "ŞANLIURFA" },
    { "id": "9", "name": "AYDIN" },
    { "id": "72", "name": "BATMAN" },
    { "id": "13", "name": "BİTLİS" },
    { "id": "3", "name": "AFYONKARAHİSAR" },
    { "id": "8", "name": "ARTVİN" },
    { "id": "4", "name": "AĞRI" },
    { "id": "77", "name": "YALOVA" },
    { "id": "50", "name": "NEVŞEHİR" },
    { "id": "61", "name": "TRABZON" },
    { "id": "58", "name": "SİVAS" },
    { "id": "7", "name": "ANTALYA" },
    { "id": "37", "name": "KASTAMONU" },
    { "id": "47", "name": "MARDİN" },
    { "id": "46", "name": "KAHRAMANMARAŞ" },
    { "id": "25", "name": "ERZURUM" },
    { "id": "75", "name": "ARDAHAN" },
    { "id": "81", "name": "DÜZCE" },
    { "id": "55", "name": "SAMSUN" },
    { "id": "19", "name": "ÇORUM" },
    { "id": "65", "name": "VAN" },
    { "id": "14", "name": "BOLU" },
    { "id": "43", "name": "KÜTAHYA" },
    { "id": "11", "name": "BİLECİK" },
    { "id": "34", "name": "İSTANBUL" },
    { "id": "79", "name": "KİLİS" },
    { "id": "62", "name": "TUNCELİ" },
    { "id": "12", "name": "BİNGÖL" },
    { "id": "22", "name": "EDİRNE" },
    { "id": "71", "name": "KIRIKKALE" },
    { "id": "70", "name": "KARAMAN" },
    { "id": "35", "name": "İZMİR" }
]

cities.sort(function (a, b) { return a.name.localeCompare(b.name) })

let district = document.querySelector("#district")
let floor = document.querySelector("#floor")
let year = document.querySelector("#year")

cities.forEach(city => {
    let option = document.createElement("option")
    option.value = city.name[0].toLocaleUpperCase() + city.name.slice(1).toLocaleLowerCase()
    option.innerHTML = city.name[0].toLocaleUpperCase() + city.name.slice(1).toLocaleLowerCase()
    district.appendChild(option)
})


let imgButton = document.querySelector("#addImageButton")
let imageInput = document.querySelector("#imageInput")

imgButton.addEventListener("click", function () {
    imageInput.click()
})

let images = []


function imageGet(event) {
    if (window.File && window.FileList && window.FileReader) {
        if (event.target.files) {
            let files = Array.from(event.target.files)
            let imageFiles = files.filter(images => images.type.match("image"))
            if (images.length + imageFiles.length <= 10) {
                imageFiles.forEach(image => {
                    images.push(image)
                    let reader = new FileReader()
                    reader.onload = function (event) {
                        let divElement = document.createElement("div")
                        let imageElement = document.createElement("img")
                        let iElement = document.createElement("i")
                        iElement.classList.add("fas", "fa-trash", "deleteImage")
                        iElement.addEventListener("click", function (event) {
                            divElement.remove()
                            images.splice(event.target.dataset.index, 1)
                            setDataList()
                            boxShowHide()
                        })
                        iElement.setAttribute("data-index", 0)
                        imageElement.src = reader.result
                        divElement.appendChild(imageElement)
                        divElement.appendChild(iElement)
                        document.querySelector(".imagesBox>div").appendChild(divElement)
                        setDataList()
                    }
                    reader.readAsDataURL(image)
                    event.target.value = null
                })
                boxShowHide()
            }
            else {
                imgButton.disabled = true
            }
        }
    }
}
imageInput.addEventListener("change", imageGet)


function boxShowHide() {
    if (images.length == 10) {
        imgButton.disabled = true
    }
    else {
        imgButton.disabled = false
    }
    if (images.length == 0) {
        document.querySelector("#remaining").classList.add("hidden")
        document.querySelector(".imagesBox").classList.add("hidden")
    } else {
        document.querySelector(".imagesBox").classList.remove("hidden")
        document.querySelector("#remaining").classList.remove("hidden")
    }
    if (10 - images.length > 0) {
        document.querySelector("#remaining").innerHTML = 10 - images.length + " Adet Resim Seçebilirsiniz"
    } else {
        document.querySelector("#remaining").innerHTML = "Daha Fazla Resim Yükleyemezsiniz"
    }
    

}

function setDataList() {
    Array.from(document.querySelectorAll(".deleteImage")).forEach((item, index) => {
        item.setAttribute("data-index", index)
    })
}

function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}

setInputFilter(document.getElementById("year"), function (value) {
    return /^-?\d*$/.test(value);
});

