# Portfolio using ReactJs
This portfolio is created from scratch using React. It will contain my projects , skills and other information about me. It will demonstrate my understanding of React technology. Below are step by step guidelines as to how it was created and what difficulty was faced. It is my guideline to create version 2 of portfolio if ever needed it.

## Getting Started with Create React App

1. Create Repository on Github and clone it to your machine.
2. Open the repository on your mavhine using code editor, in my case vscode.
3. In vs code, open intergrated terminal and create react app by giving this command npx create-reat-app and a file name.
4. Install necessary dependencies, in this case bootstrap and react router
5. Run the app to see if its running by typing npm start. You should see the react logo rotating on localhost:3000

## Building the App
6. Made components folder in src folder and inside it other folders. Tried pushing empty folders up to github so my base was set up but apparently they were not getting pushed up.Guess what Panic panic panic....but then with a little bit of google foo, found outh this. 
"Git doesn't like empty folders. It doesn't include them in commits and it certainly doesn't include an empty directory when you push to GitHub or GitLab."
7. created js and css files in each of the folders inside components folder.
8. wrote Header function but when starting on local host, was getting this error
Module not found: Error: Can't resolve './components/Header' .
Had to rename header.js to index.js
9. Header folder working but not displaying nav bar horizontally. 
10. Home folder-tried loading my image, a worst nightmare. Noone tells you this that you cant just use <img scr=""> but you need to use this <img src={require('/images/image-name.png')} /> For more read please [click](https://stackoverflow.com/questions/34582405/react-wont-load-local-images)

