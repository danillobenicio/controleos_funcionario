<?php
    include_once dirname(__DIR__, 3) . '/vendor/autoload.php';
?>
<!DOCTYPE html>
<html>

<head>
    <?php
        include_once PATH . 'Template/_includes/_head.php';
    ?>
</head>

<body class="hold-transition sidebar-mini">
    <!-- Site wrapper -->
    <div class="wrapper">

        <?php
        include_once PATH . 'Template/_includes/_topo.php';
        include_once PATH . 'Template/_includes/_menu.php';
    ?>

        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Alterar Senha</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="card form-cadastro">
                    <div class="card-light">
                        <!-- /.card-header -->
                        <!-- form start -->

                        <div class="card-body">
                            <form role="form" method="POST" id="formSenhaAtual">
                                <div class="row">
                                    <div class="form-group col-12">
                                        <label for="password_atual">Senha Atual</label>
                                        <input type="password" class="form-control obg" id="senha_atual">
                                    </div>
                                    <button type="button" onclick="verificarSenha('formSenhaAtual', 'formNovaSenha')"
                                        class="btn btn-sm btn-success">Verificar Senha</button>
                                </div>
                            </form>
                            <form role="form" method="POST" id="formNovaSenha" class="d-none">
                                <div class="row">
                                    <div class="form-group col-6">
                                        <label for="password_novo">Nova Senha</label>
                                        <input type="password" class="form-control obg" id="nova_senha"
                                            placeholder="Nova Senha">
                                    </div>
                                    <div class="form-group col-6">
                                        <label for="password_repetir">Repetir Senha</label>
                                        <input type="password" class="form-control obg" id="repetir_senha"
                                            placeholder="Repetir Senha">
                                    </div>
                                </div>
                                <button type="button" onclick="alterarSenha('formNovaSenha', 'formSenhaAtual')"
                                    class="btn btn-sm btn-success">Alterar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <?php
        include_once PATH . 'Template/_includes/_footer.php'
    ?>
    </div>
    <?php  
        include_once PATH . 'Template/_includes/_scripts.php';
     ?>
    <script src="../../Resource/ajax/usuario_ajax.js"></script>
</body>

</html>