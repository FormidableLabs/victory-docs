/* global describe, test, expect */
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import About from "../../../src/pages/about/index";

Enzyme.configure({ adapter: new Adapter() });

describe("<About />", () => {
  test("should render correctly.", () => {
    const wrapper = mount(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
