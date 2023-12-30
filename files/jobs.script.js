$(document).ready(function(){
    $('.row-3').on('click', '.btnSubmit-3', function(){
        let name = $('#name').val();
        let category = $('#category-3').val();

        console.log(name, category);

        const item = {
            'name': name,
            'category': category
        }
        console.log(item);

        $.ajax({
            url: "http://localhost:5500/api/jobs",
            type: "post",
            data: item,
            dataType: "JSON"
        })
        .done(function(response){console.log(response);})
    })
    $('.row-4').on('click', '.btnDelete-2', function(){
        let name = $('#name-1').val();

        const item = {'name': name}

        console.log(name)
        $.ajax({
            url: 'http://localhost:5500/api/jobs/' + name,
            type: "delete",
            data: item,
            dataType: "JSON"
        })
        .done(function(response){console.log(response);})
    })
})