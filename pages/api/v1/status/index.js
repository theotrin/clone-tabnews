function status(request, response){
    response.status(200).json( {mensagem:"sou acima da média"} )
}

export default status