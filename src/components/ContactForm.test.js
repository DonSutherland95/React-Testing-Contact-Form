import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without errors", ()=>{
    render(<ContactForm />);
});

test("User can fill out and submit form", ()=>{
    //Arrange: render component
    render(<ContactForm />);

    //Act:
    //1. get access to form fields
    const firstNameInput = screen.getByPlaceholderText('Edd');
    const lastNameInput = screen.getByPlaceholderText('Burke');
    const emailInput = screen.getByPlaceholderText('bluebill1049@hotmail.com');
    const messageInput = screen.getByPlaceholderText('message');

    

    //2. add text to our fields
    fireEvent.change(firstNameInput, { target:{ value: 'edd', name:'firstName'}});
    fireEvent.change(lastNameInput, { target: { value: 'burke', name:'lastName'}});
    fireEvent.change(emailInput, { target:{ value:'edd@gmail.com', name:'email'}});
    fireEvent.change(messageInput, { target:{ value: 'my name is ed', name:'message'}});

    //3. get access to and click our button
    const button = screen.getByRole("submitBtn");
    fireEvent.click(button);

})