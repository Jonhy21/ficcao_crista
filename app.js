function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    section.innerHTML = "" // Limpa o conteúdo antes de adicionar os novos resultados

let campoPesquisa = document.getElementById("campo-pesquisa").value
        

    if (!campoPesquisa){
            section.innerHTML = "<p>O campo de pesquisa não pode estar vazio!!!</p>"
            return
        }

        campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            resultados += `
            <div class="container">
                <div class="item-resultado">
             <img src=${dado.imagem} alt=${dado.titulo} width="118px" height="110px">
                <h3> ${dado.titulo} <h3>
                 <p>${dado.descricao}</p>
                  <a href=${dado.link} target="_blank"> Por mais informações sobre o livro ou filme, clique aqui. </a>
                </div>
            </div>
        `;
        }
    }
        
    if(!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados;
} 
