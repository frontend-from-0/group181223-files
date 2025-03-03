import { expect, test } from '@playwright/test';

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should render home page correctly', async ({ page }) => {
    const recipeListItems = await page.getByTestId('recipe-list-item').all();
    const firstListItemBadge = await page.getByTestId('category-badge').first();

    await expect(page.getByTestId('home-page-title')).toHaveText('Recipe App');
    await expect(page.getByTestId('recipe-list')).toBeInViewport();
    await expect(recipeListItems.length).toBe(17);
    await expect(page.getByRole('img', { name: 'Fish pie' })).toBeInViewport();
    await expect(firstListItemBadge).toHaveText('Seafood');
  });

  test('should redirect user to recipe details page upon click on the recipe name', async ({
    page,
  }) => {
    await page.getByRole('link', { name: 'Fish pie' }).click();

    await expect(page.getByTestId('recipe-name')).toHaveText(/Fish pie/gi);
  });
});
