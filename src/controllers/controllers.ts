let todasRespostas = require('../data/cartasDeResposta.json').respostas;

let proximasRespostas = (quantidade=1) => {
  const respostasSelecionadas = todasRespostas.splice(0, quantidade);
  return respostasSelecionadas;
};

exports.getRespostas = async (req, res) => {
  await res.json(proximasRespostas(2))
}
