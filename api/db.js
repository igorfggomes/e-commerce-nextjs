const faker = require('faker');

const TOTAL_PAGES = 5;

const baseProducts = [
  { name: 'Caneca Vasco', description: faker.lorem.paragraph(), image_url: 'https://i.postimg.cc/6pWyHsBC/caneca-vasco.jpg', category: 'mugs' },
  { name: 'Camisa Flamengo', description: faker.lorem.paragraph(), image_url: 'https://i.postimg.cc/14hBwm6x/camiseta-flamengo.png', category: 't-shirts' },
  { name: 'Caneca Grêmio', description: faker.lorem.paragraph(), image_url: 'https://i.postimg.cc/N0P99Nqm/caneca-gremio.jpg', category: 'mugs' },
  { name: 'Camisa Fluminense', description: faker.lorem.paragraph(), image_url: 'https://i.postimg.cc/cC9gGXxF/camiseta-fluminense.png', category: 't-shirts' },
  { name: 'Camisa Cruzeiro', description: faker.lorem.paragraph(), image_url: 'https://i.postimg.cc/kGCbq2Pp/camiseta-cruzeiro.jpg', category: 't-shirts' },
  { name: 'Caneca Palmeiras', description: faker.lorem.paragraph(), image_url: 'https://i.postimg.cc/bYmMGks8/caneca-palmeiras.jpg', category: 'mugs' },
  { name: 'Camisa Palmeiras', description: faker.lorem.paragraph(), image_url: 'https://i.postimg.cc/SKtdS7gt/camiseta-palmeiras.jpg', category: 't-shirts' },
  { name: 'Caneca Fluminense', description: faker.lorem.paragraph(), image_url: 'https://i.postimg.cc/CxBWp5M0/caneca-fluminense.jpg', category: 'mugs' },
  { name: 'Caneca Corinthias', description: faker.lorem.paragraph(), image_url: 'https://i.postimg.cc/jdZsSDrJ/caneca-corinthias.jpg', category: 'mugs' },
  { name: 'Camisa São Paulo', description: faker.lorem.paragraph(), image_url: 'https://i.postimg.cc/VvYL6MG2/camiseta-sao-paulo.png', category: 't-shirts' },
  { name: 'Caneca Flamengo', description: faker.lorem.paragraph(), image_url: 'https://i.postimg.cc/J4KFkJ0M/caneca-flamengo.jpg', category: 'mugs' },
  { name: 'Camisa Grêmio', description: faker.lorem.paragraph(), image_url: 'https://i.postimg.cc/hv5WB7HL/camiseta-gremio.jpg', category: 't-shirts' },
]

const allProducts = new Array(TOTAL_PAGES).fill(1).reduce((acc) => {
  const products = baseProducts.map(product => ({
    ...product, 
    id: faker.datatype.uuid(),
    price_in_cents: faker.datatype.number({
      min: 2000,
      max: 10000,
    }),
    sales: faker.datatype.number(40),
    created_at: faker.date.past()
  })).sort(() => .5 - Math.random());

  return [...acc, ...products]
}, [])

module.exports = {
  products: allProducts
}
