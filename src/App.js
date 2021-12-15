import {useState} from "react";


function App() {
    const [num, setNum] = useState(Math.ceil(Math.random()  * 10 ))
    const [guess,setGuess] = useState("")
    const [message,setMessage] = useState("")
    const [lives,setLives] = useState(3)
    const [playAgain,togglePlayAgain] = useState(false)
    const [wins,setWins] = useState(+localStorage.getItem("wins"))
    const [fails,setFails] = useState(+localStorage.getItem("fails"))

     const PlayAgainClick = () => {
        setNum(Math.ceil(Math.random()  * 10 ))
         setMessage("")
         setLives(3)
         togglePlayAgain(false)


     }
    const inputChange = (e) => {
     const n = Math.min(Math.max(e.target.value,0),10)|| ""
        setGuess(n)
    }

    const checkButton = () => {
        if (+guess === num) {
            setMessage("U win")
            setWins(wins + 1)
            localStorage.setItem('wins',String(wins + 1))
            togglePlayAgain(true)

        }else{
            if(lives - 1 === 0){
                setMessage("u lost")
                togglePlayAgain(true)
            }else{
                setMessage("Try again")
                setFails(fails + 1)
                localStorage.setItem('fails',String(fails + 1))
            }
            setLives(lives -1)
        }
        setGuess("")
    }




    return (
        <>
            <input disabled={playAgain} value={guess} onChange={inputChange} type="text"/>
            {!playAgain && <button disabled={!guess} onClick={checkButton} type="button">Check</button>}
            { playAgain && <button onClick={PlayAgainClick }>Restart</button>}
            <label >
                <input  type="checkbox"/>
                Help
            </label>
            <br/>
            <span >Message:{message}</span>
            <br/>
            <span>Lives:{lives}</span>
            <br/>
            <span>Wins:{wins}</span>
            <br/>
            <span>Lots:{fails}</span>


        </>
    );
}

export default App;
