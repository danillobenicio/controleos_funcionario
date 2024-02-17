async function consultarEquipamentosSetor() {

    const dados = {
        endpoint: API_CONSULTAR_EQUIPAMENTOS_SETOR,
        setor_id: codigoSetorLogado
    }

    try {
        load()
    } catch (error) {
        console.log(error.message, error)
    }

}