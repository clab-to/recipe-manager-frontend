import RecipeCard from './RecipeCard';

const SideScrollArea = () => {
  return (
    <>
      <div className="flex p-5 overflow-x-scroll">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </>
  );
};

export default SideScrollArea;
