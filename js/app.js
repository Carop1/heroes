const $cardsContainer = document.getElementById("cards-container"); 
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();

const cardContent = [
    {
        title: "Thor",
        img: "images/thor.jpg",
        
    },
    {
        title: "Black Widow",
        img: "images/Black-Widow.jpg",
        
    },
    {
        title: "Spider Man",
        img: "images/spider-man.jpg",
        
    },
    {
        title: "Iron Man",
        img: "images/ironMan.jpg",
        
    },

    {
        title: "Hulk",
        img: "images/hulk.jpg",
        
    },

    {
        title: "Capitana marvel",
        img: "images/capitana_marvel.jpg",
    },

    {
        title: "Capitan america",
        img: "images/capitan_america.jpg",
    },

    {
        title: "Wolverine",
        img: "images/wolverine.jpg",
    },

    {
        title: "Dead pool",
        img: "images/dead_pool.jpg",
    },

    {
        title: "Doctor Strange",
        img: "images/doctor_strange.jpg",
    },

    {
        title: "Black Panter",
        img: "images/black_panter.jpg",
    },

    {
        title: "Ant Man",
        img: "images/ant_man.jpg",
    },

    {
        title: "Stark Lord",
        img: "images/star_lord.png",
    },

    {
        title: "Ojo de Halcón",
        img: "images/ojo_alcon.jpg",
    },

    {
        title: "Bruja Escarlata",
        img: "images/bruja_escarlata.jpg",
    },


];

cardContent.forEach(el => {
    const $clone = document.importNode($template, true);

    $clone.querySelector("img").setAttribute("src", el.img);
    $clone.querySelector("img").setAttribute("alt", el.title);
    $clone.querySelector("figcaption").textContent = el.title;

    $fragment.appendChild($clone);
});

$cardsContainer.appendChild($fragment); 

const cardContentDC = [
    {
        title: "Superman",
        img: "images/Superman.jpg"
    },
    {
        title: "Batman",
        img: "images/Batman.jpg",
    },
    {
        title: "Wonder Woman",
        img: "images/wonder-woman.jpg",
    },
    {
        title: "Linterna Verde",
        img: "images/Linterna-Verde.jpg",
    },

    {
        title: "Shazam",
        img: "images/Shazam.jpeg",
    },

    {
        title: "Flash",
        img: "images/Flash.jpg",
    },

    {
        title: "Nightwing",
        img: "images/Nightwing.jpg",
    },

    {
        title: "Flecha Verde",
        img: "images/Flecha-Verde.jpg",
    },

    {
        title: "Batgirl",
        img: "images/Batgirl.jpg",
    },

    {
        title: "Chica Halcón",
        img: "images/HawkGirl.jpg",
    },

    {
        title: "Átomo",
        img: "images/atomo.jpg",
    },

    {
        title: "Starfire",
        img: "images/starfire.jpg",
    },

    {
        title: "Aquaman",
        img: "images/aquaman.jpg",
    },

    {
        title: "Raven",
        img: "images/raven.jpg",
    },

    {
        title: "Cyborg",
        img: "images/cyborg.jpg",
    },


];
const $cardsContainerDC = document.getElementById("cards-container2"); 
const $template2 = document.getElementById("template-card2").content;
const $fragment2 = document.createDocumentFragment();

cardContentDC.forEach(el => {
    const $clone2 = document.importNode($template, true);

    $clone2.querySelector("img").setAttribute("src", el.img);
    $clone2.querySelector("img").setAttribute("alt", el.title);
    $clone2.querySelector("figcaption").textContent = el.title;

    $fragment.appendChild($clone2);
});

$cardsContainerDC.appendChild($fragment); 

// _____________________________________________________ Ventanas modales

const $modalContainer = document.getElementById("modal-container"); 
const $templateModal = document.getElementById("template-modal").content;
const open = document.getElementById("open"); //Marvel
const close = document.getElementById("close");

const $fragmentModal = document.createDocumentFragment();


const botones = document.querySelectorAll('#open');

botones.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        
        if (index >= 0 && index < cardContent.length) {
            const el = cardContent[index];
            const $clone3 = document.importNode($templateModal, true);

            $clone3.querySelector("#h11").textContent = el.title;
            $clone3.querySelector(".imagenModal").setAttribute("src", el.img);
            $clone3.querySelector(".imagenModal").setAttribute("alt", el.title);
            $clone3.querySelector("figcaption").textContent = el.title;

            
            $fragmentModal.appendChild($clone3);
            $modalContainer.appendChild($fragmentModal);
            $modalContainer.classList.add('show');
        } //else {
        //     index = 0;
        //     console.error('Índice fuera de rango.');
        // }
    });
});
const $modalContainerDC = document.getElementById("modal-container"); 
const $templateModalDC = document.getElementById("template-modal").content;
const openDC = document.getElementById("open2"); // los de DC
const closeDC = document.getElementById("close");

const $fragmentModalDC = document.createDocumentFragment();


const botonesDC = document.querySelectorAll('#open2');
console.log(botones)
botones.forEach((botonDC, index2) => {
    botonDC.addEventListener('click', () => {
        index2 = index2-15;
        console.log(index2);
        if (index2 >= 0 && index2 < cardContent.length) {
            const la = cardContentDC[index2];
            const $clone4 = document.importNode($templateModalDC, true);

            $clone4.querySelector("#h11").textContent = la.title;
            $clone4.querySelector(".imagenModal").setAttribute("src", la.img);
            $clone4.querySelector(".imagenModal").setAttribute("alt", la.title);
            $clone4.querySelector("figcaption").textContent = la.title;

            
            $fragmentModalDC.appendChild($clone4);
            $modalContainerDC.appendChild($fragmentModalDC);
            $modalContainerDC.classList.add('show');
        } else {
            console.error('Índice fuera de rango.');
        }
    });
});
// __________________________________________________ Buscar y mostrar
function buscarEnArray() {
    const textoBusqueda = document.getElementById("textoBusqueda").value;
    const resultado = buscarPorTexto(textoBusqueda);
    console.log(resultado);
    const id = obtenerIdPorTexto(textoBusqueda);
    console.log(id);
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    if (resultado.length > 0) {
        resultado.forEach(elemento => {
                
                
                const $clone5 = document.importNode($templateModal, true);
            
                $clone5.querySelector("#h11").textContent = elemento.title;
                $clone5.querySelector(".imagenModal").setAttribute("src", elemento.img);
                $clone5.querySelector(".imagenModal").setAttribute("alt", elemento.title);
                $clone5.querySelector("figcaption").textContent = elemento.title;
            
                $fragmentModal.appendChild($clone5);
                $modalContainer.appendChild($fragmentModal);
                $modalContainer.classList.add('show');
            
        });
    } else {
        resultadoDiv.innerHTML = "No se encontraron resultados.";
    }
}
function obtenerIdPorTexto(textoBuscado) {
    let idEncontrado = null;

    cardContent.forEach(elemento => {
        if (elemento.title === textoBuscado) {
            idEncontrado = elemento.id;
        }
    });

    return idEncontrado;
}
function buscarPorTexto(textoBuscado) {
    
    return cardContent.filter(elemento => elemento.title.includes(textoBuscado));
}

// function buscarEnArray2() {
//     const textoBusqueda = document.getElementById("textoBusqueda").value;
//     const resultado = buscarPorTexto(textoBusqueda);
//     console.log(resultado);
//     const id = obtenerIdPorTexto(textoBusqueda);
//     console.log(id);
//     const resultadoDiv = document.getElementById("resultado");
//     resultadoDiv.innerHTML = "";

//     if (resultado.length > 0) {
//         resultado.forEach(elemento => {
                
//                 const el = cardContent[id-1];
//                 const $clone6 = document.importNode($templateModal, true);
    
//                 $clone6.querySelector("#h11").textContent = elemento.title;
//                 $clone6.querySelector(".imagenModal").setAttribute("src", elemento.img);
//                 $clone6.querySelector(".imagenModal").setAttribute("alt", elemento.title);
//                 $clone6.querySelector("figcaption").textContent = elemento.title;
    
                
//                 $fragmentModal.appendChild($clone6);
//                 $modalContainer.appendChild($fragmentModal);
//                 $modalContainer.classList.add('show');
            
//         });
//     } else {
//         resultadoDiv.innerHTML = "No se encontraron resultados.";
//     }
// }
// function obtenerIdPorTexto(textoBuscado) {
//     let idEncontrado = null;

//     cardContentDC.forEach(elemento => {
//         if (elemento.title === textoBuscado) {
//             idEncontrado = elemento.id;
//         }
//     });

//     return idEncontrado;
// }
// function buscarPorTexto(textoBuscado) {
    
//     return cardContentDC.filter(elemento => elemento.title.includes(textoBuscado));
// }

