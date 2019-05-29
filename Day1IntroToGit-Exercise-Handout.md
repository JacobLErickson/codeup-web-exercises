## Intro to Git 

- Version control system (`resume.pdf`, `resumeFINAL.pdf`, `resumeFinalFINAL.pdf`) 

- Permanent record (each commit is a snapshot of the codebase at that point in time)
- Time machine (ability to checkout commits in history) 
- Parallel universes (branches - we'll get into these later)

### Mindset and approach

- *If your code ain't in GitHub then it doesn't exist*. Push your work every day.
- Add, commit, and push your work every day. 
- Don't worry about pushing unfinished work, just push it. `Backed-up work > perfect work`
- Write your commit messages to tell a story. What changes are here and why?

### First time setup (*once* per project)

1. Open up your terminal and make sure that you're in the directory for you project.
2.  `pwd` shows your current directory. If necessary, navigate to the right place.
3. Navigate to  `cd ~/IdeaProjects/codeup-web-exercises` in terminal
4. `git init` tells git to start paying attention to a folder and its contents. `git init` is a one time thing per project. This command creates a *local* repository
5. `git status` shows you all of the files that git is not *yet* tracking.
6. Do some work like create a file or change an existing file.
7. `git add -A`
8. `git status` should now show all of the files green and ready to be committed.
9. `git commit -m "first commit"`. 
10. Navigate to `https://github.com/new`  and create a repo. This creates a *remote* repository
    1. Name the repo
    2. Provide a description
    3. Use all the defaults for readme, public, etc...
    4. Click the green "Create Repository" button
11. Be sure to use the SSH link rather than the HTML link 
12.  In your browser, follow the directions for **"…or push an existing repository from the command line"**
13. Double check that your work is up on GitHub. Navigate to your GitHub repo and check for your work.





### Regular process for pushing your changes (daily)

- Ensure you're in your project directory `cd ~/IdeaProjects/codeup-web-exercises` 
- `git status` shows you all of the changed files, new files, and if git is tracking them.
- `git add welcome.html` or `git add <filename>`
- `git add -A` will add all changes in all files to the next commit
- `git commit -m "This is what I am commiting and why"`
- `git push` will upload any and all commits to GitHub (or wherever your remote is configured)

### Activity

The exercise will be to create a "resources" directory on your Desktop, initialize that directory as a local git repo, save a file to this directory, and create a new remote repo in GitHub, and push your work.

#### Step 1 is Local 
- Create a directory on your Desktop named "resources"
- Save a text from https://raw.githubusercontent.com/CodeupClassroom/git-intro/master/README.md as a text file there named "git-intro.md"
- initialize your "resources" folder as a git repository. (`git init`)
- `git status` to show the current status. The contents of the directory should be red.
- add the file(s) inside `git add -A`
- `git status` should show the contents of the directory green now.
- commit the file(s). You must commit before pushing. `git commit -m "my commit message"`
- `git status` should show that everything is committed

#### Step 2 is Remote
- Go to `https://github.com/new` and make a new repository
- Name it "resources" and provide a description like "repo for resources and notes"
- Click "create repository" (use the defaults for readme and the gitignore)

#### Step 3 is to Push your work from local to remote 
- Follow the directions for **"…or push an existing repository from the command line"**
- Use this "resources" directory for any notes and extra resources. It's great git practice!

### Misc

- `git remote -v` shows any configured remotes. If this is empty, you don't have any remotes setup.
- `https://java.codeup.com/appendix/git/intellij-intro/` for more commands and help