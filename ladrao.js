function querSaber() {    //MUDAR NOME DE ACORDO COM A HISTORIA
    let opcao = prompt(`O que Alex responderá?  1- Sim  2- Não`)
    
    if (opcao == 1){
        return caminhoDoLadrao1()
    
       
    }
    
    else if (opcao == 2){
        return caminhoDoLadrao2()
    
    }
    
    else {
        return alert(`Digite uma opção válida`)
    }
    }
    
function caminhoDoLadrao1() {

let tituloLadrao = 'Bilhete de Bóris'  
document.querySelector(`.titulo`).innerHTML = tituloLadrao;

let paragrafoLadrao = 'Assombrada com o que acabara de ouvir, era nítida a confusão em seu rosto.<br> - Viagem no tempo? Não pode ser verdade...<br> A chuva incessante molhava todo o seu corpo esguio, deixando a visão meio turva. Ela foi andando apressadamente enquanto pensava o que seria capaz de fazer uma pessoa viajar no tempo.<br> Foi quando lembrou: o papel com o contato que o contrabandista deu estava no bolso da sua fina jaqueta. Àquela altura já estava todo molhado.<br> - Não acredito que dei esse mole! Como vou ler agora esse borrão? Isso é um 8 ou um 9?<br> Mesmo desconfiada, Alex seguiu a valiosa - e borrada - dica do contrabandista e foi ao encontro da pessoa desconhecida.'
document.querySelector(`.paragrafo`).innerHTML = paragrafoLadrao;


document.querySelector(`#botao`).onclick = ehNum8ouNum9;
//escolheCaminho2();

}

function caminhoDoLadrao2() {

    let tituloLadrao = 'GAME OVER'  
    document.querySelector(`.titulo`).innerHTML = tituloLadrao;
    
    let paragrafoLadrao = 'Atordoado com a negativa de Alex, o contrabandista dispara contra seu peito e sai correndo, gritando:<br> - Você devia ter aceitado!<br> O corpo imóvel de Alex sangra até a morte naquele beco escuro, enquanto a chuva lava seu sangue.'
    document.querySelector(`.paragrafo`).innerHTML = paragrafoLadrao;
    
    document.querySelector(`#botao`).onclick = borisAtiraLadrao;
    document.querySelector(`#botao`).innerText = "Jogar novamente";

}


function borisAtiraLadrao() {  // função específica para o botão desse game over acima
    return location.replace('index.html'); // retornar para recomeçar o jogo


}
// função acima: primeiro game over do ladrao


// tudo acima deu certo. Abaixo é DEU CERTO


function ehNum8ouNum9() {  //MUDAR NOME DE ACORDO COM A HISTORIA - 2a fase começa após escolha do prompt abaixo
    let opcao = prompt(`Alex não consegue ler direito o bilhete que Bóris, o contrabandista, escreveu. Vai ter que arriscar: \n 1- Com certeza isso é o n°8   2- Deve ser o n°9`);
    
    if (opcao == 1){
        return caminhoDoLadrao3();
       
    }
    
    else if (opcao == 2){
        return caminhoDoLadrao4();
    
    }
    
    else {
        return alert(`Digite uma opção válida`);
    }
    }



function caminhoDoLadrao3() {

    let tituloLadrao = 'GAME OVER'  
    document.querySelector(`.titulo`).innerHTML = tituloLadrao;
    
    let paragrafoLadrao = 'Alex chegou à casa de um policial do Master System (infeliz coincidência ou emboscada?).<br> É levada sob custódia para ser interrogada pela atitude suspeita, afinal, quem bateria à casa de um desconhecido às 2am?'
    document.querySelector(`.paragrafo`).innerHTML = paragrafoLadrao;
    
    document.querySelector(`#botao`).onclick = policialPrendeLadrao;
    document.querySelector(`#botao`).innerText = "Jogar novamente";

}


function policialPrendeLadrao() {  // função específica para o botão desse game over acima
    return location.replace('index.html'); // retornar para recomeçar o jogo

    }

// função acima: segundo game over do ladrao
    


function caminhoDoLadrao4() {
    
    let tituloLadrao = 'O Hacker'  
        document.querySelector(`.titulo`).innerHTML = tituloLadrao;
        
    let paragrafoLadrao = '- Quem é você?, pergunta o rapaz à porta.<br> - Alex.<br> Bastava dizer esse nome para saber de quem se tratava. Mesmo sendo a pessoa mais misteriosa do continente, ela era uma pessoa conhecida por todo mundo ligado às "Sombras do Sistema", como costumavam chamar.<br> O rapaz teve um leve sobressalto e tentou conter sua animação para não transparecer suas intenções logo de cara. Alex era exatamente quem ele precisava para dar continuidade ao seu plano.<br> - É, bem que me disseram que o Bóris tem ótimos contatos. Entre antes que essa chuve aumente ainda mais. Prazer, Noah.<br> Na sala pequena e mal iluminada, Noah descreveu o tal artefato: um nanochip criado pela mais avançada A.I. que o mundo já tinha visto. Esse pequeno objeto tecnológico era capaz de mapear todo o espaço-tempo e, usado com o código certo, podia levar qualquer pessoa à qualquer época. O código certo Noah sabia, afinal, ele era ninguém menos que o filho de um dos fundadores do Sistema. Noah havia sido treinado a vida toda para para ser um dos engenheiro principais do Master System.<br> - E qual é o seu interesse pessoal em obter esse nanochip, Noah?<br> - Bom... se vamos trabalhar juntos, precisamos ser transparentes um com o outro, né? Eu preciso voltar no tempo e impedir a construção do Master System.<br> Incrédula com essa resposta, Alex diz:<br> - Noah... Você sabe quem eu sou, certo? Por que eu te ajudaria se no final não vou poder vender o nanochip?<br> - Porque se eu conseguir alcançar meu objetivo, você não vai mais precisar andar pelas Sombras do Sistema, Alex.<br> Isso tocou fundo em Alex. Ela amava sua vida desregrada, era inegável, mas dentro dela havia um medo sempre presente: o de ser pega. É certo que seria bem difícil ser pega, Alex era uma lenda (alguns nem acrediatavm que ela era real). Mas lidando com probabilidades, ela sabia que não era totalmente impossível. Bastaria que algum de seus contatos a traísse e ela demorasse para perceber a armadilha. Ela bem sabia qual era o destino dos chamados Dissidentes do Sistema quando caíam nas mãos dos policiais. E não havia nada nesse mundo que ela prezasse mais do que ela mesma, sua vida e seu bem-estar.<br> - Eu tenho o código. Mas para conseguir completar meu objetivo, eu preciso de você e das suas habilidades para roubar o nanochip, Alex.'
        
    document.querySelector(`.paragrafo`).innerHTML = paragrafoLadrao;
        
    document.querySelector(`#botao`).onclick = ajudarOhacker;
    }
    
    



function ajudarOhacker() {    //MUDAR NOME DE ACORDO COM A HISTORIA -  3a fase começa após escolha do prompt abaixo
    let opcao = prompt(`Alex vai ajudar Noah?  1- Sim  2- Não`)
        
    if (opcao == 1){
        return caminhoDoLadrao5()
        
           
        }
        
    else if (opcao == 2){
        return caminhoDoLadrao6()
        
        }
        
    else {
        return alert(`Digite uma opção válida`)
        }
        }


function caminhoDoLadrao5() {

    let tituloLadrao = 'O Prédio do Master System'  
    document.querySelector(`.titulo`).innerHTML = tituloLadrao;
            
    let paragrafoLadrao = 'Entrar no prédio principal do Master System não foi nehuma dificuldade para Alex. Com o mapa que Noah fez, ficou ainda mais fácil marcar todas as possíveis entradas e saídas.<br> A localização exata do nanochip ficava na sala n°10100, atrás uma parede falsa coberta com um quadro enorme com uma foto do Rio Amazonas. Alex achou ridículo e riu.<br> Saiu do prédio tão rápido quanto entrou. Só quando já estava em seu bunker-loft, parou e finalmente olhou para o nanochip que tirou do bolso. Tão pequeno, tão frágil e tão importante, dentro de um recipiente de vidro. Como um mundo (literalmente um mundo) podia caber ali dentro?<br> Seus demônios pessoais começaram a aparecer. Olhou ao redor e no seu loft viu tudo o que mais gostava: objetos de arte raríssimos, jóias antiquíssimas, as melhores bebidas que só se podia encontrar no mercado clandestino, e um espelho de cristal com moldura de ouro, refletindo a imagem da pessoa que ela mais amava, ela mesma, segurando o nanochip.<br> Aquele coisa ridiculamente pequena na mão dela era o passaporte para uma vida mais tranquila, sem precisar roubar mais nada.<br> - Se eu entregar esse chip para Noah, nunca verei a bolada de dinheiro. Por outro lado, se eu entregar, talvez eu não precise mais fugir e vou poder ser quem eu quiser, sem me preocupar.'
    document.querySelector(`.paragrafo`).innerHTML = paragrafoLadrao;
            
            
     document.querySelector(`#botao`).onclick = entregaOuNaoOchip;
    
            
    }
            
    function caminhoDoLadrao6() {
            
        let tituloLadrao = 'GAME OVER'  
        document.querySelector(`.titulo`).innerHTML = tituloLadrao;
                
        let paragrafoLadrao = 'Agora que Alex sabia de tudo e negou ajuda, e sabendo que Alex era o melhor ladrão da história e não iria deixar uma boa oportunidade passar, Noah teve que recorrer ao seu plano B: matar Alex com um tiro.<br> Mesmo não sendo um assassino e odiando sua decisão, para Noah era melhor ter o nanochip num lugar conhecido para poder tentar um novo plano, do que correr o risco de perder seu paradeiro no mercado clandestino.'
        document.querySelector(`.paragrafo`).innerHTML = paragrafoLadrao;
                
        document.querySelector(`#botao`).onclick = noahAtiraLadrao;
        document.querySelector(`#botao`).innerText = "Jogar novamente";
            
     }
            
            
    function noahAtiraLadrao() {  // função específica para o botão desse game over acima
        return location.replace('index.html'); // retornar para recomeçar o jogo
            
            
    }
// função acima: terceiro game over do ladrao



function entregaOuNaoOchip() {    //MUDAR NOME DE ACORDO COM A HISTORIA - 4a fase começa após escolha do prompt abaixo
    let opcao = prompt(`O que Alex faz?\n 1- Entrega o nanochip a Noah  2- Vende o nanochip no mercado clandestino`)
    
    if (opcao == 1){
        return caminhoDoLadrao7()
    
       
    }
    
    else if (opcao == 2){
        return caminhoDoLadrao8()
    
    }
    
    else {
        return alert(`Digite uma opção válida`)
    }
    }




function caminhoDoLadrao7() {

    let tituloLadrao = 'YOU WIN'  
        document.querySelector(`.titulo`).innerHTML = tituloLadrao;
        
    let paragrafoLadrao = 'Noah consegiu voltar no tempo, seu plano deu certo e o Master System nunca existiu.<br> Uma nova linha temporal foi criada. E nela, Alex (que não lembra de nada do mundo que tinha ajudado a destruir) chefia a maior rede de ladões especiaizados em roubo obras de arte.<br> - Bóris... BÓRIS... me traz a Don Pérignon'
    document.querySelector(`.paragrafo`).innerHTML = paragrafoLadrao;
        

    document.querySelector(`#botao`).onclick = youWin; 
    document.querySelector(`#botao`).innerText = "Jogar novamente";

}
        
function youWin() {  // função específica para o botão de ganhar o jogo acima
    return location.replace('index.html'); // retornar para recomeçar o jogo

    }

// única forma de ganhar está na função acima
        

function caminhoDoLadrao8() {
        
    let tituloLadrao = 'GAME OVER'  
        document.querySelector(`.titulo`).innerHTML = tituloLadrao;
            
    let paragrafoLadrao = 'Noah passou meses atrás de algum rastro de Alex, até que finalmente encontrou uma pista: uma pessoa vendendo um artefato muito valioso, sem mais descrições, no mercado clandestino. Gastou parte de seus bitcoins na compra e através dessa transação conseguiu achar o paradeiro de Alex.<br> Foi ao seu encontro, sacou uma arma e a matou.<br> Fuçou os bolsos do cadáver e berrou com toda a força dos seus pulmões: o nanochip não estava com Alex'
    document.querySelector(`.paragrafo`).innerHTML = paragrafoLadrao;
            
    document.querySelector(`#botao`).onclick = noahAtiraLadraoDeNovo;
    document.querySelector(`#botao`).innerText = "Jogar novamente";
        
}

function noahAtiraLadraoDeNovo() {  // função específica para o botão desse game over acima
        return location.replace('index.html'); // retornar para recomeçar o jogo

}

// função acima: quarto e último game over do ladrao