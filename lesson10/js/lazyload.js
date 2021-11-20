const images = document.querySelectorAll('[data-src]')

const preloadImage = (image) => {
  const src = image.getAttribute('data-src')
  if (!src) {
    return
  } else {
    image.src = src
    image.onload = () => {
      image.removeAttribute('data-src')
    }
  }
}

const imageOptions = {
  threshold: 0,
  rootMargin: '0px 0px 300px 0px'
}

const addLazyLoad = (images) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        } else {
          const image = entry.target
          preloadImage(image)
          observer.unobserve(image)
        }
      })
    }, imageOptions)

    images.forEach((image) => {
      observer.observe(image)
    })
  } else {
    images.forEach(function (image) {
      image.src = image.dataset.src
    })
  }
}

addLazyLoad(images)
