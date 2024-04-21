import { render, waitFor } from '@testing-library/react'
import crossFetch from 'cross-fetch'

import App from './app'

const mockResponse = {
  from: 1,
  to: 20,
  count: 3754,
  _links: {
    next: {
      href: 'https://api.edamam.com/api/recipes/v2?q=kale%20salad&app_key=f4921915a1c5068a745190413e8f07dd&_cont=CHcVQBtNNQphDmgVQntAEX4BYlV7GgEGRG1CAmYSYlRwBgsFUXlSBDZFMAZ2UQIHEWdEV2AQYlFwDQsAS2JICmZAN1YiBwMVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=60247ce5',
      title: 'Next page',
    },
  },
  hits: [
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_759e1d98316e714370689b716a9c2326',
        label: 'Coconut Rice, Tofu, And Kale Salad',
        image:
          'https://www.edamam.com/web-img/f39/f391c6b8126c5f8bf079f1b908bab7db.jpg',
        images: {
          THUMBNAIL: {
            url: 'https://www.edamam.com/web-img/f39/f391c6b8126c5f8bf079f1b908bab7db-s.jpg',
            width: 100,
            height: 100,
          },
          SMALL: {
            url: 'https://www.edamam.com/web-img/f39/f391c6b8126c5f8bf079f1b908bab7db-m.jpg',
            width: 200,
            height: 200,
          },
          REGULAR: {
            url: 'https://www.edamam.com/web-img/f39/f391c6b8126c5f8bf079f1b908bab7db.jpg',
            width: 300,
            height: 300,
          },
          LARGE: {
            url: 'https://www.edamam.com/web-img/f39/f391c6b8126c5f8bf079f1b908bab7db-l.jpg',
            width: 600,
            height: 600,
          },
        },
        source: 'Bon Appetit',
        url: 'http://www.bonappetit.com/recipe/coconut-rice-tofu-kale-salad',
        shareAs:
          'http://www.edamam.com/recipe/coconut-rice-tofu-and-kale-salad-759e1d98316e714370689b716a9c2326/kale+salad',
        yield: 1,
        dietLabels: ['Balanced', 'High-Fiber', 'Low-Sodium'],
        healthLabels: [
          'Sugar-Conscious',
          'Vegan',
          'Vegetarian',
          'Pescatarian',
          'Dairy-Free',
        ],
        cautions: ['Gluten', 'Wheat', 'Sulfites', 'FODMAP'],
        ingredientLines: [
          '1/2 cup leftover Black Rice with Coconut',
          '3 ounces leftover Tofu',
          '2 cups shredded Tuscan kale',
          '2 tablespoons Sesame-Miso Vinaigrette',
          '2 tablespoons Spiced Peita and Cashew Crunch',
        ],
        ingredients: [
          {
            text: '1/2 cup leftover Black Rice with Coconut',
            quantity: 0.5,
            measure: 'cup',
            food: 'Black Rice',
            weight: 95,
            foodCategory: 'grains',
            foodId: 'food_aro09r9avsklizbsberuoaegj0uh',
            image:
              'https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg',
          },
          {
            text: '3 ounces leftover Tofu',
            quantity: 3,
            measure: 'ounce',
            food: 'Tofu',
            weight: 85.048569375,
            foodCategory: 'plant-based protein',
            foodId: 'food_a269ixea1yf51xbfwgnq2boiwc7x',
            image:
              'https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg',
          },
        ],
        calories: 659.5689985608639,
        totalWeight: 261.54856937470413,
        totalTime: 0,
        cuisineType: ['asian'],
        mealType: ['lunch/dinner'],
        dishType: ['salad'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 659.5689985608639,
            unit: 'kcal',
          },
          FAT: {
            label: 'Total lipid (fat)',
            quantity: 30.095875342807762,
            unit: 'g',
          },
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 32.97844992804319,
            unit: '%',
          },
          FAT: {
            label: 'Fat',
            quantity: 46.30134668124271,
            unit: '%',
          },
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 30.095875342807762,
            hasRDI: true,
            daily: 46.30134668124271,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 5.546314153683222,
                hasRDI: true,
                daily: 27.731570768416113,
                unit: 'g',
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g',
              },
            ],
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 82.68207082234818,
            hasRDI: true,
            daily: 27.56069027411606,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g',
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 5.724937124365236,
                hasRDI: true,
                daily: 22.899748497460948,
                unit: 'g',
              },
            ],
          },
        ],
      },
      _links: {
        self: {
          href: 'https://api.edamam.com/api/recipes/v2/759e1d98316e714370689b716a9c2326?type=public&app_id=60247ce5&app_key=f4921915a1c5068a745190413e8f07dd',
          title: 'Self',
        },
      },
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_c62ba1fd02bb59855571837af1641939',
        label: 'Lemony Kale Salad recipes',
        image:
          'https://www.edamam.com/web-img/430/4305f88bd74e56a434785c0d65c45716',
        images: {
          THUMBNAIL: {
            url: 'https://www.edamam.com/web-img/430/4305f88bd74e56a434785c0d65c45716-s',
            width: 100,
            height: 100,
          },
          SMALL: {
            url: 'https://www.edamam.com/web-img/430/4305f88bd74e56a434785c0d65c45716-m',
            width: 200,
            height: 200,
          },
          REGULAR: {
            url: 'https://www.edamam.com/web-img/430/4305f88bd74e56a434785c0d65c45716',
            width: 300,
            height: 300,
          },
        },
        source: 'Martha Stewart',
        url: 'http://www.marthastewart.com/342168/lemony-kale-salad',
        shareAs:
          'http://www.edamam.com/recipe/lemony-kale-salad-recipes-c62ba1fd02bb59855571837af1641939/kale+salad',
        yield: 4,
        dietLabels: ['Low-Carb'],
        healthLabels: [
          'Sugar-Conscious',
          'Keto-Friendly',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '1 tablespoon lemon zest',
          'Juice of 1 lemon',
          '1/4 cup extra-virgin olive oil',
          '8 cups coarsely chopped kale, ribs removed',
          '1/2 cup shaved Parmesan cheese',
          '1/3 cup toasted blanched hazelnuts, coarsely chopped',
          'ground black pepper',
          'coarse salt',
        ],
        ingredients: [
          {
            text: '1 tablespoon lemon zest',
            quantity: 1,
            measure: 'tablespoon',
            food: 'lemon zest',
            weight: 6,
            foodCategory: 'fruit',
            foodId: 'food_bpg66j3a5vjuuga36uiiyaqeazpd',
            image:
              'https://www.edamam.com/food-img/540/5405605c8e9b284243f06c0b1587ab6f.jpg',
          },
          {
            text: 'Juice of 1 lemon',
            quantity: 1,
            measure: '<unit>',
            food: 'lemon',
            weight: 58,
            foodCategory: 'fruit',
            foodId: 'food_a6uzc62astrxcgbtzyq59b6fncrr',
            image:
              'https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg',
          },
        ],
        calories: 1136.5353590312502,
        totalWeight: 366.44918437499996,
        totalTime: 20,
        cuisineType: ['mediterranean'],
        mealType: ['lunch/dinner'],
        dishType: ['salad'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 1136.5353590312502,
            unit: 'kcal',
          },
          FAT: {
            label: 'Total lipid (fat)',
            quantity: 101.961043723125,
            unit: 'g',
          },
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 56.826767951562516,
            unit: '%',
          },
          FAT: {
            label: 'Fat',
            quantity: 156.86314418942308,
            unit: '%',
          },
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 101.961043723125,
            hasRDI: true,
            daily: 156.86314418942308,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 21.823164959000007,
                hasRDI: true,
                daily: 109.11582479500002,
                unit: 'g',
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g',
              },
            ],
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 28.175700595312502,
            hasRDI: true,
            daily: 9.3919001984375,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 0,
                hasRDI: false,
                daily: 0,
                unit: 'g',
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 11.510303021875,
                hasRDI: true,
                daily: 46.0412120875,
                unit: 'g',
              },
            ],
          },
        ],
      },
      _links: {
        self: {
          href: 'https://api.edamam.com/api/recipes/v2/c62ba1fd02bb59855571837af1641939?type=public&app_id=60247ce5&app_key=f4921915a1c5068a745190413e8f07dd',
          title: 'Self',
        },
      },
    },
  ],
}

describe('App', () => {
  beforeEach(() => {
    crossFetch.mockResolvedValue({
      status: 200,
      json: () => Promise.resolve(mockResponse),
    })
  })

  it('should render successfully', async () => {
    const { baseElement } = render(<App />)

    await waitFor(() => expect(baseElement).toBeTruthy())
  })

  it('should have a greeting as the title', async () => {
    const { getByText } = render(<App />)

    await waitFor(() =>
      expect(getByText('Hyphen Candidate Project')).toBeTruthy()
    )
  })
})
