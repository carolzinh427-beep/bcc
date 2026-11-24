(() => {
  'use strict';

  /* ------------------------------------------------------------------
     Configuração. Edite aqui.
     whatsapp: número com DDI + DDD, só dígitos. CONFIRMAR com o restaurante
     (o número abaixo é o telefone fixo divulgado; troque pelo WhatsApp oficial).
  ------------------------------------------------------------------ */
  const CONFIG = {
    whatsapp: '5561992193011',
    greeting: 'Olá, gostaria de reservar uma mesa no Bloco C.'
  };

  const MENU = [
  {
    "id": "executivo",
    "title": "Menu Executivo",
    "items": [
      {
        "n": "Sequência Completa em 3 Tempos",
        "d": "Entrada + Prato Principal + Sobremesa · Servido de segunda a sexta, das 12h às 15h30",
        "p": "",
        "img": "images/pratos/picadinho.jpg"
      },
      {
        "n": "Picadinho Bloco C",
        "d": "Cubos de filé mignon ao molho demi-glace especial, ovo pochê, banana caramelizada, arroz e farofinha crocante",
        "p": "",
        "img": "images/pratos/picadinho.jpg"
      },
      {
        "n": "Peixe do Dia Grelhado",
        "d": "Pescado fresco grelhado na manteiga clarificada de ervas, risoto cremoso de limão siciliano e azeite aromático",
        "p": "",
        "img": "images/pratos/peixe-branco.jpg"
      },
      {
        "n": "Escalope ao Poivre",
        "d": "Escalope de mignon grelhado, redução aveludada de pimentas verdes e aligot clássico de batatas",
        "p": "",
        "img": "images/pratos/escalope-poivre.jpg"
      },
      {
        "n": "Massa Artesanal do Chef",
        "d": "Fettuccine fresco com fonduta de queijos da Canastra, tiras de mignon e cogumelos Paris salteados",
        "p": "",
        "img": "images/pratos/massa-artesanal.jpg"
      },
      {
        "n": "Mini Churros Bloco C",
        "d": "Churros artesanais crocantes com doce de leite caseiro cremoso morno",
        "p": "",
        "img": "images/pratos/churros.jpg"
      }
    ]
  },
  {
    "id": "entradas",
    "title": "Entradas",
    "items": [
      {
        "n": "Carpaccio de Filé Tradicional",
        "d": "Com molho de mostarda, Grana Padano e alcaparras",
        "p": "R$ 9.600",
        "img": "images/cardapio/f2368cd0-7a11-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Carpaccio de Filé da Casa",
        "d": "Com molho de mostarda, Grana Padano, alcaparras e mel trufado",
        "p": "R$ 9.900",
        "img": "images/cardapio/103a9230-7a12-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Cubos de Filé",
        "d": "Ao roti com Grana Padano maçaricado",
        "p": "R$ 9.600",
        "img": "images/cardapio/38a651a0-7a12-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Burrata com Passata de Tomate (La Bufalina)",
        "d": "com pesto de manjericão e redução citríca",
        "p": "R$ 9.600",
        "img": "images/cardapio/2208c770-5c6f-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Burrata ao Forno ( La Bufalina )",
        "d": "com ragout de linguicinha  blumenau",
        "p": "R$ 9.900",
        "img": null
      },
      {
        "n": "Pastel de Queijo Cremoso",
        "d": "Com mel trufado",
        "p": "R$ 6.600",
        "img": "images/cardapio/9b4bc470-7a12-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Brie em Massa Folhada",
        "d": "com caramelo de nuts",
        "p": "R$ 9.900",
        "img": "images/cardapio/aa868a60-7a12-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Bruschettas da Casa",
        "d": "pomodoro, cogumelos trufados e queijos de cabra",
        "p": "R$ 9.600",
        "img": "images/cardapio/ba8367d0-7a12-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Steak de Tartar",
        "d": "Com mini salada e batatas crocantes",
        "p": "R$ 9.900",
        "img": null
      },
      {
        "n": "Croquete de Brisket",
        "d": "Com Aioli Secreto",
        "p": "R$ 8.900",
        "img": "images/cardapio/01175670-7a13-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Bacalhau Desfiado, ovas",
        "d": "E fondue de grana padano trufado",
        "p": "R$ 12.900",
        "img": "images/cardapio/03a5a2a0-7a38-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Seleção de Queijos do Chef",
        "d": "Com redução de balsâmico e mel trufado",
        "p": "R$ 11.900",
        "img": "images/cardapio/2fc28300-7a13-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Cesta de Pão",
        "d": "",
        "p": "R$ 1.600",
        "img": null
      },
      {
        "n": "TARTAR DE SALMÃO,OVAS",
        "d": "e fonduta de grana padano e azeite verde",
        "p": "R$ 12.900",
        "img": "images/cardapio/5808b910-7a13-11f1-88c0-3350d9e629f0.jpg"
      }
    ]
  },
  {
    "id": "saladas",
    "title": "Saladas",
    "items": [
      {
        "n": "Salada do Chef",
        "d": "Mix de folhas verdes, queijo cremoso, redução cítrica e farofa secreta",
        "p": "R$ 7.900",
        "img": null
      },
      {
        "n": "Salada de Figo Fresco",
        "d": "Mix de folhas, queijo de cabra, mel e farofa secreta",
        "p": "R$ 8.900",
        "img": null
      },
      {
        "n": "Salada de Bloco C",
        "d": "mix de folhas, molho de parmesão, palmito, tomate cereja, cenoura e batata palha",
        "p": "R$ 7.900",
        "img": null
      },
      {
        "n": "Salada de Carpaccio",
        "d": "Mix de folhas, molho de mostarda, grana padano, redução balsânico e alcaparones",
        "p": "R$ 8.500",
        "img": "images/cardapio/bc064960-7a35-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Salada da Carol",
        "d": "Queijo de cabra, rúcula, tomate cereja, damasmo e pesto",
        "p": "R$ 13.200",
        "img": null
      }
    ]
  },
  {
    "id": "classicos",
    "title": "Clássicos",
    "items": [
      {
        "n": "Filet ao Dijon",
        "d": "Com nhoque frito, mel e grana padano",
        "p": "R$ 16.500",
        "img": null
      },
      {
        "n": "Polvo Grelhado",
        "d": "com arroz negro e aioli",
        "p": "R$ 19.900",
        "img": null
      },
      {
        "n": "Camarão na Fonduta de Brie",
        "d": "Com risoto de banana caramelizada",
        "p": "R$ 22.000",
        "img": "images/cardapio/be791bb0-5c6e-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Bacalhau em crosta de doce de leite",
        "d": "Com aligot de mandioquinha",
        "p": "R$ 19.900",
        "img": null
      },
      {
        "n": "Bacalhoada do Chef",
        "d": "Em nata com batata, brócolis, ovo e arroz de amêndoas",
        "p": "R$ 19.900",
        "img": "images/cardapio/b568a3c0-7a42-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Filet Mignon  ao Roquefort",
        "d": "Com maçã caramelizada e arroz de roti ao forno",
        "p": "R$ 13.900",
        "img": "images/cardapio/017490d0-7a43-11f1-88c0-3350d9e629f0.jpg"
      }
    ]
  },
  {
    "id": "almoco",
    "title": "Almoço",
    "items": [
      {
        "n": "PF do Chef",
        "d": "bife acebolado, feijão gordo, batata frita, ovo frito e arroz branco.",
        "p": "R$ 9.800",
        "img": "images/cardapio/2fb1a330-7a4c-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Picadinho de Filet Mignon",
        "d": "Com ovo pochê, arroz branco, farofa crocante e banana caramelizada",
        "p": "R$ 9.800",
        "img": "images/cardapio/e0bd4060-7a44-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Denver Steak, Vinagrete de tomate",
        "d": "Com farofa de ovos e arroz com brócolis",
        "p": "R$ 18.900",
        "img": "images/cardapio/4d6da310-7a4c-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Nhoque Caipira",
        "d": "Com ovo frito, farofa de bacon e couve crispy",
        "p": "R$ 9.600",
        "img": "images/cardapio/66e08bc0-7a45-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Bobó de Camarão",
        "d": "Com banana assada, arroz de amêndoas e farofa do chef",
        "p": "R$ 21.000",
        "img": "images/cardapio/86d2f3a0-7a45-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Salmão Grelhado",
        "d": "Com mix de quinoa e saladinha de brotos e azeite de limão siciliano",
        "p": "R$ 14.900",
        "img": "images/cardapio/d7f70480-7a48-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Peixe Branco Grelhado",
        "d": "com molho de limão e couscous marroquino",
        "p": "R$ 14.900",
        "img": "images/cardapio/dd83a6f0-7a49-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Carne de Panela",
        "d": "Com baião de dois, queijo coalho e farofa do chef",
        "p": "R$ 9.600",
        "img": "images/cardapio/0332de70-7a4a-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Paillard de Frango",
        "d": "Com legumes grelhados e creme de milho",
        "p": "R$ 9.900",
        "img": "images/cardapio/312b83e0-7a4a-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Tagliata de Angus",
        "d": "Com nhoque ao brie, crispy de parma e pesto de manjericão",
        "p": "R$ 11.900",
        "img": "images/cardapio/56453220-7a4a-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Moquequinha de Peixe ao Curry",
        "d": "Com couscous marroquino e banana caramelizada",
        "p": "R$ 12.900",
        "img": "images/cardapio/9e8b64a0-7a4a-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Peixe Branco Tempurá",
        "d": "Com mousseline de batata com limão e tomate assado",
        "p": "R$ 14.900",
        "img": "images/cardapio/8591ced0-7a4a-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Filet Migon ao Roti",
        "d": "Com Risoni Trufado",
        "p": "R$ 16.500",
        "img": null
      },
      {
        "n": "Risoto de Picadinho",
        "d": "com banana caramelizada, ovo pochê e farofa de panko",
        "p": "R$ 11.900",
        "img": null
      }
    ]
  },
  {
    "id": "principais",
    "title": "Principais & Jantar",
    "items": [
      {
        "n": "Filet com Rapadura",
        "d": "Ao molho roti e risoto de Grana Padano com rapadura",
        "p": "R$ 15.500",
        "img": "images/cardapio/4919d8e0-5c6f-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Filet em Crosta de Pão",
        "d": "com cebola caramelizada e risoto de brie",
        "p": "R$ 15.900",
        "img": "images/cardapio/510c3bb0-7a4e-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Camarão Spicy",
        "d": "Com arroz cremoso de curry e manga",
        "p": "R$ 22.000",
        "img": "images/cardapio/a8441d30-7a4e-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Cotoletta Alla  Milanese",
        "d": "Com presunto de parma, parmesão e risoto de basilico",
        "p": "R$ 15.900",
        "img": "images/cardapio/52ee13b0-7a51-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Ancho em Crosta de Roquefort",
        "d": "Com risoto de cebola caramelizada",
        "p": "R$ 15.900",
        "img": "images/cardapio/49a5be40-7a4f-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Bacalhau com tomate assado",
        "d": "Batata sauté e azeitonas pretas",
        "p": "R$ 19.900",
        "img": "images/cardapio/6dad6040-7a4f-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Peixe Branco com Ovas, Beurre Blanc",
        "d": "E capelline na manteiga",
        "p": "R$ 14.900",
        "img": "images/cardapio/8a2399b0-7a4f-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Magret de Canard ao Cassis",
        "d": "Com linguine ao roquefort",
        "p": "R$ 15.500",
        "img": "images/cardapio/a18a3370-7a4f-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Costela 18 Horas, Defumada",
        "d": "Com nhoque frito na fonduta de queijo vale do testo",
        "p": "R$ 15.900",
        "img": "images/cardapio/16c55700-7a50-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Risoto de Frutos do Mar",
        "d": "Lula, Camarão, Mexilhão e Polvo",
        "p": "R$ 19.900",
        "img": null
      },
      {
        "n": "Stinco de cordeiro",
        "d": "com risoto de açafrão",
        "p": "R$ 18.900",
        "img": null
      },
      {
        "n": "Carré de cordeiro",
        "d": "em crosta de pistache com arroz cremoso de dijon",
        "p": "R$ 18.900",
        "img": null
      },
      {
        "n": "Tortelli de lagosta ao limone",
        "d": "",
        "p": "R$ 19.900",
        "img": null
      },
      {
        "n": "Cottoleta à milanesa",
        "d": "com nhoque ao pomodoro",
        "p": "R$ 18.900",
        "img": null
      },
      {
        "n": "Baby beef ao poivre",
        "d": "com risoto de parmesão",
        "p": "R$ 18.900",
        "img": null
      }
    ]
  },
  {
    "id": "massas-arrozes",
    "title": "Massas & Arrozes",
    "items": [
      {
        "n": "Ravióli de Queijo de Cabra",
        "d": "Com cebola caramelizada",
        "p": "R$ 11.900",
        "img": "images/cardapio/66d9f7e0-7a4c-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Ravióli de Burrata",
        "d": "Ao pomodoro com pesto de manjerição e confit de limão siciliano",
        "p": "R$ 10.900",
        "img": "images/cardapio/9fc950f0-7a4c-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Ravioloni de Compota de Figo",
        "d": "Na fonduta de Queijo tulha",
        "p": "R$ 10.900",
        "img": null
      },
      {
        "n": "Macarrão do Petrarca",
        "d": "Spaguetti na manteiga, ovo frito, pecorino e pimenta do reino",
        "p": "R$ 9.800",
        "img": "images/cardapio/3a4e8190-7a4d-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Spaguetti ao Limone",
        "d": "",
        "p": "R$ 9.900",
        "img": null
      },
      {
        "n": "Arroz de Confit de Pato",
        "d": "com ovo pochê, linguicinha blumenal e batata palha caseira",
        "p": "R$ 13.900",
        "img": "images/cardapio/5a934f30-7a4d-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Arroz de Rabada",
        "d": "com ailoli de agrião, ovo frito e batata palha caseira",
        "p": "R$ 11.900",
        "img": "images/cardapio/964aa1e0-7a4d-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Arroz de Polvo",
        "d": "com tapenade de azeitonas pretas",
        "p": "R$ 14.900",
        "img": "images/cardapio/7b3c5ce0-7a4d-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Arroz de Bacalhau",
        "d": "com ovo pochê e  batata palha caseiro",
        "p": "R$ 16.900",
        "img": null
      },
      {
        "n": "Arroz Caldoso de Camarão",
        "d": "com mascarpone, farofa de presunto de Parma e ceboullete",
        "p": "R$ 23.900",
        "img": "images/cardapio/38836910-7a4e-11f1-88c0-3350d9e629f0.jpg"
      }
    ]
  },
  {
    "id": "estrogonofes",
    "title": "Estrogonofes",
    "items": [
      {
        "n": "Filet Mignon",
        "d": "Com arroz cremoso e batata palha caseira trufada",
        "p": "R$ 9.900",
        "img": "images/cardapio/4e33c850-7a43-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Frango",
        "d": "Com arroz cremoso e batata palha caseira trufada",
        "p": "R$ 8.900",
        "img": "images/cardapio/5b5e24d0-7a43-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Camarão",
        "d": "Com arroz cremoso e batata palha caseira trufada",
        "p": "R$ 18.900",
        "img": "images/cardapio/76921a40-7a43-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Cogumelos",
        "d": "Com arroz cremoso e batata palha caseira trufada",
        "p": "R$ 9.400",
        "img": null
      }
    ]
  },
  {
    "id": "sobremesas",
    "title": "Sobremesas",
    "items": [
      {
        "n": "Churros de Banana",
        "d": "Com doce de leite caseiro ou brigadeiro de leite ninho",
        "p": "R$ 4.900",
        "img": "images/cardapio/b0423bc0-5c6f-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Crostata de Amêndoas",
        "d": "Com sorvete de pistache e calda de chocolate",
        "p": "R$ 4.900",
        "img": "images/cardapio/469a0f70-7a50-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Bolinho de Chuva de Cenoura",
        "d": "Com calda de chocolate",
        "p": "R$ 4.900",
        "img": "images/cardapio/605e6f50-7a50-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Crepe Soufflê",
        "d": "Com creme de baunilha e caramelo de laranja",
        "p": "R$ 4.900",
        "img": null
      },
      {
        "n": "Casadinho de Colher",
        "d": "Brigadeiro branco e preto",
        "p": "R$ 4.900",
        "img": "images/cardapio/7f7a4d50-7a50-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Bolo de Cenoura",
        "d": "Com calda de brigadeiro de colher",
        "p": "R$ 4.700",
        "img": "images/cardapio/8d4f68c0-7a50-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Bolo de Chocolate",
        "d": "Com calda de brigadeiro e sorvete de macadâmia",
        "p": "R$ 4.700",
        "img": "images/cardapio/9c841430-7a50-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Rabanada Tradicional",
        "d": "Com sorvete de baunilha e calda de doce de leite",
        "p": "R$ 4.700",
        "img": "images/cardapio/dafd4600-7a50-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Mousse de Chocolate",
        "d": "Com Calda de caramelo e flor de sal",
        "p": "R$ 4.600",
        "img": "images/cardapio/fe567f90-7a50-11f1-88c0-3350d9e629f0.jpg"
      },
      {
        "n": "Nossos Sorvetes",
        "d": "Consultar o garçom",
        "p": "R$ 4.600",
        "img": null
      },
      {
        "n": "Churros Dueto de Banana",
        "d": "Com doce de leite caseiro e brigadeiro de leite ninho",
        "p": "R$ 6.500",
        "img": null
      },
      {
        "n": "Romeu e Julieta",
        "d": "bombom de goiabada com mousse de queijo e farofa de amêndoas",
        "p": "R$ 4.900",
        "img": null
      }
    ]
  },
  {
    "id": "bebidas",
    "title": "Bebidas",
    "items": [
      {
        "n": "Água Prata sem gás",
        "d": "",
        "p": "R$ 990",
        "img": "images/cardapio/f045a6b0-f433-11ee-bca4-6b665f53f9f1.jpg"
      },
      {
        "n": "Água Prata com gás",
        "d": "",
        "p": "R$ 990",
        "img": "images/cardapio/35194630-5bae-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "San Pellegrino com Gás",
        "d": "",
        "p": "R$ 2.990",
        "img": "images/cardapio/7c1852b0-5bae-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Acqua Perrier",
        "d": "",
        "p": "R$ 2.600",
        "img": "images/cardapio/9ad288b0-5bae-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Cambuquira",
        "d": "",
        "p": "R$ 1.500",
        "img": "images/cardapio/cb468e60-5bae-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Acqua Panna",
        "d": "",
        "p": "R$ 2.890",
        "img": "images/cardapio/e85473f0-5bae-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Pedras Salgadas",
        "d": "",
        "p": "R$ 4.890",
        "img": "images/cardapio/415f8ed0-5baf-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Água Voss Sem Gás",
        "d": "",
        "p": "R$ 6.500",
        "img": null
      },
      {
        "n": "Sucos Naturais",
        "d": "",
        "p": "R$ 1.890",
        "img": null
      },
      {
        "n": "Sucos Especiais",
        "d": "",
        "p": "R$ 2.390",
        "img": null
      },
      {
        "n": "Suco de Tomate Temperado",
        "d": "",
        "p": "R$ 2.900",
        "img": null
      },
      {
        "n": "Suco de Uva Integral",
        "d": "",
        "p": "R$ 2.300",
        "img": null
      },
      {
        "n": "Coca Cola",
        "d": "",
        "p": "R$ 990",
        "img": "images/cardapio/8e74aeb0-5bd4-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Coca Cola Zero",
        "d": "",
        "p": "R$ 990",
        "img": "images/cardapio/9bcbe790-5bd4-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Guaraná Antártica",
        "d": "",
        "p": "R$ 990",
        "img": "images/cardapio/aae60620-5bd4-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Guaraná Antárctica Zero",
        "d": "",
        "p": "R$ 990",
        "img": "images/cardapio/8a1110d0-5bb0-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Energético Red Bull",
        "d": "",
        "p": "R$ 2.800",
        "img": "images/cardapio/e9af8530-5bb0-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Água Tônica",
        "d": "",
        "p": "R$ 1.300",
        "img": "images/cardapio/d12a78c0-5bd4-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Pepsi Black",
        "d": "",
        "p": "R$ 990",
        "img": "images/cardapio/d9dc2750-eeb1-11ee-90d3-e52bf092db84.jpg"
      },
      {
        "n": "Café 3 Corações",
        "d": "",
        "p": "R$ 900",
        "img": null
      },
      {
        "n": "Chás",
        "d": "",
        "p": "R$ 1.400",
        "img": null
      }
    ]
  },
  {
    "id": "drinks",
    "title": "Drinks & Coquetéis",
    "items": [
      {
        "n": "Kir Royal",
        "d": "Espumante, creme de cassis e cereja",
        "p": "R$ 3.300",
        "img": null
      },
      {
        "n": "Aperol Spritz",
        "d": "Aperol, espumante e água gaseificada",
        "p": "R$ 4.200",
        "img": null
      },
      {
        "n": "Cosmopolitan",
        "d": "Vodka, Cramberry, Cointreau e Suco de Limão",
        "p": "R$ 3.900",
        "img": null
      },
      {
        "n": "Dry Martini",
        "d": "Gin Tanqueray, Martiny Dry e Azeitona verde",
        "p": "R$ 3.800",
        "img": null
      },
      {
        "n": "Mojito Tradicional",
        "d": "Bacardi prata, Hortelã, Suco de limão e Club Soda",
        "p": "R$ 3.900",
        "img": null
      },
      {
        "n": "Blood Mary",
        "d": "Suco de tomate temperado, Vodka, Salsão e Limão",
        "p": "R$ 3.900",
        "img": null
      },
      {
        "n": "Negroni",
        "d": "Gim Tanqueray, Carpano e Campari",
        "p": "R$ 4.200",
        "img": null
      },
      {
        "n": "Margarita",
        "d": "Tequila Jose Cuervo, Cointreau, Suco de limão e Curaçau Blue",
        "p": "R$ 4.200",
        "img": null
      },
      {
        "n": "Apple Martini",
        "d": "Vodka, Martiny Dry e Creme de Maçã Verde",
        "p": "R$ 3.600",
        "img": null
      },
      {
        "n": "Whisky Souer",
        "d": "Jack Daniel’s e Sour Mix",
        "p": "R$ 4.200",
        "img": null
      },
      {
        "n": "Moscow Mule",
        "d": "Vodka Absolut, Xarope de Gengibre e Suco de Limão",
        "p": "R$ 4.200",
        "img": null
      },
      {
        "n": "Manhattan",
        "d": "Jack Daniel’s, Carpano, Angustura Bitter e Cereja",
        "p": "R$ 3.900",
        "img": null
      },
      {
        "n": "Sex On The Beach",
        "d": "Vodka, Licor de Pêssego Suco de Laranja e Granadine",
        "p": "R$ 3.900",
        "img": null
      },
      {
        "n": "Refresco de Vinho do Porto",
        "d": "Vinho do Porto, Suco de Limão e Club Soda",
        "p": "R$ 3.900",
        "img": null
      },
      {
        "n": "Sensação",
        "d": "Suco de Laranja, Suco de Morango, Creme de Maçã Verde e Frutas Vermelhas",
        "p": "R$ 3.900",
        "img": null
      },
      {
        "n": "Mandarini",
        "d": "Creme de Tangerina, Creme de Maçã Verde, Club Soda e Cereja",
        "p": "R$ 3.900",
        "img": null
      },
      {
        "n": "Balão Mágico",
        "d": "Vodka Ciroc, Peach Tree, Sour Mix, Espumante e Granadine",
        "p": "R$ 4.200",
        "img": null
      },
      {
        "n": "Orange Fizz",
        "d": "Vodka Ciroc, Crème de Tangerina, Calda de Frutas Vermelhas e Espumante",
        "p": "R$ 4.200",
        "img": null
      },
      {
        "n": "ZuKa",
        "d": "Vodka Ciroc, Xarope Maçã Verde, Peach Tree, Suco de Laranja e Club Soda",
        "p": "R$ 4.200",
        "img": null
      },
      {
        "n": "Norde’s Espanha",
        "d": "Uva Verde, Twist de Limão Siciliano",
        "p": "R$ 8.800",
        "img": null
      },
      {
        "n": "Monkey 47, Alemanha",
        "d": "Limão Taiti Desidratado Zimbro",
        "p": "R$ 7.900",
        "img": null
      },
      {
        "n": "Hendricks, Inglaterra",
        "d": "Zimbro. Pepino e Alecrim",
        "p": "R$ 6.900",
        "img": null
      },
      {
        "n": "Bulldog, Inglaterra",
        "d": "Limão Siciliano Desidratado e Baunilha",
        "p": "R$ 6.900",
        "img": null
      },
      {
        "n": "Tanqueray Ten, Inglaterra",
        "d": "Laranja Limão. Limão Taitit",
        "p": "R$ 6.400",
        "img": null
      },
      {
        "n": "Tanqueray Servilla, Inglaterra",
        "d": "Laranja Bahia, Alecrim, Xarope de Tangerina e Zimbro",
        "p": "R$ 5.900",
        "img": null
      },
      {
        "n": "Tanqueray, Inglaterra",
        "d": "Limão Taiti. Limão Siciliano Desidratado. Canela",
        "p": "R$ 5.900",
        "img": null
      },
      {
        "n": "Tanqueray, Inglaterra",
        "d": "Limão Taiti. Limão Siciliano Desidratado. Canela",
        "p": "R$ 5.900",
        "img": null
      },
      {
        "n": "Beefeater, Inglaterra",
        "d": "Flor de Hibisco e Limão Thaiti Desidratado",
        "p": "R$ 4.900",
        "img": null
      },
      {
        "n": "The Botanist, Escócia",
        "d": "Limão Desidratado. Limão Taiti",
        "p": "R$ 7.900",
        "img": null
      },
      {
        "n": "Beefeater 24, Inglaterra",
        "d": "Abacaxi Desidratado e Zimbro",
        "p": "R$ 5.400",
        "img": null
      },
      {
        "n": "Malfy com Limone, Itália",
        "d": "Casca de Limão Siciliano. Hortelã",
        "p": "R$ 7.900",
        "img": null
      },
      {
        "n": "Gordon ́s, Brasil",
        "d": "Frutas Vermelhas e Hortelã",
        "p": "R$ 4.900",
        "img": null
      },
      {
        "n": "F. Vermelhas, Lichia, Lima da Pérsia, Kiwi Uva c/ limão e Uva c/ manjericão",
        "d": "",
        "p": "R$ 3.700",
        "img": null
      },
      {
        "n": "Vodka Smirnoff",
        "d": "",
        "p": "R$ 3.300",
        "img": null
      },
      {
        "n": "Vodka Cirôc",
        "d": "",
        "p": "R$ 4.200",
        "img": null
      },
      {
        "n": "Vodka Grey Goose",
        "d": "",
        "p": "R$ 4.700",
        "img": null
      },
      {
        "n": "Vodka Absolut",
        "d": "",
        "p": "R$ 3.500",
        "img": null
      },
      {
        "n": "Vodka Pravda",
        "d": "",
        "p": "R$ 4.900",
        "img": null
      },
      {
        "n": "Belvedere",
        "d": "",
        "p": "R$ 5.000",
        "img": null
      },
      {
        "n": "Importada",
        "d": "",
        "p": "R$ 3.900",
        "img": null
      }
    ]
  },
  {
    "id": "cervejas-doses",
    "title": "Cervejas & Doses",
    "items": [
      {
        "n": "Stella Artois",
        "d": "",
        "p": "R$ 2.100",
        "img": "images/cardapio/0b169640-5bb2-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Stella Artois Pure Gold",
        "d": "",
        "p": "R$ 1.900",
        "img": "images/cardapio/2a263f40-5bb2-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Spaten",
        "d": "",
        "p": "R$ 1.700",
        "img": "images/cardapio/4530b3b0-5bb2-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Corona",
        "d": "",
        "p": "R$ 2.200",
        "img": "images/cardapio/87eff3a0-5bb2-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Corona Zero Álcool",
        "d": "",
        "p": "R$ 2.200",
        "img": "images/cardapio/909479f0-67d5-11f0-84e1-fde0ff81eaaa.jpg"
      },
      {
        "n": "Absolut",
        "d": "",
        "p": "R$ 3.500",
        "img": "images/cardapio/a190c5f0-5bb2-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Smirnoff",
        "d": "",
        "p": "R$ 2.600",
        "img": "images/cardapio/baa44c60-5bb2-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Grey Goose",
        "d": "",
        "p": "R$ 3.900",
        "img": "images/cardapio/d61a7af0-5bb2-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Cirôc",
        "d": "",
        "p": "R$ 3.900",
        "img": "images/cardapio/ead1fa40-5bb2-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Belvedere",
        "d": "",
        "p": "R$ 4.500",
        "img": "images/cardapio/08cf6ff0-5bb3-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Pravda",
        "d": "",
        "p": "R$ 4.300",
        "img": "images/cardapio/c9dc3e40-5bd5-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Absolut Elyx",
        "d": "",
        "p": "R$ 4.000",
        "img": "images/cardapio/f28f3fe0-5bd5-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Amarula",
        "d": "",
        "p": "R$ 3.900",
        "img": "images/cardapio/432cd7f0-5bb3-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Licor 43",
        "d": "",
        "p": "R$ 4.490",
        "img": "images/cardapio/dec2dc50-5bb3-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Cointreau",
        "d": "",
        "p": "R$ 3.900",
        "img": "images/cardapio/f490fbc0-5bb3-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Drambuie",
        "d": "",
        "p": "R$ 3.900",
        "img": "images/cardapio/0d4d1360-5bb4-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Baileys",
        "d": "",
        "p": "R$ 3.900",
        "img": "images/cardapio/28c62820-5bb4-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Limoncello",
        "d": "",
        "p": "R$ 3.900",
        "img": "images/cardapio/2cf9a030-5bd6-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Frangélico",
        "d": "",
        "p": "R$ 4.490",
        "img": "images/cardapio/6b071170-0cb3-11f0-87aa-979aa62eeeb8.jpg"
      },
      {
        "n": "Chartreuse Amarelo",
        "d": "",
        "p": "R$ 8.900",
        "img": "images/cardapio/f950bbd0-5bb5-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Chartreuse Verde",
        "d": "",
        "p": "R$ 9.900",
        "img": "images/cardapio/19107af0-5bb6-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Anísio Santiago",
        "d": "",
        "p": "R$ 7.800",
        "img": "images/cardapio/98440e70-5bd6-11ee-8123-0fcc262027e0.jpg"
      },
      {
        "n": "Cachaça de Banana",
        "d": "",
        "p": "R$ 3.300",
        "img": null
      },
      {
        "n": "Sagatiba",
        "d": "",
        "p": "R$ 2.500",
        "img": "images/cardapio/bfef15f0-5bd6-11ee-8123-0fcc262027e0.jpg"
      }
    ]
  }
];

  /* Horários: [início, fim] em minutos desde 00:00 */
  const SERVICE = {
    week: { lunch: [720, 930], dinner: [1170, 1440] },   // seg a qui
    weekend: { lunch: [720, 960], dinner: [1170, 1500] } // sex e sáb
  };
  const LAST_SEATING_BEFORE_CLOSE = 90; // minutos

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const waLink = (text) => `https://wa.me/${CONFIG.whatsapp}${text ? '?text=' + encodeURIComponent(text) : ''}`;

  /* Links de WhatsApp */
  $$('[data-wa]').forEach(a => {
    a.href = waLink(CONFIG.greeting);
    a.target = '_blank';
    a.rel = 'noopener';
  });
  // Os botões "Reservar" principais levam ao formulário; o flutuante e o do cardápio abrem o WhatsApp direto.
  $$('.nav-cta, .hero-actions [data-wa]').forEach(a => {
    a.href = '#reservas';
    a.removeAttribute('target');
  });

  /* Elementos */
  const nav = $('#nav');
  const progress = $('#progress');
  const heroC = $('#heroC');
  const heroInner = $('#heroInner');
  const fab = $('#fab');
  const burger = $('#burger');
  const drawer = $('#drawer');
  const menu = $('#menu');
  const menuClose = $('#menuClose');
  const tabsEl = $('#tabs');
  const listEl = $('#menuList');

  /* Frase com palavras que acendem no scroll */
  const statement = $('#statement');
  const words = [];
  if (statement) {
    const text = statement.textContent.trim();
    statement.textContent = '';
    text.split(/\s+/).forEach((w, i, arr) => {
      const s = document.createElement('span');
      s.className = 'w';
      s.textContent = w;
      statement.appendChild(s);
      if (i < arr.length - 1) statement.appendChild(document.createTextNode(' '));
      words.push(s);
    });
  }

  /* Reveal por IntersectionObserver */
  const revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-in'));
  }

  /* Scroll: progresso, nav, parallax, frase */
  let lastY = window.scrollY;
  let ticking = false;

  function update() {
    const y = window.scrollY;
    const vh = window.innerHeight;
    const max = document.documentElement.scrollHeight - vh;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;

    nav.classList.toggle('is-solid', y > 40);
    const drawerOpen = drawer.classList.contains('is-open');
    if (!drawerOpen) {
      if (y > 500 && y > lastY + 6) nav.classList.add('is-hidden');
      else if (y < lastY - 6 || y <= 500) nav.classList.remove('is-hidden');
    }
    lastY = y;

    fab.classList.toggle('is-visible', y > vh * 0.7);

    if (!reduceMotion && y < vh * 1.4) {
      heroC.style.transform = `translate3d(0, calc(-50% + ${y * 0.22}px), 0) scale(${1 + y / 3200})`;
      heroInner.style.transform = `translate3d(0, ${y * 0.1}px, 0)`;
    }

    if (words.length) {
      if (reduceMotion) {
        words.forEach(w => w.classList.add('on'));
      } else {
        const r = statement.getBoundingClientRect();
        const p = Math.min(Math.max((vh * 0.82 - r.top) / (r.height + vh * 0.3), 0), 1);
        const on = Math.round(p * words.length * 1.12);
        words.forEach((w, i) => w.classList.toggle('on', i < on));
      }
    }
    ticking = false;
  }
  function requestTick() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);
  update();

  /* Menu móvel */
  function setDrawer(open) {
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('is-locked', open);
    if (open) nav.classList.remove('is-hidden');
  }
  burger.addEventListener('click', () => setDrawer(!drawer.classList.contains('is-open')));
  $$('a', drawer).forEach(a => a.addEventListener('click', () => setDrawer(false)));

  /* Cardápio completo */
  let activeTab = MENU[0].id;
  let lastFocus = null;

  MENU.forEach(cat => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab';
    b.id = `tab-${cat.id}`;
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-controls', 'menuList');
    b.textContent = cat.title;
    b.addEventListener('click', () => { activeTab = cat.id; renderMenu(0); });
    tabsEl.appendChild(b);
  });

  function renderMenu(baseDelay) {
    const cat = MENU.find(c => c.id === activeTab);
    $$('.tab', tabsEl).forEach(b => b.setAttribute('aria-selected', String(b.id === `tab-${activeTab}`)));
    listEl.setAttribute('aria-labelledby', `tab-${activeTab}`);
    listEl.style.setProperty('--base', `${baseDelay}ms`);
    listEl.textContent = '';
    cat.items.forEach((it, i) => {
      const li = document.createElement('li');
      li.className = 'item';
      li.style.setProperty('--i', i);

      if (it.img) {
        const media = document.createElement('div');
        media.className = 'item-media';
        const img = document.createElement('img');
        img.src = it.img;
        img.alt = it.n;
        img.loading = 'lazy';
        media.appendChild(img);
        li.appendChild(media);
      }

      const info = document.createElement('div');
      info.className = 'item-info';

      const top = document.createElement('div');
      top.className = 'item-top';
      const n = document.createElement('span');
      n.className = 'item-name';
      n.textContent = it.n;
      top.appendChild(n);

      if (it.p) {
        const price = document.createElement('span');
        price.className = 'item-price';
        price.textContent = it.p;
        top.appendChild(price);
      }

      info.appendChild(top);

      if (it.d) {
        const d = document.createElement('span');
        d.className = 'item-desc';
        d.textContent = it.d;
        info.appendChild(d);
      }

      li.appendChild(info);

      listEl.appendChild(li);
    });
  }

  function openMenu() {
    lastFocus = document.activeElement;
    setDrawer(false);
    renderMenu(650);
    menu.scrollTop = 0;
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    setTimeout(() => menuClose.focus({ preventScroll: true }), 900);
  }
  function closeMenu() {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus({ preventScroll: true });
  }

  $$('[data-open-menu]').forEach(b => b.addEventListener('click', openMenu));
  menuClose.addEventListener('click', closeMenu);
  $$('[data-close-menu]', menu).forEach(a => a.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (menu.classList.contains('is-open')) closeMenu();
      else if (drawer.classList.contains('is-open')) setDrawer(false);
    }
    if (e.key === 'Tab' && menu.classList.contains('is-open')) {
      const f = $$('button, a[href]', menu).filter(el => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* Destaque do dia atual nos horários (fuso de Brasília) */
  (function markToday() {
    const map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    const wd = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Sao_Paulo', weekday: 'short' }).format(new Date());
    const today = map[wd];
    $$('#hours .hrow').forEach(r => {
      if (r.dataset.days.split(' ').map(Number).includes(today)) r.classList.add('is-today');
    });
  })();

  /* Reservas */
  const form = $('#reserveForm');
  const dateEl = $('#data');
  const timeEl = $('#hora');
  const peopleEl = $('#pessoas');
  const noteEl = $('#formNote');
  let people = 2;

  const pad2 = (n) => String(n).padStart(2, '0');
  const fmt = (t) => `${pad2(Math.floor(t / 60) % 24)}:${pad2(t % 60)}`;

  const now = new Date();
  dateEl.min = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;

  function dayOf(value) { return new Date(`${value}T12:00:00`).getDay(); }

  function slotsFor(day) {
    if (day === 0) return [];
    const s = day >= 5 ? SERVICE.weekend : SERVICE.week;
    const out = [];
    [s.lunch, s.dinner].forEach(([start, end]) => {
      for (let t = start; t <= end - LAST_SEATING_BEFORE_CLOSE; t += 30) out.push(t);
    });
    return out;
  }

  dateEl.addEventListener('change', () => {
    noteEl.textContent = '';
    timeEl.innerHTML = '';
    if (!dateEl.value) {
      timeEl.disabled = true;
      timeEl.add(new Option('Escolha a data', ''));
      return;
    }
    const slots = slotsFor(dayOf(dateEl.value));
    if (!slots.length) {
      timeEl.disabled = true;
      timeEl.add(new Option('Fechado neste dia', ''));
      noteEl.textContent = 'O restaurante fecha aos domingos. Escolha outra data.';
      return;
    }
    timeEl.disabled = false;
    timeEl.add(new Option('Selecione', ''));
    slots.forEach(t => timeEl.add(new Option(fmt(t), fmt(t))));
  });

  $('#minus').addEventListener('click', () => { people = Math.max(1, people - 1); peopleEl.textContent = people; });
  $('#plus').addEventListener('click', () => { people = Math.min(20, people + 1); peopleEl.textContent = people; });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = $('#nome').value.trim();
    if (!nome) { noteEl.textContent = 'Informe seu nome.'; $('#nome').focus(); return; }
    if (!dateEl.value) { noteEl.textContent = 'Escolha a data.'; dateEl.focus(); return; }
    if (dayOf(dateEl.value) === 0) { noteEl.textContent = 'O restaurante fecha aos domingos. Escolha outra data.'; dateEl.focus(); return; }
    if (!timeEl.value) { noteEl.textContent = 'Escolha o horário.'; timeEl.focus(); return; }
    noteEl.textContent = '';

    const dateLabel = new Date(`${dateEl.value}T12:00:00`).toLocaleDateString('pt-BR', {
      weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
    });
    const obs = $('#obs').value.trim();
    const lines = [
      CONFIG.greeting,
      '',
      `Nome: ${nome}`,
      `Data: ${dateLabel}`,
      `Horário: ${timeEl.value}`,
      `Pessoas: ${people}`
    ];
    if (obs) lines.push(`Observações: ${obs}`);
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
  });

  /* ------------------------------------------------------------------
     GooeyNav (React Bits) - Apenas Desktop
  ------------------------------------------------------------------ */
  const gooeyContainer = $('#gooeyNavContainer');
  if (gooeyContainer && typeof window.createGooeyNav === 'function') {
    const gooeyItems = [
      { label: 'Executivo', href: '#executivo' },
      { label: 'Pratos', href: '#pratos' },
      { label: 'Cardápio', href: '#', attrs: { 'data-open-menu': '' } },
      { label: 'Visite', href: '#visite' },
      { label: 'Reservas', href: '#reservas' },
      { label: 'Restaurante', href: '#restaurante' }
    ];

    let ignoreScroll = false;
    let scrollTimeout;

    const gooeyNav = window.createGooeyNav(gooeyContainer, {
      items: gooeyItems,
      initialActiveIndex: 0,
      theme: 'dark',
      size: 'md',
      frame: true,
      particleCount: 15,
      spread: 56,
      animationTime: 600,
      timeVariance: 300,
      gooeyness: 0.5,
      wobble: 0.5,
      hoverEffect: true,
      color: '#f3f0ea',
      activeTextColor: '#0a0a0a',
      onChange: (index, item, e) => {
        ignoreScroll = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => { ignoreScroll = false; }, 900);

        if (item.label === 'Cardápio') {
          if (e) e.preventDefault();
          openMenu();
        }
      }
    });

    // Sincroniza a pílula do GooeyNav ao rolar as seções no Desktop
    const navSections = [
      { id: 'executivo', idx: 0 },
      { id: 'pratos', idx: 1 },
      { id: 'visite', idx: 3 },
      { id: 'reservas', idx: 4 },
      { id: 'restaurante', idx: 5 }
    ];

    window.addEventListener('scroll', () => {
      if (ignoreScroll || window.innerWidth <= 900) return;
      const pos = window.scrollY + 200;
      for (let i = navSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(navSections[i].id);
        if (el && pos >= el.offsetTop) {
          gooeyNav?.setActive(navSections[i].idx);
          break;
        }
      }
    }, { passive: true });
  }
})();
