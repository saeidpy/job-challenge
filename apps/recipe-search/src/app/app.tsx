import { CssBaseline, Paper, Stack, Typography } from '@mui/material'
import RecipeList from './recipe-list/recipe-list'

export function App() {
  return (
    <>
      <CssBaseline />
      <Paper elevation={5} sx={{ m: 5, p: 5 }}>
        <Typography variant="h2" sx={{ pb: 2 }}>
          Hyphen Candidate Project
        </Typography>
        <RecipeList />
      </Paper>
    </>
  )
}

export default App
