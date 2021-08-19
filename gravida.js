function falarComhackerOuFugir() {    //MUDAR NOME DE ACORDO COM A HISTORIA
    let opcao = prompt(`O que Eva fará?\n  1- Aceita pedir ajuda ao hacker\n  2- Tenta fugir para o sul`)
    
    if (opcao == 1){
        return caminhoDaGravida1()
    
       
    }
    
    else if (opcao == 2){
        return caminhoDaGravida2()
    
    }
    
    else {
        return alert(`Digite uma opção válida`)
    }
    }

function caminhoDaGravida1() {

    let tituloGravida = 'O perigo da noite'  
        document.querySelector(`.titulo`).innerHTML = tituloGravida;
        
    let paragrafoGravida = 'Com quase 8 meses de gravidez, Eva não tinha muito tempo. Então decidiu aceitar qualquer ideia de Bóris, por mais maluca que parecesse.<br><br> Fugir para o sul não soou muito inteligente, já que o Master System estava em processo de expansão e podia ser só uma questão de tempo até ela ser encontrada. Seu nome figurava na lista das mulheres procuradas por gestarem um filho fora do Sistema. Ela sabia qual era o destino das mulheres detidas pela polícia por esse crime.<br> Por isso, ela precisva agir rápido.<br><br>O telefone tocou e era Bóris avisando sobre o encontro.<br> - Amanhã, no porto, às 23h. O hacker estará lá te esperando perto das docas. Não se assuste, é só um garoto, mas é mais brilhante do que todos os engenheiros daquela porcaria de Master System.<br><br> Indo para as docas, um carro da polícia passa e acha suspeito o nervosismo de Eva. Um dos policiais salta e pede para que ela se identifique.'
    document.querySelector(`.paragrafo`).innerHTML = paragrafoGravida;
        
        
    document.querySelector(`#botao`).onclick = falarComPoliciaisOuFugir; // mudar
        //escolheCaminho2();
        
    }


    function caminhoDaGravida2() {

        let tituloGravida = 'GAME OVER'  
            document.querySelector(`.titulo`).innerHTML = tituloGravida;
            
        let paragrafoGravida = 'Já perto de dar a luz, e com medo de não dar tempo de executar o plano que precisaria do hacker, Eva aceita a oferta de Bóris de fugir para o sul.<br> Com isso, ela embarca numa caravana clandestina que sai da cidade rumo às montanhas.<br><br> No meio do caminho a caravana é atacada por assaltantes que roubam todos os pertences dos viajantes.<br><br> Após quase 3 semanas de viagem a pé e sem comer, Eva entrou em trabalho de parto e não resistiu.<br><br> Faltavam só 5km para chegar na aldeia das montanhas.'
        document.querySelector(`.paragrafo`).innerHTML = paragrafoGravida;
            
            
        document.querySelector(`#botao`).onclick = evaFogeProSul;
        document.querySelector(`#botao`).innerText = "Jogar novamente";
    
    }
    
    
    function  evaFogeProSul() {  // função específica para o botão desse game over acima
        return location.replace('index.html'); // retornar para recomeçar o jogo
    
    
    }
    // função acima: primeiro game over da grávida





function falarComPoliciaisOuFugir() {    //MUDAR NOME DE ACORDO COM A HISTORIA
    let opcao = prompt(`Eva está perto das docas. Ela pode correr, se jogar nas águas escuras e nadar até despistar os policiais, ou pode tentar falar com eles. O que ela faz?\n  1- Corre e se joga na água\n  2- Tenta falar com os policiais`)
        
    if (opcao == 1){
        return caminhoDaGravida3()
        
           
    }
        
    else if (opcao == 2){
         return caminhoDaGravida4()
        
    }
        
    else {
        return alert(`Digite uma opção válida`)
    }
    }


    function caminhoDaGravida3() {
    let tituloGravida = 'GAME OVER'  
                document.querySelector(`.titulo`).innerHTML = tituloGravida;
                
        let paragrafoGravida = 'Sabendo que seu nome está na lista das mais procuradas, Eva não queria correr o risco de ser pega.<br><br> Assim que é abordada, finge contrações e, quando o policial chega perto para ajudá-la, Eva dá um soco bem dado na mandíbula do policial, que fica zonzo, dando tempo para ela correr em direção a água.<br><br> Mas ela não contava com a rapidez do segundo policial.<br> É covardemente agredida pelos dois e levada sob custódia para o Prédio do Sistema.<br><br> Lá, entra em trabalho de parto prematuramente e, devido as lesões, nem ela e nem o bebê sobrevivem.'
        document.querySelector(`.paragrafo`).innerHTML = paragrafoGravida;
                
                
        document.querySelector(`#botao`).onclick = evaPulaNaAgua;
        document.querySelector(`#botao`).innerText = "Jogar novamente";
        
    }
        
        
function  evaPulaNaAgua() {  // função específica para o botão desse game over acima
    return location.replace('index.html'); // retornar para recomeçar o jogo
        
        
    }
        // função acima: primeiro game over da grávida
 
        
function caminhoDaGravida4() {
    let tituloGravida = 'A lábia'  
        document.querySelector(`.titulo`).innerHTML = tituloGravida;
            
        let paragrafoGravida = '- Boa Noite, senhores, disse Eva com um largo sorriso que cativaria qualquer um.<br><br> - Boa noite. A senhora poderia se identificar?<br><br> Mantendo a calma, usando todo o equilíbrio que conseguiu encontrar, Eva se lembrou que ali perto morava uma antiga amiga.<br> - Mas é claro, deixa eu pegar... oh, que distraída. Saí só com a bolsa de dinheiro. Meu nome é Leah Berg. Sei que está tarde, mas vim comprar uma coisa na vendinha antes que feche.<br><br> - Sozinha? A essa hora? E sem documentos?<br><br> - Sim, eu sei que fui imprudente, mas meu marido é um pouco rígido com as coisas que ele quer e ele cismou quer queria uma bebida específica. Como esqueci de comprar mais cedo, saí rapidinho, sem ele saber, para comprar. Por isso esqueci meus documentos.<br> Não sei se vocês conhecem, ele é o Sr. Berg<br><br> Os policias se entreolharam e saíram pedindo desculpas pelo incômodo, desejando saúde para o novo bebê do Sr. Berg.<br><br> Sr. Berg era um dos magnatas do Master System, conhecido por seu temperamento difícil e explosivo. E ele era o marido de uma amiga que Eva conheceu quando estava com Rudolf.<br> Leah dava forças para o casal, mas Berg era totalmente contra. Berg ajudou a caçar Rudolf na noite que ele morreu.<br><br> - Espero que esses policiais nunca confiram essa história.<br><br> Nervosa com o que tinha acabado de acontecer, e com medo de aparecerem outros policiais, Eva ponderou se deveria seguir adiante com o encontro com o hacker.<br> - Posso não ter tanta sorte da próxima vez.'
        document.querySelector(`.paragrafo`).innerHTML = paragrafoGravida;
            
    
        document.querySelector(`#botao`).onclick = encontrarHackerOuNao; // mudar
            //escolheCaminho2();
            
        }
    
    
function encontrarHackerOuNao() {    //MUDAR NOME DE ACORDO COM A HISTORIA
        let opcao = prompt(`Depois do susto, Eva tem que decidir se continua com o plano de encontrar o hacker, mesmo exposta na rua, ou se vai embora e tenta um novo encontro depois.\n  1- Vai encontrar o hacker\n  2- Vai embora`)
            
        if (opcao == 1){
            return caminhoDaGravida5()
            
               
    }
            
        else if (opcao == 2){
                return caminhoDaGravida6()
            
        }
            
        else {
                return alert(`Digite uma opção válida`)
        }
        }


function caminhoDaGravida5() {
    let tituloGravida = 'O Hacker'  
        document.querySelector(`.titulo`).innerHTML = tituloGravida;
                    
            let paragrafoGravida = 'Eva chegou ao porto visivelmente nervosa depois do encontro com os policiais.<br> Notou uma figura se mexendo no breu e foi até lá, rezando para que fosse o hacker.<br><br> - Olá, me chamo Eva. Bóris me enviou até você.<br><br> Noah não pôde deixar de notar a barriga marcando a roupa daquela mulher que não muito mais velha do que ele.<br><br> - Eva, seja honesta comigo. Por que você quer entrar nesse meu plano? Não é só por dinheiro, certo? Eu sabia que você estava grávida, mas não imaginei que tivesse tão...tão...grávida assim, disse Noah se referindo ao tamanho da barriga.<br><br> - Sou a melhor parceira que você poderia encontrar, pois faço isso pela vida que carrego dentro de mim. E você está certo, eu não busco apenas dinheiro, Noah. Meu acordo com você vai além: eu quero voltar ao passado. Se houver alguma chance de levar essa criança para um lugar seguro, faço o que for necessário, disse convicta.<br> Vendo um leve pânico no rosto de Noah, Eva se perguntou se tinha sido muito direta.<br><br> Ainda tentando entender, Noah perguntou:<br> - Como você sabe que o que nanochip faz?<br>- O meu companheiro era um dos cabeças do Sistema. Eu sei mais do que você imagina.<br><br> Apesar de não concordar inteiramnete com a forma como o plano seria executado, Noah aceitou o acordo, levaria Eva de volta ao passado se ela conseguisse o chip.<br><br> Sem perder tempo, Eva foi caminhando na direção do prédio do Sistema, que ficava a pouco mais de 3km das docas. No caminho, foi repassando mentalmente todo o seu plano, absorvendo ao máximo o mapa do prédio que Noah dera a ela.<br><br> Quanto mais perto chegava, mais o nervosismo tomava conta.<br> - Ainda dá tempo de desistir, dizia uma vozinha dentro dela.<br> - Está tudo bem, eu vou conseguir, ela mesma rebatia a voz.<br><br> '
            document.querySelector(`.paragrafo`).innerHTML = paragrafoGravida;
                    
            
            document.querySelector(`#botao`).onclick = seEntregarOuNao; // mudar
                    //escolheCaminho2();
                    
}


function caminhoDaGravida6() {
        let tituloGravida = 'GAME OVER'  
            document.querySelector(`.titulo`).innerHTML = tituloGravida;
                        
            let paragrafoGravida = 'Ela decide voltar para casa e tentar um novo encontro com o hacker.<br> Para sua surpresa, nunca mais o encontra.<br><br> Bóris avisa que o rapaz se meteu em uma confusão com uma ladra, e que agora está foragido.<br><br> Sem esse hacker, o plano de Eva não dá certo e ela precisa continuar escondida.<br><br> Menos de 1 mês depois, dá a luz a um bebê menino, a quem decide chamar Andy.<br><br> Dez minutos após parir, um homem entra pela porta semi destruída do casebre no meio da floresta. É o Sr. Berg, junto com vários policiais.<br><br> Eva e o bebê são abatidos.'
            document.querySelector(`.paragrafo`).innerHTML = paragrafoGravida;
                        
                        
            document.querySelector(`#botao`).onclick = evaDesisteDoPlano;
            document.querySelector(`#botao`).innerText = "Jogar novamente";
                
        }
                
                
function  evaDesisteDoPlano() {  // função específica para o botão desse game over acima
        return location.replace('index.html'); // retornar para recomeçar o jogo
                
                
        }
                // função acima: primeiro game over da grávida
            




    function seEntregarOuNao() {    //MUDAR NOME DE ACORDO COM A HISTORIA
        let opcao = prompt(`Caminhando em direção ao prédio do Master System, Eva sabe que só existem 2 possibilidades: ser presa e morta ou pegar o nanochip e escapar. Ela vai seguir em frente com o plano?\n  1- Desiste e resolve se esconder\n  2- Segue com o plano e se entrega`)
                        
            if (opcao == 1){
                return caminhoDaGravida7()
                        
                           
    }
                        
            else if (opcao == 2){
                 return caminhoDaGravida8()
                        
     }
                        
            else {
            return alert(`Digite uma opção válida`)
    }
    }



    function caminhoDaGravida7() {
        let tituloGravida = 'GAME OVER'  
            document.querySelector(`.titulo`).innerHTML = tituloGravida;
                        
            let paragrafoGravida = 'Tomada de medo, Eva desiste do plano e segue em direção a floresta.<br> A barriga pesa, e a conscieência pesa ainda mais.<br><br> - Aquele menino precisava de mim...<br><br> Sem saber se tinha tomado a melhor decisão, tenta se refugiar em um casebre na floresta, o mesmo que ela usou pra se refugiar quando o Sitema caçava Rudolf e ela.<br><br> Eva não esperava que tudo desse tão errado tão rápido.<br> Uma emboscada tinha sido armada pelo Sr. Berg, que soube que "sua mulher grávida" havia sido vista na rua. Vendo sua mulher, que não estava grávida, do seu lado na cama, foi imediatamente soar o alerta para buscas nas redondezas.<br><br> Leah, ameaçada pelo marido, acabou contando o que sabia sobre o esconderijo de Eva.<br><br> - Boa noite, querida Eva. Hoje, finalmente, sua família poder ficar junta.<br><br> Antes que pudesse entender o que estava acontecendo, Eva foi mortalmente ferida com um tiro no peito e caiu.'
            document.querySelector(`.paragrafo`).innerHTML = paragrafoGravida;
                        
                        
            document.querySelector(`#botao`).onclick = evaDesisteDeSeEntregar;
            document.querySelector(`#botao`).innerText = "Jogar novamente";
                
        }
                
                
function  evaDesisteDeSeEntregar() {  // função específica para o botão desse game over acima
        return location.replace('index.html'); // retornar para recomeçar o jogo
                
                
        }
                // função acima: primeiro game over da grávida


function caminhoDaGravida8() {

    let tituloGravida = 'YOU WIN'  
        document.querySelector(`.titulo`).innerHTML = tituloGravida;
                        
        let paragrafoGravida = 'A felicidade e alívio foram tantos que Eva institivamente abraçou Noah, sentido uma paz enorme.<br> O plano tinha saído melhor do que o esperado, agora só faltava Noah codar para ativar o nanochip.<br><br> Depois de ativado, Eva e Noah sentem seus corpos serem esmagados e reconstruídos em mil pedacinhos. Noah, ainda zonzo e enjoado, confirma: estão em 2074, o ano da criação do Master System!<br><br> Ao abrir os olhos, Eva sente uma dor lancinante enquanto o bebê abre caminho para o mundo.<br><br>Noah, totalmente sem jeito e sem saber o que fazer, se agacha e ajuda Eva. Para distraí-la da dor, pergunta:<br> - Já sabe que nome vai dar?<br><br> - Tenho certeza de que vai ser menino. Andy... ou Chronos, disse entre um misto de choro e risada.<br><br> Foi então que Noah pensou no ano, 2074, e caiu a ficha. Ele se levanta, para na frente de Eva com os olhos cheios dágua e com uma expresão incrédula e exultante ao mesmo tempo, como quem acaba de entender alguma coisa muito importante.<br><br>A dor das contrações aumentam e Eva não consegue mais prestar atenção no que Noah tentava dizer.<br><br>Tudo fica confuso. Sem entender o que estava acontecendo, com o canto do olho vê Noah saltar sobre um homem - e ela conhecia esse homem! Era o CEO do Master System!<br><br> De repente, barulhos de tiros.<br>Dois homens caem ao chão, um deles já morto.<br><br>O bebê milagrosamente nasce bem, mas seu companheiro de viagem agoniza ao chão, tentando falar alguma coisa.<br><br> Eva, com o bebê nos braços, se aproxima e escuta de Noah:<br><br> - Obrigado, mãe. Que o mundo seja menos cruel com a gente agora sem esse Sistema'
        document.querySelector(`.paragrafo`).innerHTML = paragrafoGravida;
                        
                
        document.querySelector(`#botao`).onclick = youWinGravida; 
        document.querySelector(`#botao`).innerText = "Jogar novamente";
                
     }
                        
function youWinGravida() {  // função específica para o botão de ganhar o jogo acima
    return location.replace('index.html'); // retornar para recomeçar o jogo
                
                    }
                
                // única forma de ganhar está na função acima