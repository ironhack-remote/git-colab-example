/* USEFUL GIT COMMANDS */

git add . // adds everything to staging area
git commit -m"A useful message for your colleagues" // what your changes were
git push // updates online version to our version
    error 1: "you haven't committed your code" -> git add 
    error 2: "Rejected because you're 1 commit behind!" -> git pull -> deal with conflicts -> git push
    error 3: "there's no upstream.. execute the command in the terminal" -> git push -u 

git pull // pulls the code from the online version to our machine
git branch // see how many branches you currently have in your machine
git checkout // allows you to change between branches
  ex: git checkout milena // switches to milena branch
git checkout -b <branch name> // creates a new branch
git merge // merges 1 branches changes into another 