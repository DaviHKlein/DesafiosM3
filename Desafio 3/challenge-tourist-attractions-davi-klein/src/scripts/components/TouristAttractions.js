import { url } from "inspector";

export class TouristAttractions {
    constructor() {
        this.list = [
            {
                imagem: "./images/1.png",
                title: "Pão de Açúcar",
                desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.",
            },
            {
                imagem: "./images/2.png",
                title: "Cristo Redentor",
                desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.",
            },
            {
                imagem: "./images/3.png",
                title: "Ilha Grande",
                desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.",
            },
            {
                imagem: "./images/4.png",
                title: "Centro Histórico de Paraty",
                desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.",
            },
        ];
        this.selectors();
        this.events();
        this.renderListItems();
    }

    selectors() {
        this.imagemSrc = null;
        this.submitButton = document.querySelector(".form-button");
        this.items = document.querySelector(".form-result");
        this.pictureinput = document.getElementById("picture-input");
        this.documento = document.querySelector(".form");
        this.previewImage = document.getElementById("preview-img");
        this.itemTitulo = document.querySelector(".input-title");
        this.itemDescricao = document.querySelector(".input-descricao");
    }

    events() {
        this.pictureinput.addEventListener("change", (event) => {
            if (!event.target.files) return;
            [...event.target.files].forEach(this.imagePreview.bind(this));
        });
        this.submitButton.addEventListener("click", (event) => {
            event.preventDefault();
            this.addItemToList();
        });

        addEventListener("resize", (event) =>{
            if ($(window).width() > 1024) {
                this.activateSlick();
                $(".form-result")[0].slick.refresh();
                $("#form-result").slick("setPosition");
            } else {
                $(".form-result").slick("unslick");
            }
        });
    }

    imagePreview(file1) {
        let reader = new FileReader();
        reader.onload = () => {
            let el1 = document.getElementById("picture-image");
            el1.style.display = "none";
            document.querySelector(".input-image-container").style.background =
                "url('" + reader.result + "')";
            document.querySelector(".input-image-container").style.backgroundRepeat = "round";
            this.imagemSrc = reader.result;
        };
        reader.readAsDataURL(file1);
    }

    addItemToList() {

        if (this.itemTitulo.value != "" && this.itemDescricao.value != "" && this.imagemSrc != null) {
            const objeto = {
                imagem: this.imagemSrc,
                title: this.itemTitulo.value,
                desc: this.itemDescricao.value,
            };

            this.list.push(objeto);
            if ($(window).width() > 1024) {
                $(".form-result").slick("unslick");
            }
            this.renderListItems();
            this.resetEntries();
        }
    }

    renderListItems() {
        let itemsStructure = "";

        this.list.forEach(function (item) {
            itemsStructure += `
            <li class="list-itens" data-test="item-list">
                <img class="list-item-imagem" data-test="image-item-list" src="${item.imagem}">
                <h3 class="item-title" data-test="title-item-list">${item.title}</h3>
                <p class="item-description" data-test="description-item-list">${item.desc}</p>
            </li>
        `;
        });
        this.items.innerHTML = itemsStructure;
        if ($(window).width() > 1024) {
            this.activateSlick();
        }
    }

    resetEntries() {
        document.querySelector(".input-title").value = "";
        document.querySelector(".input-descricao").value = "";
        document.getElementById("preview-img").src = null;

        let el2 = document.getElementById("picture-image");
        let el1 = document.getElementById("preview-img");
        document.querySelector(".input-image-container").style.background = "transparent";
        el2.style.display = "block";
        document.getElementById("picture-input").value = null;
    }

    activateSlick() {
        $(".form-result").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
        });
    }
}
