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
        
    let paragrafoHacker = 'Noah sabia que existia um nanochip desenvolvido pela mais avançada A.I criada pelo Sistema, capaz de realizar viagens no tempo.<br>Esta peça era a engrenagem perfeita para que o Sistema alcançasse a imortalidade, já que possíveis erros poderiam sempre ser corrigidos (geralmente isso significava a morte um dissidente).<br><br> Mas era, também, a peça chave para voltar no tempo e destruir o Master System. E ele, o melhor hacker treinado pelo Sistema, sabia como usar o nanochip.<br><br> Noah teria que ir atrás dessa peça, mas não podia confiar em ninguém que conhecia para ajudá-lo.<br> E ele mesmo não poderia realizar essa parte do plano. Seu rosto era muito conhecido dentro do prédio do Sistema e seu pai tinha colocado funcionários para vigiar seus passos dentro do prédio depois da fatídica conversa revelatória entre os dois.<br><br> Por sorte, o jovem hacker conhecia um contrabandista que poderia ajudar em troca de dinheiro. Mas será que deveria confiar nele para um trabalho tão importante?<br> Ou deveria tentar subornar algum funcionário do Sistema para que o ajudasse?'
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
            
    let paragrafoHacker = '-Bóris? Noah falando, preciso da sua ajuda.<br><br> - O que você quer comigo, Noah? Sabe que eu não quero mais nada com ninguém do Sistema. Eu sei que você sempre paga direitinho, mas cansei de fazer trambiques para vocês.<br><br> - Quero contratar alguém para roubar uma peça de extremo valor que está no prédio do Sistema, Bóris, mas só conheço você.<br><br> -Hummm... extremo valor... pode ser interessante. Mas eu não posso fazer o trabalho. Tô marcado pela polícia do Sistema graças ao último engomadinho que contratou meus serviços de contrabando de bebidas e deu com a língua nos dentes.<br><br> - Olha, se você aceitar esse trabalho, eu tiro seu nome do sistema de procurados do Master System, já que é um delito leve. Que tal?<br><br> Entre pigarros e risos, Bóris respondeu:<br> - Agora sim estamos falando a mesma língua, meu jovem, hehe. Você quer que eu entre no prédio do Sistema para roubar... Olha, eu já estou muito velho e cansado. Mas tenho em mente 2 pessoas que podem pegar esse trabalho com prazer. Eu faço a ponte entre vocês.<br><br> - Quem são? E vem cá, você fingiu que não ia pegar o trabalho só porque sabia que eu poderia tirar seu nome da lista de procurados, né? Cê ta me enrolando?, perguntou Noah.<br><br> Bóris fingiu não ouvir.<br> - Então, uma é procurada pelo Sistema. Ela está grávida, pode se entregar e, quando tiver detida dentro do prédio, fazer o serviço. Ela é muito boa em escapar.<br><br> - E a outra pessoa?<br><br> - A outra você sabe quem é: Alex.<br><br> - O Ladrao? Mas Alex não é uma invenção, não?<br><br> -Posso te assegurar que ela, a Ladra, é bem real.'
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
                
        let paragrafoHacker = 'Noah encontrou com Eva perto do porto. Ao chegar lá, teve suas dúvidas ao notar o desespero da mulher, mas resolveu ir em frente.<br> - Se isso é o melhor que Bóris tem a oferecer, aceito - disse para ele mesmo.<br><br> A conversa se desenrolou de forma clara e objetiva, mas uma coisa não encaixava. Por que Eva, grávida, se arriscaria nessa missão quase suicida? Não poderia ser só pelo dinheiro.<br><br> - Sou a melhor parceira que você poderia encontrar, pois faço isso pela vida que carrego dentro de mim. E você está certo, eu não busco apenas dinheiro, Noah. Meu acordo com você vai além: eu quero voltar ao passado. Se houver alguma chance de levar essa criança para um lugar seguro, faço o que for necessário, disse convicta.<br><br> Assustado, Noah perguntou:<br> - Como você sabe que o que nanochip faz?<br>- O meu companheiro era um dos cabeças do Sistema. Eu sei mais do que você imagina.<br><br> Convencido de que fizera a escolha certa, mesmo desconfortável com a exigência surpresa, Noah acertou todos os pontos com Eva. Entregou a ela um papel com o mapa do prédio do Sistema, e deixou em suas mãos a escolha de como escaparia de lá com o nanochip.<br><br> Eva não perdeu tempo e se entregou na mesma noite. Escapou poucas horas depois e foi ao encontro de Noah.<br><br> Grata pela oportunidade, Eva o abraçou. Ele sentiu uma empatia súbita e entendeu porque Bóris a havia indicado para o trabalho. - Aquele nanico é um coração mole...<br><br> Mesmo feliz com parte do seu plano concluído, Noah estava tenso. Precisava tomar uma decisão: era hora de voltar no tempo. Mas agora ele não iria mais viajar sozinho.<br><br> - E se a viagem no tempo não for segura para um bebê? Eu fiz a coisa certa ao aceitar esse acordo idiota de levar Eva junto?'
        document.querySelector(`.paragrafo`).innerHTML = paragrafoHacker;
                
        
        document.querySelector(`#botao`).onclick = levarOuNãoEva; 
                
                
        }
        
    function caminhoDoHacker6() {
        
        let tituloHacker = 'Alex'  
        document.querySelector(`.titulo`).innerHTML = tituloHacker;
                    
        let paragrafoHacker = 'São 2am e alguém bate à porta. Noah abre.<br> Do outro lado, na chuva, uma pessoa magra, de estura mediana e com um rosto completamente hipnotizante aguarda.<br><br> - Quem é você, pergunta Noah.<br><br> - Alex.<br><br> Noah sente um frio na barriga. Então Alex, a lendária ladra que não existia para o Sistema, realmente existia na vida real. Ela era um daqueles chamados "Sombras do Sistema", só que nunca nenhum Sombra havia sido tão bom em roubar e se esconder quanto Alex.<br><br> Noah a chama para entrar e explica seu plano mirabolante.<br><br> Mas para quem vive de roubos e golpes, não é vantajoso roubar um chip extremamente valioso e entregá-lo, podendo vendê-lo no mercado negro por muito mais.<br> Após toda a explicação do plano, Alex tem uma crise de consciência e titubeia na resposta.<br><br> Noah percebe e, com medo do que a mítica ladra poderia fazer com toda aquela infromação, sabendo que Alex é totalmente capaz e roubar o nanochip sem ajuda, ele tem que pensar rápido e tomar uma decisão.' 
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
                
        let paragrafoHacker = 'Noah levantou nauseado, sentindo como se seu corpo estivesse completamente desfragmentado. Olhou para o código que havia feito e estava certo, aquela era a data da criação do Master System: 2074.<br><br> Ele não reconheceu onde estava, mas parecia ser uma sala de um prédio abandonado.<br><br> Olhou para o lado e viu Eva sangrando. Estava tendo o bebê.<br> - Meu Deus do céu, eu não to preparado para isso, pensou e imediatamente se agachou para ajudar como podia.<br><br>Tentou distrair Eva da dor perguntando o nome do bebê e deu uma risada gostosa quando ouviu a resposta:<br> - Andy... ou Chrono.<br><br> - Eva é uma pessoa muito legal, pensou. E se sentiu triste em saber que aquele bebê já chegaria ao mundo sem pai. No meio desses pensamentos rápidos, se tocou do ano em que estavam, 2074. Era o ano que ele, Noah, tinha nascido.<br><br> Levantou assustado, exultante e muito feliz, eram tantos sentimentos que ele não conseguia falar direito.<br><br> Mas após esse sentimento de felicidade, ele se lembrou do que vinha a seguir.<br><br> Só deu tempo de se virar e se jogar em cima do seu pai de criação que chegou armado - estava ali para atirar em Eva e roubar Andy, que vinha ao mundo naquele momento.<br><br> - Você está louco, Noah? O que você está fazendo aqui, me solta!<br><br> - Eu não sou Noah!<br><br> No meio da briga, ambos sacaram suas arma e atiraram.<br><br> Noah caiu gravemente ferido, enquanto o pai que o criara caía morto com um tiro no peito.<br><br>Eva, atordoada, chegou perto de Noah, segurando o bebê nos braços.<br><br> E foi aí que ele viu seu prórpro rosto num corpinho tão pequeno e frágil, nos braços de sua mãe. Já muito fraco, conseguiu dizer em meio a uma sorriso:<br> - Obrigado, mãe. Que o mundo seja menos cruel com a gente agora sem esse Sistema<br><br> Agora, finalmente, eles poderiam ficar juntos. '
        document.querySelector(`.paragrafo`).innerHTML = paragrafoHacker;


        document.querySelector(`#botao`).onclick = youWinComGravida; 
        document.querySelector(`#botao`).innerText = "Jogar novamente";
    
    }
            
    function youWinComGravida() {  // função específica para o botão de ganhar o jogo acima
        return location.replace('index.html'); // retornar para recomeçar o jogo
    
        }
    
    // única forma de ganhar escolhendo a gravida está na função acima

                

        
    function caminhoDoHacker8() {
        
        let tituloHacker = 'GAME OVER'  
        document.querySelector(`.titulo`).innerHTML = tituloHacker;
                    
        let paragrafoHacker = 'Com medo do que poderia acontecer com a grávida e o bebê, Noah quebra seu acordo, tranca Eva numa sala e começa a codar para ativar o nanochip.<br><br> Enquanto Eva esmurrava a porta aos prantos, Noah se sentia um lixo, mas tentou se convencer de que era o melhor para ela e o bebê.<br><br> Com o código pronto, Noah olha mais uma vez para a porta onde Eva estava trancada e dá enter. Antes daquela realidade desaparecer de diante dos seus olhos, conseguiu ver o intragável Sr. Berg arrombando a porta com um chute, empunhando uma arma na mão esquerda.<br><br> Desesperado, Noah tenta alterar o codigo enquanto o algoritmo já estava rodando, e o sistema crashou.<br><br> Noah nunca chegou ao seu destino.'  // TERMINAR DE ESCREVER 
        document.querySelector(`.paragrafo`).innerHTML = paragrafoHacker;
                    
        document.querySelector(`#botao`).onclick = deixarEva; //MUDAR NOME DO BOTÃO
        document.querySelector(`#botao`).innerText = "Jogar novamente";

        function deixarEva() {  // função específica para o botão desse game over acima   
            return location.replace('index.html'); // retornar para recomeçar o jogo
                
                
        }
        // função acima: ultimo game over do hacker com a grávida
    
    }




function oQueFazerComAlex() { 
    let opcao = prompt(`Alex não está inclinada a aceitar o plano de Noah, mas ela sabe demais e pode roubar o nanochip sozinha e vender, se quiser.\n O que Noah faz?\n  1- Tenta persuadir Alex a aceitar o plano \n  2- Mata Alex `)
    
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
            
    let paragrafoHacker = '- Você tem certeza? É literalmente um caminho sem volta. Você vai perder tudo o que tem.<br><br> - É uma chance de fazer um caminho novo... quem sabe.<br><br> Noah não esperava ter companhia na sua viagem ao passado, mas não viu problemas em deixar Alex ir junto.<br>Até seria bom ter uma pessoa minimamente conhecida por perto.<br><br> Noah começa a codar e dá enter.<br><br> É impossível descrever a sensação horripilante que os dois sentiram. Era como se o corpo fosse totalmente desfragmentado molecularmente e colado pedacinho por pedacinho depois.<br><br> Quando Noah conseguiu se entender, ainda muito zonzo e enjoado, deu um grito de felicidade: eles conseguiram! Estavam em 2074.<br><br> Antes que pudessem combinar qualquer coisa juntos, Alex simplesmente foi embora, dizendo que precisava refazer sua vida sozinha.<br><br> - Bom, pelo visto não terei uma companhia aqui, mas isso não estava nos meus planos, mesmo...<br><br> Noah terminou de executar seu plano, destruiu a A.I e o nanochip. Com isso, qualquer chance de criação do Master System estava nula.<br><br>Depois de concluir seu objetivo, Noah saiu da euforia para o mais completo desolamento. O que ele iria fazer ali, naquele tempo tão diferente do que estava acostumado?<br><br> Pensou em seus pais biológicos, que nunca teve e nunca teria a chance de conhecer, e se resignou, sabendo que a chance de usar nanochip para destruir o Sistema não poderia ser desperdiçada.<br> Ele sabia que teria pouco tempo até seu pai de criação notar a falta do nanochip no prédio do Sistema, então era um tiro único.<br><br> - Ah, se eu tivesse mais tempo e se desse para saber exatamente para que ano voltar para conhecer meus pais e evitar que eles morressem, suspirou.<br><br> Ele sabia que tinha tomado a decisão correta, apesar de não sentir isso.<br> O sabor da vitória era agridoce.' 
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
                
    let paragrafoHacker = 'Noah se sente perdido.<br> Ele não contava com uma negativa. Ok, ele não tinha recebeido especificamente uma negativa de Alex, mas o titubeio da ladra foi o suficiente para minar a confiança de Noah no seu plano.<br><br> Tentou pensar rápido, pois tinha que tomar uma decisão naquele momento, antes que Alex fosse embora.<br><br> Mesmo detestando sua decisão, seguiu com o plano B.<br><br> Ofereceu uma bebida a Alex que, distraída por 2 segundos, não viu Noah sacar uma arma e apontar para ela.<br><br> - Noah... Não faça nada estúpido...<br><br> - Desculpe, Alex. Eu não queria, eu realmente não queria fazer isso, mas não tenho outra opção. Não posso deixar você sair daqui sabendo tanto, sem um acordo firmado. Nós dois sabemos que você tem todas as skills para roubar esse nanochip sozinha, sem me entregar.<br><br> - Mas eu ainda não dei minha resposta, Noah, não pira...<br><br> Antes que pudesse terminar de argumentar, Noah atirou na cabeça de Alex.<br> O sangue sujou as paredes e respingou na camisa e no rosto de Noah, que se sentiu enojado.<br><br> Olhando para seu reflexo num metal que estava na parede, pensou:<br> - Meu deus, eu me tornei meu pai.<br><br> Desolado e sentindo repulsa por si mesmo voltou para casa e ligou para Bóris.<br><br> - Eu preciso agora do contato da grávida.<br><br> - Tarde demais, meu amigo. O Sistema achou ela primeiro.' 
    document.querySelector(`.paragrafo`).innerHTML = paragrafoHacker;
                
    document.querySelector(`#botao`).onclick = matarLadrao; //MUDAR NOME DO BOTÃO


    function matarLadrao() {  // função específica para o botão desse game over acima   
        return location.replace('index.html'); // retornar para recomeçar o jogo
            
            
    }
    // função acima: ultimo game over do hacker com a grávida

}