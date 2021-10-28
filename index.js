var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectId;
var crypto = require('crypto');
var express = require('express');
var bodyParser = require('body-parser');
const { response } = require('express');

var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
        .toString('hex')
        .slice(0, length);
}

var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    var value = hash.digest('hex');
    return{
        salt:salt,
        passwordHash:value
    };
}

function saltHashPassword(userPassword){
    var salt = genRandomString(16);
    var passwordData = sha512(userPassword, salt);
    return passwordData;
}

function checkHashPassword(userPassword, salt){
    var passwordData = sha512(userPassword, salt);
    return passwordData;
}

// express service

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// mongodb client
var MongoClient = mongodb.MongoClient;

// connection

var url = 'mongodb+srv://alisherka7:alisherka7777@cluster0.1h6j9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

MongoClient.connect(url, {useNewUrlParser: true}, function(err, client){
    

    //Register
    app.post('/register', (request, response, next)=>{
        var post_data = request.body;

        var plaint_password = post_data.password;
        var hash_data = saltHashPassword(plaint_password);

        var password = hash_data.passwordHash; // save password hash
        var salt = hash_data.salt;

        var name = post_data.name;
        var studentID = post_data.studentID;
        var studentdata = post_data.studentdata;

        var lecturesJson = {
          'lectures': {
            "컴퓨터네트워크":{
              "professor": "조현준",
              "lectureroom" : "505호",
              "firstLectureTime" : "9:00 11:00",
              "secondLectureTime": "12:00 14:00",
              "fattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ],
                "sattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ]
              },
            "모바일응용":{
              "professor": "박지수",
              "lectureroom" : "505호",
              "firstLectureTime" : "10:00 12:00",
              "secondLectureTime": "15:00 17:00",
              "fattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ],
                "sattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ]
              },
            "웹프로그래밍":{
              "professor": "장홍준",
              "lectureroom" : "504호",
              "firstLectureTime" : "9:00 10:30",
              "secondLectureTime": "12:00 13:30",
              "fattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ],
                "sattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ]
              },
            "알고리즘":{
              "professor": "장홍준",
              "lectureroom" : "505호",
              "firstLectureTime" : "11:00 13:00",
              "secondLectureTime" : "13:00 15:00",
              "fattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ],
                "sattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ]
              },
            "웹응용":{
              "professor": "이동영",
              "lectureroom" : "50호",
              "firstLectureTime" : "15:00 17:00",
              "secondLectureTime": "9:00 11:00",
              "fattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ],
                "sattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ]
              },
            "수학":{
              "professor": "Jack",
              "lectureroom" : "505호",
              "firstLectureTime" : "10:00 12:00",
              "secondLectureTime": "11:00 13:00",
              "fattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ],
                "sattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ]
              },
            "영어":{
              "professor" : "이진호",
              "lectureroom" : "505호",
              "firstLectureTime" : "11:00 13:00",
              "secondLectureTime" : "13:00 15:00",
              "fattendance" : [ 
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ],
                "sattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ]
              },
            "데이터베이스":{
              "professor": "박지수",
              "lectureroom" : "505호",
              "firstLectureTime" : "13:00 15:00",
              "secondLectureTime" : "12:00 14:00",
              "fattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ],
                "sattendance" : [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
                ]
            }
          }
        };

        var insertJson = {
            'studentID' : studentID,
            'password' : password,
            'salt' : salt,
            'name' : name,
            'studentdata': {
                "lectures": {
                  "컴퓨터네트워크":{
                    "professor": "조현준",
                    "lectureroom" : "505호",
                    "firstLectureTime" : "9:00 11:00",
                    "secondLectureTime": "12:00 14:00",
                    "fattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ],
                      "sattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ]
                    },
                  "모바일응용":{
                    "professor": "박지수",
                    "lectureroom" : "505호",
                    "firstLectureTime" : "10:00 12:00",
                    "secondLectureTime": "15:00 17:00",
                    "fattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ],
                      "sattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ]
                    },
                  "웹프로그래밍":{
                    "professor": "장홍준",
                    "lectureroom" : "504호",
                    "firstLectureTime" : "9:00 10:30",
                    "secondLectureTime": "12:00 13:30",
                    "fattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ],
                      "sattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ]
                    },
                  "알고리즘":{
                    "professor": "장홍준",
                    "lectureroom" : "505호",
                    "firstLectureTime" : "11:00 13:00",
                    "secondLectureTime" : "13:00 15:00",
                    "fattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ],
                      "sattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ]
                    },
                  "웹응용":{
                    "professor": "이동영",
                    "lectureroom" : "50호",
                    "firstLectureTime" : "15:00 17:00",
                    "secondLectureTime": "9:00 11:00",
                    "fattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ],
                      "sattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ]
                    },
                  "수학":{
                    "professor": "Jack",
                    "lectureroom" : "505호",
                    "firstLectureTime" : "10:00 12:00",
                    "secondLectureTime": "11:00 13:00",
                    "fattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ],
                      "sattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ]
                    },
                  "영어":{
                    "professor" : "이진호",
                    "lectureroom" : "505호",
                    "firstLectureTime" : "11:00 13:00",
                    "secondLectureTime" : "13:00 15:00",
                    "fattendance" : [ 
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ],
                      "sattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ]
                    },
                  "데이터베이스":{
                    "professor": "박지수",
                    "lectureroom" : "505호",
                    "firstLectureTime" : "13:00 15:00",
                    "secondLectureTime" : "12:00 14:00",
                    "fattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ],
                      "sattendance" : [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false
                      ]
                  }
                },
                "phonenumber" : "01096740151"
              }
        };

        var db = client.db('account');


        // check exists email
        db.collection('students')
            .find({'studentID':studentID}).count(function(err, number){
                if(number != 0){
                    response.json('StudentID already exists');
                    console.log('StudentID already exists');
                }else{
                    // insert data
                    db.collection('students')
                        .insertOne(insertJson, function(error, res){
                            response.json('Registration success exists');
                            console.log('Registration success exists');
                        })
                }
            })

    });
    
    // 로그인
    app.post('/login', (request, response, next)=>{
        var post_data = request.body;
        
        var studentID = post_data.studentID;
        var userPassword = post_data.password;

        var db = client.db('account');


        // check exists email
        db.collection('students')
            .find({'studentID':studentID}).count(function(err, number){
                if(number == 0){
                    response.json('학번 다시 확인하세요!');
                    console.log('학번 다시 확인하세요!');
                }
                else
                {
                    // insert data
                    db.collection('students')
                        .findOne({'studentID':studentID}, function(err, user){
                            var salt = user.salt;
                            var hashed_password = checkHashPassword(userPassword, salt).passwordHash;
                            var encrypted_password = user.password;
                            if(hashed_password == encrypted_password){
                                response.json(user);
                                console.log('Login success');
                            }
                            else{
                                response.json('비밀번호 다시 확인하세요!');
                                console.log('비밀번호 다시 확인하세요!');
                            }
                        })
                }
            })
    });

    // start web server
    app.listen(1040, ()=>{
        console.log('Connected to mongodb server, webserver running on port 1030');
    })

});