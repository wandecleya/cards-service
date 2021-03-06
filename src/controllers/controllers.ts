const todasRespostas = require('../data/cartasDeResposta.json').respostas;
let respostasNoDeck = [];
const embaralhar = () => {
  respostasNoDeck = [ ...todasRespostas ];
};
let respostasEscolhidas = [];

let proximasRespostas = (quantidade=1) => {
  if(respostasNoDeck.length < quantidade) {
    embaralhar();
  }
  const respostasSelecionadas = respostasNoDeck.splice(0, quantidade);
  return respostasSelecionadas;
};

exports.getRespostas = async (req, res) => {
  const quantidade = req.query.quantidade
  await res.json(proximasRespostas(quantidade))
}

exports.getEscolhidas = async (req, res) => {
  await res.json(respostasEscolhidas);
}

exports.postEscolher = async (req, res) => {
  const resposta = await req.body;
  respostasEscolhidas.push(resposta);
  res.json({});
}

exports.deleteEscolhidas = async (req, res) => {
  respostasEscolhidas=[];
}

exports.deleteRespostas = async (req, res) => {
  embaralhar();
}




