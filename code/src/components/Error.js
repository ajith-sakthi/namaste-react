import {useRouteError} from "react-router-dom";

const Error=()=>{
    const apperror= useRouteError();
    console.log(apperror);
    return (
        <div>
            <h1>Hey curious dev!!</h1>
            <h2>{apperror.status}:{apperror.statusText}</h2>
            <h3>Something went wrong!!!</h3>
            <h4>Check your side once</h4>
           
        </div>
    )
}

export default Error;