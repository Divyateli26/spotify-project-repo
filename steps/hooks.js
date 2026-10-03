import { createBdd } from 'playwright-bdd';

const { Before, After, BeforeAll, AfterAll } = createBdd();

// Poore test suite start hone par chalega
BeforeAll(async () => {
  console.log('🚀 Test Suite Execution Started on Sauce Demo Store...');
});

// Har Scenario start hone se pehle chalega
Before(async ({ page, $testInfo }) => {
  console.log(`▶ Starting Scenario: ${$testInfo.title}`);
  
  // Browser viewport set aur default navigation timeout
  await page.setViewportSize({ width: 1280, height: 720 });
});

// Har Scenario finish hone par chalega
After(async ({ page, $testInfo }) => {
  // Agar koi test FAIL hota hai toh HTML Report me Screenshot attach karega
  if ($testInfo.status !==$testInfo.expectedStatus) {
    console.log(`❌ Scenario Failed: ${$testInfo.title}`);
    
    const screenshot = await page.screenshot({ fullPage: true });
    await $testInfo.attach('failure-screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  } else {
    console.log(`✅ Scenario Passed: ${$testInfo.title}`);
  }
});

// Poore test suite finish hone par chalega
AfterAll(async () => {
  console.log('🏁 Test Suite Execution Completed!');
});