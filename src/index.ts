window.Webflow ||= [];
window.Webflow.push(() => {
  const counter_selector = '[ts-element="counter"]';
  const count_selector = '[ts-element="count"]';

  const counter = document.querySelector<HTMLElement>(counter_selector);
  if (!counter) return;

  const count = document.querySelectorAll(count_selector).length;

  counter.innerHTML = count.toString();
});
