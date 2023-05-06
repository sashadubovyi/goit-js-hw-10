export function renderCountryCard(data) {
  console.log(data);
  const markup = data
    .map(({ name, capital, population, flags, languages }) => {
      return `
      <span class="countryCardName">
        <img class="imgFlag" src="${flags.svg}" alt="${
        flags.alt
      }" width="60px" height="50px">
        <h1 class="country">${name.official}</h1>
      </span>
      <p class="capital"><strong>Capital:</strong> ${capital}</p>
      <p class="population"><strong>Population:</strong> ${population.toLocaleString()} peoples</p>
      <p class="languages"><strong>Languages:</strong> ${Object.values(
        languages
      )}</p>
      `;
    })
    .join('');
  return markup;
}

export function renderCountryList(data) {
  const markup = data
    .map(({ name, flags }) => {
      return `
      <span class="countryCardName">
        <img class="imgFlag" src="${flags.svg}" alt="${flags.alt}" width="25px" height="20px">
        <p class="country">${name.official}</p>
      </span>
    `;
    })
    .join('');
  return markup;
}
