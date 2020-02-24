import React from "react"
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm"

test("form contains all required inputs", () => {
    const { getByLabelText } = render(<ContactForm />);

    getByLabelText(/first name/i);
    getByLabelText(/message/i);
    getByLabelText(/last name/i);
    getByLabelText(/email/i)
})

test("form submit adds new contact object to list", () => {
    const { getByLabelText, getByTestId } = render(<ContactForm />);

    const firstNameInput = getByLabelText(/first name/i);
    const messageInput = getByLabelText(/message/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);

    fireEvent.change(firstNameInput, { target : { value: 'Test First Name' } })
    fireEvent.change(messageInput, { target : { value: 'Test Message' } })
    fireEvent.change(lastNameInput, { target : { value: 'Test Last Name' } })
    fireEvent.change(emailInput, { target : { value: 'Test Email' } })

    expect(firstNameInput.value).toBe('Test First Name');
    expect(messageInput.value).toBe('Test Message');
    expect(lastNameInput.value).toBe('Test Last Name');
    expect(emailInput.value).toBe('Test Email');

    const submit = getByTestId(/submit/i)
    expect(submit).toBeInTheDocument()

})