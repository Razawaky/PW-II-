$(document).ready(function() {
                                    //selecionar todos os buttons e monitorar os clicks
    $('.btn').click(function(e){  //$ simplificação do getElementBy por causa do Jquery. Jquery tem que ler toda a documentação
        e.preventDefault() //Serve para controlar e gerenciar uma funcionaliade HTML (Uma função do Jquery)
        
        //capturar o ID do button clicado
        var ID = $(this).attr('id')
        console.log(ID)

        switch(ID) {
            case '1':
                $('img').attr('src', 'img/x burguer.png')
            break
            case '2':
                $('img').attr('src', 'img/X-burguer-Png-removebg-preview.png')
            break
            case '3':
                $('img').attr('src', 'img/x-burguer-png-4.png')
            break
            case '4':
                $('img').attr('src', 'img/xbur.png')
            break
            case '5':
                $('img').attr('src', 'img/x burguer.png')
            break
            default: console.log('produto fora de estoque') 
            alert('Produto fora de estoque')
        }  


    })
})