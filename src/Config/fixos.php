<?php

    //Retorna raíz da hospedagem do projeto
    define('PATH', $_SERVER['DOCUMENT_ROOT'] . '/controleosfuncionario/src/');

    const SITUACAO_CHAMADO_TODOS = 0;
    const SITUACAO_CHAMADO_AGUARDANDO_ATENDIMENTO = 1;
    const SITUACAO_CHAMADO_EM_ATENDIMENTO = 2;
    const SITUACAO_CHAMADO_ENCERRADO = 3;
?>