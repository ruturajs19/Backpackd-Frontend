import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("Render App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Route")).toHaveLength(3);
    expect(wrapper.find("Route").at(0).props().path).toEqual("/");
    expect(wrapper.find("Route").at(1).props().path).toEqual("/:userId/places");
    expect(wrapper.find("Route").at(2).props().path).toEqual("/auth");
  });
});
