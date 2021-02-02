addNewRow = (item, parentDiv) => {
  var row = document.createElement('tr');
  var timeid = document.createElement('td');
  var typeid = document.createElement('td');
  var recipientid = document.createElement('td');
  var accountid = document.createElement('td');
  var total = document.createElement('td');

  $(timeid).text(item.timeid);
  $(typeid).text(item.typeid);
  $(recipientid).text(item.recipientid);
  $(accountid).text(item.accountid);
  $(total).text(item.total);

  row.append(timeid);
  row.append(typeid);
  row.append(recipientid);
  row.append(accountid);
  row.append(total);

  parentDiv.append(row);
};

$(document).ready(() => {
  $('#query-btn').on('click', () => {
    
    let timeid = $('#disp-type-select').val();
    console.log(timeid);

    $.post('query1/postQuery1', {timeid: timeid}, (data, status) => {
      let resultsTable = $('#results-table');
      resultsTable.empty();
      
      data.forEach((item, index) => {
        if(item.timeid == null) {
          item.timeid = "null";
        }
        if(item.typeid == null) {
          item.typeid = "null";
        }
        if(item.recipientid == null) {
          item.recipientid = "null";
        }
        if(item.accountid == null) {
          item.accountid = "null";
        }
        addNewRow(item, resultsTable);
      });
    });
  });
});