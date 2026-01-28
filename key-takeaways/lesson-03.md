# GIT
## Git
1. Undo things
    1. If you commit a file with an incorrect message
    -> run `git commit --amend -m"message"`

2. Move files from staging to working directory
    1. Restore 1 file
    -> run `git restore --staged <tên_file>`
    2. Restore all files
    -> run `git restore --staged .`

3. Move files from repository to working directory
    -> run `git reset HEAD~N`
    - Where **N is the number of commits you want to reset**.
    - The first commit cannot be reset. If you want to reset it, you must delete the `.git` folder and then re-init.
    - **CANNOT** reset a specific commit directly, resets must be done sequentially from the most recent commit downwarrd.

4. Check out to any revision
    - Using `git log` command to see the list of commits
    ```javascript
        commit 55e4df7566ae737a04438546000abc2af9e0d133 (HEAD -> lesson-03_01, main)
        Author: NhuDoan <doannhubl@gmail.com>
        Date:   Fri Jan 16 16:04:20 2026 +0700
        
        phien ban 2
        
        commit b9d30056e99da2a03df51de2ada480b1d1983c9b
        Author: NhuDoan <doannhubl@gmail.com>
        Date:   Fri Jan 16 15:48:29 2026 +0700
        
        message dung
    ```
    - `55e4df7566ae737a04438546000abc2af9e0d133` is called the **commit hash** and **revision**.
    - To back to a specific revision (or view code at the point in the past). Use `git checkout <revision>`

## Branch
- `git push` is upload the things you had done to github.
- `git pull` is download somethings from server to another device or another folder.

1. Branch: GIT use branch to create seperate versions of code, helping avoid impacts on the main version.

2. How branches work:
- When init a repository (`git init`), branch is automatically created.
- When init, make sure the default branch is main 
-> run `git config --global init.defaultBranch main` 

3. Common branch commands:
**Notes**
**- Branch names MUST NOT contain spaces.**
**- Use underscores (_) or hyphens (-), but hyphens are prefered.**
**- The `*` symbol indicates the current branch you are on.**
**- Always pull the latest code before creating a new branch.**

- `git branch` <- View which branch you are currently on.
- `git branch <tên_nhánh>` <- create a new branch.
- `git checkout <tên_nhánh>` <- switch to another branch.
- `git checkout -b <tên_nhánh>` <- create a new branch and switch to it immediately.
- `git branch -d <tên_nhánh>` <- delete a branch.

4. .gitignore file
- create a file name .gitignore
- If wanna ignore any folders, you must write in .gitignore file 
`<tên_folder>/`
- If wanna ignore any files, you must write in .gitignore file `<tên_file>`


# JAVASCRIPT
## Conventions
1. How to convention:
- snake_case: not used in the recent.
- kebab-case: file's name.
- camelCake: variable's name.
- PascalCake: class's name.

2. How to use console.log:
- type `console.log(`$ {variable_name}`)`

## Object
- Object = an entity, used to restore a collection of values.
- Declaration
    ```javascript
    let/const <ten_object> = {
        <thuoc_tinh>: <gia_tri>,
    }
    ```
    - <thuoc_tinh>: follows the same naming rules as variables
    - <gia_tri>: has the same data types as variables, or can be another object.
- Example:
    ```javascript
    let student = {
        name: "Như",
        role: "student",
        age: "26",
        class: {
            name: "E-learning",
            subject: "Automation"
        }
    }
    console.log(student.name);
    console.log(student.class.name);
    console.log(student["age"]);
    console.log(student["class"]["subject"]);
    ```
- If an object is declared using `const`, can modify the values of it properties. 
    ```javascript
    const student = {"name": "alex", "age": 20}
    student.name = "Nagi"; //hợp lệ
    ```

    But cannot re-declare object (like const).
    ```javascript
    const student = {"name": "alex", "age": 20}
    student = {"name": "alex", "age": 18} //lỗi
    ```
- **How to add an property (thuộc tính) to an object -> Use `.` or `[]`**
    ```javascript
    let bike = {"make": "yamaha", "age": 20};

    bike.color = "blue";
    bike["price"] = 100;

    console.log(bike);
    {make: "yamaha", age: 20, color: "blue", price: 100}
    ```
- **How to delete an property from an object -> Use delete function**
    ```javascript
    let employee = {
        name: "Đoàn Cẩm Như",
        age: "26"
    };
    delete employee.age;
    console.log(employee);
    //Kết quả: {name: 'Đoàn Cẩm Như'}
    ```

## Array
- An array is a tool used to store multiple elements.
- [] define an array, an array can contain any datatype, and multiple data types can exist in the same array.
- The lenght of an array refers to the number of elements. **Array lenght = number of elements**
- Each elements in an array is assigned an index, staring count from `0` to `n-1` (where `n` is the array lenght).
-> Indexes are used to identify and access elements in the array.
- Declararion
    ```javascript
        const/let <tên_mảng> = ["", "", ""];
    ```
- Example:
    ```javascript
        const arr = ["Như", "Quốc", 26, true, false]
        console.log("Độ dài của mảng là: ", arr.length);
        console.log("Tên của tôi là: ", arr[0]);
    ```
- Add an element to an array by using `push`
    ```javascript
    const arr = [1,2];
    arr.push(3);
    console.log(arr);
    //Kết quả [1,2,3]
    ```


## Function
- A function is a named of block of code that can be reused ro perform a specific task or calculation.
- `;` is used to end a satement, so it should always be included.
- How to write a function that returns a value
- Example:
    ```javascript
        function sum(a,b){
            const sum = a + b;
            return sum;
        }
        console.log(sum(5,6));// cách 1

        const total = sum (5,6);// cách 2
        console.log(total);
    ```


## Parameters
- How to pass parameters into a function.
- Example:
    ```javascript
        function countBeforeHello(n){
            for (i=0; i<=n; i++){
                console.log(i);
            }
            sayHelloWorld();
        }
        countBeforeHello(3);
    ```
- `n` is the parameter, `3` is the agrument.