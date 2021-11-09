import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends React.Component {
    
    
    // constructor(){
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }
    
    renderTags(){
        if(this.state.tags.length === 0 ) return <p>There is no tags!</p>
        return <ul>
        {
            this.state.tags.map(tag => <li key={tag}>{ tag }</li>)
        }
        </ul>

    }
    getBadgetClasses(){
        let element="btn btn-"
        if(this.props.counter.value===0)
            {
                element+="warning m-1"
            } else{
                 element+="primary m-1"
            }
        return element
    }

    
    

    doHandleIncrement = () =>{
        this.handleIncrement({id:1})
    }

    formatCount(){
        return this.props.counter.value
    }

    

    render() { 
        console.log(this.props)
        return (
        <div className=" row p-3 border">
            <div className="col-2">
                <img src='http://placehold.it/150x150' />
            </div >



                <div className="col-5">
                    <div>
                        <h1>{this.props.counter.item}</h1>
                        </div>
                    
                        <div>
                            Some explanation of the product. I don't know something very interesting.
                        </div>
                    

                    
                    
                </div>

                
                    <div className='col-3 p-4 mt-5'>
                        <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary bg-light text-dark m-1" >+</button>
                        
                        <div className={this.getBadgetClasses()}>{this.formatCount()}</div>
                        <button onClick={ () => this.props.onDicrement(this.props.counter)} className="btn btn-secondary bg-light text-dark m-1" >-</button>
                    </div>
                
                <div className="col-2 p-4">
                        <button className="btn btn-danger m-5" onClick={()=>this.props.onDelete(this.props.counter.id)} >Delete</button>
                        
                </div>
        </div>
        );
    }



    getBadgeMethod() {
        let classes = "btn m-2 btn-";
        classes += this.counter.value.count === 0 ? "warning" : "primary";
        return classes;
    } 

    
}
 
export default Counter;