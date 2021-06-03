const sweetsList = [
  'Tiramisu',
  'Brownies',
  'Macarons',
  'Mousse',
  'Doughnuts',
  'Churros',
  'Cherry Pie',
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

export const sweetsListMockData = sweetsList.map(
  (sweetsName, i) => {
    const randomNumber = (min, max, dec = 0) =>
      parseFloat(
        (Math.random() * (max - min) + min).toFixed(dec),
      )

    const keywords = [
      'cake', //
      'sweets',
      'desserts',
    ].join(',')

    const [minPrice, maxPrice] = [4, 27]

    return {
      name: sweetsName,
      price: randomNumber(minPrice, maxPrice, 1),
      href: `https://source.unsplash.com/320x320/?${keywords}`,
      imageUrl: `https://source.unsplash.com/320x320/?sig=${i}&${keywords}`,
    }
  },
)
