I made this code when I was working on a code that hides text by changing the color of it to the cell color. It turns out, the "banding" option Google Sheets sets its colors differently than just a simple cell recolor. So, after trial and error, I ended up with this: 

https://docs.google.com/spreadsheets/d/13_TCC9NGHuGAwtr1_vXabU2UvtFeUgRjX8btWAL0rG8/edit?usp=sharing

The above script will change the text in the relevant ranges to the banding colors. If you change the colors used in the tables then run the formula(s), the text colors will convert.

If you're interested in doing the same, these codes should help!

_NOTES:_ 
1. The formulas provided use the above spreadsheet as a reference. So, you will have to change around names and ranges to fit your needs.
2. The formulas "MatchingColors.js" and "AlternatingColors.js" can be used seperately from each other. You don't need to use both.
3. If you're using multiple instances of these formulas (AlternatingColors and MatchingColors), it's best to invoke them in a separate function and only run *that* one. An example of what that would look like is shown in "invoke.js".
