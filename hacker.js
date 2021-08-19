function destruirOuNao() {
    let opcao = prompt(` "Meu Deus, o que devo fazer?"\n  1- Destruir o Sistema!\n  2- Aceitar o emprego`)
    
    if (opcao == 1){
        return caminhoDoHacker1()
    
       
    }
    
    else if (opcao == 2){
        return caminhoDoHacker2()
    
    }
    
    else {
        return alert(`Digite uma opção válida`)
    }
    }

function caminhoDoHacker1() {

    let tituloHacker = 'A decisão'  
    document.querySelector(`.titulo`).innerHTML = tituloHacker;
        
    let paragrafoHacker = 'Noah sabia que existia um nanochip que acabara de ser desenvolvido pela mais avançada A.I criada pelo Sistema, capaz de realizar viagens no tempo. Esta peça seria a engrenagem perfeita para que o Sistema alcançasse a imortalidade, já que possíveis erros poderiam sempre ser consertados. Era, também, a peça chave para voltar no tempo e destruir o Master System. E ele, o melhor hacker treinado pelo Sistema, sabia como usar o nanochip.<br><br> Noah teria que ir atrás desse nanochip, mas não poderia confiar em ninguém que conhecia para ajudá-lo. E ele mesmo não poderia realizar essa parte do plano. Seu rosto era muito conhecido dentro do prédio do Sistema e seu pai tinha colocado funcionários para vigiar seus passos dentro do prédio depois da fatídica conversa revelatória entre os dois.<br><br> Por sorte, o jovem hacker conhecia um contrabandista que poderia ajudar em troca de dinheiro. Mas será que deveria confiar nele para um trabalho tão importante? Ou deveria tentar subornar algum funcionário do Sistema para que o ajudasse?'
    document.querySelector(`.paragrafo`).innerHTML = paragrafoHacker;
        

    document.querySelector(`#botao`).onclick = ligarParaBorisOuNao;
        
        
    }

function caminhoDoHacker2() {

    let tituloHacker = 'GAME OVER'  
    document.querySelector(`.titulo`).innerHTML = tituloHacker;
            
    let paragrafoHacker = 'Noah aceitou o emprego e tornou-se peça fundamental da engrenagem do Sistema.<br> Fingiu esquecer a verdade que havia descoberto.<br> Porém, todo seu dinheiro ia para bebidas caras e tudo o que pudesse aliviar a dor que sentia em seu peito.<br><br> Morreu aos 34 anos por overdose de álcool e remédios.'
    document.querySelector(`.paragrafo`).innerHTML = paragrafoHacker;
            
    document.querySelector(`#botao`).onclick = aceitaOemprego;
    document.querySelector(`#botao`).innerText = "Jogar novamente";
        
    }
        
        
function aceitaOemprego() {  // função específica para o botão desse game over acima
    return location.replace('index.html'); // retornar para recomeçar o jogo
        
        
}
// função acima: primeiro game over do hacker
        


function ligarParaBorisOuNao() {  //MUDAR NOME DE ACORDO COM A HISTORIA - 2a fase começa após escolha do prompt abaixo
    let opcao = prompt(` O que Noah vai fazer?\n  1- Ligar para o Bóris\n  2- Tentar subornar um funcionário do prédio do Master System`);
    
    if (opcao == 1){
        return caminhoDoHacker3();
       
    }
    
    else if (opcao == 2){
        return caminhoDoHacker4();
    
    }
    
    else {
        return alert(`Digite uma opção válida`);
    }
    }


function caminhoDoHacker3() {

    let tituloHacker = 'A ligação'  
    document.querySelector(`.titulo`).innerHTML = tituloHacker;
            
    let paragrafoHacker = '-Bóris? Noah falando, preciso da sua ajuda.<br><br> - O que você quer comigo, Noah? Sabe que eu não quero mais nada com ninguém do Sistema. Eu sei que você sempre paga direitinho, mas cansei de fazer trambiques para vocês.<br><br> - Quero contratar alguém para roubar uma peça de extremo valor que está no prédio do Sistema, Bóris, mas só conheço você.<br><br> -Hummm... extremo valor... pode ser interessante. Mas eu não posso fazer o trabalho. Tô marcado pela polícia do Sistema graças ao último engomadinho que contratou meus serviços e deu com a língua nos dentes.<br><br> - Olha, se você aceitar esse trabalho, eu tiro seu nome do sistema de procurados do Master System. Que tal?<br><br> Entre pigarros e risos, Bóris respondeu:<br> - Agora sim estamos falando a mesma língua, meu jovem, hehe. Você quer que eu entre no prédio do Sistema para roubar... Olha, eu já estou muito velho e cansado. Mas tenho em mente 2 pessoas que podem pegar esse trabalho com prazer. Eu faço a ponte entre vocês.<br><br> - Quem são? E vem cá, você fingiu que não ia pegar o trabalho só porque sabia que eu poderia tirar seu nome da lista de procurados, né? Cê ta me enrolando?, perguntou Noah.<br><br> Bóris fingiu não ouvir.<br> - Então, uma é procurada pelo Sistema. Ela está grávida, pode se entregar e, quando tiver detida dentro do prédio, fazer o serviço. Ela é muito boa em escapar.<br><br> - E a outra pessoa?<br><br> - A outra você sabe quem é: Alex.<br><br> - O Ladrao? Mas Alex não é uma invenção, não?<br><br> -Posso te assegurar que ela, a Ladra, é bem real.'
    document.querySelector(`.paragrafo`).innerHTML = paragrafoHacker;
            
    
    document.querySelector(`#botao`).onclick = escolherAlexOuEva; //mudar
            
            
    }

    function caminhoDoHacker4() { //mudar

        let tituloHacker = 'GAME OVER'  
        document.querySelector(`.titulo`).innerHTML = tituloHacker;
                
        let paragrafoHacker = 'Noah se encontrou no refeitório com o chefe de limpeza do prédio do Sistema. Ele era a pessoa perfeita para executar o roubo, tinha todas as chaves e podia circular livremente sem levantar suspeitas.<br> Mas o chefe de limpeza foi mais esperto e percebeu que poderia ganhar muito mais dinheiro se delatasse Noah e seu plano.<br><br> Apesar de alta traição ser punível com a morte, Noah foi treinado desde criança e possuía habilidades demais para ser eliminado. Ao invés disso, ele teve uma pena pior do que a execução: passou o resto de sua vida preso, sendo obrigado a usar seus conhecimentos para cooperar com o Sistema'
        document.querySelector(`.paragrafo`).innerHTML = paragrafoHacker;
                
        document.querySelector(`#botao`).onclick = subornaEmpregado; //mudar
        document.querySelector(`#botao`).innerText = "Jogar novamente";
            
        }
            
            
    function subornaEmpregado() {  // função específica para o botão desse game over acima
        return location.replace('index.html'); // retornar para recomeçar o jogo
            
            
    }
    // função acima: segundo game over do hacker



    function escolherAlexOuEva() { 
        let opcao = prompt(`Qual pessoa Noah contratou através de Bóris?\n  1- Eva, a grávida\n  2- Alex, o ladrão`)
        
        if (opcao == 1){
            return caminhoDoHacker5()
        
           
        }
        
        else if (opcao == 2){
            return caminhoDoHacker6()
        
        }
        
        else {
            return alert(`Digite uma opção válida`)
        }
        }

    function caminhoDoHacker5() {

        let tituloHacker = 'Eva'  
        document.querySelector(`.titulo`).innerHTML = tituloHacker;
                
        let paragrafoHacker = 'Noah encontrou com Eva perto do porto. Ao chegar lá, teve suas dúvidas ao notar o desespero da mulher, mas resolveu ir em frente.<br> - Se isso é o melhor que Bóris tem a oferecer, aceito - disse para ele mesmo.<br><br> A conversa se desenrolou de forma clara e objetiva, mas uma coisa não encaixava. Por que Eva, grávida, se arriscaria nessa missão quase suicida? Não poderia ser só pelo dinheiro.<br><br> - Sou a melhor parceira que você poderia encontrar, pois faço isso pela vida que carrego dentro de mim. E você está certo, eu não busco apenas dinheiro, Noah. Meu acordo com você vai além: eu quero voltar ao passado. Se houver alguma chance de levar essa criança para um lugar seguro, faço o que for necessário, disse convicta.<br> Assustado, Noah perguntou:<br> - Como você sabe que o que nanochip faz?<br>- O meu companheiro era um dos cabeças do Sistema. Eu sei mais do que você imagina.<br><br> Convencido de que fizera a escolha certa, mesmo desconfortável com a exigência surpresa, Noah acertou todos os pontos com Eva. Entregou a ela um papel com o mapa do prédio do Sistema, e deixou em suas mãos a escolha de como escaparia de lá com o nanochip.<br><br> Eva não perdeu tempo e se entregou na mesma noite. Escapou poucas horas depois e foi ao encontro de Noah.<br><br> Grata pela oportunidade, Eva o abraçou. Ele sentiu uma empatia súbita e entendeu porque Bóris a havia indicado para o trabalho. - Aquele nanico é um coração mole, mesmo...<br><br> Mesmo feliz com parte do seu plano concluído, Noah estava tenso. Precisava tomar uma decisão: era hora de voltar no tempo. Mas agora ele não iria mais viajar sozinho.<br><br> - E se a viagem no tempo não for segura para um bebê? Eu fiz a coisa certa ao aceitar esse acordo idiota de levar Eva junto?'
        document.querySelector(`.paragrafo`).innerHTML = paragrafoHacker;
                
        
        document.querySelector(`#botao`).onclick = levarOuNãoEva; 
                
                
        }
        
    function caminhoDoHacker6() {
        
        let tituloHacker = 'Alex'  
        document.querySelector(`.titulo`).innerHTML = tituloHacker;
                    
        let paragrafoHacker = 'São 2am e alguém bate à porta. Noah abre. Do outro lado, na chuva, uma pessoa magra, mediana e completamente hipnotizante aguarda.<br><br> - Quem é você, pergunta Noah.<br><br> - Alex.<br><br> Noah sente um frio na barriga. Então Alex, a lendária ladra que não existia para o Sistema, realmente existia na vida real. Ela era um daqueles chamados "Sombras do Sistema", só que nunca havia existido alguém tão bom em roubar e se esconder quanto Alex.<br><br> Noah a chama para entrar e explica seu plano mirabolante.<br> Mas para quem vive de roubos e golpes, não é vantajoso roubar um chip extremamente valioso e entregá-lo, podendo vendê-lo no mercado negro por muito mais.<br> Após toda a explicação do plano, Alex tem uma crise de consciência e titubeia na resposta.<br> Noah percebe e, com medo do que a mítica ladra poderia fazer com toda aquela infromação, sabendo que Alex é totalmente capaz e roubar o nanochip sem ajuda, ele tem que pensar rápido e tomar uma decisão.' 
        document.querySelector(`.paragrafo`).innerHTML = paragrafoHacker;
                    
        document.querySelector(`#botao`).onclick = oQueFazerComAlex;
    
                
        }
                
   
        
function levarOuNãoEva() {
    let opcao = prompt(`O que Noah vai escolher ?\n  1- Cumprir o acordo e levar Eva na viagem de volta ao passado\n  2- Deixar Eva para trás`)
    
    if (opcao == 1){
        return caminhoDoHacker7()
    
       
    }
    
    else if (opcao == 2){
        return caminhoDoHacker8()
    
    }
    
    else {
        return alert(`Digite uma opção válida`)
    }
    }


    function caminhoDoHacker7() {

        let tituloHacker = 'YOU WIN'  
        document.querySelector(`.titulo`).innerHTML = tituloHacker;
                
        let paragrafoHacker = 'Noah levantou nauseado, sentindo como se seu corpo estivesse completamente desfragmentado. Olhou para o código que havia feito e estava certo, aquela era a data da criação do Master System. Ele não reconheceu onde estava, mas parecia ser uma sala de um prédio abandonado.<br><br> Olhou para o lado e viu Eva sangrando. Estava tendo o bebê.<br> Ouviu um barulho de briga acontecendo, seguido de um tiro ' //TERMINAR AQUI, ME PERDI NO PARADOXO TEMPORAL
        document.querySelector(`.paragrafo`).innerHTML = paragrafoHacker;


        document.querySelector(`#botao`).onclick = youWinGravida; 
        document.querySelector(`#botao`).innerText = "Jogar novamente";
    
    }
            
    function youWinGravida() {  // função específica para o botão de ganhar o jogo acima
        return location.replace('index.html'); // retornar para recomeçar o jogo
    
        }
    
    // única forma de ganhar escolhendo a gravida está na função acima

                

        
    function caminhoDoHacker8() {
        
        let tituloHacker = 'GAME OVER'  
        document.querySelector(`.titulo`).innerHTML = tituloHacker;
                    
        let paragrafoHacker = 'Com medo do que poderia acontecer com a grávida e o bebê, Noah quebra seu acordo e tranca Eva numa sala e começa a codar para ativar o nanochip.<br><br>'  // TERMINAR DE ESCREVER 
        document.querySelector(`.paragrafo`).innerHTML = paragrafoHacker;
                    
        document.querySelector(`#botao`).onclick = deixarEva; //MUDAR NOME DO BOTÃO


        function deixarEva() {  // função específica para o botão desse game over acima   
            return location.replace('index.html'); // retornar para recomeçar o jogo
                
                
        }
        // função acima: ultimo game over do hacker com a grávida
    
    }


function oQueFazerComAlex() { 
    let opcao = prompt(`Alex não está inclinada a aceitar o plano de Noah, mas ela sabe demais e pode roubar o nanochip sozinha e vender, se quiser. O que Noah faz?\n  1- Mata Alex\n  2- Tenta persuadir Alex a aceitar o plano`)
    
    if (opcao == 1){
        return caminhoDoHacker9()
    
       
    }
    
    else if (opcao == 2){
        return caminhoDoHacker10()
    
    }
    
    else {
        return alert(`Digite uma opção válida`)
    }

}
    
function caminhoDoHacker9() {

    let tituloHacker = 'YOU WIN'  
    document.querySelector(`.titulo`).innerHTML = tituloHacker;
            
    let paragrafoHacker = 'Escrever unico you win hacker + ladrao' // ESCREVER FINAL GANHA COM O LADRAO
    document.querySelector(`.paragrafo`).innerHTML = paragrafoHacker;


    document.querySelector(`#botao`).onclick = youWinLadrao; 
    document.querySelector(`#botao`).innerText = "Jogar novamente";

}
        
function youWinLadrao() {  // função específica para o botão de ganhar o jogo acima
    return location.replace('index.html'); // retornar para recomeçar o jogo

}

// única forma de ganhar escolhendo o ladrao está na função acima

            

    
function caminhoDoHacker10() {
    
    let tituloHacker = 'GAME OVER'  
    document.querySelector(`.titulo`).innerHTML = tituloHacker;
                
    let paragrafoHacker = ' Escrever ultimo game over com o hacker + ladrao'  // TERMINAR DE ESCREVER 
    document.querySelector(`.paragrafo`).innerHTML = paragrafoHacker;
                
    document.querySelector(`#botao`).onclick = deixarEva; //MUDAR NOME DO BOTÃO


    function deixarEva() {  // função específica para o botão desse game over acima   
        return location.replace('index.html'); // retornar para recomeçar o jogo
            
            
    }
    // função acima: ultimo game over do hacker com a grávida

}