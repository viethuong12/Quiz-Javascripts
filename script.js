// http://127.0.0.1:8887/

var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
    var op1=document.getElementById('op1');
    var op2=document.getElementById('op2');
    var op3=document.getElementById('op3');
    var op4=document.getElementById('op4');
    var optionChosed;

	  box.style.display="none";
    //questionBox.style.display="none";
    var list =  {		
    "math": [
         {"a":"x^2+x^2",      "l":["2x^2","x^4","x^8","2x^4"]},
         {"a":"2x^2+x^2",     "l":["3x^2","x^4","x^8","2x^4"]},
         {"a":"2x^2*x^2",     "l":["2x^4","x^4","x^8","2x^4"]},
         {"a":"\\sin(\\pi/2)","l":["1","0","-1","\\pi"]},
         {"a":"x^2*x^2",      "l":["x^4","x^2","2x^2","4x"]}
      ],

      "allgemein": [
        {"a":"Sokrates, Geburtsjahr",                  "l":["469 v. Chr.","120 v. Chr.","112","230 v. Chr."]},
        {"a":"Alexander der GroÃŸe, Geburtsjahr",       "l":["356 v. Chr.","512 v. Chr.","230","531"]},
        {"a":"Hannibal, Geburtsjahr",                  "l":["247 v. Chr.","512 v. Chr.","51","131"]},
        {"a":"Karl der GroÃŸe, Geburtsjahr",            "l":["747","828","650","1150"]},
        {"a":"Otto der GroÃŸe, Geburtsjahr",            "l":["912","828","750","1150"]},
        {"a":"Barbarossa, Geburtsjahr",                "l":["1122","912","1312","713"]},
        {"a":"Dschingis Khan, Geburtsjahr",            "l":["1162","912","230","122 v. Chr."]},
        {"a":"Marco Polo, Geburtsjahr",                "l":["1254","912","230","1413"]},
        {"a":"Karl IV., Geburtsjahr",                  "l":["1316","1211","930","1413"]},
        {"a":"Gutenberg, Geburtsjahr",                 "l":["1400","1513","1623","1734"]},
        {"a":"Leonardo da Vinci, Geburtsjahr",         "l":["1452","1513","1623","1734"]},
        {"a":"Kopernikus, Geburtsjahr",                "l":["1473","1513","1623","1734"]},
        {"a":"Martin Luther, Geburtsjahr",             "l":["1483","1513","1623","1734"]}
        ]} ; 
        
     var	app= {

        index:0,
        load:function(){
            if (document.getElementById('math').checked) {
                optionChosed= "math";

            }else {
                optionChosed="allgemein";
            }

            start.style.display="none";
            box.style.display="";
            
            if(this.index<=list[optionChosed].length-1){
                quizBox.innerHTML="Frage "+(this.index+1)+" von " + list[optionChosed].length+ ": "+list[optionChosed][this.index].a;

                op1.innerHTML=list[optionChosed][this.index].l[0];
                op2.innerHTML=list[optionChosed][this.index].l[1];
                op3.innerHTML=list[optionChosed][this.index].l[2];
                op4.innerHTML=list[optionChosed][this.index].l[3];
                this.scoreCard();
            }

            else{

                quizBox.innerHTML="Quiz completed! "+"Du hast "+this.score+" von "+list[optionChosed].length+" Fragen richtig";
                
                box.style.display="none";

            }

        },
        next:function(){
            this.index++;
            this.load();
        },
        check:function(element){
            var id = element.id.split('');

            if(id[id.length-1]==1) {   //die Lösung ist die erste
                this.score++;
                element.className="correct";
                element.innerHTML="Correct";
                this.scoreCard();
            }
            else{
                element.className="wrong";
                element.innerHTML="Wrong";
            }
        },
        notClickAble:function(){
            for(var i=0;i<ul.children.length;i++){
                ul.children[i].style.pointerEvents="none";
            }
        },

        clickAble:function(){
            for(var i=0;i<ul.children.length;i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''

            }
        },
        score:0,
        scoreCard:function(){
            console.log('this[optionChosed]', this[optionChosed]),
                scoreCard.innerHTML=this.score+"/"+list[optionChosed].length;
        },
    }


  
    function button(ele)
    {
        app.check(ele);
        app.notClickAble();
    }

    function  next()
    {
        app.next();
        app.clickAble();
    }



// Bearbeitung darf erst starten, wenn der Browser alle Daten geleaden hat 
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

  
  // alle Textknoten ab boo2 werden gerendert
  window.renderMathInElement(questionBox, {delimiters: [
    		{left: "$$", right: "$$", display: true},
			{left: "$", right: "$", display: false}
            ]} );

 window.renderMathInElement(ul, {delimiters: [
    		{left: "$$", right: "$$", display: true},
			{left: "$", right: "$", display: false}
            ]} );
});

 // Service Worker registrieren für PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('scripts/sw.js')
            .then(reg => console.log(reg))
            .catch(err => console.log(err));
    }
