
let score={
    win:0,
    lost:0,
    tie:0,
    matches:0,
    displayScore:function(){
            return `Wins=${score.win} \n Lost=${score.lost} \n Tie=${score.tie} \n Total Matches=${score.matches}`
        },
        displayWinPer:function(){
            let winPer=((score.win+(0.5*score.tie))/score.matches)*100;
            return `Win%= ${Math.round(winPer)}%`;
        },
   };

    //Function1: to generate Computer Choice
    function generateComputerChoice()
    {
        let randomNumber=Math.random()*3;  //0-3
        if(randomNumber<=1)
        {
            // computerChoice='Bat';
            return 'Bat';
        }
        else if(randomNumber<=2)
        {
            // computerChoice='Ball';
            return 'Ball';
        }
        else{
            //computerChoice='Wicket';
            return 'Wicket';
        }
    }


    //Function2: to get Result
    function getResult(userMove,computerMove)
    {
        score.matches++;
        if(computerMove==='Bat'){
            if(userMove==='Bat'){
                score.tie++;
                return `It's a Tie`;
            }
            else if(userMove==='Ball'){
                score.lost++
                return 'You lost';

            }
            else if(userMove==='Wicket'){
                score.win++;
                return 'You Won';
            }
        }
        else if(computerMove==='Ball'){
            if(userMove==='Ball'){
                score.tie++;
                return `It's a Tie`;
            }
            else if(userMove==='Bat'){
                score.win++;
                return 'You Won';
            }
            else if(userMove==='Wicket'){
                score.lost++
                return 'You Lost';

            }
        }
        else if(computerMove==='Wicket'){
            if(userMove==='Wicket'){
                score.tie++;
                return `It's a Tie`;
            }
            else if(userMove==='Bat'){
                score.lost++
                return 'You lost';

            }
            else if(userMove==='Ball'){
                score.win++;
                return 'You Won';
            }
        }
        
    } 

  
    //function to show alert message
    function alertMsg(yourChoice,computerChoice,resultMsg)
    {
    

        document.querySelector('#resultStatus').innerText=resultMsg;
    


        document.querySelector('#no-wins-lost').innerText=`${score.displayScore()}`;

        document.querySelector('#win-percent').innerText=` ${score.displayWinPer()}`;
        
        document.querySelector('#yourChoice').innerText=`Your Choice \n\n ${yourChoice}`;
        document.querySelector('#computerChoice').innerText=`Computer Choice \n\n ${computerChoice}`;
        
    }
