import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from './index.js';


describe("Counter Tests" , () =>{
    let increaseBtn, decreaseBtn, count;

    //her testten önce çalışır
    beforeEach(()=>{
        console.log("Her testten önce bir kere çalışacağım.");
        render(<Counter />);
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
        count = screen.getByText("0");

    });

    //tüm testlerden önce bir kere çalışır, bir daha çalışmaz.
    beforeAll(()=>{
        console.log("İlk başta bir kere çalışacağım");
    });

    afterEach(()=>{
        console.log("Her testten sonra bir kere çalışacağım");
    });

    afterAll(()=>{
        console.log("En son bir kere çalışacağım.");
    });
    // test("increase btn");
    it("increase btn", ()=>{

        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    });

    test("decrease btn", ()=>{
       
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    });
});
