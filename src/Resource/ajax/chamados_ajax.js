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

            result = objDados.RESULT;

            if (result == 1) {
                mostrarMensagemCustomizada(MSG_SUCESSO_CHAMADO_ABERTO, TOASTRSUCCESS);
                
            } else {
                mostrarMensagemCustomizada(MSG_ERRO, TOASTRERROR);
            }

        } catch (error) {
            mostrarMensagemCustomizada(error.message, TOASTRERROR);
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

        if (chamados.length === 0){
            mostrarMensagemCustomizada(MSG_DADOS_NAO_ENCONTRADOS, TOASTRWARNING);
            return;
        }

        const tab_result = document.getElementById('table_result');

        if (objDados.RESULT == NAO_AUTORIZADO) {
            Sair();
            return;
        } 
       
        let tab_content = '<thead>' +
                                '<tr>' +
                                    '<th>Data Abertura</th>'+
                                    '<th>Aberto Por</th>'+
                                    '<th>Equipamento</th>'+
                                    '<th>Problema</th>'+
                                    '<th>Situação</th>'+
                                    '<th>Ação</th>'+
                                '</tr>' +
                          '</thead>' +
                          '<tbody>';

    
        chamados.forEach((item) => {

            if (item.data_atendimento == null) {
                situacao = SITUACAO_AGUARDANDO;
            } else if (item.data_encerramento != null) {
                situacao = SITUACAO_ENCERRADA;
            }else if (item.data_atendimento != null && item.data_encerramento == null) {
                situacao = SITUACAO_EM_ATENDIMENTO;
            }

            //situacao = verificarSituacao(item.data_atendimento, item.data_encerramento);
            tab_content += '<tr>' +
                            '<td>'+ item.data_abertura + '</td>' +
                            '<td>'+ item.funcionario + '</td>' +
                            '<td>'+ item.nome_tipo + ' | ' + item.nome_modelo + ' | ' + item.identificacao + '</td>' +
                            '<td>'+ item.problema + '</td>' +
                            '<td>'+ situacao + '</td>' +
                            '<td>';
                                if (item.fk_id_tecnico_atendimento != null) {
                                    tab_content += '<a href="" class="btn btn-warning btn-sm" data-toggle="modal" data-target="#modal_detalhes" onclick="detalharChamado(' + item.id_chamado + ')">Detalhes</a>';
                                }                                                             
            tab_content +=  '</td>'
                        '</tr>';
        });

        tab_content += '</tbody>';
        tab_result.innerHTML = tab_content;
        mostrarElemento("resultado", true);
        
    } catch (error) {
        mostrarMensagemCustomizada(error.message);
    } finally {
        removerLoad();
    }
}




async function detalharChamado(id) {

   
        const dados = {
            endpoint: API_DETALHAR_CHAMADO,
            id: id
        }
    
    
    try {
        load();
        const response = await fetch(Base_Url_Api(), {
            method: 'POST',
            headers: headerComAutenticacao(),
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            throw new Error(MSG_ERRO_CALL_API, TOASTRERROR);
        }

        const objDados = await response.json();

        const chamado = objDados.RESULT;
        console.log(chamado);

        if (objDados.RESULT == NAO_AUTORIZADO) {
            Sair();
            return;
        }

        document.getElementById("equipamento").textContent = chamado.nome_tipo + " " + chamado.nome_modelo + " " + chamado.identificacao;
        document.getElementById("data_abertura").textContent = chamado.data_abertura;
        document.getElementById("problema").textContent = chamado.problema;
        document.getElementById("id_chamado").value = chamado.id_chamado;
        document.getElementById("data_atendimento").textContent = chamado.data_atendimento;
        document.getElementById("tec_atendimento").textContent = chamado.tecnico_atendimento;
        document.getElementById("id_alocar").value = chamado.fk_id_alocar;
        
        document.getElementById("encerramento").textContent = chamado.data_encerramento;
        document.getElementById("tec_encerramento").textContent = chamado.tecnico_encerramento;
        document.getElementById("laudo").textContent = chamado.laudo;
            
        //const situacao_atual = verificarSituacao(chamado.data_atendimento, chamado.data_encerramento);
    
        if (chamado.data_atendimento == null) {
            situacao_atual = SITUACAO_AGUARDANDO;
            $("#dadosEncerramento").hide();
        } else if (chamado.data_encerramento != null) {
            situacao_atual = SITUACAO_ENCERRADA;
            $("#dadosEncerramento").show();
        }else if (chamado.data_atendimento != null && chamado.data_encerramento == null) {
            situacao_atual = SITUACAO_EM_ATENDIMENTO;
            $("#dadosEncerramento").hide();
        }

        switch (situacao_atual) {
            case SITUACAO_AGUARDANDO:
                mostrarElemento("tecnicoAtendimento", false);
                mostrarElemento("tecnicoEncerramento", false);
                mostrarElemento("iniciarAtendimento", true);
                mostrarElemento("finalizarAtendimento", false);
                break;
            case SITUACAO_EM_ATENDIMENTO:
                mostrarElemento("tecnicoAtendimento", true);
                mostrarElemento("tecnicoEncerramento", false);
                mostrarElemento("iniciarAtendimento", false);
                mostrarElemento("finalizarAtendimento", true);
          
                break;
    
            case SITUACAO_ENCERRADA:
                mostrarElemento("tecnicoAtendimento", true);
                mostrarElemento("tecnicoEncerramento", true);
                mostrarElemento("iniciarAtendimento", false);
                mostrarElemento("finalizarAtendimento", false);
                document.getElementById("laudo").disabled = true;
                document.getElementById("encerramento").disabled = true;
                document.getElementById("tec_encerramento").disabled = true;
                $("#encerramento").show();
                $("#tec_encerramento").show();
                $("#laudo").show();
                //habilitarCampo("laudo", true);
                break;
        }
        
    } catch (error) {
        mostrarMensagemCustomizada(error.message);
    } finally {
        removerLoad();
    }
}


function verificarSituacao(data_atendimento, data_encerramento) {

    let situacao = "";

    if (data_atendimento == null) {
        situacao = SITUACAO_AGUARDANDO;
    } else if (data_encerramento != null) {
        situacao = SITUACAO_ENCERRADA;
    }else if (data_atendimento != null && data_encerramento == null) {
        situacao = SITUACAO_EM_ATENDIMENTO;
    }

    return situacao;

}