// Generated from: features\sauce_demo.feature
import { test } from "playwright-bdd";

test.describe('Sauce Demo Store Automation Scenarios', () => {

  test('Homepage title aur URL verify karna', { tag: ['@regression', '@smoke'] }, async ({ Given, Then, page }) => { 
    await Given('User store ke homepage par hai', null, { page }); 
    await Then('Homepage ka title "Sauce Demo" hona chahiye', null, { page }); 
  });

  test.describe('Store par product search karna', () => {

    test('Example #1', { tag: ['@regression'] }, async ({ Given, When, Then, page }) => { 
      await Given('User store ke homepage par hai', null, { page }); 
      await When('User search bar me "Jacket" type karta hai', null, { page }); 
      await Then('Search result me "Jacket" dikhna chahiye', null, { page }); 
    });

    test('Example #2', { tag: ['@regression'] }, async ({ Given, When, Then, page }) => { 
      await Given('User store ke homepage par hai', null, { page }); 
      await When('User search bar me "Shirt" type karta hai', null, { page }); 
      await Then('Search result me "Shirt" dikhna chahiye', null, { page }); 
    });

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
  {"pwTestLine":6,"pickleLine":5,"tags":["@regression","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User store ke homepage par hai","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Homepage ka title \"Sauce Demo\" hona chahiye","stepMatchArguments":[{"group":{"start":18,"value":"\"Sauce Demo\"","children":[{"start":19,"value":"Sauce Demo","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":13,"pickleLine":16,"tags":["@regression"],"steps":[{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User store ke homepage par hai","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User search bar me \"Jacket\" type karta hai","stepMatchArguments":[{"group":{"start":19,"value":"\"Jacket\"","children":[{"start":20,"value":"Jacket","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Search result me \"Jacket\" dikhna chahiye","stepMatchArguments":[{"group":{"start":17,"value":"\"Jacket\"","children":[{"start":18,"value":"Jacket","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":17,"tags":["@regression"],"steps":[{"pwStepLine":20,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User store ke homepage par hai","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User search bar me \"Shirt\" type karta hai","stepMatchArguments":[{"group":{"start":19,"value":"\"Shirt\"","children":[{"start":20,"value":"Shirt","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Search result me \"Shirt\" dikhna chahiye","stepMatchArguments":[{"group":{"start":17,"value":"\"Shirt\"","children":[{"start":18,"value":"Shirt","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end