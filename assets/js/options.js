const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        "enunciado": "Por que é importante definir metas claras para o ano de 2025?",
        "alternativas": [
          {
            "texto": "Metas claras ajudam a manter o foco e a motivação durante o ano.",
            "afirmacao": "Quando você sabe exatamente o que quer alcançar, é mais fácil organizar seu tempo, medir progresso e manter o comprometimento com seus objetivos."
          },
          {
            "texto": "Ter objetivos definidos reduz a sensação de estar perdido ou improdutivo.",
            "afirmacao": "Metas bem estabelecidas dão propósito à rotina, evitando que o tempo seja desperdiçado com tarefas aleatórias e sem direcionamento."
          }
        ]
      },
      {
        "enunciado": "Quais são estratégias eficazes para alcançar metas como aprender a programar ou estudar para vestibulares como o da UEL?",
        "alternativas": [
          {
            "texto": "Criar um cronograma realista e consistente de estudos ou prática diária.",
            "afirmacao": "Dividir a meta em pequenas tarefas diárias ajuda a manter o ritmo e evita a procrastinação, promovendo um progresso contínuo e sustentável."
          },
          {
            "texto": "Buscar apoio em comunidades online e materiais de qualidade.",
            "afirmacao": "Participar de grupos de estudo ou fóruns e utilizar bons recursos educacionais pode acelerar o aprendizado e manter você engajado com seus objetivos."
          }
        ]
      },
      {
        "enunciado": "Como lidar com a frustração quando as metas parecem difíceis de alcançar?",
        "alternativas": [
          {
            "texto": "Reavaliar o plano e ajustar as metas conforme necessário.",
            "afirmacao": "É normal ter que mudar de rota ao longo do caminho. A flexibilidade permite adaptar estratégias sem abandonar o objetivo principal."
          },
          {
            "texto": "Celebrar pequenas conquistas ao longo do caminho para manter a motivação.",
            "afirmacao": "Reconhecer o progresso, mesmo que pequeno, ajuda a manter o ânimo e reforça a ideia de que você está avançando na direção certa."
          }
        ]
      },
      {
        "enunciado": "Quais hábitos podem impulsionar o sucesso nas metas de 2025?",
        "alternativas": [
          {
            "texto": "Estabelecer uma rotina diária com horários definidos para estudar ou praticar.",
            "afirmacao": "A disciplina é essencial para construir resultados consistentes ao longo do tempo e evitar a desorganização."
          },
          {
            "texto": "Manter uma mentalidade positiva e resiliente diante de desafios.",
            "afirmacao": "A forma como você reage a obstáculos pode determinar seu sucesso — uma atitude positiva e persistente é chave para continuar tentando."
          }
        ]
      },
      {
        "enunciado": "Como o uso da tecnologia pode ajudar a atingir metas como aprender a programar ou passar em vestibulares?",
        "alternativas": [
          {
            "texto": "Plataformas digitais oferecem cursos acessíveis e de qualidade.",
            "afirmacao": "Sites como YouTube, Coursera, Khan Academy e outros permitem aprender no seu ritmo, com materiais atualizados e bem estruturados."
          },
          {
            "texto": "Aplicativos de organização e foco ajudam a manter a produtividade.",
            "afirmacao": "Apps como Trello, Notion ou Pomodoro Timers ajudam a gerenciar tarefas e manter o foco nas metas estabelecidas para o dia."
          }
        ]
      }
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Como está sua saúde mental hoje...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "A saúde mental e emocional é fundamental para o bem-estar geral, impactando todas as áreas da vida, desde o trabalho e os estudos até as relações interpessoais. Entender o que influencia a saúde mental e as formas de mantê-la em equilíbrio é essencial para promover uma vida mais plena e saudável. A sociedade também desempenha um papel importante ao criar um ambiente de apoio e compreensão, incentivando o cuidado com a saúde mental e emocional como uma prioridade. Ao refletir sobre essas questões, é possível reconhecer a importância de cuidar da mente tanto quanto do corpo, buscando equilíbrio e bem-estar em todas as esferas da vida.";
}

mostraPergunta();