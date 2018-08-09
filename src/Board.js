import React, { Component } from 'react'
import Square from './Square'


class Board extends Component {
    constructor(props) {
        super()
        this.bigShip = [];
        this.midShip = [];
        this.littleShip = [];
        let i;
        let n;
        let start = null;
        let vertical = Math.round(Math.random());
        let num1 = (Math.floor((Math.random() * 7) + 1));
        let num2 = (Math.floor((Math.random() * 3) + 1)).toString();
        if (vertical === 1) {
            start = parseInt(num2+num1);
            this.bigShip = [start, start+10, start+20, start+30, start+40];
        } else { 
            start = parseInt(num1+num2);
            this.bigShip = [start, start+1, start+2, start+3, start+4];
        }
        console.log(this.bigShip);
        let ship4set = false;
        while(ship4set === false) {
            ship4set = true;
            vertical = Math.round(Math.random());
            num1 = (Math.floor((Math.random() * 7) + 1));
            num2 = (Math.floor((Math.random() * 4) + 1)).toString();
            if (vertical === 1) {
                start = parseInt(num2+num1);
                this.midShip = [start, start+10, start+20, start+30];
            } else { 
                start = parseInt(num1+num2);
                this.midShip = [start, start+1, start+2, start+3];
            }
            for (i = 0; i < this.midShip.length; i++) { 
                    if(!ship4set){break;}
                    for (n = 0; n < this.bigShip.length; n++) { 
                    
                        if(this.midShip[i] == this.bigShip[n]){
                            console.log("mid ship set attempt failed");
                            ship4set= false;
                            break;

                        }
                    }
                }
        
            
        }
            
             
        console.log(this.midShip);
  
      
      
        let ship3set = false;
        while(ship3set === false) {
            ship3set = true;
            vertical = Math.round(Math.random());
            num1 = (Math.floor((Math.random() * 7) + 1));
            num2 = (Math.floor((Math.random() * 5) + 1)).toString();
            if (vertical === 1) {
                start = parseInt(num2+num1);
                this.littleShip = [start, start+10, start+20];
            } else { 
                start = parseInt(num1+num2);
                this.littleShip = [start, start+1, start+2];
            }

            for (i = 0; i < this.littleShip.length; i++) { 
                if(!ship3set){break;}
                for (n = 0; n < this.bigShip.length; n++) { 
                    
                    if(this.littleShip[i] == this.bigShip[n]){
                        console.log("little ship set attempt failed");
                        ship3set= false;
                        break;

                    }
                }

                for (n = 0; n < this.midShip.length; n++) { 
                    
                    if(this.littleShip[i] == this.midShip[n]){
                        console.log("little ship set attempt failed");
                        ship3set= false;
                        break;

                    }
                }


            }


            
        }

        console.log(this.littleShip);
             
        this.state = {
            squares: [
            {id: 11, className: "block"},
            {id: 12, className: "block"},
            {id: 13, className: "block"},
            {id: 14, className: "block"},
            {id: 15, className: "block"},
            {id: 16, className: "block"},
            {id: 17, className: "block"},
            {id: 21, className: "block"},
            {id: 22, className: "block"},
            {id: 23, className: "block"},
            {id: 24, className: "block"},
            {id: 25, className: "block"},
            {id: 26, className: "block"},
            {id: 27, className: "block"},
            {id: 31, className: "block"},
            {id: 32, className: "block"},
            {id: 33, className: "block"},
            {id: 34, className: "block"},
            {id: 35, className: "block"},
            {id: 36, className: "block"},
            {id: 37, className: "block"},
            {id: 41, className: "block"},
            {id: 42, className: "block"},
            {id: 43, className: "block"},
            {id: 44, className: "block"},
            {id: 45, className: "block"},
            {id: 46, className: "block"},
            {id: 47, className: "block"},
            {id: 51, className: "block"},
            {id: 52, className: "block"},
            {id: 53, className: "block"},
            {id: 54, className: "block"},
            {id: 55, className: "block"},
            {id: 56, className: "block"},
            {id: 57, className: "block"},
            {id: 61, className: "block"},
            {id: 62, className: "block"},
            {id: 63, className: "block"},
            {id: 64, className: "block"},
            {id: 65, className: "block"},
            {id: 66, className: "block"},
            {id: 67, className: "block"},
            {id: 71, className: "block"},
            {id: 72, className: "block"},
            {id: 73, className: "block"},
            {id: 74, className: "block"},
            {id: 75, className: "block"},
            {id: 76, className: "block"},
            {id: 77, className: "block"}
         

    
            ],
            tries: 25,
            ships: [],
            message: "Take a shot",
            attempts: [],
            hits: [],
            bigHits: 0,
            midHits: 0,
            littleHits: 0,
            gameOver: false,

        }
        
      
        this.renderSquare = this.renderSquare.bind(this)
      
    }

    renderSquare(square, i) {
        return <Square className={square.className} id={square.id} onClick={() => this.handleClick(square.id)} />;
        }

        alertBigShip(){
            
            alert(this.state.bigHits);
            
        }

        componentDidUpdate(){
            if(this.state.bigHits > 4 && this.state.midHits > 3 && this.state.littleHits > 2 && this.state.message !== "Victory!" && this.state.message !== "Failure"){
                this.setState({message: "Victory!", gameOver: true});
            }
            else if(this.state.tries < 1 && this.state.gameOver == false){
                this.setState({message: "Failure", gameOver: true});
            }
        }
        hitOrMiss(i){
          
        if(this.bigShip.includes(i) || this.littleShip.includes(i) || this.midShip.includes(i)) { 
            this.setState({message: "Hit!"});
            this.setState(prevState => ({
                hits: [
                    ...prevState.hits,
                    i
                ]
            }))

            if(this.bigShip.includes(i)){
                this.setState({bigHits: this.state.bigHits + 1});
                
                if(this.state.bigHits + 1 > 4){
                    this.setState(prevState => ({
                        ships: [
                            ...prevState.ships,
                            "Big Ship"
                        ]
                    }))
                }
            }
            else if(this.midShip.includes(i)){
                this.setState({midHits: this.state.midHits + 1});
                if(this.state.midHits + 1 > 3){
                    this.setState(prevState => ({
                        ships: [
                            ...prevState.ships,
                            "Medium Ship"
                        ]
                    }))
                }
            }
            else if(this.littleShip.includes(i)){
                this.setState({littleHits: this.state.littleHits + 1});
                if(this.state.littleHits + 1 > 2){
                    this.setState(prevState => ({
                        ships: [
                            ...prevState.ships,
                            "Little Ship"
                        ]
                    }))
                }
            }

           

            return ("hit");
        } 
        else {
            this.setState({message: "Miss"});
            return ("miss");
        }
        }
        handleClick(i){
            if(this.state.attempts.includes(i) || this.state.gameOver){
                return;
            }
            this.setState(prevState => ({
                attempts: [
                    ...prevState.attempts,
                    i
                ]
            }))
            
        var result = this.hitOrMiss(i);    
        this.setState({ tries: this.state.tries - 1});
        this.setState(prevState => ({
            squares: prevState.squares.map(
                    square => (square.id !== i) ? square : {...square, className: result, value: result}
                )
        }))
}
    newGame(){
        window.location.reload();
    }
    
    render(){
        return(
            <div className="game-board">
   <h1>Battle Ship</h1>
<div id="message">{this.state.message}</div>
<button id="restart" onClick={() => this.newGame()}>New Game</button>
    
    <div id="sunk">
    <h4>Sunken Ships</h4><br />
    <div id="sunkenships">{this.state.ships.map((ship) => (
        <p>{ship}</p>
    ))}</div>
</div>
<div id="missles">
    <h4>Remaining Missles:</h4>
    
    <div id="tries">{this.state.tries}</div>
    </div>

<div id="grid">
   
     {this.state.squares.map(this.renderSquare)}
    
</div></div>);
    }
    }
    export default Board
