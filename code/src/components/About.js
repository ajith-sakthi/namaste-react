import Userfun from "./Userfun";
import UserCls from "./UserCls";
import {Component} from "react";

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
                {/* <Userfun name={"Ajith fun"}/> */}
    
                <UserCls/> 
            </div>
        )
}
}

export default About;