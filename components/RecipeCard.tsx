import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const RecipeCard = () => {
  const recipeID = 'temp-recipe-id';
  const userID = 'temp-user-id';
  return (
    <Card className="mx-1 my-5 min-w-72">
      <a href={`/${userID}/${recipeID}`}>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </a>
    </Card>
  );
};

export default RecipeCard;
