export default function animOnScroll(...elements) {
  elements.forEach((el) => {
    const animItemHeight = el?.current?.offsetHeight;
    const animItemOffset = el?.current?.getBoundingClientRect().top;

    if (animItemOffset - animItemHeight <= animItemHeight) {
      el.current.classList.add("_transition");
      el.current.classList.remove("_animated");
    }
  });
}
