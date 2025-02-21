
export const Categories = [
  {
    name: 'Burger',
    description: 'The term hot dog can also refer to the sausage itself.',
    cover: require('@/assets/images/Burger.png')
  },
  {
    name: 'Donuts',
    description: 'The term hot dog can also refer to the sausage itself.',
    cover: require('@/assets/images/tridonut.png')
  },
]

export const Foods = [
  {
    id: 0,
    name: 'Hotdog',
    category: 'Burger',
    description: 'The term hot dog can also refer to the sausage itself.',
    price: 4.27,
    stars: 4,
    cover: require('@/assets/images/HotDog.png')
  },
  {
    id: 1,
    name: 'Burger',
    category: 'Burger',
    description: 'The term hot dog can also refer to the sausage itself.',
    price: 30.27,
    stars: 5,
    cover: require('@/assets/images/Burger.png')
  },
  {
    id: 2,
    name: 'Chips',
    category: 'Burger',
    description: 'The term hot dog can also refer to the sausage itself.',
    price: 10.2,
    stars: 4,
    cover: require('@/assets/images/FriesFront.png')
  },
  {
    id: 3,
    name: 'Spudnut',
    category: 'Donuts',
    description: 'The term hot dog can also refer to the sausage itself.',
    stars: 2,
    size: {
      S: {
        calories: "479",
        weight: "400",
        price: 7.30,
      },
      M: {
        calories: "879",
        weight: "700",
        price: 17.30,
      },
      L: {
        calories: "1379",
        weight: "1400",
        price: 27.30,
      }
    },
    cover: require('@/assets/images/spudnut.png')
  },
  {
    id: 4,
    name: 'Ube',
    category: 'Donuts',
    description: 'The term hot dog can also refer to the sausage itself.',
    price: 18.27,
    stars: 4,
    size: {
      S: {
        calories: "479",
        weight: "400",
        price: 7.30,
      },
      M: {
        calories: "879",
        weight: "700",
        price: 17.30,
      },
      L: {
        calories: "1379",
        weight: "1400",
        price: 27.30,
      }
    },
    cover: require('@/assets/images/tridonut.png')
  },
  {
    id: 5,
    name: 'Vanilla',
    category: 'Donuts',
    description: 'The term hot dog can also refer to the sausage itself.',
    price: 18.27,
    stars: 3,
    size: {
      S: {
        calories: "479",
        weight: "400",
        price: 7.30,
      },
      M: {
        calories: "879",
        weight: "700",
        price: 17.30,
      },
      L: {
        calories: "1379",
        weight: "1400",
        price: 27.30,
      }
    },
    cover: require('@/assets/images/tridonut.png')
  },
]
