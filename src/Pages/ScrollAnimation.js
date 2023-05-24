export const scrollAnimation = () => {
  const containerAnimation = document.querySelectorAll('.containerAnimation');

  setTimeout(() => {
    const elementInView = (sec, off) => {
      const element = sec.getBoundingClientRect().top;
      return element <= window.innerHeight - off;
    };
    window.addEventListener('scroll', () => {
      let heightSize = 450;
      if (window.innerHeight < 700) {
        heightSize = 300;
      }
      containerAnimation.forEach((e) => {
        if (elementInView(e, heightSize)) {
          for (let i = 0; i <= e.children.length - 1; i++) {
            if (e.children[i].tagName === 'H2') {
              // e.children[i].classList.add('scrollTitleAnim');
              e.children[i].style.opacity = '1';
            }
            setTimeout(() => {
              if (e.children[i].tagName === 'P') {
                e.children[i].style.opacity = '1';
              }
            }, 300);
          }
        }
      });
    });
  }, 200);
};
