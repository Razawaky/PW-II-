$(document).ready(function() {
                                    //selecionar todos os buttons e monitorar os clicks
    $('.btn-info').click(function(e){  //$ simplificação do getElementBy por causa do Jquery. Jquery tem que ler toda a documentação
        e.preventDefault() //Serve para controlar e gerenciar uma funcionaliade HTML (Uma função do Jquery)
        
        //capturar o ID do button clicado
        foto = $(this).attr('data-foto')
        pedido = $(this).attr('data-id')

        switch(foto) {
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
        }  


    })

    $('.btn-outline-success').click(function(e) {
        e.preventDefault()

        var qtde = prompt($(this).attr('data-nome')+"\nValor R$ "+$(this).attr('data-valor')+"\nInforme a quantidade desejada:" )

        $('#resumo').append( `
        <tr>
            <td>${ $(this).attr('data-nome')}</td>
            <td class="text-center">${qtde}</td>
            <td class="text-center">Valor Unitário</td>
            <td class="text-center">Valor Total</td>
        </tr>
        `)
    })
})