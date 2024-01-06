<?php

 /* include_once dirname(__DIR__, 3) . '/vendor/autoload.php';

  use Src\_Public\Util;


  if (isset($_GET['close']) && $_GET['close'] == 1) {
    Util::deslogar();
  }*/

?>


<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="#" class="brand-link">
    <img src="../../Template/dist/img/logoc.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
      style="opacity: .8">
    <span class="brand-text font-weight-light">ontrol OS | Funcionário</span>
  </a>

  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar user (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img src="../../Template/dist/img/avatar.png" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
        <a href="#" class="d-block">Usuário Logado</a>
      </div>
    </div>

    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
        <li class="nav-item">
          <a href="meus_dados.php" class="nav-link">
            <i class="fa-regular fa-user"></i>
            <p>Meus Dados</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="mudar_senha.php" class="nav-link">
            <i class="fa-regular fa-user"></i>
            <p>Alterar Senha</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="novo_chamado.php" class="nav-link">
            <i class="fa-regular fa-edit"></i>
            <p>Abrir Chamado</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="chamados.php" class="nav-link">
            <i class="fa-regular fa-keyboard"></i>
            <p>Chamados</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="../../Template/_includes/_menu.php?close=1" class="nav-link">
            <i class="fa-regular fa-exit"></i>
            <p>Sair</p>
          </a>
        </li>
        </li>
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>