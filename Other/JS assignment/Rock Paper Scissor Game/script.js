let startGame = () => {
    let PScore = 0
    let CScore = 0

    const playGame = () => {
        const rockBtn = document.getElementById('rock')
        const paperBtn = document.getElementById('paper')
        const scissorBtn = document.getElementById('scissor')
        const playerOptions = [rockBtn, paperBtn, scissorBtn]
        const computerOptions = ['rock', 'paper', 'scissor']

        playerOptions.forEach(choose => {
            choose.addEventListener('click', function () {
                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];
                winner(this.innerText, computerChoice)
            })
        })

    }

    const winner = (player, computer) => {
        let P_Count = document.getElementById("p-count")
        let C_Count = document.getElementById("c-count")
        let Result = document.getElementById("result")
        let P_Choose = player.toLowerCase()
        let C_Choose = computer.toLowerCase()

        if (P_Choose === C_Choose) {
            Result.innerText = "Tie"
        } else if ((P_Choose === "rock") && (C_Choose === "paper")) {
            Result.innerText = 'Computer Won'
            CScore++
            C_Count.innerText = `${CScore}`
        } else if ((P_Choose === "paper") && (C_Choose === "rock")) {
            Result.innerText = 'Player Won'
            PScore++
            P_Count.innerText = `${PScore}`
        } else if ((P_Choose === "rock") && (C_Choose === "scissor")) {
            Result.innerText = 'Player Won'
            PScore++
            P_Count.innerText = `${PScore}`
        } else if ((P_Choose === "scissor") && (C_Choose === "rock")) {
            Result.innerText = 'Computer Won'
            CScore++
            C_Count.innerText = `${CScore}`
        } else if ((P_Choose === "scissor") && (C_Choose === "paper")) {
            Result.innerText = 'Player Won'
            PScore++
            P_Count.innerText = `${PScore}`
        } else if ((P_Choose === "paper") && (C_Choose === "scissor")) {
            Result.innerText = 'Computer Won'
            CScore++
            C_Count.innerText = `${CScore}`
        } else {
            Result.innerText = 'Computer Won'
            CScore++
            C_Count.innerText = `${CScore}`
        }
    }
    playGame()
}

startGame()