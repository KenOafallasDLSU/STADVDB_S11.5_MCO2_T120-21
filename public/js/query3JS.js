addRecordRow = (item, parentDiv) => {
    var row = document.createElement('tr');

    var year = document.createElement('td');
    var quarter = document.createElement('td');
    var characterization = document.createElement('td');
    var count = document.createElement('td');
    
    $(characterization).text(`${item.Characterization}`);
    $(year).text(`${item.Year}`);
    $(quarter).text(`${item.Quarter}`);
    $(count).text(`${item.Count}`);

    row.append(year);
    row.append(quarter);
    row.append(characterization);
    row.append(count);
    
    parentDiv.append(row);
}

$(document).ready(() => {
    $('#btnSubmit').on('click', () => {
        let year = $('#yearSelect option:selected').text();

        console.log(`year: ${year}`);

        $.post('query3view/postQuery3', {year: year}, (data, status) => {
            console.log(data);

            let resultTable = $('#resultRecords');
            resultTable.empty(); // clear table data

            if (data.length === 0) {
                addRecordRow({year: 'N/A', quarter: 'N/A', characterization:'N/A', count: '0'}, resultTable);
            }
            else {
                data.forEach((item, i) => {
                    console.log(item);
                    
                    //populate table
                    $('#year').text(`Selected Year: ${$('#year option:selected').text()}`);
                    
                    addRecordRow(item, resultTable);
                });
            }
        });
    });
})
