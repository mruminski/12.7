var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '3458',
  'X-Auth-Token': '62cb0bb312dfe8d534639ecd7cfdd405',
  'Content-Type': 'application/json; charset=utf-8'
};
var prefix = "https://cors-anywhere.herokuapp.com/";

fetch(prefix + baseUrl +'/board', { headers: myHeaders })
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    setupColums(response.columns);
  });

function setupColums(columns) {
  columns.forEach(function(column) {
    var col = new Column(column.id, column.name);
    board.addColumn(col);
    setupCards(col, column.cards);
  });
}

function setupCards(col, cards) {
  cards.forEach(function(card) {
    var cardEl = new Card(card.id, card.name);
    col.addCard(cardEl);
  })
}

function generateTemplate(name, data, basicElement) {
  var template = document.getElementById(name).innerHTML;
  var element = document.createElement(basicElement || "div");

  Mustache.parse(template);
  element.innerHTML = Mustache.render(template, data);

  return element;
}
