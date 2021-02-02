addRecordRow = (item, parentDiv) => {
    var row = document.createElement('tr');

    var district = document.createElement('td');
    var characterization = document.createElement('td');
    var quarter = document.createElement('td');
    var sum = document.createElement('td');
    
    $(district).text(`${item.District}`)
    $(characterization).text(`${item.Characterization}`);
    $(quarter).text(`${item.Quarter}`);
    $(sum).text(`${item.Sum}`);

    row.append(district);
    row.append(characterization);
    row.append(quarter);
    row.append(sum);
    
    parentDiv.append(row);
}

$(document).ready(() => {
    $('#btnSubmit').on('click', () => {
        let district1 = $('#districtSelect1 option:selected').text();
        let ksymbol1 = $('#kSymbolSelect1 option:selected').text();
        let quarter1 = $('#quarterSelect1 option:selected').text();
        
        let district2 = $('#districtSelect2 option:selected').text();
        let ksymbol2 = $('#kSymbolSelect2 option:selected').text();
        let quarter2 = $('#quarterSelect2 option:selected').text();

        console.log(`district1: ${district1}`);
        console.log(`ksymbol1: ${ksymbol1}`);
        console.log(`quarter1: ${quarter1}`);

        console.log(`district2: ${district2}`);
        console.log(`ksymbol2: ${ksymbol2}`);
        console.log(`quarter2: ${quarter2}`);


        $.post('query4view/postQuery4', {district1: district1, district2: district2, ksymbol1: ksymbol1, ksymbol2: ksymbol2, quarter1: quarter1, quarter2: quarter2}, (data, status) => {
            console.log(data);

            let resultTable = $('#resultRecords');
            resultTable.empty(); // clear table data

            if (data.length === 0) {
                addRecordRow({district: 'N/A', characterization: 'N/A', quarter: '0', sum: '0'}, resultTable);
            }
            else {
                data.forEach((item, i) => {
                    console.log(item);
                    
                    //populate table
                    $('#dis1').text(`1st District: ${$('#districtSelect1 option:selected').text()}`);
                    $('#ksym1').text(`Characterization No. 1: ${$('#kSymbolSelect1 option:selected').text()}`);
                    $('#quar1').text(`Quarter No. 1: ${$('#quarterSelect1 option:selected').text()}`);

                    $('#dis2').text(`2nd District: ${$('#districtSelect2 option:selected').text()}`);
                    $('#ksym2').text(`Characterization No. 2: ${$('#kSymbolSelect2 option:selected').text()}`);
                    $('#quar2').text(`Quarter No. 2: ${$('#quarterSelect2 option:selected').text()}`);
                    
                    addRecordRow(item, resultTable);
                });
            }
        });
    });
})
