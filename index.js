const perguntas = [
    {
      pergunta: "Por que o umbigo é como um buraco?",
      respostas: [
        "Porque pode ser profundo e misterioso",
        "Porque sempre está faminto",
        "Porque é o centro de tudo",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a semelhança entre o cotovelo e um buraco?",
      respostas: [
        "Ambos podem ser usados para se apoiar",
        "Ambos são redondos e profundos",
        "Ambos podem ser usados como esconderijo secreto",
      ],
      correta: 0,
    },
    {
      pergunta: "Por que o nariz é como um buraco?",
      respostas: [
        "Porque pode ficar entupido",
        "Porque é profundo como um abismo",
        "Porque é o ponto central da face",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a diferença entre a boca e um buraco?",
      respostas: [
        "Um é para comer, o outro é para falar",
        "Um pode sorrir, o outro apenas engole",
        "Não há diferença, ambos são fontes de palavras vazias",
      ],
      correta: 2,
    },
    {
      pergunta: "Por que a orelha é como um buraco?",
      respostas: [
        "Porque pode ouvir segredos profundos",
        "Porque pode ser usada como túnel para a mente",
        "Porque é uma cavidade na cabeça",
      ],
      correta: 2,
    },
    {
      pergunta: "O que os pés e um buraco têm em comum?",
      respostas: [
        "Ambos podem te levar a lugares distantes",
        "Ambos podem ficar sujos facilmente",
        "Ambos são fontes de mistério",
      ],
      correta: 0,
    },
    {
      pergunta: "Por que as axilas são como buracos?",
      respostas: [
        "Porque podem ser escuros e misteriosos",
        "Porque são o ponto de encontro do suor",
        "Porque são cavidades escondidas",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a semelhança entre o joelho e um buraco?",
      respostas: [
        "Ambos podem ser usados para se abaixar",
        "Ambos podem ser profundos",
        "Ambos podem ser doloridos quando batidos",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é a semelhança entre o joelho e um buraco?",
      respostas: [
        "Ambos podem ser usados para se abaixar",
        "Ambos podem ser profundos",
        "Ambos podem ser doloridos quando batidos",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é a semelhança entre o joelho e um buraco?",
      respostas: [
        "Ambos podem ser usados para se abaixar",
        "Ambos podem ser profundos",
        "Ambos podem ser doloridos quando batidos",
      ],
      correta: 2,
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas =  new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal =  document.querySelector('#acertos span')
  mostrarTotal.textContent =  corretas.size + ' de ' + totalDePerguntas
  
  
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true) 
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt= quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
    corretas.delete(item)
    if (estaCorreta) {
      corretas.add(item)
    }
    mostrarTotal.textContent =  corretas.size + ' de ' + totalDePerguntas
  }
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  quiz.appendChild(quizItem)
  }