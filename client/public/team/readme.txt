--------------------------------------------------------------------------------
BEFORE YOU DO ANYTHING, ARE YOU ON MASTER BRANCH? IF SO REFER TO GIT WALKTHROUGH
--------------------------------------------------------------------------------

TO LINK ABOUT PAGE DATA

FOLLOW README IN BOTH /descriptions AND /portraits FOLDERS


IN team.json NAMES ARE ALREADY FILLED OUT, AS TO AVOID MERGE CONFLICTS

REPLACE DESCRIPTION AND PORTRAIT PATHS -> PATH STARTS FROM /public FOLDER

REPLACE GITHUB_LINK WITH A https:// LINK TO YOUR GITHUB PROFILE





GIT WALKTHROUGH
--------------------------------------------------
CHECK TO SEE IF YOU'RE ON YOUR BRANCH, NOT MASTER
--------------------------------------------------
TO CREATE A BRANCH
git branch NAME-dev
git checkout NAME-dev
git push
AT THIS POINT YOU WILL GET AN ERROR
  -> NO UPSTREAM BRANCH
THERE WILL BE A SUGGESTED COMMAND, ENTER THAT IN
--------------------------------------------------
ON YOUR OWN BRANCH
git pull origin master
git add .
git commit -m "update /team dir"
git push
--------------------------------------------------
GO TO GITHUB -> OPEN A PULL REQUEST
--------------------------------------------------
SOMEONE ELSE (LIKELY GIT MASTER) WILL REVIEW
--------------------------------------------------
