var connection = require("./dbconfig")


var DBACTION = {

    addWordsToList: function (data, res) {

        console.log("JSON", data.words);
        let word = data.words.keyword;
        let replace = "";
        if (data.words.type == "1") {
            //replace
            replace = data.words.replace;
        }

        const query = `INSERT INTO tbl_words (words,user_id,is_public,replace_word) VALUES('${word}',${data.user_id},${data.is_public},'${replace}')`

        connection.query(query, function (error, result, field) {
            if (error) {
                console.log("Error in insertation", error);
                res.status(500).send();
            }
            else {
                //TODO 
                //send response back 
                res.status(200).send();

            }
        });
    },
    getWordsList: function (data, res) {


        const query = `select * from tbl_words`;

        connection.query(query, function (error, result, field) {
            if (error) {
                console.log("Error in insertation", error);
                res.status(500).send();
            }
            else {
                if (result.length > 0) {
                    console.log("result", result);
                    let data = [];
                    for (i = 0; i < result.length; i++) {

                        var obj = {
                            "id": `${result[i].id}`,
                            "keyword": `${result[i].words}`,
                            "replace": `${result[i].replace_word}`,
                            "type": "-1"
                        }

                        data.push(obj);
                    }

                    console.log("result to send", data);
                    res.status(200).json(data);
                }
            }
        });
    },

    deleteWord: function (data, res) {


        const query = `delete from tbl_words where id = ${data}`;

        console.log(query);

        connection.query(query, function (error, result, field) {
            if (error) {
                console.log("Error in insertation", error);
                res.status(500).send();
            }
            else {
                res.status(200).send();
            }
        });
    }
}

module.exports = DBACTION