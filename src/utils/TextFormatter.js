const AllTextFormatter = () => {
  let texts = document.querySelectorAll('p');
  texts.forEach((text, id) => {
    text = text.innerHTML.replace(/(\s)([\S])[\s]+/g, '$1$2&nbsp;');
    text = text.replace(/(\s)([^<][\S]{1})[\s]+/g, '$1$2&nbsp;');
    text = text.replace(/(\s)([^<][\S]{2})[\s]+/g, '$1$2&nbsp;');
    texts[id].innerHTML = text;
  });
};
export default AllTextFormatter;
