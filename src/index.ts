window.Webflow ||= [];
window.Webflow.push(() => {
  // this project is linked to https://webflow-starter-demo.webflow.io/

  // add this attribute to the text element you want the number displayed on
  const counter_selector = '[ts-element="counter"]';
  // add this attribute to a cms collection item in the webflow designer
  const count_selector = '[ts-element="count"]';

  const counter = document.querySelector<HTMLElement>(counter_selector);
  if (!counter) return;

  const count = document.querySelectorAll(count_selector).length;

  counter.innerHTML = count.toString();
});
