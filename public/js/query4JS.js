addRecordRow = (item, parentDiv) => {
    var row = document.createElement('tr');

    var district = document.createElement('td');
    var characterization = document.createElement('td');
    var year = document.createElement('td');
    var quarter = document.createElement('td');
    var sum = document.createElement('td');
    
    $(district).text(`${item.District}`)
    $(characterization).text(`${item.Characterization}`);
    $(year).text(`${item.Year}`);
    $(quarter).text(`${item.Quarter}`);
    $(sum).text(`${item.Sum}`);

    row.append(district);
    row.append(characterization);
    row.append(year);
    row.append(quarter);
    row.append(sum);
    
    parentDiv.append(row);
}

$(document).ready(() => {
    $('#btnSubmit').on('click', () => {
        let district1 = $('#districtSelect1 option:selected').text();
        let ksymbol1 = $('#kSymbolSelect1 option:selected').text();

        console.log(`district1: ${district1}`);
        console.log(`ksymbol1: ${ksymbol1}`);

        $.post('query4view/postQuery4', {district1: district1,  ksymbol1: ksymbol1}, (data, status) => {
            console.log(data);

            let resultTable = $('#resultRecords');
            resultTable.empty(); // clear table data

            if (data.length === 0) {
                addRecordRow({district: 'N/A', characterization: 'N/A', year:'0', quarter: '0', sum: '0'}, resultTable);
            }
            else {
                data.forEach((item, i) => {
                    console.log(item);
                    
                    //populate table
                    $('#dis1').text(`Selected District: ${$('#districtSelect1 option:selected').text()}`);
                    $('#ksym1').text(`Selected Characterization: ${$('#kSymbolSelect1 option:selected').text()}`);
                    
                    addRecordRow(item, resultTable);
                });
            }
        });
    });
})
