(function (ext) {    
    var APIKEY = 'YOUR_GOOGLE_NATURAL_LANGUAGE_API_KEY';

    // Cleanup function when the extension is unloaded
    ext._shutdown = function () { };

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function () {
        return { status: 2, msg: 'Ready' };
    };

    ext.get_sentiment = function (userInput, callback) {
        if (APIKEY === 'YOUR_GOOGLE_NATURAL_LANGUAGE_API_KEY') callback('NO API KEY');
        // Make an AJAX call to the Google Natural Language API
        $.ajax({
            type: 'POST',
            url: 'https://language.googleapis.com/v1/documents:analyzeSentiment?key=' + APIKEY,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(
                {
                    "document": {
                        "type": "PLAIN_TEXT",
                        "language": "EN",
                        "content": userInput
                    },
                    "encodingType": "UTF8"
                }
            ),
            success: function (sentiment_data) {
                // Got the data - parse it and return sentiment score and magnitude
                var sentimentScore = sentiment_data['documentSentiment']['score'] || '+0.0';
                var sentimentMagnitude = sentiment_data['documentSentiment']['magnitude'] || '0.0';
                var response = `${sentimentScore > 0 ? '+' : ''}${sentimentScore}|+${sentimentMagnitude}`;
                callback(response);
            }
        });
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'user input %s', 'get_sentiment', 'what a nice day'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('GetSentiment Extension', descriptor, ext);
})({});