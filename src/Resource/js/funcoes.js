//#region Funções API
function Base_Url_Api() {
    return 'http://localhost/controleos/src/Resource/api/Funcionario_api.php';
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
    return 12;
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

function mostrarElemento(id, mostrar) {

    if (mostrar) {
        document.getElementById(id).classList.remove("d-none");
    } else {
        document.getElementById(id).classList.add("d-none");
    }

}