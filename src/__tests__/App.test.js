import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import Users from "../user/pages/Users";
import UserPlaces from "../places/pages/UserPlaces";
import Auth from "../user/pages/Auth";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("Should render App Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Route")).toHaveLength(3);
    expect(wrapper.find("Route").at(0).props().path).toEqual("/");
    expect(wrapper.find("Route").at(1).props().path).toEqual("/:userId/places");
    expect(wrapper.find("Route").at(2).props().path).toEqual("/auth");
  });
  it("Should render Users Component for default route", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Route[path='/']").contains(<Users />)).toBe(true);
  });
  it("Should render UserPlaces Component for /:userId/places route", () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.find("Route[path='/:userId/places']").contains(<UserPlaces />)
    ).toBe(true);
  });
  it("Should render Auth Component for /auth route", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Route[path='/auth']").contains(<Auth />)).toBe(true);
  });
});
