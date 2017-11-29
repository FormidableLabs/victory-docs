import React from "react";
import { mount } from "enzyme";
import Gallery from "../../../src/pages/about/index";

describe("<Gallery />", () => {
  test("should render correctly.", () => {
    const wrapper = mount(<Gallery/>);
    expect(wrapper).toMatchSnapshot();
  });
});
