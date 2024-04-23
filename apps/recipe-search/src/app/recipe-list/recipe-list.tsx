import { Search } from '@mui/icons-material'
import {
  Autocomplete,
  Button,
  Chip,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import loadingImg from 'assets/sk.png'
import fetch from 'cross-fetch'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { Hits, Recipe } from '../models'
import RecipeItem from '../recipe-item/recipe-item'
import { keepLastString } from '../utils'

/* eslint-disable-next-line */
export interface RecipeListProps {}

const options = [
  {
    type: 'diet',
    title: 'Vegetarian',
  },
  { title: 'Vegan', type: 'diet' },
  { title: 'Paleo', type: 'diet' },
  { title: 'High-Fiber', type: 'diet' },
  { title: 'High-Protein', type: 'diet' },
  { title: 'Low-Carb', type: 'diet' },
  { title: 'Low-Fat', type: 'diet' },
  { title: 'Low-Sodium', type: 'diet' },
  { title: 'Low-Sugar', type: 'diet' },
  { title: 'Alcohol-Free', type: 'diet' },
  { title: 'Balanced', type: 'diet' },
  { title: 'Immunity', type: 'diet' },
  { title: 'Gluten', type: 'health' },
  { title: 'Dairy', type: 'health' },
  { title: 'Eggs', type: 'health' },
  { title: 'Soy', type: 'health' },
  { title: 'Wheat', type: 'health' },
  { title: 'Fish', type: 'health' },
  { title: 'Shellfish', type: 'health' },
  { title: 'Tree-Nuts', type: 'health' },
  { title: 'Peanuts', type: 'health' },
]

const getApiResponse = async <T,>(queries: {
  q?: string
  health?: string[]
  diet?: string[]
}): Promise<T> => {
  const appId = process.env.NX_APP_ID
  const appKey = process.env.NX_APP_KEY
  const query = queryString.stringify(queries)
  const api_url = `https://api.edamam.com/api/recipes/v2?${query}&app_key=${appKey}&type=public&app_id=${appId}`

  const response = await fetch(api_url)
  const data = (await response.json()) as Promise<T>

  return data
}
export function RecipeList(props: RecipeListProps) {
  const [recipes, setRecipes] = useState<Recipe[]>()
  const [links, setLinks] = useState<Hits['_links']>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [query, setQuery] = useState<{
    q?: string
    diet?: string[]
    health?: string[]
  }>({ q: 'kale salad' })
  console.log('🚀 ~ RecipeList ~ query:', query)

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true)
      const response = await getApiResponse<Hits>({ ...query })
      setIsLoading(false)

      setRecipes(response.hits?.map((h) => h.recipe) ?? [])
      setLinks(response?._links ?? {})
    }
    fetchRecipes()
  }, [query])

  const onNext = async (nextUrl: string) => {
    setIsLoading(true)
    const response = await fetch(nextUrl)
    const data = (await response.json()) as Hits
    setIsLoading(false)
    setRecipes(data.hits?.map((h) => h.recipe) ?? [])
  }

  const onChange = (
    e: React.SyntheticEvent,
    _value: (
      | string
      | {
          type: string
          title: string
        }
    )[]
  ) => {
    const value = keepLastString(_value)
    const q = (value.find((item) => typeof item === 'string') as string) ?? ''
    const diet = value
      .filter((item) => typeof item !== 'string' && item.type === 'diet')
      .map((item) =>
        (
          item as {
            type: string
            title: string
          }
        ).title.toLowerCase()
      )
    const health = value
      .filter((item) => typeof item !== 'string' && item.type === 'health')
      .map((item) =>
        (
          item as {
            type: string
            title: string
          }
        ).title.toLowerCase()
      )

    setQuery({
      q,
      diet,
      health,
    })
  }

  return (
    <Grid container gap={8}>
      <Autocomplete
        multiple
        id="grouped-demo"
        options={options}
        groupBy={(option) => option.type}
        getOptionLabel={(option) => option.title}
        sx={{ width: '100%' }}
        renderTags={(tagValue, getTagProps) => {
          return keepLastString(tagValue).map((option, index) => (
            <Chip
              label={typeof option === 'string' ? option : option.title}
              {...getTagProps({ index })}
              icon={typeof option === 'string' ? <Search /> : undefined}
            />
          ))
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search recipes" />
        )}
        freeSolo
        defaultValue={[query.q ?? '']}
        onChange={onChange}
      />
      <Grid container spacing={4} justifyContent="center">
        {isLoading ? (
          <img alt="loading" src={loadingImg} width={'100%'} />
        ) : recipes?.length ? (
          recipes?.map((r: Recipe) => (
            <Grid item sm={3} key={r.uri}>
              <RecipeItem recipe={r} />
            </Grid>
          ))
        ) : (
          <Typography>No Result</Typography>
        )}
      </Grid>
      <Grid>
        {links?.next?.href && (
          <Button onClick={() => onNext(links?.next?.href as string)}>
            next page
          </Button>
        )}
      </Grid>
    </Grid>
  )
}

export default RecipeList
