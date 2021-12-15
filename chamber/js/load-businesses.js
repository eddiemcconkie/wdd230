const loadBusinesses = async () => {
  const businessList = document.getElementById('businessList')
  // const businessData = await fetch('./data/businesses.json')
  const businessData = await fetch('data/businesses.json')
  const businessJson = await businessData.json()
  businessList.innerHTML = businessJson
    .map((business) => {
      const { name, slogan, membershipYear, address, phone, website, websiteShort, imageUrl } =
        business
      return `
        <div class="business">
          <div class="business__image-container">
            <img src="${imageUrl}" alt="${name}" class="business__image" />
          </div>
          <section class="business__info">
            <h3 class="business__name">${name}</h3>
            <em class="business__slogan">${slogan}</em>
            <p class="business__membership">Member of SLC Chamber since ${membershipYear}</p>
            <address class="business__contact">
              <span>Contact us at</span>
              <ul class="business__contact-list">
                <li>${address[0]}</li>
                <li>${address[1]}</li>
                <li>${phone}</li>
                <li><a href="${website}">${websiteShort}</a></li>
              </ul>
            </address>
          </section>
        </div>
        `
    })
    .join('')
}
loadBusinesses()
