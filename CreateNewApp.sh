echo "Application Name: "
read appName
mkdir $appName
touch $appName/index.html
touch $appName/main.js
touch $appName/README.md
cd $appName/
npm init