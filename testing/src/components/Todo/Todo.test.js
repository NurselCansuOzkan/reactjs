import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from './index.js';

describe("Todo testleri", ()=>{
    let button, input;

    beforeEach(()=>{
        render(<Todo/>);
        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");
    });


    test("Varsayılan olarak girilen 3 nesne render edilmeli", ()=>{
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    });

    test("Input ve dokümanda bulunmalı", ()=>{
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    test("Inputa string girilip butona basılınca listeye eklenmeli", ()=>{
        const name = "Nursel";
        //inputu doldur
        userEvent.type(input, name);

        //butona tıkla
        userEvent.click(button);

        //assertion
        expect(screen.getByText(name)).toBeInTheDocument();;
    })
});
