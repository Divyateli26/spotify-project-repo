// Generated from: features\sauce_demo.feature
import { test } from "playwright-bdd";

test.describe('Sauce Demo Store Automation Scenarios', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('User Sauce Demo store homepage par navigate karta hai', null, { page }); 
  });
  
  test('Homepage title aur URL verify karna', { tag: ['@smoke', '@regression'] }, async ({ Then, And, page }) => { 
    await Then('Page title me "Sauce Demo" hona chahiye', null, { page }); 
    await And('Page URL me "sauce-demo.myshopify.com" hona chahiye', null, { page }); 
  });

  test.describe('Store par product search karna', () => {

    test('Example #1', { tag: ['@smoke', '@regression'] }, async ({ When, Then, And, page }) => { 
      await When('Search icon par click karke search input me "shirt" type karta hu', null, { page }); 
      await Then('Search results page display hona chahiye', null, { page }); 
      await And('Products list visible honi chahiye', null, { page }); 
    });

    test('Example #2', { tag: ['@smoke', '@regression'] }, async ({ When, Then, And, page }) => { 
      await When('Search icon par click karke search input me "Bag" type karta hu', null, { page }); 
      await Then('Search results page display hona chahiye', null, { page }); 
      await And('Products list visible honi chahiye', null, { page }); 
    });

  });

  test('Navigation links verify karna', { tag: ['@regression'] }, async ({ When, Then, page }) => { 
    await When('Header navigation link "Catalog" par click karta hu', null, { page }); 
    await Then('Page URL me "collections/all" hona chahiye', null, { page }); 
  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks }) => $runBeforeAllHooks(test, {  }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\sauce_demo.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@smoke","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User Sauce Demo store homepage par navigate karta hai","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Page title me \"Sauce Demo\" hona chahiye","stepMatchArguments":[{"group":{"start":14,"value":"\"Sauce Demo\"","children":[{"start":15,"value":"Sauce Demo","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And Page URL me \"sauce-demo.myshopify.com\" hona chahiye","stepMatchArguments":[{"group":{"start":12,"value":"\"sauce-demo.myshopify.com\"","children":[{"start":13,"value":"sauce-demo.myshopify.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":19,"tags":["@smoke","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User Sauce Demo store homepage par navigate karta hai","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Search icon par click karke search input me \"shirt\" type karta hu","stepMatchArguments":[{"group":{"start":44,"value":"\"shirt\"","children":[{"start":45,"value":"shirt","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Search results page display hona chahiye","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And Products list visible honi chahiye","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":20,"tags":["@smoke","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User Sauce Demo store homepage par navigate karta hai","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Search icon par click karke search input me \"Bag\" type karta hu","stepMatchArguments":[{"group":{"start":44,"value":"\"Bag\"","children":[{"start":45,"value":"Bag","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Search results page display hona chahiye","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And Products list visible honi chahiye","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":23,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User Sauce Demo store homepage par navigate karta hai","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When Header navigation link \"Catalog\" par click karta hu","stepMatchArguments":[{"group":{"start":23,"value":"\"Catalog\"","children":[{"start":24,"value":"Catalog","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Page URL me \"collections/all\" hona chahiye","stepMatchArguments":[{"group":{"start":12,"value":"\"collections/all\"","children":[{"start":13,"value":"collections/all","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end