import BScroll, { Options } from "@better-scroll/core";
import BScrollScrollBar from '@better-scroll/scroll-bar'
import BScrollSlide from "@better-scroll/slide";
import BScrollObserveDOM from "@better-scroll/observe-dom";
BScroll.use(BScrollScrollBar).use(BScrollSlide).use(BScrollObserveDOM);

export default (dom: HTMLElement, options: Options) => {
  return new BScroll(dom, options);
}
