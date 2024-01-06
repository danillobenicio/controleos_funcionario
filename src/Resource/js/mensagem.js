function mostrarMensagem(ret) {

    if (ret == -1) {
        toastr.error('Ocorreu um erro na operação, contate o suporte técnico !');
    } else if (ret == 0) {
        toastr.warning('Preencha os campos obrigatórios !');
    } else if (ret == 1) {
        toastr.success('Cadastrado com sucesso !');
    } else if (ret == 2) {
        toastr.success('Alterado com sucesso !');
    } else if (ret == 3) {
        toastr.success('Excluído com sucesso !');
    } else if (ret == 4) {
        toastr.success('Equipamento Inativado !');
    } else if (ret == 5) {
        toastr.success('Alocado com sucesso !');
    } else if (ret == 6) {
        toastr.success('Equipamento removido com sucesso !');
    } else if (ret == 7) {
        toastr.success('Equipamento alocado com sucesso !');
    } else if (ret == 8) {
        toastr.warning('CEP não encontado !');
    } else if (ret == 9) {
        toastr.warning('Formato de CEP inválido !');
    } else if (ret == 10) {
        toastr.warning('CPF inválido !');
    } else if (ret == 11) {
        toastr.warning('E-mail inválido !');
    } else if (ret == 12) {
        toastr.warning('E-mail já cadastrado !');
    } else if (ret == 13) {
        toastr.error('Nenhum usuário encontrado !');
    }

}