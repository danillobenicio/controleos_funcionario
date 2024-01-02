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
                            <h1>Chamados do setor</h1>
                        </div>

                    </div>
                </div>
            </section>

            <section class="content">
                <div class="card form-cadastro">
                    <div class="card-light">
                        <div class="card-header">
                            <h3 class="card-title">Pesquisar</h3>
                        </div>

                        <form role="form" method="post" action="meus_chamados.php">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="tipo">Situação</label>
                                    <select class="form-control" style="width: 100%;">
                                        <option value="<?SITUACAO_CHAMADO_TODOS?>" selected="selected">Todos</option>
                                        <option value="<?SITUACAO_CHAMADO_AGUARDANDO_ATENDIMENTO?>">Aguardando
                                            Atendimento</option>
                                        <option value="<?SITUACAO_CHAMADO_EM_ATENDIMENTO?>">Em Atendimento</option>
                                        <option value="<?SITUACAO_CHAMADO_ENCERRADO?>">Encerrados</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="card form-consulta">

                    <div class="row">
                        <div class="col-12">
                            <div class="card-header">
                                <h3 class="card-title">Chamados</h3>
                            </div>

                            <div class="card-body table-responsive p-0">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Data Abertura</th>
                                            <th>Funcionário</th>
                                            <th>Equipamento</th>
                                            <th>Problema</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>John Doe</td>
                                            <td>John Doe</td>
                                            <td>John Doe</td>
                                            <td>John Doe</td>
                                            <td>
                                                <button class="btn btn-xs btn-secondary" data-toggle="modal" data-target="#modal_detalhes">Ver detalhes</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <?php include_once 'modal/detalhes_chamados.php'; ?>
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