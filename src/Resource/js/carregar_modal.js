function carregarExcluir(id, nome) 
{
    $('#id_excluir').val(id);
    $('#nome_excluir').val(nome);
}

function carregarTipoEquipamento(id, tipo) 
{
    $('#id_alterar').val(id);
    $('#tipo_alterar').val(tipo);
}

function carregarModeloEquipamento(id, modelo) 
{
    $('#id_alterar').val(id);
    $('#modelo_alterar').val(modelo);
}

function carregarSetor(id, setor) 
{
    $('#id_alterar').val(id);
    $('#setor_alterar').val(setor);
}

function carregarInativar(id) 
{
    $('#id_inativar').val(id);
}

function carregarInativarInfo(data, motivo) 
{
    $('#data_descarte').html(data);
    $('#motivo_descartar').html(motivo);
}