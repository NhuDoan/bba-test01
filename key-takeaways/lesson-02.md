# LESSON 2 - GIT & JAVASCRIPT BASIC
## I. GIT
### 1. Version control system
- Help: Make it easy to view change history (when changes were made, what was changed, who made the changes, etc...)
- 3 types:
    - Local: Stored on a personal/ local device.
    - Centralized: Stored on a central server.
    - Distributed: Stored across multiple server/ system -> The MOST popular, common type.

- **Git and git hub are different**
    | Git          | Github           |
    | :-----       |:-----            |
    | Is a sofware | Is a web service |
    | Installed on your comuter| Hosted on a website |
    | Is a command line tool | Is a tool with graphical UI |
    | A version control tool used to manage files in a Git repository | A place to upload and host Git repositories | 

### 2. Working area
- `git init` is working directory
- `git add .` is staging area
- `git commit -m"tên phiên bản"` is repository

***Note: In subsequent commits, the most recently committed files are shown first***

| git init   | git add .            | git commit            |
|:---:       | :---:                | :---:                 | 
| Run 1 time | Run on every changes | Run on every changes  | 

### 3. Add-in
- cd (change directory)
    - cd in: type `cd <tên folder>`
    - cd out: type `cd ..`
- Check file's status: type `git staus`
    - red: working directory
    - green: staging area
- Check verion commit: type `git log`
- Press 'q' key on the keyboard to quit the view and return control to the cursor

### 4. Commit convention

    <type>: <short_description>

- type: type of commit
    - chore: small changes, typos, removing unused files,...
    - feat: add new features or new testcases
    - fix: fix a bug from a previous test

- short_description: a brief description (up to 50 characters), in English or Vietnamese.

### 5. Simple workflow
- Not use global config
init -> config -> add -> commit -> push

- Use global config
init -----------> add -> commit -> push

## II. JAVASCRIPT
### 1. Basic
#### 1.1 How to run?
- Create a file name <tên_file>.js
- Type into this file `console.log('nội dung');` (can use 'nội dung' or "nội dung")
- Run: `node <tên_file>.js`

#### 1.2 Some tips
- If the file is in a folder type `node <tên_folder>/<tên file>`
- Comment single line: use //
- Comment several lines: use /*...*/

### 2. Variables and Const
#### Variables
- variables are the most basic concept in programming. The word "variable" comes from "variation", meaning it can be changed.
- Type: `var` and `let` 
    -> Use `let` is **safer** than var because var allow to re-declaration but let is not.

- Declaration: <từ khóa> <tên biến> = <giá trị>
```javascript
    var name = "Better Bytes Academy";
    let isLovePlaywright = true;

    console.log(name); //Prints Better Bytes Academy
    console.log(isLovePlaywright); //Prints true
```
- To print string combine variable's value. Have 2 ways:
    - console.log("Dùng dấu cộng như sau: "+ name)
    - console.log("Hoặc dùng dấu phẩy như sau: ", name)


#### Const
- `const` is the cannot be changed
- `const` is default -> Make the code more safe, simple to read.

- Declaration: <từ khóa> <tên biến> = <giá trị>
```javascript
    const slogan = "Học kỹ - Hiểu bản chất - Mentor tận tình";
    console.log(slogan);
    slogan = "new";
    console.slogan;
```

    **DO NOT USE VAR**

### 3. Data Type
- Summary: a variable or a const always have datatype. Is the type of data of it.
- Type: 8 types devide into 2 main groups
    - Primitive types
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol
        - BigInt
    - Reference types
        - Object

- To check a variable's data type, use `typeof` operator.
```javascript
    console.log(typeof <tên biến>);
```

- Combine string with operator '+'
```javascript
const str1 = "Hello";
const str2 = "Nhu Doan";
console.log(str1 + str2);// Hello Nhu Doan
```

### 4. Operator
#### 4.1 Equal, not euqal, greater than, less than comparions

- Loose equality `==` -> Compares values after type conversion
- Strict equality `===` **(MUST USE)** -> Compares both value and data type — no type conversion

#### 4.2 Logic operators

- Logic operator use to combine several conditions and return boolean
    - && (AND): `true` if both expressions are `true`
    - || (OR): `true` if one of two expressions are `true`

```javascript
const a = 5;
const b = 10;

console.log(a<b);
console.log(a===b);
console.log(a!==b);

const c = "50";
const d = 50;

console.log(c===d);
console.log(c==d);
console.log(c!==d);
```

- Unary operators are operators that require only one operand to execute. 2 types:
    - Prefix: operator is placed before the operand — increments first, then returns the value
    - Postfix: operator is placed after the operand — returns the value first, then increments

```javascript let a = 10;
b = ++a; // increments a to 11, then returns it → b = 11

let c = 10;
d = c++; // returns 10 to d first, then increments
         // → d = 10
```


**NOTE: x/0 -> infinity**

### 5. Conditional statements
#### 5.1 Summary
- Conditional statements are used to check a piece of logic before execution. If the condition is true, the code will run.
- In JS have 4 types:
    - if
    - if...elde
    - if...else if...else
    - switch...case

#### 5.2 Syntax

```javascript
let hour = 14;
if (hour <= 11 && hour >= 6) {
  console.log("Good morning");
}
if (hour <= 11) {
  if (hour >= 6) {
    console.log("Good morning");
  }
  console.log("Good morning");
}
if (hour > 11) {
  console.log("Good day");
}
```

### 6. Loop
#### 6.1 Summary
- Loops are used to repeat a block of logic. Can run a fixed number of times or infinitely, depend on the stop condition.
- In JS have 6 types:
    - for (i)
    - for (of)
    - for (each)
    - for (in)
    - while
    - do...while

#### 6.2 Syntax

```javascript 
for (<initialization>; <loop condition>; <update>){  
    //code
}
```
Example
```javascript
for (let i = 0; i<10; i++) {
    console.log("Hello");
}
```

**FORMAT CODE: Option + Shift + F**