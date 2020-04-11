Notable moments:
1) This is a Scratch project which is using a custom extension to make requests to Google Natural Language API, so it should be launched on http://scratchx.org/#scratch .

2) To launch this custom extension you need to get your own Google Natural Language API key (that is create a Google Cloud project, enable Google Natural Language API and get a key for it). This key should be inserted in the file https://iuriid.github.io/sentimentIndicatorScratchBot/sentiment_fetcher.js instead of the string YOUR_GOOGLE_NATURAL_LANGUAGE_API_KEY (row #2).

3) You should download 2 files, sentimentIndicatorScratchBot.sbx (the Scratch application) and sentiment_fetcher.js (custom Scratch extension) locally, insert your Google Natural Language API key in sentiment_fetcher.js, go to http://scratchx.org/#scratch and upload firstly the sentimentIndicatorScratchBot.sbx file (by clicking on "Load Experimental Extension" on the top right or in Scripts > More Blocks > Load Experimental Extension) and secondly the sentiment_fetcher.js file (click on Scripts > More Blocks > Load Experimental Extension with the Shift key pressed).