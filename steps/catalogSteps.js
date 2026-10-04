import { createBdd } from 'playwright-bdd';
import { CatalogPage } from '../pages/CatalogPage';

const { Then } = createBdd();

Then('Catalog page URL me {string} hona chahiye', async ({ page }, urlKeyword) => {
  const catalogPage = new CatalogPage(page);
  await catalogPage.verifyCatalogUrl(urlKeyword);
});

Then('Catalog collection heading visible honi chahiye', async ({ page }) => {
  const catalogPage = new CatalogPage(page);
  await catalogPage.verifyCatalogHeading();
});