import Header from ".././Header";
import {render,screen, fireEvent} from "@testing-library/react";
import appStore from "../../utils/appStore.js";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";

it("should login button in header component",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );

    const logInButton = screen.getByRole("button");
    
    expect(logInButton).toBeInTheDocument();
})

it("should change login button to logout header component",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    
    );

    const logInbtn=screen.getByRole("button",name="Login");

    fireEvent.click(logInbtn);

    const logOutbtn=screen.getByRole("button", name="Logout");

    expect(logOutbtn).toBeInTheDocument();



});
