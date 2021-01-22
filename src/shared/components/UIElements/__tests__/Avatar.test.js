import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Avatar from "../Avatar";

configure({adapter: new Adapter()})

describe("Avatar",()=>{
    it("Render Avatar", () =>{
        const wrapper = shallow(<Avatar name={"test"} image={"sampleurl"}/>);
        console.log(wrapper.find("div[data-test='avatar-test']").debug())
        expect(wrapper.find("div[data-test='avatar-container-test']")).toHaveLength(1);
        expect(wrapper.find("img[data-test='avatar-image-test']")).toHaveLength(1);
    });
})