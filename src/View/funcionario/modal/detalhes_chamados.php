<div class="modal fade" id="modal_detalhes">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Detalhes chamados</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">          
                    <input type="hidden" id="id_chamado">
                    <input type="hidden" id="id_alocar">
                    <label>Equipamento</label>
                    <span readonly disabled class="form-control" id="equipamento" rows="2"></span> 

                    <br>

                    <label>Data Abertura</label>
                    <span readonly class="form-control" id="data_abertura" name="data_abertura"></span>

                    <br>

                    <label>Problema</label>
                    <textarea readonly class="form-control" id="problema" rows="2"></textarea>

                    <hr>

                    <label>Data de Atendimento</label>
                    <span readonly class="form-control" id="data_atendimento" name="data_atendimento"></span>

                    <br>

                    <label>Técnico que iniciou atendimento</label>
                    <span readonly disabled class="form-control" id="tec_atendimento" rows="2"></span>

                    <br>
                    <div id="dadosEncerramento"
                        <label>Data encerramento</label>
                        <span readonly class="form-control" id="encerramento" rows="2"></span> 

                        <br>

                        <label>Técnico que encerrou atendimento</label>
                        <span readonly class="form-control" id="tec_encerramento" rows="2"></span> 
                        
                        <br>

                        <label>Laudo</label>
                        <textarea readonly class="form-control" id="laudo" rows="2"></textarea>
                    </div>
                </div>
                
            </div>
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>