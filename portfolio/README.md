# Portfolio using ReactJs
This portfolio is created from scratch using React. It will contain my projects , skills and other information about me. It will demonstrate my understanding of React technology. Below are step by step guidelines as to how it was created and what difficulty was faced. It is my guideline to create version 2 of portfolio if ever needed it.

## Getting Started with Create React App

1. Create Repository on Github and clone it to your machine.
2. Open the repository on your machine using code editor, in my case vscode.
3. In vs code, open intergrated terminal and create react app by giving this command npx create-reat-app and a file name.
4. Install necessary dependencies, in this case bootstrap and react router
5. Run the app to see if its running by typing npm start. You should see the react logo rotating on localhost:3000

## Creating the App Components
6. Made components folder in src folder and inside it other folders. Tried pushing empty folders up to github so my base was set up but apparently they were not getting pushed up.Guess what Panic panic panic....but then with a little bit of google foo, found outh this. 
"Git doesn't like empty folders. It doesn't include them in commits and it certainly doesn't include an empty directory when you push to GitHub or GitLab."
7. created js and css files in each of the folders inside components folder.
8. wrote Header function but when starting on local host, was getting this error
Module not found: Error: Can't resolve './components/Header' .
Had to rename header.js to index.js
9. Header folder working but not displaying nav bar horizontally. 
10. Home folder-tried loading my image, a worst nightmare. Noone tells you this that you cant just use <img scr=""> but you need to use this <img src={require('/images/image-name.png')} /> For more read please [click](https://stackoverflow.com/questions/34582405/react-wont-load-local-images) I am not sure yet as to how it will look once deployed because that link is for your machine, hopefully should be okay as folders wont change but need to keep an eye on it and find out beforehand before I land into anymore mess.
My css ia acting up, sometimes its there sometimes it dissapears...not sure why. Till now this is what my project looks like [demo](../portfolio/src/components/Images/illustration1.png)
My css decided to kick in and still at this stage, this is what it looks in color [demo](../portfolio/src/components/Images/illustration%202.png)
11. Created Project.Json file, that has all the project information you would like to put on your page.
12. Created card container that will be displayed on the portfolio and it will utilize data from project.json file. It did not work, map function was not rendering and console showing all this errors
13. With the help of tutor Suresh Kumar, we sorted the gallery to be working. The images folder needed to be inside the public folder and to access it, this command needed to be used img src={process.env.PUBLIC_URL + ur path or props}
14. Styling was my other problem it will just not show up, did google foo and stackoverflow was saying need to remove cache. Before I could do this, I asked in class and Phil Howley , our instructor, kind of hinted what is needed, hence in my style.css  wherever I have used, you will see "!important" stuck throught it so my styling takes precedence.
15. Created contact info . All components are rendering and working well.
16. Created Resume folder and rendered resume on navlink.
17. NOTE: I didnt realize giving same className to different components would cause a problem but it did in styling. Even though I was styling one component but if className was same , will go and implement change everywhere. Hence will remember this next time. This has been a learning curve.

## Building the App 
Before we use the build command, we have few formalities to take care off if deployed to github pages.

18. Whatever you had called your app, go there and instal gh pages by giving this command npm install gh-pages --save-dev
19. Go to your package.json file  add a homepage property that follows this structure: http://{github-username}.github.io/{repo-name}
20. Then go to script and add this "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
21. run npm build command and your portfolio will be build


## Deployement
[Deployed link](https://Najma53.github.io/Portfolio-using-React)

## Credits
1. Guilherme Derreti
2. Victor Biscio
3. Phil Howley
4. Suresh Kumar

## Conclusion
This has been a learning curve for me, there is so much to react and I would love to try it in future. Initially the project look daunting and hard to build but once you understand how its render, it is not so bad, think this may be one of the easy ones. I had trouble rendering the gallery because I had used the code in class assignment without giving a second thought because my navbar was there but infact inside header component the route needed to change, I didnt see that and never thought twice to check. Secondly my css wasn't working and I would love to try this another way without having to put !important everywhere. My bootstrap portfolio and my other projects have helped me a lot to do basic layout. I had tried using card and col-6 but somehow my projects were not coming side by side , I wanted to have two side by side each other, hence decided to restructure my code and have one after the other. Overall this was great fun. 

