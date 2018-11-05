// For Transurban

// 1. Create a public repository in GitHub (https://github.com/)
// 	https://github.com/kevincousy/quickdeploy

// 2. Create AWS Free Account (https://aws.amazon.com/free/).  If you have an existing account that is fine to use as well.
// 	https://aws.amazon.com

// 3. Using the Serverless Framework create an API that can be deployed to your AWS account (https://serverless.com/)
	
// a. Code should be written in Node.js
// b. API will consist of 1 interface Pairs
// c. Pairs will take one input that is an array of numbers
// d. It will return the number of matching pairs for the array
// Example Input:	 [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Example output:	 3
// GET - present form for array input
// POST - in response to generate button

// e. Add security to the API by not allowing calls to be made without providing an assigned API key
// 4. Commit the project to the GitHub repository you created in step 1.  Include all source code, unit tests, serverless files.  Do not include any generated files.  For instance, the node_modules/ directory created from a npm install command
// 5. Please email back a url to the repository and a url and API key to your API running in AWS.

--

Quick deployment of Node.js on AWS Serverless architecture

Use Express for simple web pages
Use basic EJS template and error handlers
Use vanilla style.css

--
Git Bash:
git config --global credential.helper wincred

echo "# quickdeploy" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/kevincousy/quickdeploy.git
git push -u origin master

--

Serverless credentials
serverless-admin
Access key ID:      AKIAIZX3GQ5GF64DEVVQ 
Secret access key:  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
export AWS_ACCESS_KEY_ID=AKIAIZX3GQ5GF64DEVVQ
export AWS_SECRET_ACCESS_KEY=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

{saves to ~/.aws/credentials}
serverless config credentials --provider aws --key AKIAIZX3GQ5GF64DEVVQ --secret 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

sls deploy
