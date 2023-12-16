import { Produtos } from "./produtos.js";

function renderizarProdutos(){


for(const pr of Produtos){

    document.getElementById("lugar").innerHTML+=`
    <div class='Produto' id="chavePr${pr.id}">
        <div class='lugImg'>
            <img src="${pr.imagem1}" style='height:70px;'>
        </div>
        <div class="dados" style='display:flex; flex-direction:column; align-items:start;'>
            <span class="nome">${pr.nome}</span>
            <span class="lugestrelas">
                <div class="estrelas"></div>
                <div class="estrelas"></div>
                <div class="estrelas"></div>
                <div class="estrelas"></div>
                <div class="estrelas estrelaApagada"></div>
            </span>
            <span class="preco">R$ ${(pr.preco).toFixed(2).replace(".",",")}</span>
            <span class="parcelado">ou 10X de R$ ${(pr.preco/10).toFixed(2).replace(".",",")}</span>
        </div>
    `
}
}
renderizarProdutos()

    var cofre = document.getElementById("caixa").innerHTML

function abrirProdutoIndividual(idPro){
    const produto = Produtos.find((p) => p.id == idPro )
    var caixa  = document.getElementById("caixa")

    caixa.innerHTML=''
    document.getElementById("caixa").innerHTML=`
    <div class="prPRI">

        <button id='btnVoltar${produto.id}' class="btnVoltar"><img src="./assets/img/arrow-left-solid.svg"></button>

        <div class="carrossel">
            <img src="${produto.imagem1}" alt="" style="height: 250px;">
        </div>


        <div class="acoes">
            <div class="dadosPRI">
                <div class="nomeMarcaPRI">
                    <span class="nomePRI">${produto.nome}</span>
                    <span class="marcaPRI">${produto.marca}</span>
                </div>
                <span class="lugestrelas">
                    <div class="estrelas"></div>
                    <div class="estrelas"></div>
                    <div class="estrelas"></div>
                    <div class="estrelas"></div>
                    <div class="estrelas estrelaApagada"></div>
                </span>

                <span class="precoPRI">R$ ${(produto.preco).toFixed(2).replace(".",",")} <span>à vista</span></span>

                <span class="parceladoPRI"> 10X de R$ ${(produto.preco/10).toFixed(2).replace(".",",")} sem juros</span>
            </div>

            <div class="btnAcoes">
                <button class="compC"><img src="assets/img/heart-regular.svg" alt=""></button>
                <button class="compC"><img src="assets/img/share-solid.svg" alt=""></button>
            </div>
        </div>




        <div class="btnCompra">
            <button class="comprar">
                Comprar
            </button>
            <button class="adicionar">adicionar a Sacola</button>
        </div>




        <div class="caracPRI">
            <nav>
                <li>Avaliações</li>
                <li>Informações</li>
                <li>Formas de Pagamento</li>
            </nav>

            <div class="avif">
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, repudiandae. Rem asperiores non ab fugit
                exercitationem tempore maxime aliquid aliquam laudantium dolores! Magni sequi ipsa amet saepe numquam
                aliquid soluta.
                Minima accusamus nemo sequi esse nulla reprehenderit voluptatibus optio quis, repellendus voluptatum
                corporis excepturi laudantium quas, voluptates expedita eius inventore fuga possimus sunt sint veritatis
                harum molestiae quam placeat. Fuga.
                </div>
            </div>
        </div>

    </div>`

    document.getElementById(`btnVoltar${produto.id}`).addEventListener("click", function(){
        location.reload()
    })
        
}


for(const habPr of Produtos){
    document.getElementById(`chavePr${habPr.id}`).addEventListener("click",()=> abrirProdutoIndividual(habPr.id))
}





