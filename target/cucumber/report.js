$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/featureFiles/surch.feature");
formatter.feature({
  "name": "Surching Product",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User Shouldbe able to surch product by name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "User type \"\u003cName\u003e\" on surch box",
  "keyword": "When "
});
formatter.step({
  "name": "\"\u003cName\u003e\" should be display on the list",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Name"
      ]
    },
    {
      "cells": [
        "Cucumber"
      ]
    },
    {
      "cells": [
        "Brocolli"
      ]
    },
    {
      "cells": [
        "Tomato"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User Shouldbe able to surch product by name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "productSurching.user_is_on_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User type \"Cucumber\" on surch box",
  "keyword": "When "
});
formatter.match({
  "location": "productSurching.user_type_on_surch_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Cucumber\" should be display on the list",
  "keyword": "Then "
});
formatter.match({
  "location": "productSurching.should_be_display_on_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User Shouldbe able to surch product by name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "productSurching.user_is_on_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User type \"Brocolli\" on surch box",
  "keyword": "When "
});
formatter.match({
  "location": "productSurching.user_type_on_surch_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Brocolli\" should be display on the list",
  "keyword": "Then "
});
formatter.match({
  "location": "productSurching.should_be_display_on_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User Shouldbe able to surch product by name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "productSurching.user_is_on_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User type \"Tomato\" on surch box",
  "keyword": "When "
});
formatter.match({
  "location": "productSurching.user_type_on_surch_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Tomato\" should be display on the list",
  "keyword": "Then "
});
formatter.match({
  "location": "productSurching.should_be_display_on_the_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});