# Pseudocode

*Pseudocode* is basically just writing down the logic of your solution to a specific coding challenge using plain English.


Example of how a Vending Machine works:

```
WHEN the user inputs money:
    IF the bill is too crumpled to read,
        provide an error message,
        and return the bill.
    ELSE,
        Add it to the balance
WHEN the user selects an item:
    IF they haven't put in enough money,
        ask for more.
    IF the item is out of stock,
        ask them to make a new selection.
    ELSE,
        determine change,
        dispense change,
        zero out the balance,
        and dispense the item.
WHEN the user hits the "cancel" button:
    IF the user has input money without making a purchase,
        return the money,
        and zero out the balance
```

By breaking your problem down into simply english it allows you to explain your logic without having to worry about the code.  Once your pin down this logic it makes the following steps easier, as it is just filling in your pseudocode with the syntax of a particular programming language.

## Convert Pseudocode to Comments
After you write you pseudocode, convert it to comments.  Then code one line (sub-problem) at a time.