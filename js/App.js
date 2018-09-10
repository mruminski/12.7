var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '3458',
  'X-Auth-Token': '62cb0bb312dfe8d534639ecd7cfdd405',
  'Content-Type': 'application/json; charset=utf-8'
};

fetch(baseUrl +'/board', { headers: myHeaders })
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    setupColums(response.columns);
  });

function setupColums(columns) {
  Array.prototype.forEach.call(columns, function(column) {
    var col = new Column(column.id, column.name);
    board.addColumn(col);
    setupCards(col, column.cards);
  });
}

function setupCards(col, cards) {
  Array.prototype.forEach.call(cards, function(card) {
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

var todoColumn = new Column("Do zrobienia");
var doingColumn = new Column("W trakcie");
var doneColumn = new Column("Skończone");

board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

var card1 = new Card("Nowe zadanie");
var card2 = new Card("stworzyc tablice kanban");

todoColumn.addCard(card1);
doingColumn.addCard(card2);
