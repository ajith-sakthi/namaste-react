import React from "react";

class UserCls extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        //big object
        this.state={
            count:0,
            count2:2
        }
        console.log("child constructor" )
    }
    componentDidMount(){
        console.log("child component did mount")
    }
    render(){
        console.log("child render")
        const {name,location}=this.props;
        const{count}=this.state;
        //Never update state variable directly it doesn't update
        return(
            <div className="user-card">
                <h1>Count:{count}</h1>
                <button onClick={
                    ()=>{
                        this.setState({
                         count:this.state.count + 1
                        })
                    }
                }>Increase count</button>
                <h2>Name:{name}</h2>
                <h3>Location:{location} </h3>
                <h4>contact:@curiousdev </h4>
            </div>
        )
    }
}

export default UserCls;