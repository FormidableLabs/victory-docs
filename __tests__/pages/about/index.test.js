/* global describe, test, expect */
import React from "react";
import { mount } from "enzyme";
import About from "../../../src/pages/about/index";

describe("<About />", () => {
  test("should render correctly.", () => {
    const wrapper = mount(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
