import { expect, test } from '@playwright/test';

test('user can successfully complete the checkout', async ({ page }) => {
    // incremented timeout due to next js slow navigation in dev mode
    test.setTimeout(60000);

    // from the homepage
    await page.goto('/');
    await expect(
        page.getByRole('heading', { name: /welcome to mini-commerce/i })
    ).toBeVisible();

    // add the item to cart
    const productCardLocator = page.locator('.product-card');
    const firstProduct = productCardLocator.first();

    await firstProduct.getByRole('button', { name: /add to cart/i }).click();
    await expect(
        firstProduct.getByRole('button', { name: /remove from cart/i })
    ).toBeVisible();

    // navigate to cart page
    const cartLinkLocator = page.locator('.cart-link');
    await expect(cartLinkLocator).toBeVisible();
    await cartLinkLocator.click();
    await page.waitForURL('**/cart');
    await expect(
        page.getByRole('heading', { name: /shopping cart/i })
    ).toBeVisible();

    // navigate to checkout page
    const checkoutLinkLocator = page.locator('.checkout-link');
    await checkoutLinkLocator.click();
    await page.waitForURL('**/checkout');
    await expect(
        page.getByRole('heading', { name: /checkout/i })
    ).toBeVisible();

    // fill out the shipping and payment forms
    await page.getByLabel('Address').fill('123 Test Street');
    await page.getByLabel('City').fill('Testville');
    await page.getByLabel('Full Name').fill('John Doe');
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByPlaceholder('Card Number').fill('4242 4242 4242 ');
    await page.getByPlaceholder('MM / YY').fill('12/28');
    await page.getByPlaceholder('CVC').fill('123');

    // place the order
    await page.getByRole('button', { name: /place order/i }).click();

    // verify the "Thank You" page and order-id
    await expect(
        page.getByRole('heading', { name: /thank you for your order/i })
    ).toBeVisible();

    const orderIdText = page.getByText(/Your Order ID is:/);
    await expect(orderIdText).toBeVisible();
    await expect(orderIdText).toContainText(/MC-/);
});
