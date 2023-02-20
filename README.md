# Create a factorial solution using the Test Last Approach
- Software Testing with TDD ~ Karl P.
- Refactory Bootcamp 012
- 
## Factorial?
A factorial is the product of all positive integers less than or equal to n, if the integer is represented by n (numbers with no decimal or fractional part = integers).
For example: 5! = 5 * 4 * 3 * 2 * 1
The pattern would be:
- 0! = 1
- 1! = 1
- 2! = 2 * 1
- 3! = 3 * 2 * 1
- 4! = 4 * 3 * 2 * 1
- 5! = 5 * 4 * 3 * 2 * 1

## Test Last - What is it?
A development process that entails executing unit tests after the development of the corresponding units is finished. This ensures that the responsibilities of each software unit are well understood before the unit testing is done.
- source: [xUnit Patterns](http://xunitpatterns.com/test%20last%20development.html#:~:text=A%20development%20process%20that%20entails,the%20unit%20testing%20is%20done.)

Basically you write the solution/ code first and then cover it with tests.