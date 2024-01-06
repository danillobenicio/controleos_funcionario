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
                            <h1>Altere Seus Dados</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="card form-cadastro">
                    <form role="form" method="POST" id="formAlt" name="formAlt">

                        <input type="hidden" id="id_usuario">
                        <input type="hidden" id="id_endereco">
                        <input type="hidden" id="tipo_usuario">
                        <div class="card-body">

                            <div id="dadosUsuario">
                                <div class="row">
                                    <div class="form-group col-md-6 col-sm-12">
                                       <label>Nome</label>
                                        <input type="text" class="form-control" id="nome" name="nome" disabled>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-12">
                                        <label>E-mail</label>
                                        <input type="email" class="form-control" id="email" name="email" disabled>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6 col-sm-12">
                                        <label>Telefone</label>
                                        <input type="text" class="form-control obg cel num" id="telefone" name="telefone">
                                    </div>
                                    <div class="form-group col-md-6 col-sm-12">
                                        <label>CPF</label>
                                        <input type="text" class="form-control cpf num" id="cpf" name="cpf" disabled>
                                    </div>
                                </div>
                            </div>
                                <div class="row">
                                    <div class="col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label>Setor</label>
                                            <input type="text" class="form-control" id="setor" name="setor" disabled>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12 col-sm-12">
                                        <label>Cep</label>
                                        <input type="text" class="form-control obg cep num" id="cep" name="cep"
                                            placeholder="Cep" onblur="pesquisaCep(this.value)">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Bairro</label>
                                            <input type="text" class="form-control obg" name="bairro" id="bairro">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Rua</label>
                                            <input type="text" class="form-control obg" name="rua" id="rua">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6 col-sm-12">
                                        <label>Cidade</label>
                                        <input type="text" class="form-control" id="cidade" name="cidade"
                                            disabled>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Estado</label>
                                            <input type="text" class="form-control" name="estado"
                                                id="estado" disabled>
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer" id="button">
                            <button type="button" onclick="validarCampos('formAlt')" class="btn btn-sm btn-success">Alterar</button>
                        </div>
                    </form>
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
      <script src="../../Resource/js/buscar_cep.js"></script>
      <script src="../../Template/mask/jquery.mask.min.js"></script>
      <script src="../../Template/mask/mask.js"></script>
</body>

</html>