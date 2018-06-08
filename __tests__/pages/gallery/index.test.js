/* global describe, test, expect */
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Gallery from "../../../src/pages/about/index";

Enzyme.configure({ adapter: new Adapter() });

describe("<Gallery />", () => {
  test("should render correctly.", () => {
    const wrapper = mount(<Gallery />);
    expect(wrapper).toMatchSnapshot();
  });
});
