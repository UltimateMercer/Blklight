import { shallowMount } from "@vue/test-utils";
import ImageFilter from "@/components/ImageFilter.vue";

const factory = () => {
  return shallowMount(ImageFilter, {});
};

describe("ImageFilter", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.find("svg").vm).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
