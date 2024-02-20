Demo can be found here: https://docs.google.com/spreadsheets/d/1CBUhSCXK9f5fjUXVtuyNjZDdH791mhKmD9hdhe8tslE/edit?usp=sharing

For a short while, I was obsessed with making a way to add rich text formatting to cells that had cell references or calculations. Under normal circumstances, you can add formatting to all of the cell entry, but not specific parts. I had come across a situation where this code would be helpful, so I started this project.

Come to find out, I could just get the display value of the previous cell, set it to the same in another cell, and add formatting to the copied display. (Documentation here: https://developers.google.com/apps-script/reference/spreadsheet/range#getDisplayValue() and https://developers.google.com/apps-script/reference/spreadsheet/range#setValue(Object) )

Well, then, why not make it so that it can be a function? Like, one you could make directly in a cell with a formula?

Come to find out, you can't do that with scripts that require granted permissions. Even if *you* give *yourself* permission to do it.

Soooo, it ended up having a simple solution that used none of the "features" I had in mind. This is just the result of a vanity project, in that case. If you feel like being ~fancy~ or adding unneccessary steps to this process, do I have something for you! 

This could also be helpful for people who don't understand the rich text builder. you can pick apart this code to see if your changes work.

...Oh! This also comes with a bit of code that you can run to find where specific words and such are in your sentence, so you don't have to do any counting! As of today, it's located here: https://github.com/freddinmg/Feather-s-Public-Google-Sheets-Scripts/blob/Rich-Text-Formatting-External-Cell/Word-Finding%2C-Character-Indexing.js
