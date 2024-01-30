import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Rescards from "../Rescards";
import MOCK_DATA from "../Mocks/resCard.json"


it ("should render with props in rescards component",()=>{
    render (<Rescards resData={MOCK_DATA}/>)
    const name= screen.getByText("Veena Stores");
    expect(name).toBeInTheDocument();

})