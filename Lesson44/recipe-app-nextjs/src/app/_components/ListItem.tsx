import Image from 'next/image';

export const ListItem = ({recipe}) => {
  return (
    <div className='p-4 border rounded-md shadow-md inline-block max-w-80'>
      <Image
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width={300}
        height={150}
      />
      <h2 className='text-lg uppercase text-gray-800'>{recipe.strMeal}</h2>
      <div className='mt-4'>
        <span className='text-xs uppercase bg-gray-400 text-gray-100 text-sm py-2 px-4 rounded-full'>{recipe.strCategory}</span>
      </div>

    </div>
  )
};