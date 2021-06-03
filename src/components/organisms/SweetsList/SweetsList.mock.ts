const sweetsList = [
  'Tiramisu',
  'Brownies',
  // 'Macarons',
  // 'Mousse',
  // 'Doughnuts',
  // 'Churros',
  // 'Cherry Pie',
  // 'Pudding',
  // 'Trifle',
  // 'Gelato',
  // 'Brulee',
  // 'Cookies',
  // 'Pound Cake',
  // 'Madeleines',
  // 'Cracker',
  // 'Pancakes',
  // 'Eclair',
  // 'Tart',
  // 'Cupcake',
  // 'Milkshake',
]

export const sweetsListMockData = async () => {
  const keywords = [
    'sweets', //
    'desserts', //
    'cake', //
  ].join(',')

  const imageUrlsPromise = sweetsList.map((_, i) =>
    fetch(
      `https://source.unsplash.com/320x320/?sig=${i}&${keywords}`,
    ),
  )

  const imageUrls = await Promise.all(
    imageUrlsPromise,
  ).then(dataFetched => dataFetched.map(data => data.url))

  const [minPrice, maxPrice] = [4, 27]

  const randomPrice = (min = minPrice, max = maxPrice) =>
    parseFloat((Math.random() * (max - min) + min).toFixed(1))

  return sweetsList.map((sweetsName, i) => ({
    name: sweetsName,
    price: randomPrice(),
    imageUrl: imageUrls[i],
    href: imageUrls[i],
  }))
}
