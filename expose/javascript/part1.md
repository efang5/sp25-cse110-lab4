1. Line 9 would print values added: result, where result is the value of the variable result which would be the sum of num1 and num2 at line 9.
2. Line 13 would print final result: result, where result is the value of the variable result which would be the sum of num1 and num2 at line 13. This would happen because after line 9 since result is a var it would retain its value from when it was last redifined inside of the previous if statement.
3. You should not use var becuase var variables have no block scope, their visibility is scoped to current function, or global, if declared outside of a function. Block scope is better as it prevents unneeded information from lasting longer than it should.
4. Line 9 would print values added: result, where result is the value of the variable result which would be the sum of num1 and num2 at line 9.
5. Line 13 would print Error: result not defined as the only instance of result with a definition is inside the previous block and since let is block scope the result on line 13 has no value.
6. There would have been an error because you can not redefine the value of a const which is attempted on line 7.
7. There would have been an error because you can not redefine the value of a const which is attempted on line 7.
