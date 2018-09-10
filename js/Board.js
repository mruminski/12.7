var board = {
  name: "Tablica Kanban",
  addColumn: function(column) {
    this.element.appendChild(column.element);
    initSortable(column.id);
  },
  element: document.querySelector("#board .column-container")
};

document
  .querySelector("#board .create-column")
  .addEventListener("click", function() {
    var name = prompt("Enter a column name");
    var data = FormData();

    data.append('name',name);

    fetch(baseUrl +'/column', {
      method: 'POST',
      headers: myHeaders,
      body: data,
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      var col = new column(response.id, name);
      board.addColumn(col);
    });
  });

function initSortable(id) {
  var el = document.getElementById(id);
  var sortable = Sortable.create(el, {
    group: "kanban",
    sort: true
  });
}
