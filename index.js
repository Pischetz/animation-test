const test = () => {
  const content = document.getElementById("content-container");
  const wrapper = document.getElementById("wrapper");
  const contentWrappers = document.querySelectorAll(".content-wrapper");

  const animationDuration = 2;
  const baseDelay = 0.2;

  contentWrappers.forEach((element, index) => {
    element.style.animationDuration = `${animationDuration}s`;
    element.style.animationDelay = `${index > 0 ? index - 0.5 : index}s`;

    element.querySelectorAll(".title").forEach((title) => {
      title.style.transitionDelay = `${`${index > 0 ? index - 0.5 : index}s`}`;
    });

    element.querySelectorAll(".text").forEach((text, textIndex) => {
      text.style.animationDelay = `${
        baseDelay +
        (index * 0.3) +
        (textIndex * 0.2)
      }s`;
    });
  });

  wrapper.classList.add("hide");
  content.classList.add("show");
};
