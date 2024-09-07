
let dados = [
    {
        titulo: "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-roupa",
        descricao: "Através de um guarda-roupa, crianças comuns descobrem Nárnia, um reino encantado governado por leões falantes, feiticeiras cruéis e criaturas míticas onde nunca é natal.",
        link: "https://pt.wikipedia.org/wiki/The_Chronicles_of_Narnia:_The_Lion,_the_Witch_and_the_Wardrobe",
        autor: "C. S. Lewis",
        ano: 1950,
        imagem: "imagens/LionWitchandWardrobeposter.webp",
        tags: "neve raposa lobo castor turco" 
    },
    {
        titulo: "As Crônicas de Nárnia: O Príncipe Caspian",
        descricao: "Um reino mágico, outrora radiante, agora jaz sob a sombra de um reinado opressor. Um príncipe exilado, busca restaurar a antiga glória de Nárnia, com a ajuda de amigos distantes.",
        link: "https://pt.wikipedia.org/wiki/The_Chronicles_of_Narnia:_Prince_Caspian",
        autor: "C. S. Lewis",
        ano: 1951,
        imagem: "imagens/250px-The_Chronicles_of_Narnia_-_Prince_Caspian.jpg",
        tags: "espada névoa reino reinado coroa"
    },
    {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        descricao: "Em uma terra antiga, um hobbit descobre um anel mágico que ameaça o mundo, e junto a sociedade, embarca em uma jornada para destruí-lo, enfrentando orcs, um senhor das trevas.",
        link: "https://pt.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Fellowship_of_the_Ring",
        autor: "J. R. R. Tolkien",
        ano: 1954,
        imagem: "imagens/senhor_dos_aneis.jpg",
        tags: "elfo cavaleiros aragorn gandalf orcs"
    },
    {
        titulo: "O Hobbit",
        descricao: "Um hobbit pacato é arrastado para uma aventura épica, ao lado de um mago e uma companhia de anões, em busca de um tesouro perdido e para enfrentar milhares de orcs e um dragão.",
        link: "https://pt.wikipedia.org/wiki/O_Hobbit",
        autor: "J. R. R. Tolkien",
        ano: 1937,
        imagem: "imagens/the-hobbit.jpg",
        tags: "fogo arco flecha rei ouro"
    },
    {
        titulo: "Andorinhas de um Continente em Chamas",
        descricao: "Em um planeta devastado pela miséria e dividido pela guerra, Kelaya, uma oficial, a facção rebelde que dominou o território, se vê diante de uma missão que mudará seu destino devido a um artefato que mudaria o rumo de tudo.",
        link:"https://www.amazon.com.br/Andorinhas-continente-chamas-Gabriela-Fernandes/dp/6556898546/ref=sr_1_1?crid=3QDAS58VB5MCF&dib=eyJ2IjoiMSJ9.jwCz2XBMV0QpfN0B8-j_cYPP78nCZguhm8YNyEo77p3HL92hFOU2U_hfx_GQVkGZtx49XdB0I8tSgffckNrzWg.rfeUBgId-4juB60WG-uJGnnvTUBYT6yb-jiGywMLuNA&dib_tag=se&keywords=andorinhas+de+um+continente+em+chamas&qid=1725498637&sprefix=andorin%2Caps%2C628&sr=8-1", 
        autor: "Gabriela Fernandes",
        ano: 2023, 
        imagem: "imagens/andorinhas.jpg",
        tags: "guerra espaço ciência gangue espaço"
    },
    {
        titulo: "Senhor dos Anéis: As Duas Torres",
        descricao: "Em um mundo dividido pela guerra, Frodo e Sam continuam sua jornada para destruir o Um Anel, enquanto Aragorn, Legolas e Gimli buscam resgatar seus amigos e unir as forças do bem para enfrentar o crescente poder de Sauron.",
        link: "https://pt.wikipedia.org/wiki/O_Senhor_dos_An%C3%A9is:_As_Duas_Torres",
        autor: "J.R.R. Tolkien",
        ano: 1954,
        imagem: "imagens/duas-torres.webp",
        tags: "fantasia aventura magia guerra orcs"
    },
    {
        titulo: "O Senhor dos Anéis: O Retorno do Rei",
        descricao: "Com o destino de toda a Terra Média em jogo, Frodo Bolseiro e Samwise Gamgee se aproximam perigosamente da Montanha da Perdição, com a missão de destruir o Um Anel e, assim, derrotar o sombrio senhor das trevas, Sauron.",
        link: "https://pt.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Return_of_the_King",
        autor: "J.R.R. Tolkien",
        ano: 1954,
        imagem: "imagens/retorno-rei.jpg",
        tags: "fantasia aventura magia guerra orcs"
    },
    {
        titulo: "Se Pudesse Contar as Estrelas",
        descricao: "IMAGINE ACORDAR SEM MEMÓRIA, EM UM LUGAR DESCONHECIDO, TENDO COMO PISTA APENAS UM NOME GRAVADO EM UM COLAR? Esse é o caso de Alison que, certo dia, ainda criança, desperta prestes a se afogar em um lago. ",
        link: "https://www.amazon.com.br/Se-pudesse-contar-estrelas-releitura/dp/6556899585/ref=sr_1_1?crid=3LE4Q79DJCC4S&dib=eyJ2IjoiMSJ9.TptRx2-xd5-Ni2Zx-EyO5-RXiDbvq4eiUqpTxF8WYfA0pLgKlDRh-TLTo0rkcigwwPWwuRJFXXK7Hnbgizvp1cOBZXNOi3WrKZviDuXiMfb8tVu55HTD5fBhdFMne5UcOMg-cPqObVdWvPpXYIxTPO7ZdpCCrT2m36d1Hp8VHLfxe2Xb1reKQB2wpf16YTn6EtClOvHTFPvd1Kmw-Ga5qHbPEsiqSHFO3xjlt9FRYVN8om3l5FvL7h9bBmFlu5_lbwlsegipE6fuxOGlk097kWIiBcBZER7xWTPR-d7Jbwo.KvwD9QumghZFCsIssUTzlE6xdvpWXrMwtOibtHBRjAo&dib_tag=se&keywords=se+pudesse+contar+as+estrelas&qid=1725686304&sprefix=se+pude%2Caps%2C264&sr=8-1",
        autor: "Becca Mackenzie",
        ano: 2024,
        imagem: "imagens/se_estrelas.jpg",
        tags: "fantasia aventura magia estrelas céu"
    },
    {
        titulo: "As Crônicas de Nárnia: A Viagem do Peregrino da Alvorada",
        descricao: "Os irmãos Pevensie, embarcam em uma jornada a bordo do navio Peregrino da Alvorada. Guiados pelo Rei Caspian, eles partem em busca dos Sete Lordes Desaparecidos de Telmar.",
        link:"https://pt.wikipedia.org/wiki/The_Chronicles_of_Narnia:_The_Voyage_of_the_Dawn_Treader",
        autor: "C.S Lewis",
        ano: 1952,
        imagem: "imagens/narnia_the_voyage.jpg",
        tags: "peregrino viagem leão espada rato"
    },
    

];

