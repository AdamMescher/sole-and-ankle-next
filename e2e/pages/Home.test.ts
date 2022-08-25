import { test, expect } from '@playwright/test';

test('should run without errors', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/create next app/i);
});
