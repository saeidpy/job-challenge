import { render } from '@testing-library/react'
import { Recipe } from '../models'

import RecipeItem from './recipe-item'

describe('RecipeItem', () => {
  const recipe: Recipe = {
    label: 'Coconut Rice, Tofu, And Kale Salad',
    calories: 100,
    cautions: [],
    cuisineType: [],
    dietLabels: [],
    dishType: [],
    healthLabels: [],
    image:
      'https://www.edamam.com/web-img/f39/f391c6b8126c5f8bf079f1b908bab7db.jpg',
    ingredientLines: [],
    mealType: [],
    source: '',
    totalWeight: 0,
    uri: '',
    url: '',
    yield: 0,
  }

  it('should render successfully', () => {
    const { baseElement } = render(<RecipeItem recipe={recipe} />)
    expect(baseElement).toBeTruthy()
  })
})
