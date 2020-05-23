import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count:1,
        tags: ['tag1','tag2','tag3']
       // imageUrl:'https://picsum.photos/200'
        
    };
    styles = {
        fontSize:25,
 
        }
    render() { 

        //let classes = this.getBadgeClasses();
       
        return ( 
        <div>
            <img src={this.state.imageUrl}alt=""></img>
            <span style={{fontSize:25,fontWeight:'bold'} }className=  { this.getBadgeClasses } >{this.state.count}</span>
            <span  style={this.styles} className="badge m-2 badge-primary">{this.formatCount()}</span>
            <span>{2+2}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <ul>
                {
                    this.state.tags.map(tag => <li key={tag}>{ tag }</li>)
                }

            </ul>
        </div>
            );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount()
    {
        const {count}=this.state;
        return count === 0 ?<h1>Zero</h1> : count; 
    }
}
 
export default Counter;