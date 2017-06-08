# Fashion Bible

For our final Major Project at CFA we were required to find a client who wanted something we could build for them using javascript frameworks. I reached out to my old internship boss who runs an ethical and sustainable fashion brand to see if she had any ideas that I could potentially take on board and we ended up collaborating on a search app idea.

### Problem:
Not enough people know about sustainable and ethical fashion and those who do might not be able to memorize every brand so when they're out shopping they may struggle to make conscious decisions without lots of googling.
-The existing apps that try to address this problem don't focus on certification. This certification often costs companies around $4000 per factory, per audit and needs to be done roughly every six months. The existing apps often make assumptions about brands and have users rate the brands on whether or not they think they're “good” companies.

### Solution:
Fashion Bible is an app that people can use on the go to get concise and accurate information about any of the brand they are considering purchasing. Fashion Bible was built in react-native to enhance the ease of accessing the app when away from a computer.
I have built a database so that we have control over the brands that are getting entered and can make sure that they apply with the requirements for the app. The aspects that will be researched include if the brand is ethical, sustainable, a description, any certifications they may have and a logo.

### Design:
The design for the application is very minimal, my client wanted the main focus to be on the search functionality so the landing page only gives two options; a link to search and a link to an about page to find out more about the app. The information that is returned for each brand is concise and to the point. We didn’t want the users to have to read lots of information to come the final conclusion of whether the brand was either ethical or sustainable.

### Wireframes and userflow:


### ERD:


### Tools:
At the start of the project I expressed some interest in experimenting with React-Native to make an app, so when My client and I were discussing potential ideas the search app appealed to me the most because it seemed the most achievable with the time constraints and the opportunity to use React-Native excited me. The other idea that my client proposed to me was a site/app where people could customise their own leggings and activewear from her store. She informed me that this concept was getting big in the industry but I knew that those skills were beyond me.
I used Node.js and Express to build a simple data base where we could enter brands and then use it as an API to render on the React-native side.
The best communication tool for us was email and phone calls as my client is very busy so she could respond in her own time. I made sure to get as much information from her in the initial phone call so I could go ahead with the build and just give her regular updates and tweak any small changes she suggested.
For development I used Tello to map out what I needed to do and would do daily checkins to monitor my progress. I also find it more effective to write to-do lists in my note book so I can have it sitting next to me and find crossing things off very satisfying.

### Project reflection and final result:
I am satisfied with the final result of this project even though the main functionality is quite basic it was definitely a challenge using React-Native. Getting used to React-Native not using HTML  and having different styling syntax took a bit of playing around with. It was also an adjustment to style and view everything on such a small screen. On one hand it was a positive thing because there was less space to fill but then I also had to be conscious about what I filled the space with. Some of the major challenges included rendering the data in a ListView because involved setting new state for each row and then being able to search the results required me to use a different state. I figured this out from a combination of different tutorials and Github repos. Another challenge was just finding information, the React-Native documentation is good but I would struggle trying to mould things and use them in the way I needed so I spent a lot of time researching and collaborating with other class members that were using React-Native.  
It was a good experience collaborating with a client and working with them to satisfy their needs.
