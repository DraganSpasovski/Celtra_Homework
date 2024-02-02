# Celtra_Homework
Celtra - Homework

I've completed the initial task

For the "Extra points", I came up with the following solutions

A. How would you make the test script browser independent?

  - I edited the codecept.conf.js file to include profiles which are using different browsers. Run - 'npx codeceptjs run-multiple <Choose_desired_broswer>'

B. How would you execute the test in parallel on multiple browsers?

  - With the addition of multiple browsers from the previous task, you can now run 'npx codeceptjs run-multiple all' which should run the testcase in all profiles added in parallel

C. How would you implement advanced reporting (history of past runs and overall test stability
trend)?

  - I took advantage of their plugins and used Testmat.io. I created an account where the automated testruns are stored. I can now run 'set TESTOMATIO=<MY_API_KEY> npx codeceptjs run-multiple all' and get the tests up and running
