var objetivo = []
const letras = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

let palavra = "";
let indice = 0;

const palavras = [
    "liberdade", "igualdade", "solidariedade", "resistência", "democracia",
    "direitos", "justiça", "diversidade", "tolerância", "respeito", "empatia",
    "humanidade", "fraternidade", "participação", "inclusão", "educação",
    "transparência", "diálogo", "equidade", "antirracismo", "paz", "compaixão",
    "responsabilidade", "cidadania", "pluralismo", "dignidade", "amor", "altruísmo",
    "sustentabilidade", "proteção", "acolhimento", "compromisso", "coragem", 
    "resiliência", "reconciliação", "integração"
];

const dicas = [
    "Essencial para combater regimes fascistas.",
    "Fundamental para resistir à supremacia fascista.",
    "Fortalece a luta contra a opressão fascista.",
    "Necessária para enfrentar a tirania fascista.",
    "Pilar para derrotar o fascismo.",
    "Devem ser protegidos contra o fascismo.",
    "Base para combater a injustiça fascista.",
    "Enfrenta a homogeneidade imposta pelo fascismo.",
    "Vital para resistir à intolerância fascista.",
    "Contrapõe a desumanização fascista.",
    "Combate a brutalidade do fascismo.",
    "Reconhecimento contra a desumanização fascista.",
    "Promove a união contra o fascismo.",
    "Essencial para resistir ao controle fascista.",
    "Garante que todos sejam protegidos do fascismo.",
    "Chave para desmantelar a ideologia fascista.",
    "Essencial para expor os crimes fascistas.",
    "Facilita a resistência pacífica ao fascismo.",
    "Assegura justiça contra a discriminação fascista.",
    "Combate a discriminação racial fascista.",
    "Objetivo final ao derrotar o fascismo.",
    "Resiste à crueldade fascista.",
    "Crucial para confrontar a injustiça fascista.",
    "Fortalece a comunidade contra o fascismo.",
    "Celebra a diversidade contra o fascismo.",
    "Um direito que o fascismo nega.",
    "Força para combater o ódio fascista.",
    "Ajuda os outros a resistirem ao fascismo.",
    "Preserva o planeta contra a destruição fascista.",
    "Defesa dos vulneráveis contra o fascismo.",
    "Integra todos, mesmo sob ameaça fascista.",
    "Essencial para defender os direitos humanos.",
    "Necessária para enfrentar o fascismo.",
    "Ajuda a superar a opressão fascista.",
    "Cura a sociedade após a queda do fascismo.",
    "Garante participação ativa contra a exclusão fascista."
];

var forca = document.getElementById('forca')
var vidas = document.getElementById('vidas')
var btndica = document.getElementById('dica')
var estadoDica = 0
var palavraCorreta = ""
let erros = 5 
let acertos = 0 

function Forca() {
    if (erros === 4) {
        vidas.style.color = '#22B14C'
        forca.style.color = '#22B14C'
        forca.innerHTML = "<pre>  _______ <br> |/      | <br> |      (_) <br> |             <br> |             <br> |            </pre>";
    } else if (erros === 3) {
        vidas.style.color = '#B5E61D'
        forca.style.color = '#B5E61D'
        forca.innerHTML = "<pre>  _______ <br> |/      | <br> |      (_) <br> |      \\|/   <br> |             <br> |            </pre>";
    } else if (erros === 2) {
        vidas.style.color = '#E0D500'
        forca.style.color = '#E0D500'
        forca.innerHTML = "<pre>  _______ <br> |/      | <br> |      (_) <br> |      \\|/   <br> |       |      <br> |            </pre>";
    } else if (erros === 1) {
        vidas.style.color = '#FF7F27'
        forca.style.color = '#FF7F27'
        forca.innerHTML = "<pre>  _______ <br> |/      | <br> |      (_) <br> |      \\|/   <br> |       |      <br> |      / \\     </pre>";
    } else if (erros === 0) {
        vidas.style.color = '#ED1C24'
        forca.style.color = '#ED1C24'
        forca.innerHTML = "<pre>  _______ <br> |/      | <br> |      X_X <br> |      \\|/   <br> |       |      <br> |      / \\     </pre>";
    }
}

function sortearPalavra() {
    forca.style.color = '#00A2E8'
    vidas.style.color = '#00A2E8'
    forca.innerHTML = '<pre>  ___ <br> |/      | <br> |         <br> |             <br> |             <br> |        '
    const palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)]
    indice = palavras.indexOf(palavraSorteada);
    palavra = palavraSorteada
    
    atualizarObjetivo()
}

function reiniciarJogo() {
    forca.style.color = '#00A2E8'
    vidas.style.color = '#00A2E8'
    let dica = document.getElementById('divDica')
    dica.innerHTML = ''
    estadoDica = 0
    btndica.disabled = false
    btndica.classList.add('hover:bg-gray-700')
    btndica.classList.remove('bg-slate-300')
    objetivo = []
    erros = 5
    acertos = 0
    forca.innerHTML = '<pre>  ___ <br> |/      | <br> |         <br> |             <br> |             <br> |        '
    document.getElementById('erros').innerHTML = erros
    var palavraDiv = document.getElementById('palavra')
    palavraDiv.innerHTML = ''
    Array.from(document.getElementById('botoes').getElementsByTagName('button')).forEach((btn) => {
        btn.disabled = false
        btn.classList.remove('bg-slate-300')
        btn.classList.add('hover:bg-cyan-600')
        btn.classList.remove('erro', 'acerto');  // Remove as classes de estilo
    })
    desabilitarBotoes()
}

function desabilitarBotoes() {
    const dica = document.getElementById('dica')
    dica.disabled = true
    const botoes = document.getElementById('botoes')
    Array.from(botoes.getElementsByTagName('button')).forEach((btn) => {
        btn.disabled = true
        btn.classList.remove('hover:bg-cyan-600')
        btn.classList.add('bg-slate-300')
    })
}

function habilitarBotoes() {
    estadoDica = 0
    btndica.disabled = false
    btndica.classList.add('hover:bg-gray-700')
    btndica.classList.remove('bg-slate-300')
    const botoes = document.getElementById('botoes')
    Array.from(botoes.getElementsByTagName('button')).forEach((btn) => {
        btn.disabled = false
        btn.classList.remove('bg-slate-300')
        btn.classList.add('hover:bg-cyan-600')
    })
}

function atualizarObjetivo() {
    forca.style.color = '#00A2E8'
    vidas.style.color = '#00A2E8'
    forca.innerHTML = '<pre>  ___ <br> |/      | <br> |         <br> |             <br> |             <br> |        '
    habilitarBotoes()
    erros = 5
    document.getElementById('erros').innerHTML = erros
    objetivo = palavra.toUpperCase().split('')
    palavraCorreta = objetivo.join('')
    var palavraDiv = document.getElementById('palavra')
    palavraDiv.innerHTML = ''
    let dica = document.getElementById('divDica')
    dica.innerHTML = ''

    objetivo.forEach((_, idx) => {
        const letra = document.createElement('DIV')
        letra.setAttribute('class', 'letra')
        letra.setAttribute('id', `letra${idx}`)
        letra.classList.add('p-5', 'text-center', 'text-4xl', 'flex', 'items-center', 'justify-center', 'border-dashed', 'border-2', 'border-black', 'w-12', 'h-12')
        palavraDiv.appendChild(letra)
    })
}

function Dica() {
    let dica = document.getElementById('divDica');
    dica.innerHTML = dicas[indice]
}

const verificaFimJogo = () => {
    document.getElementById('erros').innerHTML = erros
    if (objetivo.length === 0) {
        desabilitarBotoes()
        return 
    }

    if (erros === 0) {
        alert('Você errou, a palavra era: ' + palavraCorreta)
        setTimeout(function () {
            reiniciarJogo()
            desabilitarBotoes()
        }, 1000)
    }

    if (acertos === objetivo.length) {
        alert('Você acertou! Parabéns')
        setTimeout(function () {
            reiniciarJogo()
            desabilitarBotoes()
        }, 1000)
    }
}

function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const jogada = (btn) => {
    const l = btn.innerHTML;
    const letraNormalizada = removerAcentos(l);  
    const objetivoNormalizado = objetivo.map(removerAcentos);  

    if (objetivoNormalizado.every((letra) => letra !== letraNormalizada)) {
        erros = erros - 1;
        btn.classList.add('erro');
    } else {
        btn.classList.add('acerto');
        for (let i = 0; i < objetivo.length; i++) {
            if (letraNormalizada === removerAcentos(objetivo[i])) {
                document.getElementById('letra' + i).innerHTML = objetivo[i];  
                acertos++;
            }
        }
    }
    btn.disabled = true;
    btn.classList.remove('hover:bg-cyan-600');
    btn.classList.add('bg-slate-300');
    Forca();
    verificaFimJogo();
}

const botoes = document.getElementById('botoes');
letras.forEach((l, indice) => {
    if (indice === 10 || indice === 19) {
        const br = document.createElement('BR');
        botoes.appendChild(br);
    }
    const btn = document.createElement('BUTTON');
    btn.setAttribute('type', 'button');
    btn.innerHTML = l;
    btn.addEventListener('click', () => {
        jogada(btn);
    });
    botoes.appendChild(btn);
    desabilitarBotoes();
});

document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    const btn = Array.from(botoes.getElementsByTagName('button')).find(button => button.innerHTML === key);
    if (btn && !btn.disabled) {
        jogada(btn);
    }
});
