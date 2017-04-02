var express = require('express');
var bodyParser     =  require("body-parser");
var app = express();
let SMTPServer = require('smtp-server').SMTPServer;
var mailer = require("nodemailer");
var Twitter = require('twitter');
var request = require ("request"); 
var Twit = require('twit');
var FB = require('fb');
var fs = require('file-system');
var datetime = require('node-datetime');
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/msg',function(req,res){

  var mail=req.body.mail;
  var password=req.body.password;
  var objet = req.body.objet ;
    console.log('fait')
  var destination = req.body.destination    
  var message = req.body.message ;  
  var consumerKey = req.body.consumerKey ;    
  var consumerSecret = req.body.consumerSecret ; 
  var accessTokenSecret = req.body.accessTokenSecret ;   
  var accessTokenKey = req.body.accessTokenKey ;     
  var slackUrl  = req.body.slackUrl ;  
  var access_Token = req.body.access_Token ;
  var ID = req.body.ID ;
  var NomFacebook = req.body.NomF ;    
   // console.log(slackUrl);
   console.log(req.body.NomF);
  console.log("mail = "+mail+", password is "+password );
    
  res.end("yes");

var T = new Twitter({
  consumer_key: consumerKey ,
  consumer_secret:consumerSecret ,
  access_token_key:  accessTokenKey ,
  access_token_secret: accessTokenSecret 
  
});
console.log('connextion faite');
    
 T.post('statuses/updates' , { status:message }, tweeted );
    console.log(message);
 
function tweeted (error, tweet, response) {
    
  if (error) {
      
    console.log('le tweet n est pas envoyer');
      console.log(tweet)
  }
    else{
        console.log( tweet)
    }
};


var smtpTransport = mailer.createTransport({
					service: "Gmail",
					auth: {
						user: mail ,
						pass: password
					}
				});
			

var mail = {
					from: mail ,
					to: mail ,
					subject: objet ,
					text :  message 
				}
console.log( message)
smtpTransport.sendMail(mail, function(error, response){
					if(error){
						console.log("Erreur lors de l'envoie du mail!");
						console.log(error);
					}else{
						console.log("Mail envoyé avec succès!")
					}
					smtpTransport.close();
                    
				});
    





var urlWebHook =slackUrl ; 

function sendToSlack (s, theUsername, theIconUrl, theIconEmoji, theChannel) {
	var payload = {
		text: s
		};
	if (theUsername !== undefined) {
		payload.username = theUsername;
		}
	if (theIconUrl !== undefined) {
		payload.icon_url = theIconUrl;
		}
	if (theIconEmoji !== undefined) {
		payload.icon_emoji = theIconEmoji;
		}
	if (theChannel !== undefined) {
		payload.channel = theChannel;
		}
	var theRequest = {
		url: urlWebHook,
		method: "POST",
		json: payload
		};
	request (theRequest, function (error, response, body) {
		if (!error && (response.statusCode == 200)) {
			console.log ("sendToSlack: " + s);
			}
		else {
			console.log ("sendToSlack: error, code == " + response.statusCode + ", " + response.body + ".\n");
			}
		});
	}

sendToSlack (message);
    console.log(NomFacebook);
    
    var accessToken = access_Token ;
FB.api('4', { fields: [ID , NomFacebook] }, function (res) {
  if(!res || res.error) {
    console.log(res.error);
    return;
  }
    
  
  console.log(res.id);
  console.log(res.name);
});

FB.api('me/feed', 'post', { message: message, access_token: accessToken }, function (res) {
  if(!res || res.error) {
    console.log(res.error);
    return;
  }
  console.log('Post Id: ' + res.id);
});
    var dt = datetime.create();
    var formattedDate = dt.format('m/d/y H:M');
     console.log(formattedDate);
    var contenu = ("Le message est:"+message+"-------- La date du message est :"+formattedDate);
    fs.writeFile('/home/fafa/Bureau/labfab/Web/test.txt', contenu, function(err) {
     if (err) throw err;
  console.log('It\'s saved!');
    
    
});
});


app.use(express.static('../client/'));

app.listen(3020, function () {
  console.log('Example app listening on port 3000!');
});
