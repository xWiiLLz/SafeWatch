var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var bank = require('./words').words;
var phone = require('./phone').phone;
var fs = require('fs');
var base64Img = require('base64-img');

var visual_recognition = new VisualRecognitionV3({
    api_key: 'ENTER YOUR API KEY HERE',
    version_date: '2016-05-19'
});

function sum(array, callback) {
    ret = 0;
    array.forEach(function(num, index) {
        ret += num
        if (index == array.length - 1) {
            callback(ret / array.length)
        }
    })
}

function analyze(image, callback) {
    base64Img.img(image, '', '1', function(err, filepath) {
        var params = {
            images_file: fs.createReadStream(filepath)
        };
        visual_recognition.classify(params, function(err, res) {
            if (err)
                console.log(err);
            else {
                wordsReturned = res.images[0].classifiers[0].classes;
                positives = {};
                positives.scores = [];
                positives.names = [];
                score = 0;
                final = {}
                wordsReturned.filter(function(n, index) {
                  console.log(n.class);
                    if (bank.indexOf(n.class) != -1) {
                        positives.scores.push(n.score);
                        positives.names.push(n.class)
                    }
                    if (index == wordsReturned.length - 1) {
                        if (positives.names.length > 0) {
                            sum(positives.scores, function(value) {
                                final.score = value;
                                final.names = positives.names;
                                phone();
                                callback(final);
                            })
                        } else {
                            callback({score: 0, names: "None"});
                        }
                    }
                });
            }
        });
    });


}

module.exports.analyze = analyze;
