import Userfun from "./Userfun";
import UserCls from "./UserCls";
import {Component} from "react";
import Usercontext from "../utils/Usercontext";
class About extends Component{
    componentDidMount(){
        console.log("parent component did mount");
    }
    render(){
        console.log("parent render")
        return(
            <div>
                <h1>About Us</h1>
                <h2>Hi dev's, welcome to CalmMind restaurant</h2>
                <Usercontext.Consumer>
                {({loggedInuser})=>loggedInuser}
                </Usercontext.Consumer>
                
                {/* <Userfun name={"Ajith fun"}/> */}
    
                <UserCls/> 
            </div>
        )
}
}

export default About;