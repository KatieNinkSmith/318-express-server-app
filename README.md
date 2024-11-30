# 318-express-server-app

colors
f29f2c golden rgb(242, 159, 44)
bd8d38 dark golden rgb(189, 141, 56)
887a44 olive rgb(136, 122, 68)
5da399 light teal rgb(93, 163, 153)
1e555c teal/green rgb(30, 85, 92)
70f3ff light blue rgb(112, 243, 255)
cbc5ea light purple rgb(203, 197, 234)
f4a6a4 pink rgb(244, 166, 164)
6B4B3E brown rgb(107, 75, 62)

You will create a small Node and Express server application. The topic and content of this application is entirely up to you; be creative!
Your work will be graded according to the technical requirements listed in the following section. Creativity and effort always work in your favor, so feel free to go beyond the scope of the listed requirements if you have the time.
Keep things simple. Like most projects you will encounter, you should finish the absolute minimum requirements first, and then add additional features and complexity if you have the time to do so. This will also help you understand what you can get done in a specific allotment of time if you were to be asked to do something similar in the future.
Once you have an idea in mind, briefly discuss it with your instructors to determine if it is appropriate for the amount of time you have been given.
Since topic and content are secondary to functionality for this assessment, we have included some resources below for free content that you can use to populate your application. Once you have gotten your functionality in place, you can return and fill in the content with something interesting.
Resources for free content:
Text: Lipsum, a Lorem Ipsum text generator.
Images: Pexels, a resource for stock photos (and other media).
GIFs: Motion Elements, a resource for GIFs (and other media).

REQUIREMENTS
Create and use at least two pieces of custom middleware.
Create and use error-handling middleware.
Use at least three different data categories (e.g., users(log name), posts(user response to things), or comments learder board or ranking based on personal input).
Utilize reasonable data structuring practices.
Create GET routes for all data that should be exposed to the client.
Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request(users logging name and entries for selections).
Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request.(patch update quantities or edit input, put replace inputs completely)
Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request. (user delete input with alert to confirm)
Include query parameters for data filtering, where appropriate. At least one data category should allow for additional filtering through the use of query parameters. (user data filtered to the "leader" board maybe with options to reorganize the list based on category to see which user is highest in that category)
Note: DO NOT use API keys; this makes it more difficult for instructors to grade finished projects efficiently.
Utilize route parameters, where appropriate.(after inputs redirect to leader boards to see comparison, move between pages)
Adhere to the guiding principles of REST.
Create and render at least one view using a view template and template engine. This can be a custom template engine or a third-party engine. (ejs views for pages)
If you are stuck on how to approach this, think about ways you could render the current state of your API's data for easy viewing.
Use simple CSS to style the rendered views. (make pretty)
Note: This is not a test of design; it is a test of serving static files using Express. The CSS can be very simple.
Include a form within a rendered view that allows for interaction with your RESTful API. (include form for input)
Utilize reasonable code organization practices. (maybe a little import/export for reuseable functions and const declarations)
Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). (what doesnt work moved to end of read me so code is pretty)
Commit frequently to the git repository. (i got you!)
Include a README file that contains a description of your application. (want to check with Christina as i think my readme details minght need to change some)
Level of effort displayed in creativity, presentation, and user experience.

BONUS REQUIREMENTS EXTRA POINTS POSSIBLE
Include a practical usage of regular expressions within route paths. (regular expressions is like form validation)
Note: A forced, arbitrary usage of this technique will not earn you any bonus credit. This must be practical and sensible in order to be considered for credit.
Research and effectively use at least one third-party Node package for practical, sensible purposes.
This cannot be a package that has been used in examples and lesson materials thus far. Step outside the box and be creative!
