async function detalharMeusDados() {

    try {
        const dados = {
            id_user: codigoLogado(),
            endpoint: API_DETALHAR_USUARIO
        };

        load();

        const response = await fetch(Base_Url_Api(), {
            method: "POST",
            headers: headerComAutenticacao(),
            body: JSON.stringify(dados)
        })

        if (!response.ok) {
            throw new Error(MSG_ERRO_CALL_API);
        }

        const objDados = await response.json();
        const dadosUser = objDados.RESULT;

        if (objDados.RESULT == NAO_AUTORIZADO) {
            Sair();
            return;
        }

        setarCamposValor("nome", dadosUser.nome_usuario);
        setarCamposValor("cpf", dadosUser.cpf_usuario);
        setarCamposValor("email", dadosUser.email_usuario);
        setarCamposValor("telefone", dadosUser.tel_usuario);
        setarCamposValor("setor", dadosUser.nome_setor);
        setarCamposValor("cep", dadosUser.cep);
        setarCamposValor("rua", dadosUser.rua);
        setarCamposValor("cidade", dadosUser.nome_cidade);
        setarCamposValor("estado", dadosUser.sigla);
        setarCamposValor("bairro", dadosUser.bairro);
        setarCamposValor("id_endereco", dadosUser.id_endereco);
        setarCamposValor("id_usuario", dadosUser.id_usuario);
        setarCamposValor("tipo_usuario", dadosUser.tipo_usuario);  

    } catch (error) {
        mostrarMensagemCustomizada(error.message);
    } finally {
        removerLoad();
    }
}

async function alterarMeusDados(formID) {

    if (validarCampos(formID)) {

        const dados = {
            endpoint: API_ALTERAR_DADOS,
            id_user: codigoLogado(),
            setor: codigoSetorLogado(),
            nome: pegarValor("nome"),
            email: pegarValor("email"),
            cpf: pegarValor("cpf"),
            telefone: pegarValor("telefone"),
            rua: pegarValor("rua"),
            bairro: pegarValor("bairro"),
            cep: pegarValor("cep"),
            cidade: pegarValor("cidade"),
            estado: pegarValor("estado"),
            id_endereco: pegarValor("id_endereco"),
            tipo_usuario: pegarValor("tipo_usuario")
        };
        console.log(dados);
        try 
        {
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

            const result = objDados.RESULT;

            if (objDados.RESULT == NAO_AUTORIZADO) {
                Sair();
                return;
            }

            mostrarMensagem(result);

        } catch (error) {
            mostrarMensagemCustomizada(error.message);
        } finally {
            removerLoad();
        }
    }
}

async function verificarSenha(formID, formID2) {

    if (validarCampos(formID)) {

        try {
            const dados = {
                endpoint: API_VERIFICAR_SENHA_ATUAL,
                id_usuario: codigoLogado(),
                senha_digitada: pegarValor("senha_atual")
            }

            load();

            const response = await fetch(Base_Url_Api(), {
                method: "POST",
                headers: headerComAutenticacao(),
                body: JSON.stringify(dados)
            })

            if (!response.ok) {
                throw new Error(MSG_ERRO_CALL_API);
            }

            const objDados = await response.json();

            result = objDados.RESULT;

            if (objDados.RESULT == NAO_AUTORIZADO) {
                Sair();
                return;
            }

            if (result == 1) {
                document.getElementById(formID).classList.add("d-none");
                document.getElementById(formID2).classList.remove("d-none");
            } else if (objDados.RESULT == 13) {
                mostrarMensagem(result);
            }

        } catch (error) {

        } finally {
            removerLoad();
        }
    }
}


async function alterarSenha(formID, formID2) {

    if (await validarCamposAsync(formID)) {

        const nova_senha = document.getElementById("nova_senha").value;
        const repetir_senha = document.getElementById("repetir_senha").value;

        if (nova_senha.length < 6) {
            mostrarMensagemCustomizada(MSG_TAMANHO_SENHA, TOASTRWARNING);
        } else if (nova_senha != repetir_senha) {
            mostrarMensagemCustomizada(MSG_ERRO_SENHAS, TOASTRWARNING);
        } else {
            const dados = {
                endpoint: API_ALTERAR_SENHA,
                nova_senha: pegarValor("nova_senha"),
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
                    throw new error(MSG_ERRO_CALL_API);
                }

                const objDados = await response.json();

                if (objDados.RESULT == NAO_AUTORIZADO) {
                    Sair();
                    return;
                }

                if (objDados.RESULT == 1) {
                    mostrarMensagemCustomizada(MSG_SUCESSO, TOASTRSUCCESS);
                    await limparNotificacoesAsync(formID);
                    document.getElementById(formID).classList.add("d-none");
                    document.getElementById(formID2).classList.remove("d-none");
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
}

async function acessar(formID) {

    if (validarCampos(formID)) {

        try {
            const dados = {
                endpoint: API_ACESSAR,
                login_usuario: pegarValor("login"),
                senha_usuario: pegarValor("senha")
            }

            load();

            const response = await fetch(Base_Url_Api(), {
                method: "POST",
                headers: headerSemAutenticacao(),
                body: JSON.stringify(dados)
            })

            if (!response.ok) {
                throw new Error(MSG_ERRO_CALL_API);
            }

            const objDados = await response.json();

            result = objDados.RESULT;

            if (result == -7) {
                mostrarMensagemCustomizada(MSG_USUARIO_NAO_ENCONTRADO, TOASTRERROR);
                return;
            }
            // Add o token no LocalStorage
            AddTnk(result);

            const resultToken = GetTnkValue();

            setNomeLogado(resultToken.nome_user);
            
            redirecionaPagina('funcionario/chamados.php');

        } catch (error) {

        } finally {
            removerLoad();
        }
    }
}