const player1 = {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0
}
const player2 = {
    nome: "Peach",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 2,
    pontos: 0
}
// const player3 = {
//     nome: "Yoshi",
//     velocidade: 2,
//     manobrabilidade: 4,
//     poder: 3,
//     pontos: 0
// }
// const player4 = {
//     nome: "Bowser",
//     velocidade: 5,
//     manobrabilidade: 2,
//     poder: 5,
//     pontos: 0
// }
// const player5 = {
//     nome: "Luigi",
//     velocidade: 3,
//     manobrabilidade: 4,
//     poder: 4,
//     pontos: 0
// }
// const player6 = {
//     nome: "Donkey Kong",
//     velocidade: 2,
//     manobrabilidade: 3,
//     poder: 5,
//     pontos: 0
// }

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

(async function main() {
    console.log("🏁 Corrida iniciada: 🏁\n");
    console.log(`🏁 ${player1.nome} vs ${player2.nome} : 🏁\n`);

    await startRaces(player1, player2);
    console.log('\n--------------------------------------------------------\n');
    
    await declareWinner(player1, player2)
})();

async function startRaces(person1, person2) {

    for (let i = 1; i < 6; i++) {
        console.log(`\n\n🏁 ${i}º Rodada: 🏁`);

        let block = await getRandomBlock()
        console.log(`block: ${block}`);

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + person1.velocidade;
            totalTestSkill2 = diceResult1 + person2.velocidade;

            await valueRoll(person1.nome, "velocidade", diceResult1, person1.velocidade);

            await valueRoll(person2.nome, "velocidade", diceResult2, person2.velocidade);

        } else if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + person1.manobrabilidade;
            totalTestSkill2 = diceResult1 + person2.manobrabilidade;

            await valueRoll(person1.nome, "manobrabilidade", diceResult1, person1.manobrabilidade);

            await valueRoll(person2.nome, "manobrabilidade", diceResult2, person2.manobrabilidade);

        } else {
            //BLOCK === CONFONTRO
            let powerResult1 = diceResult1 + person1.poder;
            let powerResult2 = diceResult2 + person1.poder;

            console.log(`${person1.nome} Confrontou com ${person2.nome}`);

            await valueRoll(person1.nome, "poder", diceResult1, person1.poder);

            await valueRoll(person2.nome, "poder", diceResult2, person2.poder);


            //Uso do if ternário
            person2.pontos =- powerResult1 > powerResult2  &&  person2.pontos > 0 ? 1 && console.log(`${person1.nome} ganhou do ${person2.nome}`) 
             : 0;

            //Uso do if com mais de uma condição
            if (powerResult1 < powerResult2  &&  person1.pontos) {
                person1.pontos--;
                console.log(`${person2.nome} ganhou do ${person1.nome}`);
            }
            
            console.log(powerResult1 === powerResult2 ? "Confronto Empatado! Sem ganhos ou perdas." : "");
        
            
        }

        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${person1.nome} Marcou um ponto!`);
            person1.pontos++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${person2.nome} Marcou um ponto!`);
            person2.pontos++;
        }
    }    
}


async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;

        case random < 0.66:
            result = "CURVA";
            break;

        default:
            result = "CONFRONTO";
            break;
    }

    return result;
}

async function valueRoll(playerName, block, diceResult, attribute) {


    console.log(`${playerName} 🎲 tirou o número ${diceResult} para ${block} ==> ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function declareWinner(person1, person2) {
    console.log(`RESULTADO FINAL 
        \n ... 
        \n ...
        \n ...
        \n ...
        \n ...
        \n ...
        \n ...
        `);

    if (person1.pontos > person2.pontos) {
        console.log(`${person1.nome} 🏆 GANHOU! 
            \nTotal de pontos: ${person1.pontos}
        `);
        console.log(`🥈 Jogador, ${person2.nome}, ficou com ${person2.pontos} pontos \n \n`);
        
    } else if (person1.pontos < person2.pontos) {
        console.log(`${person2.nome} 🏆 GANHOU! 
            \nTotal de pontos: ${person2.pontos}
        `);
        console.log(`🥈 Jogador, ${person1.nome}, ficou com ${person1.pontos} pontos \n \n`);
    } else{
        console.log(`Não houve vencedor, partida terminada em empate!
        \n${person1.nome}: ${person1.pontos}
        \n${person2.nome}: ${person2.pontos}
        `);
        
    }

}