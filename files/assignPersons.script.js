$(document).ready(function(){

    $.ajax({
        url: 'http://localhost:5500/api/persons',
        type: "get",
        dataType: "JSON"
    })
    .done(function(response){
        console.log(response);

        let data = response.data;
        let status = response.status;
        if(status) {
            let persons = data.map(function(obj){
                return {firstname: obj.firstname, lastname: obj.lastname}
            });

            let copiedPersons = JSON.parse(JSON.stringify(persons));
            console.log('length' + copiedPersons.length)
            function getRandomAndRemove(array){
                let randomIndex = Math.floor(Math.random() * array.length);
                let removedObject = array.splice(randomIndex, 1)[0];
                return removedObject;
            }

            for(let i = 0; i < copiedPersons.length^2; i++){
                let randomObject = getRandomAndRemove(copiedPersons);
                let tr_td = "<td>"+ randomObject.firstname + " "+ randomObject.lastname + "</td>";
                $('#assignTable tbody tr').append(tr_td);
            }
        } else{console.log('Problem in finding persons')};

        
    })
});