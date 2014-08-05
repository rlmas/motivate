motivate
========

Motivational Page that cycles through images, quotes and allows you to select tracks

To Use:
-------
1. In the image folder, insert your images. You must numerically categorize them in the following manner "category number - image number".
For example, if you have two nature shots, and three exercise shots, you'd name the pictures:
    1-1
    1-2
    2-1
    2-2
    2-3

2. Then in javascript/interact.js line 75 and 76, you'll see:
    var imageRanges = [12,13,5,9];
    var index = random(1, 2);

For Line 75
In the first index of imageRanges, insert the number of images in category 1.
In the second index of imageRanges, insert the number of images in category 2.
If you have more categories, just insert the number of images in the third index, or fourth, etc.

    var imageRanges = [2,3];

For Line 76
Choose the categories you want to page to cycle through for images
    var index = random(1, 2);
