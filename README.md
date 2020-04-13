Notable moments:
1) This is a Scratch project which is using a custom extension to make requests to Google Natural Language API, so it should be launched on http://scratchx.org/#scratch .

2) To launch this custom extension you need to get your own Google Natural Language API key (that is create a Google Cloud project, enable Google Natural Language API and get a key for it). This key should be inserted in the file https://iuriid.github.io/sentimentIndicatorScratchBot/sentiment_fetcher.js instead of the string YOUR_GOOGLE_NATURAL_LANGUAGE_API_KEY (row #2).

3) You should download 2 files, sentimentIndicatorScratchBot.sbx (the Scratch application) and sentiment_fetcher.js (custom Scratch extension) locally, insert your Google Natural Language API key in sentiment_fetcher.js, go to http://scratchx.org/#scratch and upload firstly the sentimentIndicatorScratchBot.sbx file (by clicking on "Load Experimental Extension" on the top right or in Scripts > More Blocks > Load Experimental Extension) and secondly the sentiment_fetcher.js file (click on Scripts > More Blocks > Load Experimental Extension with the Shift key pressed).

Step-by-step video tutorial: https://youtu.be/Y0aurXGvVwA

Description from Youtube:

A detailed tutorial that describes how to make a ScratchX application (uses a custom extension) that passes user's input to Google Natural Language API to get the sentiment score and magnitude and displays these parameters visually and with sounds.

Resources:
👉 Repository with Scratch app (.sbx) and a custom extension file (.js): https://github.com/IuriiD/sentimentIndicatorScratchBot

👉 Scratch: https://scratch.mit.edu/

👉 ScratchX: http://scratchx.org/

👉 ScratchX Wiki: https://github.com/LLK/scratchx/wiki

👉 Google Natural Language API reference mentioned: https://cloud.google.com/natural-language/docs/reference/rest

👉 Structure of the payload to be passed to Google Natural Language API to get the sentiment data: a) https://cloud.google.com/natural-language/docs/reference/rest/v1beta2/documents/analyzeSentiment ; b) https://cloud.google.com/natural-language/docs/basics#basic_natural_language_requests

👉 Meaning of the keys "score" and "magnitude" received in the response: https://cloud.google.com/natural-language/docs/reference/rest/v1/Sentiment

👉 CS50 course on edx: https://courses.edx.org/courses/course-v1:HarvardX+CS50+X/course/