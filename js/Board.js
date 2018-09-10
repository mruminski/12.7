var board = {
  name: "Tablica Kanban",
  addColumn: function(column) {
    this.element.appendChild(column.element);
  },
  element: document.querySelector("#board .column-container")
};

document
  .querySelector("#board .create-column")
  .addEventListener("click", function() {
    var name = prompt("Enter a column name");
    var data = new FormData();

    data.append('name',name);

    fetch(prefix + baseUrl +'/column', {
      method: 'POST',
      headers: myHeaders,
      body: data,
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      var col = new Column(response.id, name);
      board.addColumn(col);
    });
  });
