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
    - Array util 
        - map: Creates a new array by applying a function to each element of the original array. Returns a new array of the same length.
             
             ```javascript
               // map
                const number = [1, 2, 3, 4, 5];
                const doubled = number.map((num) => num * 2);
                console.log(number); // [ 1, 2, 3, 4, 5 ]
                console.log(doubled); // [ 2, 4, 6, 8, 10 ]


                const students = ["An", "Bình", "Cường"];
                const studentList = students.map((name, index) => ({
                id: index + 1,
                name: name,
                code: `SV00${index + 1}`,
                }));
                console.log(studentList);
                // [
                //  { id: 1, name: 'An', code: 'SV001' },
                //  { id: 2, name: 'Bình', code: 'SV002' },
                //  { id: 3, name: 'Cường', code: 'SV003' }
                // ]
            ```
        - filter: Creates a new array containing only elements that satisfy the condition in the callback function. Returns the filtered array.
             
             ```javascript
                const numbers = [1, 2, 3, 4, 5, 6, 7];
                const evenNumbers = numbers.filter((num) => num % 2 === 0);
                console.log(evenNumbers); // [ 2, 4, 6 ]
                console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7 ]
            ```
        - find: Finds and returns the first element in the array that satisfies the condition. Returns undefined if not found.

             ```javascript
                // find
                const numbers1 = [1, 5, 3, 8, 2, 10, 7];
                // tìm số chẵn đầu tiên
                const firstEven = numbers1.find((num) => num % 2 === 0);
                console.log(firstEven);
                // tìm số lớn hơn 6
                const greater6 = numbers1.find((num) => num > 6);
                console.log(greater6);
                // không tìm thấy
                const negative = numbers1.find((num) => num < 0);
                console.log(negative);
            ```
        - reduce: Iterates through the array and accumulates the elements into a single value (number, string, object, etc.) based on the callback function.

            ```javascript
                // reduce
                const numbers2 = [1, 2, 3, 4, 5];
                const sum = numbers2.reduce((accumulator, current) => {
                console.log(`accumlator: ${accumulator}, current: ${current}`);
                return accumulator + current;
                }, 0);
                console.log(sum); // 15
                // giải thích
                // accumulator: 0, current: 1 -> return 1
                // accumulator: 1, current: 2 -> return 3
            ```
        - some: Checks if at least one element in the array satisfies the condition. Returns true/false.

            ```javascript
                // some
                const numbersSome = [1, 2, 5, 98, 10];
                // kiểm tra có số chẵn hay không
                const hasEven = numbersSome.some((num) => num % 2 === 0);
                console.log(hasEven); // true
                // kiểm tra có số > 10 khoonh
                const hasGreater10 = numbersSome.some((num) => num > 10);
                console.log(hasGreater10);
                // Dừng ngay khi tìm thấy
                const hasEvenWithLog = numbersSome.some(num=> {
                console.log(`Checking: ${num}`);
                return num % 2 === 0;
                });
            ```
        - every: Checks whether all elements in the array satisfy the condition. Returns true/false.

            ```javascript
                // every
                const numberEvery = [2, 4, 8, 10];
                // kiểm tra tất cả là số chẵn
                const allEven = numberEvery.every((num) => num % 2 === 0);
                console.log(allEven); // true
                // kiểm tra tất cả > 0
                const allPositive = numberEvery.every((num) => num > 0);
                console.log(allPositive); // true
                // kiểm tra tất cả > 5
                const allGreater5 = numberEvery.every((num) => num > 5);
                console.log(allGreater5);
                // dừng ngay khi gặp false
                const checkWithLogEvery = numberEvery.every((num) => {
                console.log(`Checking: ${num}`);
                return num < 5;
                }); // checking 2, 4, 8
                console.log(checkWithLogEvery); // false
            ```
        - sort: sort: Sorts the elements in the array in order (default is alphabetical/ascending). Modifies the original array.

            ```javascript
                // sort
                const fruits = ['banana', 'apple', 'orange', 'grape'];
                fruits.sort();
                console.log(fruits); // ['apple', 'banana', 'grape', 'orange']
            ```
            - Common bug: sort is NOT correct by default → Use compare function.
            - Compare function returns:

                - Negative number: a comes before b
                - 0: Keep the position unchanged
                - Positive number: b comes before a

            ```javascript
            const numbersSort = [10, 5, 40, 25, 1000, 1];
            numbersSort.sort();
            console.log(numbersSort); 
            // [1, 10, 1000, 25, 40, 5] 
            // sai bởi vì sort mặc định chuyển thành string "10" < "5"

            const numbersSort = [10, 5, 40, 25, 1000, 1];
            numbersSort.sort((a,b) => a - b); // tăng dần
            console.log(numbersSort);
            // [1, 5, 10, 25, 40, 1000] đúng

            const numbersSort = [10, 5, 40, 25, 1000, 1];
            numbersSort.sort((a,b) => b - a); // giảm dần
            console.log(numbersSort);
            // [1000, 40, 25, 10, 5, 1]
            ```
        - push: Adds one or more elements to the end of the array. Modifies the original array and returns the new length.

            ```javascript
            // push
            const fruitsPush = [ 'apple', 'banana'];
            const newLength = fruitsPush.push ('orange');
            console.log(fruitsPush); // [ 'apple', 'banana', 'orange' ]
            console.log(newLength); // 3
            // push nhiều phần tử cùng lúc
            fruitsPush.push('grape', 'mango');
            console.log(fruitsPush); // [ 'apple', 'banana', 'orange', 'grape', 'mango' ]
            ``` 
        - pop: Removes and returns the last element of the array. Modifies the original array and decreases its length. Pop an empty array returns undefined.

            ```javascript
            // pop
            const fruitsPop = [ 'apple', 'banana', 'orange', 'grape'];
            const lastFruit = fruitsPop.pop();
            console.log(lastFruit);
            console.log(fruitsPop); // [ 'apple', 'banana', 'orange']
            ```
        - shift: Removes and returns the first element of the array. Modifies the original array and reduces its length. Shifting an empty array returns undefined.

            ```javascript
            // shift
            const fruitsShift = [ 'apple', 'banana', 'orange', 'grape'];
            const firstFruit = fruitsShift.shift();
            console.log(firstFruit);
            console.log(fruitsShift); // [ 'banana', 'orange',  'grape']
            ```
        - unshift: Adds one or more elements to the beginning of the array. Modifies the original array and returns the new length of the array.

            ```javascript
            // unshift
            const fruitsUnshift = [ 'banana', 'orange'];
            const newLength1 = fruitsUnshift.unshift ('apple');
            console.log(fruitsUnshift); // [ 'apple', 'banana', 'orange' ]
            console.log(newLength1); // 3
            // unshift nhiều phần tử cùng lúc
            fruitsUnshift.unshift('grape', 'mango');
            console.log(fruitsUnshift); // [ 'grape', 'mango', 'apple', 'banana', 'orange' ]
            ```