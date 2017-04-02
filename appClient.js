$(document).ready(function(){
    $("#submit").click(function(){
         mail=$("#mail").val();
         pass=$("#password").val();
         objet=$ ("#objet").val() ;
         console.log(objet) ;
         message=$("#message").val();
         destitation=$("#destination").val();
         consumerKey = $ ('#consumerKey').val();
         consumerSecret = $ ('#consumerSecret').val();
         accessTokenKey=$('#accessTokenKey').val();
         accessTokenSecret=$('#accessTokenSecret').val();
         slackUrl=$('#slack').val(); 
         access_Token = $('#access_Token').val();
         ID= $('#ID').val();
         NomF = $('#NomF').val();
        console.log(NomF);
         console.log(slackUrl);
          $.post("http://localhost:3020/msg",{mail: mail,password: pass , objet:objet ,message : message, slackUrl : slackUrl,  consumerKey:  consumerKey, consumerSecret: consumerSecret,accessTokenKey:accessTokenKey , accessTokenSecret : accessTokenSecret , NomF :NomF }, function(data){
              console.log(destitation);
            if(data==='done')
              {
                alert("login success");
              }
    
    });
});
});
