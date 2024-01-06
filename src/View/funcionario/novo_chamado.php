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
                            <h1>Novo Chamado</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="card form-cadastro">
                    <div class="card-light">
                        <form role="form" method="POST" name="novo_chamado" id="formCad">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Equipamento</label>
                                            <select class="form-control obg" style="width: 100%;">
                                                <option selected="selected" value="">Selecione</option>
                                                <option>Alaska</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="descricao">Descreva o Problema</label>
                                    <textarea class="form-control obg" id="descricao" rows="3"
                                        placeholder="Descrição"></textarea>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="button" onclick="return validarCampos('formCad')" class="btn btn-sm btn-success">Cadastrar</button>
                            </div>
                        </form>
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
</body>

</html>