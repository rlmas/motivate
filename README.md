motivate
========

Motivational Page that cycles through images, quotes and allows you to select tracks

To Use:
-------
1. In the image folder, insert your jpeg images in the appropriate folders (or create your own) and number them incrementally. For example, if you have 4 pictures in the nature folder, number them:

    1.jpg, 
    2.jpg, 
    3.jpg, 
    4.jpg

2. Then in javascript/interact.js line 3 you'll see:

    var imageCategory = [
        ...
    ];

For every folder, add this line into the array:

    var imageCategory = [
        {name: '{name of folder}', observe: ko.observable(true), count:{number of images in the folder}},
    }

    Eg:
    var imageCategory = [
        {name: 'nature', observe: ko.observable(true), count:30},
        {name: 'animals', observe: ko.observable(true), count:25},
    }

For the last entry, remove the last comma. In this case:

    var imageCategory = [
        {name: 'nature', observe: ko.observable(true), count:30},
        {name: 'animals', observe: ko.observable(true), count:25}
    }

3. Open motivate.html with Chrome / DONE!