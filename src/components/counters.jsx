import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    state={
        counters: [
            {id:1,value:0,item: "Item#1"},
            {id:2,value:0,item: "Item#2"},
            {id:3,value:0,item: "Item#3"},
            {id:4,value:0,item: "Item#4"}
        ]
    }

    handleReset= ()=>{
        const counters = this.state.counters.map(
            c=> {   
                c.value=0;
                return c;
            }
        );
        this.setState({counters});
    }
    handleIncrement=counter=>{
        const counters = [...this.state.counters];
        const index=counters.indexOf(counter)

        counters[index]={...counter};
        counters[index].value++;

        this.setState({counters})

    }

    handleDicrement=counter=>{
        const counters = [...this.state.counters];
        const index=counters.indexOf(counter)

        if(counters[index].value>0)
        {
            counters[index]={...counter};
        counters[index].value--;
        
        }

        this.setState({counters})
    }

    handleDelete=(counterId)=>{
        console.log("this is", counterId)
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({
            counters
        });
    }
    justAlerMassage(){
        alert("SUCCESSFULLY ALERT")
    }
    render() { 
        return (
            <div>
                <div className="row">
                    <div className="col-2 m-1">
                        <h4>Photo</h4>
                    </div>
                    <div className="col-5 m-1">
                        <h4>Name item</h4>
                    </div>
                    <div className="col-3">
                        <h4>Number</h4>
                    </div>
                    <div className="col">
                        <h4>Options</h4>
                    </div>
                </div>
                <div className="row m-1 ">
                {this.state.counters.map(counter =>
                        (<Counter
                            key={counter.id} 
                            counter={counter}
                            onDelete={this.handleDelete}
                            onIncrement={this.handleIncrement}
                            onDicrement={this.handleDicrement}/>)
                    )}
                </div>
                <div className="row m-4 p-4">
                    <button onClick={this.justAlerMassage} className="btn btn-primary col-6 p-3  light">Order</button>
                    <button onClick={this.handleReset} className="btn btn-secondary col-6 p-3 light">Reset</button>
                </div>
            </div>
        );
    }
}
 
export default Counters;