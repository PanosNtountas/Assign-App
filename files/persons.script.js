$(document).ready(function(){
    $('.row-1').on('click', '.btnSubmit', function(){
        let firstname = $('#firstname').val();
        let lastname = $('#lastname').val();
        let category = $('#category').val();
        let personID = $('#personID').val();

        console.log(firstname, lastname, category, personID);

        const item = {
            'firstname': firstname,
            'lastname': lastname,
            'category': category,
            'personID': personID
        }
        console.log(item);

        $.ajax({
            url: "http://localhost:5500/api/persons",
            type: "post",
            data: item,
            dataType: "JSON"
        })
        .done(function(response){console.log(response);})
    })

    
    $('.row-2').on('click', '.btnDelete', function(){
        let personID = $('#personID-2').val();

        const item = {'personID': personID}

        console.log(personID)
        $.ajax({
            url: 'http://localhost:5500/api/persons/' + personID,
            type: "delete",
            data: item,
            dataType: "JSON"
        })
        .done(function(response){console.log(response);})
    })
})