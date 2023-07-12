btnNovoTeam.onclick = function(){
    overlay.classList.add('active');
    formCriar.classList.add('active');
}

overlay.onclick = function(){
    overlay.classList.remove('active');
    formCriar.classList.remove('active');
    deletarTeam.classList.remove('active');
    addParticipante.classList.remove('active');
}

fecharFormCriar.onclick = function(){
    overlay.classList.remove('active');
    formCriar.classList.remove('active');
}

fecharFormAdd.onclick = function(){
    overlay.classList.remove('active');
    addParticipante.classList.remove('active');
}

const teams = [
    // {
    //     nome: teamNome.value,
    //     qtd: teamQtd.value,
    //     participantes: [] 
    // }
];

function adicionarTeam(){
    event.preventDefault();
    let team = {
        nome: teamNome.value,
        qtd: teamQtd.value,
        participantes: [] 
    }
    teams.push(team);
    fc.reset();
    overlay.classList.remove('active');
    formCriar.classList.remove('active');
    listarTeams();
}

function listarTeams(){
    listaDeTeams.innerHTML = '';
    for(let i = 0; i < teams.length; i++){
        listaDeTeams.innerHTML += `
            <li>
                <h5>${teams[i].nome} <box-icon name='show' type="solid"></box-icon></h5>
                <h1> ${teams[i].participantes.length} <span>/${teams[i].qtd}</span></h1>
                <div class="acoes">
                    <button id="adicionar_participante" class="btn mini-title">adicionar</button>
                    <button id="removerCard" class="btn">
                        <box-icon name='trash-alt' type="solid"></box-icon>
                    </button>
                </div>
            </li>
    `;
    }

    let botaoRemoverCard = document.querySelector('#removerCard');

    botaoRemoverCard.onclick = () => {
        overlay.classList.add('active');
        deletarTeam.classList.add('active');
    }

    adicionar_participante.onclick = () => {
        overlay.classList.add('active');
        addParticipante.classList.add('active');
    }
}