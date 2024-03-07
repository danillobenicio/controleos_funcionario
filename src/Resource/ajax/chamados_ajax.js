async function consultarEquipamentosSetor() {

    const dados = {
        endpoint: API_CONSULTAR_EQUIPAMENTOS_SETOR,
        id_setor: codigoSetorLogado()
    }

    try {
        load();
        const response = await fetch(Base_Url_Api(), {
            method: "POST",
            headers: headerComAutenticacao(),
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            throw new Error(MSG_ERRO_CALL_API);        
        }

        const objDados = await response.json();

        const equipamentos = objDados.RESULT;

        const combo_novo_chamado = document.getElementById('novo_chamado');
        combo_novo_chamado.innerHTML = "<option value''>Selecione</option>";

        equipamentos.forEach((item) => {
            const opt = document.createElement('option');
            opt.value = item.id_alocar;
            opt.text = item.tipo + ' | ' + item.nome_modelo + ' | Identificação: ' +  item.identificacao;
            combo_novo_chamado.appendChild(opt); // Estava 'combo_tela'
        });
        

    } catch (error) {
        console.log(error.message, error);
        mostrarMensagemCustomizada(error.message);
    } finally {
        removerLoad();
    }

}

async function abrirChamado(formID) {
    if (await validarCamposAsync(formID)) {

        const dados = {
            endpoint: API_ABRIR_CHAMADO,
            problema: document.getElementById('problema').value,
            id_alocar: document.getElementById('novo_chamado').value,
            id_usuario: codigoLogado()
        }

        console.log(dados);

        try {
            load();

            const response = await fetch(Base_Url_Api(), {
                method: "POST",
                headers: headerComAutenticacao(),
                body: JSON.stringify(dados)
            });

            if (!response.ok) {
                throw new Error(MSG_ERRO_CALL_API);
            }

            const objDados = await response.json();

            if (objDados == 1) {
                mostrarMensagemCustomizada(MSG_SUCESSO);
            } else {
                mostrarMensagemCustomizada(MSG_ERRO);
            }

        } catch (error) {
            mostrarMensagemCustomizada(error.message);
        } finally {
            removerLoad();
        }
    }
}

async function filtrarChamados() {

    mostrarElemento("resultado", false);

    const dados = {
        endpoint: API_FILTRAR_CHAMADOS,
        situacao: document.getElementById('situacao').value,
        id_setor: codigoSetorLogado()
    }

    try {
        load();
        const response = await fetch(Base_Url_Api(), {
            method: 'POST',
            headers: headerComAutenticacao(),
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            throw new Error(MSG_ERRO_CALL_API);
        }

        const objDados = await response.json();
        const chamados = objDados.RESULT;

        const arrayChamados = Object.values(chamados);

        if (chamados.length === 0){
            mostrarMensagemCustomizada('Dados não encontrados');
            return;
        }

        
        const tab_result = document.getElementById('table_result');
        let tab_content = '<thead>' +
                                '<tr>' +
                                    '<th>Data Abertura</th>'+
                                '</tr>' +
                          '</thead>' +
                          '<tbody>';
        let data_tr = '';

        arrayChamados.forEach((item) => {
            console.log(item.data_abertura);
           /* data_tr += '<tr>' +
                            '<td>'+ item.data_abertura + '</td>' +
                        '</tr>';*/
        });

        tab_content += data_tr;
        tab_content += '</tbody>';
        tab_result.innerHTML = tab_content;
        mostrarElemento("resultado", true);
        
    } catch (error) {
        mostrarMensagemCustomizada(error.message);
    } finally {
        removerLoad();
    }
}