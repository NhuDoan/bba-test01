# LESSON 01

## 1. Key reasons Playwright is Used
- Cross browser: code one time but can run on several browsers such as Firefox, Chrome,... Upto 143 browsers.
- Cross platform: code one time but can run on several platforms such as windows, linux,...
- auto waiting, auto-retry assertion.
- Report with detail informations:
    - Pass/ Fail and the browser is used.
    - Specific log: 'which API has been called', 'which response is returned for each line of code?'
- Code gen: actions to generate code.
- Easy install, simple syntax, trending framework,...

## 2. GIT configuration
1.  Config username
    - Open Terminal
    - Type `git config —global [user.name](http://user.name) “<tên bạn>”`

2. Config email
    - Type `git config —global [user.email](http://user.email) “<email của bạn>”`

3. Config branch default
    - Type `git config —global init.defaultBranch main`

    ***NOTE: --global is used for all folders in your device. If you want to run this config for 1 folder, let remove --global. Only run `git config [user.name]...`***

4. Connect GitHub gen SSH Key
    - Type `ssh-keygen -t rsa -b 4096 -C "[doannhubl@gmail.com](mailto:doannhubl@gmail.com)"`
    - If SSH key has already please type N (no), do not re-gen SSH Key

5. Get SSH Key
    - Type `cat ~/.ssh/id_rsa.pub`

6. Add SSH to Github
    - Highlight the SSH key on step 5 > Right-click > Choose Copy
    - Open Github website > On Profile screen > Click on [SSH and GPG keys] menu 
    - Click on New SSH key button > Input the copied key and Save

7. Install latest playwright
    - Create a folder in your device
    - Right-click > Choose Open with terminal
    - Type `npm init playwright@latest` and Enter until you see the text "Happy hacking!"

8. Start code
    - Open Visual Studio Code > File > Open folder > Open the file created in step 7
    - Open Github web > Create a new repository 
    - Copy SSH key url.
    - Back to VScode > Open terminal in VScode
    - Run `git init` > `git remote add origin <url>` > `git add .` > `git commit -m"message"` > `git push origin main`

9. Re-check on Github
    - File uploaded successfully.


