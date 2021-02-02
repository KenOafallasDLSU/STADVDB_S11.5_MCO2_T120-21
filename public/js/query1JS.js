addNewRow = (item, parentDiv) => {
  var row = document.createElement('tr');
  var timeid = document.createElement('td');
  var typeid = document.createElement('td');
  var recipientid = document.createElement('td');
  var accountid = document.createElement('td');
  var total = document.createElement('td');
  var average = document.createElement('td');

  $(timeid).text(item.timeid);
  $(typeid).text(item.typeid);
  $(recipientid).text(item.recipientid);
  $(accountid).text(item.accountid);
  $(total).text(item.total);
  $(average).text(item.average);

  row.append(timeid);
  row.append(typeid);
  row.append(recipientid);
  row.append(accountid);
  row.append(total);
  row.append(average);

  parentDiv.append(row);
};

$(document).ready(() => {
  $('#query-btn').on('click', () => {
    let temp = $('#arbituary-id').text();
    console.log(temp);
    $.post('query1/postQuery1', {temp: temp}, (data, status) => {
      let resultsTable = $('results-table');
      resultsTable.empty();
      
      data.forEach((item, index) => {
        addNewRow(item, resultsTable);
      });
    });
  });
});