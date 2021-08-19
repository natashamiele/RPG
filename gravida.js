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
        
    let paragrafoGravida = 'Com quase 8 meses de gravidez, Eva não tinha muito tempo. Então decidiu aceitar qualquer ideia de Bóris, por mais maluca que parecesse.<br> Fugir para o sul não soou muito inteligente, já que o Master System estava em processo de expansão e podia ser só uma questão de tempo até ela ser encontrada. Seu nome figurava na lista das mulheres procuradas por gestarem um filho fora do Sistema. Ela sabia qual era o destino das mulheres detidas pela polícia por esse crime.<br> Por isso, ela precisva agir rápido.<br><br>O telefone tocou e era Bóris avisando sobre o encontro.<br> - Amanhã, no porto, às 23h. O hacker estará lá te esperando perto das docas. Não se assuste, é só um garoto, mas é mais brilhante do que todos os engenheiros daquela porcaria de Master System.<br><br> Indo para as docas, um carro da polícia para e acha suspeito o nervosismo de Eva. Um dos policiais salta e pede para que ela se identifique.'
    document.querySelector(`.paragrafo`).innerHTML = paragrafoGravida;
        
        
    document.querySelector(`#botao`).onclick = ehNum8ouNum9; // mudar
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