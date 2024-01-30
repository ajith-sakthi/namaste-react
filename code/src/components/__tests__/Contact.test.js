import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact component test Cases",()=>{
    it("should contact component loaded",()=>{
        render(<Contact/>)
    
        const heading=screen.getByRole("heading");
        // Assertion
        expect(heading).toBeInTheDocument();
    
    })
    
    it("should button is loaded",()=>{
        render(<Contact/>);
        // Querying
        const button = screen.getByRole("button");
        // Assertion
        expect(button).toBeInTheDocument();
    })
    
    it("should input load on page",()=>{
        render(<Contact/>);
        const inputName=screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    })
})
