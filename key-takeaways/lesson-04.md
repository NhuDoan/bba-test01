# REVIEW EXERCISES
1. There are 2 ways to increase a variable
    ```javascript
    total = total + 10; // cách 1
    total += 10;        // cách 2
    ```
2. Even if there is only one (or a few) statements, you should still use curly braces `{}`.
3. There should be a space after a comment.
4. For loop counters, use `i` (iterator), `j`, `k`.

    `n` is usually used for quantity (number) and should not be used as a loop counter.
5. Use the same type of comparison operator (`≤` or `<`) if two code blocks are close to each other.
6. Prefer using `===` and `!==`

# JAVA SCRIPT (cont)
1. **Variable's scope**
- The area where a variable can be accessed. JS has three types of scope:
    - Global: The variable is not within any code block. It can be called freely.

        Example
        ```javascript
            var globalName = "Nhu";
            console.log(globalName);
            function sayMyName (){
                console.log(globalName);
                }
            sayMyName();
        ```
    - Function scope: variables declared within a function.
    - Block scope: variables within a block of code `()`.
        Example
        ```javascript
            if (true) {
                var varVariable = "var không có block scope";let letVariable = "let có block scope";
                const constVariable = "const cũng có block scope";
                }
                console.log(varVariable);   // OK - var không bị giới hạn bởi block
                console.log(letVariable);   // Error: letVariable is not defined
                console.log(constVariable); // Error: constVariable is not defined
        ```
2. **Hoisting**: **JavaScript  moves variable declarations to the top** of their execution scope before executing the code.
    ```javascript
    console.log(x); // undefined (không phải error)
    var x = 5;

    // Tương đương với:
    var x;
    console.log(x); // undefined
    x = 5;

    // Với let và const:
    console.log(y); // Error: Cannot access 'y' before initialization
    let y = 5;
    ```
3. **Break and continue**
- **Break**: Used to completely exit the loop immediately.

    Example:
    ```javascript
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
    console.log(i);
    }
    // output 0,1,2,3,4
    -----------
    // vòng lặp từ 10 đến 30, in ra cho tới khi gặp phần từ chia hết cho 3 đầu tiên
    for (let i = 10; i < 30; i++) {
        if (i % 3 === 0) {
            break;
        }
    console.log(i);
    }
    ```
- **Continue**: skips the remainder of the current loop iteration and proceeds to the next iteration. Apply for checking discount conditions...

    Example:
    ```javascript
        // cách thông thường
    const arr = [2, 1, 4, 200, 3];
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
    }

    // dùng continue
    const arr1 = [2, 1, 4, 200, 3];
    for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        continue;
    }
    console.log(arr1[i]);
    }
    ```
4. **If...else conditional statement**: executes different code for true and false cases.

    Example:
    ```javascript
        // Khai báo 1 số, nếu chia hết cho 2 -> in số đó là số chẵn. Ngược lại in số đó là số lẻ
    const a = 1;
    if (a % 2 === 0) {
    console.log("Số này là số chẵn");
    } else {
    console.log("Số này là số lẻ");
    }
    ```
5. **If…else…if conditional statement**: checks multiple conditions in order from top to bottom.

    Example:
    ```javascript
        // Khai báo biến: thứ trong tuần ở dạng số. CN = 1, T2 = 2, ...
    const today = 5;
    if (today === 1) {
    console.log("Hôm nay là Chủ Nhật");
    } else if (today === 2) {
    console.log("Hôm nay là thứ Hai");
    } else if (today === 3) {
    console.log("Hôm nay là thứ Ba");
    } else if (today === 4) {
    console.log("Hôm nay là thứ Tư");
    } else if (today === 5) {
    console.log("Hôm nay là thứ Năm");
    } else if (today === 6) {
    console.log("Hôm nay là thứ Sáu");
    } else {
    console.log("Hôm nay là thứ Bảy");
    }
    ```
**Ternary operator (conditoncal operator)**: a concise way to write simple if…else statements.

    Example:
```javascript
    let age = 20;

    // cách thông thường
    let myStatus = "";
    if (age >= 18) {
    myStatus = "Người lớn";
    } else {
    myStatus = "Trẻ em";
    }

    // dùng ternary
    let myStatus1 = age >= 18 ? "Người lớn" : "Trẻ em";
    console.log(myStatus1);
    // out put Người lớn
```
**Note**: Before the colon `:` is the true condition, after the colon `:` is the false condition

6. **1. **Combining multiple conditions: use && or || and NOT operator (!)**

    Example:
    ```javascript
        let isLoggedIn = false;
    if (!isLoggedIn) {
    console.log("Vui lòng đăng nhập");
    }
    ```
7. **Advanced loops**
- **for…in Loop**: Used to iterate through the countable properties of an object, including inherited properties. In summary, if you need to get the index, use for in  

    Example:
    ```javascript
    const person = {
    name: "Như",
    age: "26",
    city: "HCM",
    };

    for (let property in person) {
    console.log(`Property: ${property}`);
    console.log(`Property value: ${person[property]}`);
    }
    // output
    // Property: name
    // Property value: Như
    // Property: age
    // Property value: 26
    // Property: city
    // Property value: HCM
    ```
    ```javascript
    const arr2 = ["AN","Nhi","Hien"]
    for (let i in arr2){
    console.log(i);
    }
    // output
    // 0
    // 1
    // 2
    ```
- **for…of Loop**: Used to retrieve the value of an element in an object

    Example:
    ```javascript
    // cách bình thường
    const arr = [100, 200, 300, 400];
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        console.log(arr[i]);
    }
    }
    // dùng for of
    for (let item of arr) {
    if (item > 0) {
        console.log(item);
    }
    }
    // output
    // 100
    // 200
    // 300
    // 400
    ```
8. **Util functions**
- Util = utility
- Util function = predefined utility functions. Helps streamline code processing
- 2 types: String util and Array util

    - String util 

        - trim(): removes leading and trailing spaces from each string. Applications include text processing.

            ```javascript
                let className = "      nhudoan    ";
                console.log(className.trim());
                // output
                // nhudoan
            ```
        - toLowerCase() and toUpperCase(): converts text to lowercase and uppercase.

            ```javascript
                let className = "      Elearning nhudoan    ";
                console.log(className.toLowerCase());
                console.log(className.toUpperCase());
                // output
                // elearning nhudoan    
                // ELEARNING NHUDOAN 
            ```
        - includes(): checks if a string contains a substring. Returns a boolean value.

            ```javascript
                let className = "      Elearning nhudoan    ";
                console.log(className.includes("NHU"));
                // output
                // false
            ```
        - replace(): Replaces one string with another. If no string is found, the result remains unchanged.

            ```javascript
                let className = "      Elearning nhudoan    ";
                console.log(className.replace("El", "Playwright"));
                console.log(className.replace("cypress", "Playwright"));
                // output
                // Playwrightearning nhudoan    
                //      Elearning nhudoan 
            ```
        - split(): Splits a string into an array containing multiple elements.

            ```javascript
               let emails = "suyanh@gmail.com, hoang@gmail.com, nhu@gmail.com";
                const arrEmails = emails.split(", ");
                console.log(arrEmails);
                // output
                // [ 'suyanh@gmail.com', 'hoang@gmail.com', 'nhu@gmail.com' ]
            ```
        - substring(): Splits the parent string into child strings. Note that the index of the string is the same as the index of the array.

            ```javascript
               let className1 = "Nhu Doan";
                console.log(className1.substring(0,4));
                // start number là vị trí cần cắt
                // end number là vị trí sau ký tự cuối cùng cần cắt
                console.log(className1.substring(5));
                // nếu chỉ điền 1 số thì tự hiểu đây là start number
                // output
                // Nhu 
                // oan
            ```        
        - indexOf(): Determines the position of a string or character within a string. The purpose is to determine the position of that character.

            ```javascript
               let className1 = "Nhu Doan";
                console.log(className1.indexOf("u"));
                console.log(className1.indexOf("hehe"));
                // output
                // 2
                // -1
            ```
                