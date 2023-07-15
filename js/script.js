btnNovoTeam.onclick = function(){
    overlay.classList.add('active');
    formCriar.classList.add('active');
}

overlay.onclick = function(){
    overlay.classList.remove('active');
    formCriar.classList.remove('active');
    deletarTeam.classList.remove('active');
    addParticipante.classList.remove('active');
    mostrarParticipantes.classList.remove('active');
}

fecharFormCriar.onclick = function(){
    overlay.classList.remove('active');
    formCriar.classList.remove('active');
}

fecharFormAdd.onclick = function(){
    overlay.classList.remove('active');
    addParticipante.classList.remove('active');
}

let teams = [
    
];

function listarTeams(){
    listaDeTeams.innerHTML = '';
    for(let i = 0; i < teams.length; i++){
        listaDeTeams.innerHTML += `
            <li>
                <h5>${teams[i].nome} <box-icon onclick="listarParticipantes(${teams[i].id})" name='show' type="solid"></box-icon></h5>
                <h1> ${teams[i].participantes.length} <span>/${teams[i].qtd}</span></h1>
                <div class="acoes">
                    <button id="adicionar_participante" class="btn mini-title">adicionar</button>
                    <button id="removerCard" dataid="${teams[i].id}" class="btn">
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

function adicionarTeam(){
    event.preventDefault();
    let team = {
        id: (teams.length + 1),
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

function deletarTeamNoArray(id){
    let aux = [];
    for(let i = 0; i < teams.length; i++){
        if(teams[i].id != id){
            aux.push(teams[i])
        }
    }
    teams = aux;
    listarTeams();
}

function removerTeamIndividual(){
    removerTrue.onclick = () => {
        // overlay.classList.remove('active');
        // deletarTeam.classList.remove('active');
        // console.log('removido');
        // deletarTeamNoArray(removerCard.dataId);
        // listarTeams();
        let id = document.querySelector('#removerCard')
        console.log(id['dataid']);
    }

    removerFalse.onclick = () => {
        overlay.classList.remove('active');
        deletarTeam.classList.remove('active');
        console.log('Não Removido');
        listarTeams();
    }
}
removerTeamIndividual();

function listarParticipantes(id){
    overlay.classList.add('active');
    mostrarParticipantes.classList.add('active');
    listaDeParticipantes.innerHTML = '';

    let team;
    for(let i = 0; i < teams.length; i++){
        if(teams[i].id === id){
            team = teams[i];
        }
    }
    for(let i = 0; i < team.participantes.length; i++){
        listaDeParticipantes.innerHTML += `
        <li>
            ${team.participantes[i]} <box-icon name="trash-alt" type="solid"></box-icon>
        </li>
        `;
    }
}
