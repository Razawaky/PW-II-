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

    var total = 0

    $('.btn-outline-success').click(function(e) {
        e.preventDefault()

        var qtde = prompt($(this).attr('data-nome')+"\nValor R$ "+$(this).attr('data-valor')+"\nInforme a quantidade desejada:" )


        let subtotal = parseFloat(qtde)* parseFloat($(this).attr('data-valor'))

        total += subtotal

        console.log(total)

        $('#resumo').append( `
        <tr>
            <td>${ $(this).attr('data-nome')}</td>
            <td class="text-center">${qtde}</td>
            <td class="text-center">${parseFloat($(this).attr('data-valor')).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</td>
            <td class="text-center">${parseFloat(subtotal).toLocaleString("pt-BR",{style: "currency", currency: "BRL"})}</td>
        </tr>
        `)

        $('#vlrTotal').empty()
        $('#vlrTotal').append(total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"} ))
    })

    //Criar a função de limpar o pedido
    $('.btn-clean').click(function (e) {
        e.preventDefault()
        $('#resumo').empty()
        $('#vlrTotal').empty()
        $('#vlrTotal').append('R$ 00,00')
    })
})