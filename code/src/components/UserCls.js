import React from "react";

class UserCls extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state={
            userInfo:{
                name:"Ajith",
                location:"default"
            }
        }
    }
   
    async componentDidMount(){
            const data = await fetch("https://api.github.com/users/ajith-sakthi");
            const json= await data.json()

            this.setState({
                userInfo:json
        })
    }
    render(){
        console.log("child render")
        const{name,location,avatar_url}=this.state.userInfo;
        //Never update state variable directly it doesn't update
        return(
            <div className="user-card">
                {/* <img src={avatar_url}/> */}
                <h2>Name:{name}</h2>
                <h3>Location:{location} </h3>
                <h4>contact:@curiousdev </h4>
            </div>
        )
    }
}

export default UserCls;

/**
 * ----MOUNTING cycle(instance created)------
 * ---render phase starts-----
 * -constructor
 * -render() call--render the default value
 * 
 * -----commit phase starts---
 * -default value -DOM manipulation<html element>
 * -componentDidMount() called
 *   -fetch API
 *   -
 * ------UPDATE cycle starts-----
 * ----render phase starts-----
 * - this.setStart() called
 * - render () called 
 * 
 * ------Commit phase starts----
 * -API value DOM manipulation <html element> happened
 * -componentDidUpdate() called
 * 
 
 */