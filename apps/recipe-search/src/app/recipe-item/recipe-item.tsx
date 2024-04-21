import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import { Recipe } from '../models'

export interface RecipeItemProps {
  recipe: Recipe
}

export function RecipeItem(props: RecipeItemProps) {
  const { recipe } = props

  return (
    <Card sx={{ minHeight: 500, maxHeight: 500, overflow: 'auto' }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" sx={{ bgcolor: '#063B40' }}>
            {recipe.label[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={recipe.label}
        subheader={recipe.source}
      />
      <CardMedia
        sx={{ height: 0, pt: 25 }}
        image={recipe.image}
        title={recipe.label}
      />
      <CardContent sx={{ minHeight: 150, maxHeight: 150, overflow: 'auto' }}>
        <Typography variant="body2" color="textSecondary" component="p">
          {recipe.ingredientLines.map((i) => `${i};`)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default RecipeItem
