function scrollDocument() {
  window.scrollTo({
    top: document.documentElement.offsetHeight,

    behavior: 'smooth',
  });
}

export default scrollDocument;
