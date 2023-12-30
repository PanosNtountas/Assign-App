$(document).ready(function(){

    $.ajax({
        url: 'http://localhost:5500/api/jobs',
        type: "get",
        dataType: "JSON"
    })
    .done(function(response){console.log(response);

        let data = response.data;
        let status = response.status;
        if(status) {
            const len = data.length
            for(let i=0; i<len; i++){
                let jobname = data[i].name;
                let tr_th = "<th>"+ jobname + "</th>";
                $('#assignTable thead tr').append(tr_th);
            }
        } else{console.log('Problem in finding jobs')};
        
    })
});