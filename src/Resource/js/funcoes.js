//#region Funções API
function Base_Url_Api() 
{
    return 'https://localhost/controleos/src/Resource/api/Funcionario_api.php';
}

function Base_Url_Intranet()
{
    return "https://localhost/controleosFuncionario/src/View/";
}

function redirecionaPagina(pagina) {
    window.location = Base_Url_Intranet() + pagina;
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
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + GetTnk(),

    };
    return header;
}

function codigoLogado() 
{
    const dados = GetTnkValue();
    return dados.cod_user;
}

function codigoSetorLogado() 
{
    const dados = GetTnkValue();
    return dados.cod_setor;
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


function mostrarElemento(id, mostrar) 
{
    if (mostrar) {
        document.getElementById(id).classList.remove("d-none");
    } else {
        document.getElementById(id).classList.add("d-none");
    }
}

function AddTnk(t) 
{
    localStorage.setItem('user_tnk', t);
}

function GetTnkValue() 
{
    var token = GetTnk();
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var j = decodeURIComponent(window.atob(base64).split('').map(function
    (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    
    }).join(''));

    return JSON.parse(j);
}

function GetTnk() 
{
    if (localStorage.getItem('user_tnk') != null)
        return localStorage.getItem('user_tnk');
}

function setNomeLogado(nome) 
{
    localStorage.setItem("nome_logado", nome);
}

function getNomeLogado() 
{
    return localStorage.getItem("nome_logado");
}

function MostrarNomeLogin() 
{
    if (localStorage.getItem('nome_logado') != null)
        document.getElementById("nome_logado").innerHTML = getNomeLogado();
}

function ClearTnk() 
{
    localStorage.clear();
}

function Sair() 
{
    ClearTnk();
    window.location.href = 'https://localhost/controleosFuncionario/src/View/acesso/login.php';
}

function Verify() 
{
    if (localStorage.getItem('user_tnk') === null)
        Sair();
}