//#region URLs
const API_DETALHAR_USUARIO = "detalharUsuarioApi";
const API_ALTERAR_MEUS_DADOS = "alterarMeusDadosApi";
const API_VERIFICAR_SENHA_ATUAL = "verificarSenhaApi";
const API_CONSULTAR_EQUIPAMENTOS_SETOR = "consultarEquipamentosAlocadosSetorApi";
const API_ALTERAR_SENHA = "alterarSenhaApi";
//#endregion


//#region Mensagens do ambiente
const MSG_ERRO_CALL_API = "Erro ao chamar API.";
const MSG_SENHA_ERRADA = "Senha incorreta";
const MSG_SUCESSO = "Senha alterada com sucesso";
const MSG_ERRO = "Erro na operação, contate o suporte técnico";
const MSG_TAMANHO_SENHA = "Senha deve ter no minímo 6 caracteres";
const MSG_ERRO_SENHAS = "Senhas não conferem";
//#endregion


//#region Funções API
function Base_Url_Api() {
    return 'https://localhost/controleos/src/Resource/api/Funcionario_api.php';
}


function headerSemAutenticacao() 
{
    const header = {
        "Content-Type": "application/json"
    };
    return header;
}


function headerComAutenticacao() 
{
    const header = {
        "Content-Type": "application/json"
    };
    return header;
}


function codigoLogado() 
{
    return 9;
}


function codigoSetorLogado() 
{
    return 1;
}



function limparNotificacoes(formID) {
    $("#" + formID + " input, #" + formID + " select, #" + formID + " textarea").each(
        function () {
            $(this).val('');
            $(this).removeClass("is-invalid").removeClass("is-valid");
        }
    );
}

async function limparNotificacoesAsync(formID) {
    $("#" + formID + " input, #" + formID + " select, #" + formID + " textarea").each(
        function () {
            $(this).val('');
            $(this).removeClass("is-invalid").removeClass("is-valid");
        }
    );
}

function validarCampos(formID) {

    let ret = true;

    document.querySelectorAll(`#${formID} input, #${formID} select, #${formID} textarea`).forEach((elemento)=>{
        if (elemento.classList.contains("obg")){
            if (elemento.value === ""){
                ret = false;
                elemento.classList.add("is-invalid");
            }else{
                elemento.classList.remove("is-invalid");
                elemento.classList.add("is-valid");
            }
        }
    });

    if (!ret)
        mostrarMensagem(0);

    return ret;
}


async function validarCamposAsync(formID) {

    let ret = true;

    document.querySelectorAll(`#${formID} input, #${formID} select, #${formID} textarea`).forEach((elemento)=>{
        if (elemento.classList.contains("obg")){
            if (elemento.value === ""){
                ret = false;
                elemento.classList.add("is-invalid");
            }else{
                elemento.classList.remove("is-invalid");
                elemento.classList.add("is-valid");
            }
        }
    });

    if (!ret)
        mostrarMensagem(0);

    return ret;
}

function load() {
    $(".loader").addClass("is-active");
}

function removerLoad() {
    $(".loader").removeClass("is-active");
}

function keyPressEnter(inputId, buttonId) {
    $('#' + inputId).keypress(function (e) {
        if (e.which == 13) {
            $('#' + buttonId).click();
            return false;
        }
    });
}

function setarCamposValor(id, value) {
    document.getElementById(id).value = value;
}

function pegarValor(id) {
    return document.getElementById(id).value;
}