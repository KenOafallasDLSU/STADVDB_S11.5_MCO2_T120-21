addRecordRow = (item, parentDiv) => {
    var row = document.createElement('tr');

    var month = document.createElement('td');
    var quarter = document.createElement('td');
    var year = document.createElement('td');
    var transactions = document.createElement('td');
    var total = document.createElement('td');
    
    $(month).text(`${item.month}`)
    $(quarter).text(`${item.quarter}`);
    $(year).text(`${item.year}`);
    $(transactions).text(`${item.transactions}`);
    $(total).text(`${item.total}`);

    row.append(month);
    row.append(quarter);
    row.append(year);
    row.append(transactions);
    row.append(total);
    parentDiv.append(row);
}

$(document).ready(() => {
    $('#btnSubmit').on('click', () => {
        let accountID = $('#accountID').val();

        $.post('query2/postQuery2', {accountID: accountID}, (data, status) => {
            console.log(data);

            let resultTable = $('#resultRecords');
            resultTable.empty(); // clear table data

            if (data.length === 0) {
                addRecordRow({month: 'N/A', quarter: 'N/A', year:'N/A', count: '0', total: '0'}, resultTable);
            }
            else {
                data.forEach((item, i) => {
                    if(item.year === null) {
                        item.year = ' ';
                    }
                    if(item.month === null) {
                        item.month = ' ';
                    }
                    if(item.quarter === null) {
                        item.quarter = ' ';
                    }
                    console.log(item);
                    
                    
                    addRecordRow(item, resultTable);
                });
            }
        });
    });
})
