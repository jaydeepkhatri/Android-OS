var mainloadingz = setInterval(bodyonloadingz, 1000);
var baticon = document.getElementById('batt');
var wifiicon = 0;
//Supports 🍎;
//will not work in Internet Explorer, intentionally
var devplatform = !!navigator.platform && /iPad|iPhone|iPod|MacIntel|MacPPC|Mac68K/.test(navigator.platform);
if(devplatform == true){
	devzplatform = 'ios';
}
else{
	devzplatform = 'idkwhatever';
}
function androidmobbat(){
	navigator.getBattery().then(function (battery) {
        var  level = battery.level;
        levelz= level*100;
        level = Math.round(levelz);
        if(level > 0 && level <= 10){
            baticon.innerHTML = level + "% <i class='fa fa-battery-0'></i>"
        }
        else if(level>=11 && level <= 25){
            baticon.innerHTML = level + "% <i class='fa fa-battery-1'></i>";
        }
        else if(level>=26 && level <= 50){
            baticon.innerHTML = level + "% <i class='fa fa-battery-2'></i>";
        }
        else if(level>=51 && level <= 75){
            baticon.innerHTML = level + "% <i class='fa fa-battery-3'></i>";
        }
        else{
            baticon.innerHTML = level + "% <i class='fa fa-battery-4'></i>";
        }
    });
    return;
}
function bodyonloadingz(){
    if(devzplatform == 'ios'){
    	baticon.innerHTML = "100% <i class='fa fa-battery-4'></i>";
    }
    else{
    	androidmobbat();
    }
    var time=document.getElementById('times');
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if(minutes>=0 && minutes <=9){
        minutes = "0"+minutes;
    }
    if(hour>=0 && hour <=9){
        hour = "0"+hour;
    }
    if(seconds>=0 && seconds<=9){
        seconds = "0"+seconds;
    }
    time.innerHTML=hour +":"+minutes+"&nbsp;";
    document.getElementById('clockhour').innerHTML = hour;
    document.getElementById('clockminute').innerHTML = minutes;
    document.getElementById('clocksecond').innerHTML = seconds;
    var weekdayz = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var weekday = weekdayz[date.getDay()];
    document.getElementById("weekday").innerHTML = weekday;
    document.getElementById("yearnow").innerHTML = date.getFullYear();
    var monthz = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = monthz[date.getMonth()];
    document.getElementById("monthnow").innerHTML = month;
    document.getElementById("daynow").innerHTML = date.getDate();
    if(navigator.onLine == true){
        if(wifiicon%2 == 0){ document.getElementById('wifiico').style.color = "#333";}
        else{ document.getElementById('wifiico').style.color = "#0b0";}
        document.getElementById('wifiico').innerHTML = "<i class='fa fa-wifi' class='wifiico'></i>";
        wifiicon++;
    }
    else{
        document.getElementById('wifiico').innerHTML = "<i class='fa fa-warning' class='wifiico'></i>";
        if(wifiicon%2 == 0){ document.getElementById('wifiico').style.color = "#333";}
        else{ document.getElementById('wifiico').style.color = "#ff0066";}
        wifiicon++;
    }
    document.getElementById('timezone1').innerHTML = worldclockshouldwork(-8, 0);
    document.getElementById('timezone2').innerHTML = worldclockshouldwork(-5, 0);
    document.getElementById('timezone3').innerHTML = worldclockshouldwork(0, 0);
    document.getElementById('timezone4').innerHTML = worldclockshouldwork(4, 0);
    document.getElementById('timezone5').innerHTML = worldclockshouldwork(8, 0);
    document.getElementById('timezone6').innerHTML = worldclockshouldwork(9, 0);
    document.getElementById('timezone7').innerHTML = worldclockshouldwork(3, 0);
    document.getElementById('timezone8').innerHTML = worldclockshouldwork(-2, 0);
    document.getElementById('timezone9').innerHTML = worldclockshouldwork(1, 0);
    document.getElementById('timezone10').innerHTML = worldclockshouldwork(5, 30);
    document.getElementById('timezone11').innerHTML = worldclockshouldwork(5, 45);
    document.getElementById('timezone12').innerHTML = worldclockshouldwork(-3, 0);
    document.getElementById('timezone13').innerHTML = worldclockshouldwork(-6, 0);
}

function openassistant(){
    document.getElementById('botcontent').style.width = "100%";
    var scrollelement = document.getElementById('botplayground');
    scrollelement.scrollTop = scrollelement.scrollHeight;
}
function checkasinp(){
    if(document.getElementById('uinput').length == 0)
        document.getElementById('botmessagesend').disabled = true;
    else
        document.getElementById('botmessagesend').disabled = false;
}
function assistantwork(){
    var inputz = document.getElementById('uinput').value;
    var input = inputz.toLowerCase();
    if(input == "")
        input = " ";

    document.getElementById('uinput').value = "";
    var hey =["hello","hi", "hey","hey there", "hi dude", "hii", "hiii"];
    var heyrep = ["fine", "i'm fine", "i am fine", "great", "awesome", "good"];
    var thank = ["thanks","thank you"];
    var gmwish = ["gm", "good morning"];
    var gnwish = ["gn", "good night"];
    var yups =["lol","yes","yups","yeah", "nice"];
    var nope = ["no", "nope"];
    var fac = ["flip a coin", "fac", "f a c"];
    var rad = ["roll a die", "rad", "r a d"];
    var rc = ["random card", "rc", "r c"];
    var asdate = ["date", "what is date", "what is date?"];
    var astime = ["time", "what is time", "what is time?"];
    var wru=["who r u?","w r u??", "who are you?", "wru?","wru", "who r u","w r u", "who are you","what is your name?","what is your name?"];
    var ok=["hmm","hmmm","hmmmm","okay","kk","okk","ok","yeah"];
    var about= ["what can you do?", "what do you do", "about"];
    var asopenap = ["open", "openapp", "open app"];
    var plsong = ["play song", "play a song"];
    var abuse = ["mc", "bc", "fuck", "fuck you",  "bitch", "shit", "shut up"];
    var clear = ["clear"];
    var jd = ["jd", "jaydeep"];
    var king = ["king", "shudarshan"];
    var blkmsg = [" ", "  "];
    var closethis = ["close"];
    (hey.indexOf(input) > -1)?botoutput = "Hello, how are you? 😊":
    (heyrep.indexOf(input) > -1)?botoutput = "Nice to hear it!":
    (thank.indexOf(input) > -1)?botoutput = "You're Welcome! 😇":
    (gmwish.indexOf(input) > -1)?botoutput = "Good Morning! 😇":
    (gnwish.indexOf(input) > -1)?botoutput = "Good Night! 😪":
    (yups.indexOf(input) > -1)?botoutput = "Okay 👍":
    (nope.indexOf(input) > -1)?botoutput = "Ok":
    (fac.indexOf(input)> -1)?botoutput = flipacoin():
    (rad.indexOf(input)> -1)?botoutput = rolladie():
    (rc.indexOf(input)> -1)?botoutput = randomcard():
    (asdate.indexOf(input)> -1)?botoutput = showdate():
    (astime.indexOf(input)> -1)?botoutput = showtime():
    (abuse.indexOf(input)> -1)?(botoutput = banthis(inputz), closebot()):
    (wru.indexOf(input)> -1)?botoutput = "I don't know, maybe a bot or something! 😁":
    (ok.indexOf(input)> -1)?botoutput = "hmm 🙃":
    (about.indexOf(input)> -1)?botoutput = aboutmsg():
    (blkmsg.indexOf(input)> -1)?botoutput = "Blank Message🙄":
    (asopenap.indexOf(input)> -1)?botoutput = asopenapp():
    (plsong.indexOf(input) > -1)?botoutput = asplaysong():
    (jd.indexOf(input) > -1)?(botoutput = "Jaydeep's SoloLearn Profile", window.location.href = "https://www.sololearn.com/Profile/487380"):
    (king.indexOf(input) > -1)?(botoutput = "Shudarshan's SoloLearn Profile", window.location.href = "https://www.sololearn.com/Profile/4714357"):
    (clear.indexOf(input)> -1)?(botoutput="Done",setTimeout(clearbotscreen, 250)):
    (closethis.indexOf(input)> -1)?(botoutput = "closed!", closebot()):
    input.substring(0, 6)=="table "?(inputzz = input.slice(6), botoutput = inputzz+" * 1 = "+(inputzz*1)+"<br/>"+inputzz+" * 2 = "+(inputzz*2)+"<br/>"+inputzz+" * 3 = "+(inputzz * 3)+"<br/>"+inputzz+" * 4 = "+(inputzz * 4)+"<br/>"+inputzz+" * 5 = "+(inputzz * 5)+"<br/>"+inputzz+" * 6 = "+(inputzz * 6)+"<br/>"+inputzz+" * 7 = "+(inputzz * 7)+"<br/>"+inputzz+" * 8 = "+(inputzz * 8)+"<br/>"+inputzz+" * 9 = "+(inputzz * 9)+"<br/>"+inputzz+" * 10 = "+(inputzz * 10)):
    input.substring(0,3)=="rep"?(inputzz=input.slice(3), botoutput = inputzz):
    input.substring(0,7)=="are you"?(inputzz=input.slice(8), botoutput=aareyou()):
    input.substring(0,7)=="you are"?(inputzz=input.slice(8), botoutput=ayouare()):
    input.substring(0,5)=="was i"?(inputzz=input.slice(6), botoutput=awasi()):
    input.substring(0,5)=="i was"?(inputzz=input.slice(6), botoutput=aiwas()):
    input.substring(0,4)=="i am"?(inputzz=input.slice(5), botoutput=aiam()):
    input.substring(0,9)=="i can not"?(inputzz=input.slice(10), botoutput=aicannot()):
    input.substring(0,8)=="i do not"?(inputzz=input.slice(9), botoutput=aidonot()):
    input.substring(0,6)=="i feel"?(inputzz=input.slice(7), botoutput=aifeel()):
    input.substring(0,6)=="no one"?(inputzz=input.slice(6), botoutput=anoone()):
    input.substring(0,7)=="can you"?(inputzz=input.slice(8), botoutput=acanyou()):
    input.substring(0,4)=="am i"?(inputzz=input.slice(5), botoutput=aami()):

    botoutput =  inputdidntmatch();
    document.getElementById('botplayground').innerHTML += "<div class='message user'>"+inputz+"</div>";
    document.getElementById('uinput').focus();
    setTimeout(replybotmessage, 250);
    var scrollelement = document.getElementById('botplayground');
    scrollelement.scrollTop = scrollelement.scrollHeight;
}
//no voice for bot, as SpeechSynthesisUtterance is not supported in Mobile devices.
function replybotmessage(){
    document.getElementById('botplayground').innerHTML += "<div class='message' style='background-color:#"+themecolorname+"'>"+botoutput+"</div>";
    document.getElementById('botmessagesend').disabled = true;
    var scrollelement = document.getElementById('botplayground');
    scrollelement.scrollTop = scrollelement.scrollHeight;
}
function flipacoin(){
    var flipacoina = ["Heads", "Tails"];
    var flipacoinb = flipacoina[Math.floor(Math.random() * flipacoina.length)];
    return flipacoinb;
}
function rolladie(){
    var rolladiez = ["1", "2", "3", "4", "5", "6"];
    var rolladie = rolladiez[Math.floor(Math.random() * rolladiez.length)];
    return rolladie;
}
function randomcard(){
    var cardco = ["Spades", "Hearts", "Diamonds", "Clubs"];
    var randomcarda = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    var cardnum = cardco[Math.floor(Math.random() * cardco.length)];
    var cardnuma = randomcarda[Math.floor(Math.random() * randomcarda.length)];
    var cardans = cardnuma+ " of "+cardnum;
    return cardans;
}
function asplaysong(){
    if(navigator.onLine == true){
        closebot();
        musicplayer();
        hitrandommusic();
        return "Playing 🎵"
    }
    else{
        return "please check your connectivity";
    }
}
function inputdidntmatch(){
    var inputio = ["I am not sure, I understand you fully", "Please go on", "That is interesting. Please continue", "Tell me more about that", "Does talking about this bother you?", "I see"];
    var inputioa = inputio[Math.floor(Math.random() * inputio.length)];
    return inputioa;
}
function clearbotscreen(){
    document.getElementById('botplayground').innerHTML = "<br/>";
    return true;
}
function showdate(){
    var date = new Date();
    var weekdayz = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var weekday = weekdayz[date.getDay()];
    var monthz = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = monthz[date.getMonth()];
    var year = date.getFullYear();
    var day = date.getDate();
    var statement = year+" "+month+" "+day+", "+weekday;
    return statement;
}
function showtime(){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    if(hour>=0 && hour <= 9){
        hour = "0"+hour;
    }
    if(minutes>=0 && minutes <= 9){
        minutes = "0"+minutes;
    }    
    var statement = hour+" : "+minutes;
    return statement;
}
function asopenapp(){
    var myapps = ["Assistant", "Browser", "Calculator", "Calendar", "Clock", "Developer", "Devs", "E-mail", "Maps", "Music", "Phone", "Photo Editor", "Settings", "Sololearn", "Stopwatch", "Terminal", "Text Editor", "Themes", "Unit Converter", "Videos"];
    var apptbopen = prompt("Enter the name of app, CaseSensitive", myapps[Math.floor(Math.random() * myapps.length)]);
    if(myapps.indexOf(apptbopen) > -1){
        closebot();
        switch(apptbopen){
            case myapps[0]:
                openassistant();
                break;
            case myapps[1]:
                obrowser()
                break;
            case myapps[2]:
                showcalc();
                break;
            case myapps[3]:
                cal();
                break;
            case myapps[4]:
                showclock();
                break;
            case myapps[5]:
            	odevmode()
            	break;
            case myapps[6]:
                showdevs();
                break;
            case myapps[7]:
                openmaila()
                break;
            case myapps[8]:
            	maps()
            	break;
            case myapps[9]:
                musicplayer();
                break;
            case myapps[10]:
                phone()
                break;
            case myapps[11]:
            	ophotoeditor();
            	break;
            case myapps[12]:
                settings();
                break;
            case myapps[13]:
                sololearnf();
                break;
            case myapps[14]:
                stopwatchz();
                break;
            case myapps[15]:
                oterminal();
                break;
            case myapps[16]:
                texteditor();
                break;
            case myapps[17]:
                themesz();
                break;
            case myapps[18]:
            	unitconverter()
            	break;
            case myapps[19]:
                videos();
                break;
            default:
                alert("Something went wrong...");
                break;
        } 
         return "Here you go, "+apptbopen+"!";
    }
    else{
        var retrnsen = "";
        for(app =0; app<myapps.length; app++){
            retrnsen +="<br/>- "+myapps[app];
        }
        retrnsen +="<br/>&gt; It is Case Sensitive";
        return retrnsen;
    }
}


//Replies Credits : https://www.rivescript.com/try
//RiveScript-JS version 2.0.0-beta.1 - rs-standard.rive
function aami(){
    var amia = ["Do you believe you are "+inputzz+"?", "Would you want to be "+inputzz+"?", "Do you wish I would tell you are "+inputzz+"?", "What would it mean if your were "+inputzz];
    var amiaa = amia[Math.floor(Math.random() * amia.length)];
    return amiaa;
}
function aareyou(){
    var areyoua = ["Are you interested in whether i am "+inputzz+" or not", "Would it matter to you", "Would you prefer if I weren't "+inputzz+"?", "Perhaps I am "+inputzz+" in your fantasies", "Do you sometimes think I am "+inputzz+"?", "What if I were "+inputzz+"?"];
    var areyouaa = areyoua[Math.floor(Math.random() * areyoua.length)];
    return areyouaa;
}
function ayouare(){
    var youarea = ["What makes you think I am "+inputzz+"?", "Does it please you to believe I am "+inputzz+"?", "Do you sometimes wish you were "+inputzz+"?", "Perhaps you would like to be "+inputzz+"."];
    var youareaa = youarea[Math.floor(Math.random() * youarea.length)];
    return youareaa;
}
function awasi(){
    var wasia = ["What if you were "+inputzz+"?", "Do you think you were "+inputzz+"?", "Were you "+inputzz+"?", "What would it mean if you were "+inputzz+"?", "What does "+inputzz+" suggest to you?"];
    var wasiaa = wasia[Math.floor(Math.random() * wasia.length)];
    return wasiaa;
}
function aiwas(){
    var iwasa = ["Were you really?", "Why do you tell me you were "+inputzz+" now?", "Perhaps I already know you were "+inputzz+"."]; 
    var iwasaa = iwasa[Math.floor(Math.random() * iwasa.length)];
    return iwasaa;
}
function aiam(){
    var iama = ["Is it because you are "+inputzz+" that you came to me?", "How long you have been "+inputzz+"?", "Do you believe it is normal to be "+inputzz+"?", "Do you enjoy being "+inputzz+"?", "Do you know anyone else who is "+inputzz+"?"];
    var iamaa = iama[Math.floor(Math.random() * iama.length)];
    return iamaa;
}
function aicannot(){
    var icannota = ["How do you know that you can&quot;t "+inputzz+"?", "Have you tried?", "Perhaps you could "+inputzz+" now", "Do you really want to be able to "+inputzz+"?", "What if I could "+inputzz+"?"];
    var icannotaa = icannota[Math.floor(Math.random() * icannota.length)];
    return icannotaa;
}
function aidonot(){
    var idonota = ["Do you really "+inputzz+"?", "Why dont you "+inputzz+"?", "Do you wish to be able to "+inputzz+"?", "Does that trouble you?"];
    var idonotaa = idonota[Math.floor(Math.random() * idonota.length)];
    return idonotaa;
}
function anoone(){
    var noonea = ["Are you sure no one "+inputzz+"?", "Surely someone "+inputzz+".", "Can you think of anyone at all?", "Are you thinking of a very special person", "who, may I ask?", "You have a particular person in mind, dont you?", "Who do you think you are talking about?"];
    var nooneaa = noonea[Math.floor(Math.random() * noonea.length)];
    return nooneaa;
}
function acanyou(){
    var canyoua = ["You believe I can "+inputzz+" dont you", "You want me to be able to "+inputzz+"?", "Perhaps you would like to be able to "+inputzz+" yourself."];
    var canyouaa = canyoua[Math.floor(Math.random() * canyoua.length)];
    return canyouaa;
}
function aboutmsg(){
    return "About<hr/><span>1. Informal Chat<br/>2. Roll A Die<br/>3. Random Card<br/>4. Flip a coin<br/>5. Clear -> Clear Screen<br/>6. Table<br/>7. Date, Time<br/>8. Close</span>";
}

function banthis(inputz) {
    document.getElementById("banthis").style.height = "100%";
    var overlaynav = "Banned!";
    return overlaynav;
}
function closebot(){
    document.getElementById('botcontent').style.width = "0";
}


//a dangerous/stupid lies benath the code..



//Browser
function obrowser(){
    document.getElementById('browser').style.width = "100%";
}
var browhist = [];
function searchthis(){
    var searchitem = document.getElementById('browinp').value;

    if(searchitem.length == 0){
        alert("Write Something in Search bar!");
    }
    else{
        document.getElementById('mainscr').style.display="block";
        document.getElementById('ibrowser').setAttribute('src', 'https://www.bing.com/search?q='+searchitem);
        
        if(tconnect >= txtz.length){
               browhist.push("");
        }
        else{
            browhist.push(searchitem);
        }
    }
}
function closeifmbr(){
    document.getElementById('mainscr').style.display="none";
    document.getElementById('browinp').value ="";
}
function refreshsear(){
    var searchitem = document.getElementById('browinp').value;
    if(searchitem.length == 0){
        alert("Write something in Search bar!");
    }
    else{
        document.getElementById('ibrowser').setAttribute('src', 'https://www.bing.com/search?q='+searchitem);
    }
}
function cbrowser(){
    document.getElementById('browser').style.width = "0";
    document.getElementById('browinp').value ="";
    document.getElementById('mainscr').style.display = "none"
}


//Calculator
function showcalc(){
    document.getElementById('calculator').style.width = "100%";
    alert("Double Click 'C' to Close!");
}
calcinput = document.getElementById('calcinput');
function calcfontsize(){
    if(calcinput.value.length >= 0){
        calcinput.style.fontSize = "36px";
    }
    if(calcinput.value.length >= 10){
        calcinput.style.fontSize = "32px";
    }
    if(calcinput.value.length >= 15){
        calcinput.style.fontSize = "28px";
    }
    if(calcinput.value.length >= 20){
        calcinput.style.fontSize = "24px";
    }
}
function addnum(cnum){
    calcinput.value += cnum;
    calcfontsize();
}
function ravcalc(){
    document.getElementById("calcinput").value = "";
    document.getElementById("calcoutput").value = "";
    calcfontsize();
}
function rvcalc(){
    var calcinputz = calcinput.value;
    calcinputzz = calcinputz.slice(0, -1);
    calcinput.value = calcinputzz;
    calcfontsize();
}
function outputit(){
    if(calcinput.value == null || calcinput.value == ""){
        calcinput.value = "";
        document.getElementById('calcoutput').value = "";
    }
    else{
        try{
            document.getElementById('calcoutput').value = eval(calcinput.value);
        }
        catch(err){
            calcinput.value = "";
            alert("Invalid Input");
        }
    }
}
function ccalc(){
    document.getElementById('calculator').style.width = "0";
}




//I repeat, don't scroll;


//Calendar
function cal(){
    document.getElementById("cal").style.width ="100%";
    writecal();
}
var d = new Date;
var year = d.getFullYear();
var monthz = d.getMonth();
function writecal(){
    var calheader = document.getElementById('caltable').insertRow(-1);
    var calweekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for(weekdayforcal = 0; weekdayforcal<7;weekdayforcal++){
        insertingcell = calheader.insertCell(-1);
        insertingcell.innerHTML = "<b>"+calweekday[weekdayforcal]+"</b>";
    }
    switch(monthz){
        case 0: month = "January"; month_length=31;break;
        case 1: month = "Feburary";
            if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
                month_length=29;
            }
            else{
                month_length = 28;
                }
        break;
        case 2: month = "March"; month_length=31;break;
        case 3: month = "April"; month_length=30;break;
        case 4: month = "May"; month_length=31;break;
        case 5: month = "June"; month_length=30;break;
        case 6: month = "July"; month_length=31;break;
        case 7: month = "August"; month_length=31;break;
        case 8: month = "September"; month_length=30;break;
        case 9: month = "October"; month_length=31;break;
        case 10: month = "November"; month_length=30;break;
        case 11: month = "December"; month_length=31;break;
    }
    start_monthz = new Date(month+"1, "+year);
    start_month = start_monthz.getDay() +1;
    document.getElementById('caption').innerHTML = month+" "+year;
    var a = 0;
    var row1 = document.getElementById('caltable').insertRow(-1);
    for(var i=1;i<start_month;i++){
        cell = row1.insertCell(-1);
    }
    day = 1;
    for (var i=start_month;i<8;i++){
        cell = row1.insertCell(-1);
        if(d.getDate() == day  && d.getMonth() == monthz && d.getFullYear() == year){
            cell.classList.add("caltoday");
        }
        cell.innerHTML = day;
        day++
    }
    var a = document.getElementById('caltable').insertRow(-1);
    var row = [a];
    var rowing = 0;
    while (day <= month_length) {
        for (var i=1;i<=7 && day<=month_length;i++){
            cell = row[rowing].insertCell(-1);
            if(d.getDate() == day && d.getMonth() == monthz && d.getFullYear() == year){
                cell.classList.add("caltoday");
            }
            cell.innerHTML = day;
            day++
        }
        rowing++;
        row[rowing] = document.getElementById('caltable').insertRow(-1);
    }
}
function nextcal(){
    document.getElementById('caltable').innerHTML = "";
    monthz++;
    if(monthz > 11){
        monthz= 0;
        year++;
    }
    writecal();
}
function prevcal(){
    document.getElementById('caltable').innerHTML = "";
    monthz--;
    if(monthz < 0){
        monthz= 11;
        year--;
    }
    writecal();
}
function calhide(){
    document.getElementById("cal").style.width ="0";
    document.getElementById('caltable').innerHTML = "";
}


function showclock(){
    document.getElementById('clock').style.width = "100%";
}
function worldclockshouldwork(adahour, adamin){
	if(adahour <= -13 || adahour >= 13 || adamin < 0 || adamin > 60){
		return "See the time difference";
	}
    var d = new Date();
    var ofset = d.getTimezoneOffset();
    var timmin = ofset%60;
    var hourz = ofset-timmin;
    var timhour = hourz/60;
    var seconds = d.getSeconds();
    var crntlhour = d.getHours();
    var crntlmin = d.getMinutes();
    var t1crntlhour1 = crntlhour + timhour;
    var t1crntlmin1 = crntlmin + timmin;
    var t1crntlhour = t1crntlhour1 + adahour;
    var t1crntlmin = t1crntlmin1 + adamin;
    if(t1crntlmin < 0){
        t1crntlmin = t1crntlmin + 60;
        t1crntlhour--;
    }
    if(t1crntlmin > 60){
        t1crntlmin = t1crntlmin - 60;
        t1crntlhour++;
    }
    if(t1crntlhour < 0){
        t1crntlhour = t1crntlhour + 24;
    }
    
    if(t1crntlhour >= 24){
        t1crntlhour -= 24;
    }
    if(t1crntlhour >= 0 && t1crntlhour <= 9){
        t1crntlhour = "0"+t1crntlhour;
    }
    if(t1crntlmin >= 0 && t1crntlmin <= 9){
        t1crntlmin = "0"+t1crntlmin;
    }
    if(seconds >= 0 && seconds <=9){
        seconds = "0"+seconds;
    }
    return t1crntlhour+" : "+t1crntlmin+" : "+seconds;
}

function hideclock(){
    document.getElementById('clock').style.width = "0";
}


//Developer Mode
function odevmode(){
	document.getElementById('devmode').style.width = "100%";
}
function devfunc(){
    var jsstr = document.getElementById('devappinp').value;
    if(jsstr.length == 0)
     	document.getElementById('devfunc').innerHTML += "- need some JavaScript input<br/>";
    else
       	document.getElementById('userwcdevz').innerHTML += jsstr+"<hr/>";
    var notallowedjs = ["notallowedjs","assistantwork", "clearinterval", "replybotmessage", "write", "devfunc", "tconnect", "abxxsasswsasa", "mapp21", "memeap"];
    var notoffen = true;
    for(i=0; i<notallowedjs.length;i++){
        if(jsstr.search(notallowedjs[i]) > -1){
            notoffen = false;
            document.getElementById('devfunc').innerHTML += "Not allowed<br/>";
            return true;
        }
    }
    if(notoffen == true){
        try{
            document.getElementById('devappinp').value = "";
            var abxxsasswsasa = eval(jsstr);
            if((typeof abxxsasswsasa) == 'number'){
            	console.log(abxxsasswsasa);
            }
        }
        catch(err){
            document.getElementById('devfunc').innerHTML += "- "+err+"<br/>";
        }
    }
}
function cdevmode(){
	document.getElementById('devmode').style.width = "0";
}


//Devs
function showdevs(){
    document.getElementById('devs').style.width = "100%";
}
function cdevs(){
    document.getElementById('devs').style.width = "0";
}


//Easter
function omeme(){
    document.getElementById('memeap').style.height = "100%";
    changememe();
}
function changememe(){
    var num = Math.ceil(Math.random() * 108);
    document.getElementById('memewallp').src = "https://jaydeepkhatri.000webhostapp.com/MeMe/me ("+num+").jpg";
}
function cmeme(){
    document.getElementById('memeap').style.height = '0';
}





//Email
function openmaila(){
    document.getElementById('email').style.width = "100%";
    document.getElementById('closeembtn').style.display = "block";
    document.getElementById('repmaibtn').style.display="block";
}
function replymail(){
    document.getElementById('mailreppal').style.width="100%";
    document.getElementById('closeembtnc').style.display = "block";
    document.getElementById('repmaibtnc').style.display = "block";
}
function creplymail(){
    closeemail();
    document.getElementById('mailreppal').style.width="0";
    document.getElementById('closeembtnc').style.display = "none";
    document.getElementById('repmaibtnc').style.display = "none";
}
function closeemail(){
    document.getElementById('email').style.width = "0";
    document.getElementById('closeembtn').style.display = "none";
    document.getElementById('repmaibtn').style.display="none";
}


//Maps
function maps(){
    document.getElementById('map').style.width="100%";
}
function mapfin(){
    var mapval = document.getElementById('mapval').value;
    if(mapval.length == 0){
        alert("Write in search bar");
    }
    else{
        document.getElementById('mainmap').style.display="block";
        document.getElementById('closemapbtn').style.display = "none";
        document.getElementById('closemapbtn1').style.display = "block";
        document.getElementById('mappp').setAttribute('src', "https://maps.google.com/maps?q="+mapval+"&output=embed");
    }
}
function bmmaps(){
    document.getElementById('mainmap').style.display="none";
    document.getElementById('closemapbtn').style.display = "block";
    document.getElementById('closemapbtn1').style.display = "none";

}
function cmaps(){
    document.getElementById('map').style.width="0";
    document.getElementById('mapval').value = "";
}


/*
Caught you, Danger Ahead💀
*/


//Music Player
function musicplayer(){
    document.getElementById('musicplayer').style.width="100%";
}
var song = ["Afreen Afreen.mp3", "Attention.mp3", "Bolna.mp3", "Daru Badnaam.mp3", "Despacito.mp3", "Faded.mp3", "Girls Like You.mp3", "Havana.mp3", "Let Me Love You(remix).mp3", "Maahi Ve.mp3", "Magenta Riddim.mp3", "Mehram.mp3", "Qaafirana.mp3", "Shape of You.mp3", "Taki Taki.mp3", "Tera Yaar Hoon Main.mp3", "Zaalima.mp3"];
var songlen = [398,233,212,185,228,212,235,218,209,240,194,278,342,233, 231,264,299];
var songnum = 0;
var seekprogress = document.getElementById('seekvalue');
var audioElement = document.createElement('audio');
audioElement.setAttribute('ontimeupdate', 'currentti()');
audioElement.setAttribute('onloadstart', 'thisonloadstart()');
audioElement.setAttribute('onloadeddata', 'thisonloadeddataz()');
audioElement.setAttribute('onended', 'mforward()');
function thisonloadstart(){
    document.getElementById('mloading').style.display = "block";
    document.getElementById('mstatus').innerHTML = "Loading.. <i class='fa fa-circle-o-notch fa-spin'></i> ";
}
function thisonloadeddataz(){
    setTimeout(alertthisonloadeddata, 500);
    document.getElementById('mstatus').innerHTML = "Done 👍";
}
function alertthisonloadeddata(){
    document.getElementById('mloading').style.display = "none";
}
document.getElementById("pausebutton").style.display = "none";
volumecontrol(0.7);
function dancethis1(){
    for(i=1;i<11;i++){
        if(i%3 == 0)
            document.getElementById('dnd'+i).style.height = Math.floor((Math.random()*220))+"px";
    }
}
function dancethis2(){
    for(j=1;j<11;j++){
        if(j%3 == 1)
        document.getElementById('dnd'+j).style.height = Math.floor((Math.random()*220))+"px";
    }
}
function dancethis3(){
    for(k=1;k<11;k++){
        if(k%3 == 2)
        document.getElementById('dnd'+k).style.height = Math.floor((Math.random()*220))+"px";
    }
}
var currentz = 0;
var bardance1;
var bardance2;
var bardance3;
function playmusic(){

    seekprogress.setAttribute('max', songlen[songnum]);
    
    audioElement.setAttribute('src', "https://jaydeepkhatri.000webhostapp.com/music/SL/"+song[songnum]);
    audioElement.currentTime = currentz;
    var playPromise = audioElement.play();
    if (playPromise !== undefined) {
    playPromise.then(_ => {
        document.getElementById('musicnotico').innerHTML = "<i class='fa fa-headphones'></i>";
        bardance1 = setInterval(dancethis1, 400);
        bardance2 = setInterval(dancethis2, 500),
        bardance3 = setInterval(dancethis3, 600),
        tobemus = song[songnum].substring(0, song[songnum].length-4)
        document.getElementById("titlesong").innerHTML = tobemus;
        document.getElementById("pausebutton").style.display = "block";
        document.getElementById("playbutton").style.display = "none";
    })
    .catch(error => {
        alert("Have Patience!\nLet the song load ☺🎵🎶");
    });
    }
    //help from Google, try & catch.
}
function pausemusic(){
    audioElement.pause();
    document.getElementById('musicnotico').innerHTML = "";
    clearInterval(bardance1);
    clearInterval(bardance2);
    clearInterval(bardance3);
    document.getElementById("playbutton").style.display = "block";
    document.getElementById("pausebutton").style.display = "none";
}
function currentti(){
    document.getElementById('seekvalue').value = audioElement.currentTime;
    currentz = audioElement.currentTime;
    current = currentz.toFixed(1);
    mmin = Math.floor(current/60);
    currents = (current - (60*mmin)).toFixed(1);
    if(currents >= 0 && currents <= 10){
        currents = "0"+currents;
    }
    document.getElementById('ctime').innerHTML = "0"+mmin +" : "+currents;
}
function mforward(){
    songnum++;
    currentz = 0;
    clearInterval(bardance1);
    clearInterval(bardance2);
    clearInterval(bardance3);
    if(songnum>=song.length){
        songnum = 0;
    }
    playmusic();
}
function mbackward(){
    songnum--;
    currentz = 0;
    clearInterval(bardance1);
    clearInterval(bardance2);
    clearInterval(bardance3);
    if(songnum<0){
        songnum = song.length;
        return;
    }

    playmusic();
}
function hitrandommusic(){
    clearInterval(bardance1);
    clearInterval(bardance2);
    clearInterval(bardance3);
    currentz = 0;
    songnum = Math.floor(Math.random() * song.length);
    playmusic();
}
function repeatthis(){
    audioElement.currentTime = 0;
    currentz = 0;
    clearInterval(bardance1);
    clearInterval(bardance2);
    clearInterval(bardance3);
    playmusic();
}
function volumecontrol(volume){
    audioElement.volume = volume;
}
function cmusicplayer(){
    document.getElementById('musicplayer').style.width="0";
    document.getElementById('mloading').style.display = "none";
    pausemusic();
    clearInterval(bardance1);
    clearInterval(bardance2);
    clearInterval(bardance3);
}



//Phone
function phone(){
    document.getElementById('phone').style.width = "100%";
}
function phonenumin(val){
    var phonenumber = "";
    phonenumber += val;
    document.getElementById('inputnumber').value += phonenumber;
}
function clearnum(){
    phonenumber = document.getElementById('inputnumber').value;
    phonenumber = phonenumber.slice(0, -1);
    document.getElementById('inputnumber').value = phonenumber;
}
var tbeaster = Math.floor(Math.random()*9999);
if(tbeaster>=1 && tbeaster <=9)
    tbeaster = "000"+tbeaster;
else if(tbeaster>=10 && tbeaster <=99)
    tbeaster = "00"+tbeaster;
else if(tbeaster>=100 && tbeaster <=999)
    tbeaster = "0"+tbeaster;
function phonecallit(){
    var num = document.getElementById('inputnumber').value;
    if(num.length > 0){
        if(num == tbeaster){
            closephone();
            document.getElementById('mapp21').style.display = "inline-block";
            document.getElementById('inputnumber').value = "";
            alert("Activated");
        }
        else{
            window.open("tel:"+num);
        }
    }
}
function closephone(){
    document.getElementById('phone').style.width = "0";
}



/*
warning, warning, warning, warning!!!!!!!!
some people already had a serious attack while moving benath the code

so simply, don't scroll ⚡
*/



//Photo Editor
function ophotoeditor(){
	document.getElementById('photoeditor').style.width = "100%";
}
var ieinprange = document.getElementById('inputrange');
var iemainimg = document.getElementById('imagefil').style;
var ieimgbr = document.getElementById('bRadius').style;
var ieimgb = document.getElementById('ieborder').style;
var ieimgsld = document.getElementById('ieslidecontainer').style;
var ieimgrot = document.getElementById('ierotate').style;
function ieimeff(){
	ieimgsld.display = "block";
	ieimgbr.display = "none";
	ieimgb.display = "none";
	ieimgrot.display = "none";
}
var ieimgval = ["0", "0", "100", "0", "0", "100", "100", "100", "0"];
var iedefval = ["0", "0", "100", "0", "0", "100", "100", "100", "0"];
function mainimgedi(value){
	switch (iefilter){
	case 0:
		ieimgval[0] = value;
		document.getElementById('iefiltex1').innerHTML = ieimgval[0];
	break;
	case 1:
		ieimgval[1] = value;
		document.getElementById('iefiltex2').innerHTML = ieimgval[1];
	break;
	case 2:
		ieimgval[2] = value;
		document.getElementById('iefiltex3').innerHTML = ieimgval[2];
	break;
	case 3:
		ieimgval[3] = value;
		document.getElementById('iefiltex4').innerHTML = ieimgval[3];
	break;
	case 4:
		ieimgval[4] = value;
		document.getElementById('iefiltex5').innerHTML = ieimgval[4];
	break;
	case 5:
		ieimgval[5] = value;
		document.getElementById('iefiltex6').innerHTML = ieimgval[5];
	break;
	case 6:
		ieimgval[6] = value;
		document.getElementById('iefiltex7').innerHTML = ieimgval[6];
	break;
	case 7:
		ieimgval[7] = value;
		document.getElementById('iefiltex8').innerHTML = ieimgval[7];
	break;
	case 8:
		ieimgval[8] = value;
		document.getElementById('iefiltex9').innerHTML = ieimgval[8];
	break;
	}
	iemainimg.filter = "grayscale("+ieimgval[0]+"%) sepia("+ieimgval[1]+"%) saturate("+ieimgval[2]+"%) hue-rotate("+ieimgval[3]+"deg) invert("+ieimgval[4]+"%) opacity("+ieimgval[5]+"%) brightness("+ieimgval[6]+"%) contrast("+ieimgval[7]+"%) blur("+ieimgval[8]+"px)";
}
var iefilter ="";
function changefil(value){
	switch(value){
	case 'Grayscale':
		ifsetminatt(0);
		ifsetmaxatt(100);
		iefilter = 0;
		ieinprange.value = ieimgval[0];
	break;
	case 'Sepia':
		ifsetminatt(0);
		ifsetmaxatt(100);
		iefilter = 1;
		ieinprange.value = ieimgval[1];
	break;
	case 'Saturate':
		ifsetminatt(0);
		ifsetmaxatt(200);
		iefilter = 2;
		ieinprange.value = ieimgval[2];
	break;
	case 'Hue rotate':
		ifsetminatt(0);
		ifsetmaxatt(360);
		iefilter = 3;
		ieinprange.value = ieimgval[3];
	break;
	case 'Invert':
		ifsetminatt(0);
		ifsetmaxatt(100);
		iefilter = 4;
		ieinprange.value = ieimgval[4];
		break;
	case 'Opacity':
		ifsetminatt(0);
		ifsetmaxatt(100);
		iefilter = 5;
		ieinprange.value = ieimgval[5];
	break;
	case 'Brightness':
		ifsetminatt(0);
		ifsetmaxatt(300);
		iefilter = 6;
		ieinprange.value = ieimgval[6];
	break;
	case 'Contrast':
		ifsetminatt(50);
		ifsetmaxatt(200);
		iefilter = 7;
		ieinprange.value = ieimgval[7];
	break;
	case 'Blur':
		ifsetminatt(0);
		ifsetmaxatt(10);
		iefilter = 8;
		ieinprange.value = ieimgval[8];
	break;
	}
}
function ifsetminatt(min){
	return ieinprange.setAttribute('min', min);
}
function ifsetmaxatt(max){
	return ieinprange.setAttribute('max', max);
}
function borradcli(){
	ieimgbr.display = "block";
	ieimgb.display = "none";
	ieimgsld.display = "none";
	ieimgrot.display = "none";
}
function bradius(bvalue){
	iemainimg.borderRadius = bvalue+"%";
}


function boriecli(){
	ieimgbr.display = "none";
	ieimgb.display = "block";
	ieimgsld.display = "none";
	ieimgrot.display = "none";
}
var peborder = '000';
var peborderstyle = 'solid';
function ieeborder(value){
	iemainimg.border = value+"px solid #"+peborder;
	iemainimg.borderStyle = peborderstyle;
}
function borroti(){
	ieimgbr.display = "none";
	ieimgb.display = "none";
	ieimgsld.display = "none";
	ieimgrot.display = "block";
}
function ieroate(value){
	iemainimg.transform = "rotate("+value+"deg)";
}
function reset(){
	iemainimg.filter = "grayscale("+iedefval[0]+"%) sepia("+iedefval[1]+"%) saturate("+iedefval[2]+"%) hue-rotate("+iedefval[3]+"deg) invert("+iedefval[4]+"%) opacity("+iedefval[5]+"%) brightness("+iedefval[6]+"%) contrast("+iedefval[7]+"%) blur("+iedefval[8]+"px)";
	for(i=0;i<9;i++){ 
		ieimgval[i] = iedefval[i];
		document.getElementById('iefiltex'+(i+1)).innerHTML = ieimgval[i];
		document.getElementById('baRadius').value = 0;
		iemainimg.border = "0";
		iemainimg.borderRadius = 0;
		iemainimg.transform = 'rotate(0deg)';
		document.getElementById('borderplus').value = 0;
		document.getElementById('imgrotate').value = 0;
	}
}
var idkcef = 0;
function iechagim(){
    document.getElementById('imagefil').src = "https://picsum.photos/250/250/?random&randomm="+idkcef;
    idkcef++;
    reset();
}
function cphotoeditor(){
	document.getElementById('photoeditor').style.width = "0";
}





//Settings
function settings(){
    document.getElementById('settings').style.width = "100%";
}
var seticobt1 = document.getElementById('seticobtn1');
var seticobt2 = document.getElementById('seticobtn2');
var seticobt3 = document.getElementById('seticobtn3');
seticosize('medium');
function seticosize(appsize){
    var size = appsize;
    if(size == 'small'){
        seticobt1.style.backgroundColor = "#"+themecolorname;
        seticobt2.style.backgroundColor = "#ddd";
        seticobt3.style.backgroundColor = "#ddd";
        for(i=1;i<=21;i++){
            document.getElementById("mapp"+i).style.width = "20%";
            document.getElementById("mapp"+i).style.cssFloat = "left";
            document.getElementById('ap'+i).style.width = '55px';
            document.getElementById('ap'+i).style.height = '55px';
            document.getElementById('aptxt'+i).style.fontSize = "12px";
        }
    }
    else if(size == 'medium'){
        seticobt1.style.backgroundColor = "#ddd"
        seticobt2.style.backgroundColor = "#"+themecolorname;
        seticobt3.style.backgroundColor = "#ddd";
        for(i=1;i<=21;i++){
            document.getElementById("mapp"+i).style.width = "25%";
            document.getElementById("mapp"+i).style.cssFloat = "left";
            document.getElementById('ap'+i).style.width = '70px';
            document.getElementById('ap'+i).style.height = '70px';
            document.getElementById('aptxt'+i).style.fontSize = "16px";
        }
    }
    else if(size == 'large'){
        seticobt1.style.backgroundColor = "#ddd";
        seticobt2.style.backgroundColor = "#ddd";
        seticobt3.style.backgroundColor = "#"+themecolorname;
        for(i=1;i<=21;i++){
            document.getElementById("mapp"+i).style.width = "33%";
            document.getElementById("mapp"+i).style.cssFloat = "left";
            document.getElementById('ap'+i).style.width = '80px';
            document.getElementById('ap'+i).style.height = '80px';
            document.getElementById('aptxt'+i).style.fontSize = "20px";
        }
    }
}
function mobileoff(){
    var conf = confirm("Are you Sure?");
    var closemusic = document.createElement('audio');
    closemusic.setAttribute('src', 'http://jaydeepkhatri.000webhostapp.com/music/SL/windowsc.mp3');
    if(conf==true){
        closemusic.volume = 1;
        closemusic.play();
        setTimeout(function()
        {
            var body = document.getElementById('body');
            body.innerHTML = "";
            body.innerHTML = "<img src='http://jaydeepkhatri.000webhostapp.com/music/SL/a144.jpg' style='width:100%; height:100%; border-radius:0;'/>";
            clearInterval(mainloadingz);
        }, 500);
    }
}
function closesettings(){
    document.getElementById('settings').style.width = "0";
}


/*
Seems like you are taking this lightly
or didn't you read the warning above in the code
there is danger ahead⚠

DONT SCROLL;
*/




//SoloLearn
function sololearnf() {
    document.getElementById('sololearn').style.width="100%";
}
function csololearnf() {
    document.getElementById('sololearn').style.width="0";
}


//Stopwatch
function stopwatchz(){
    document.getElementById('stopwatch').style.width="100%";
}
clockinterval = null;
swmsec = swmsecp = swsec = swsecp = swmin = swminp = swhour = swhourp = 0;
function countstopwatch(){
    swmsec++;
    swmsecp = swmsec;
    swsecp = swsec;
    swminp = swmin;
    swhourp = swhour;
    if(swmsec>=0 && swmsec<=9){
        swmsecp = "0"+swmsec;
    }
    if(swsec>=0 && swsec <= 9){
        swsecp = "0"+swsec;
    }
    if(swmin>=0 && swmin <= 9){
        swminp = "0"+swmin;
    }
    if(swhour>=0 && swhour <= 9){
        swhourp = "0"+swhour;
    }
    if(swmsec>=99){
        swsec++;
        swmsec = 0;
    }
    if(swsec > 59){
        swmin++;
        swsec = 0;
    }
    if(swmin > 59){
        swhour++;
        swmin = 0;
        swsec = 0;
    }
    printswvalues(swmsecp, swsecp, swminp, swhourp);
}
function printswvalues(swmsec, swsec, swmin, swhour){
    document.getElementById('stophour').innerHTML = swhour;
    document.getElementById('stopminute').innerHTML = swmin;
    document.getElementById('stopsecond').innerHTML = swsec;
    document.getElementById('stopmsecond').innerHTML = swmsec;
}
function resetsw(){
    clearInterval(clockinterval);
    document.getElementById('swstart').disabled = false;
    swmsec = swmsecp = swsec = swsecp = swmin = swminp = swhour = swhourp = 0;
    printswvalues(swmsec, swsec, swmin, swhour);
    swtable.innerHTML = "";
}
var swtable = document.getElementById('tabforlap');
function swlap(){
    var swtrow = swtable.insertRow(-1);
    var cell = swtrow.insertCell(-1);
    cell.style.textAlign = "center";
    cell.innerHTML = swhourp+" : "+swminp+" : "+swsecp+" : "+swmsecp;
}
function closestopwatch(){
    document.getElementById('stopwatch').style.width="0";
}




//Terminal
function oterminal(){
    document.getElementById('materminal').style.width = "100%";
}
var mainterminal = document.getElementById('mterminal');
var tinput = document.getElementById('terminalinput');
var tscrollelement = document.getElementById('mterminal');
var txtz = '██████████████';
function workterminal(){
    var ttextz = tinput.value;
    var ttext = ttextz.toLowerCase();
    mainterminal.innerHTML += "<br/>~//root/"+ttextz;
    tinput.value = "";
    var posinput = ["connect", "disconnect", "delete", "close", "browser", "help", ""];
    switch(ttext){
        case posinput[0]:
            tinput.disabled = true;
            mainterminal.innerHTML += "<br/> <i class='fa fa-caret-right'></i> Finding server...<br/>";
            setTimeout(tprogressitz, 2000);
            break;
        case posinput[1]:
            tconnect = 0;
            mainterminal.innerHTML +="<br/> <i class='fa fa-caret-right'></i> You are disconnected!";
            document.getElementById('mapp21').style.display = "none";
            document.getElementById('usericon').innerHTML = "";
            document.getElementById('themedef').style.display = "none";
            document.getElementById('browinco').innerHTML = "<i class='fa fa-refresh fa-fw'></i>";
            document.getElementById('browinco').setAttribute('onclick', 'refreshsear()');
            break;
        case posinput[2]:
            if(tconnect >= txtz.length){
                var apptbdelete = prompt("Enter the name of app", "Name");
                tdeleteapp(apptbdelete);
            }
            else{
                mainterminal.innerHTML += "<br/><i class='fa fa-caret-right'></i>Please connect to server";
            }
            break;
        case posinput[3]:
            document.getElementById('materminal').style.width = "0";
            break;
        case posinput[4]:
            mainterminal.innerHTML += "<br/> <i class='fa fa-caret-right'></i> History ("+browhist.length+")";
            for(a = 0; a<browhist.length;a++){
                mainterminal.innerHTML += "<br/> - "+browhist[a];
            }
            break;
        case posinput[6]:
            break;
        default:
            mainterminal.innerHTML +="<br/><i class='fa fa-caret-right'></i> List of commands is";
            for(commands = 0; commands<posinput.length;commands++){
                mainterminal.innerHTML +="<br/>- "+posinput[commands];
            }
    }
    tscrollelement.scrollTop = tscrollelement.scrollHeight;
}
function tprogressitz(){
    document.getElementById('mterminal').innerHTML += "<i class='fa fa-caret-right'></i> Connecting...<br/>";
    tscrollelement.scrollTop = tscrollelement.scrollHeight;
    setTimeout(tprogressit, 500);
}
var tconnect = 0;
function tprogressit(){
    tconnect++;
    if(tconnect > txtz.length){
        document.getElementById('mterminal').innerHTML += "<i class='fa fa-caret-right'></i> Already connected to server<br/><i class='fa fa-caret-right'></i> "+tbeaster;
        tinput.disabled = false;
        tscrollelement.scrollTop = tscrollelement.scrollHeight;
    }
    if(tconnect < txtz.length){
        document.getElementById("mterminal").innerHTML += txtz.charAt(tconnect);
        tscrollelement.scrollTop = tscrollelement.scrollHeight;
        setTimeout(tprogressit, 500);
    }
    if(tconnect == txtz.length){
        document.getElementById('mterminal').innerHTML += "<br/><i class='fa fa-caret-right'></i> Connection established to server!<br/><i class='fa fa-caret-right'></i> "+tbeaster;
        tinput.disabled = false;
        document.getElementById('usericon').innerHTML = "<i class='fa fa-user fa-fw'></i>";
        document.getElementById('browinco').innerHTML = "<i class='fa fa-coffee fa-fw'></i>";
        document.getElementById('browinco').setAttribute('onclick', "alert('You are in Incognito Mode!')");
        document.getElementById('themedef').style.display = "block";
        tscrollelement.scrollTop = tscrollelement.scrollHeight;
    }
}
function tdeleteapp(apptbdelete){
    var myapps = ["Assistant", "Browser", "Calculator", "Calendar", "Clock", "Developer", "Devs", "E-mail", "Maps", "Music", "Phone", "Photo Editor", "Settings", "Sololearn", "Stopwatch", "Terminal", "Text Editor", "Themes", "Unit Converter", "Videos"];
    if(myapps.indexOf(apptbdelete) > -1){
        document.getElementById("mapp"+(myapps.indexOf(apptbdelete)+1)).style.display = "none";
        mainterminal.innerHTML +="<br/>&gt; deleted "+apptbdelete+"!";
    }
    else{
        mainterminal.innerHTML +="<br/><i class='fa fa-caret-right'></i> "+apptbdelete+"<br/><i class='fa fa-caret-right'></i> Please check the name";
        for(app =0; app<myapps.length; app++){
            mainterminal.innerHTML +="<br/>- "+myapps[app];
        }
        mainterminal.innerHTML +="<br/><i class='fa fa-caret-right'></i> It is Case Sensitive";
    }
}
function closeterminal(){
    document.getElementById('materminal').style.width = "0";
   }


/*
So you have decided to move benath the code😑
*/



//TextEditor
function texteditor(){
    document.getElementById('texteditor').style.width = "100%";
}
var defbor = "2px solid #ddd";
var texteditorelement = document.getElementById('texteditorcontent').style;
var bolding = 1;
function boldthis(){
    if(bolding%2 == 1){
        texteditorelement.fontWeight = "bold";
        document.getElementById('textedit1').style.border = "2px solid #"+themecolorname;
        bolding++;
    }
    else{
        texteditorelement.fontWeight = "normal";
        document.getElementById('textedit1').style.border = defbor;
        bolding++;
    }
}
var italicing = 1;
function italicthis(){
    if(italicing%2 ==1){
        texteditorelement.fontStyle = "italic";
        document.getElementById('textedit2').style.border = "2px solid #"+themecolorname;
        italicing++;
    }
    else{
         texteditorelement.fontStyle = "normal";
         document.getElementById('textedit2').style.border = defbor;
         italicing++;
    }
}
var underlining = 1;
function underlinethis(){
    if(underlining%2 == 1){
        texteditorelement.textDecoration = "underline";
        document.getElementById('textedit3').style.border = "2px solid #"+themecolorname;
        underlining++;
    }
    else{
         texteditorelement.textDecoration = "none";
         document.getElementById('textedit3').style.border = defbor;
         underlining++;
    }
}
function fontsizethis(size){
    texteditorelement.fontSize = size+"px";
}
function alignthis(alignname){
    texteditorelement.textAlign = alignname;
    if(alignname == "left"){
        document.getElementById('textedit4').style.border = "2px solid #"+themecolorname;
        for(textalignbutton = 5; textalignbutton <=7; textalignbutton++){
            document.getElementById('textedit'+textalignbutton).style.border = defbor;
        }
    }
    else if(alignname == "center"){
        document.getElementById('textedit5').style.border = "2px solid #"+themecolorname;
        for(textalignbutton = 4; textalignbutton <=7; textalignbutton++){
            if(textalignbutton == 5){
                continue;
            }
            else{
            document.getElementById('textedit'+textalignbutton).style.border = defbor;
            }
        }
    }
    else if(alignname == "right"){
        document.getElementById('textedit6').style.border = "2px solid #"+themecolorname;
        for(textalignbutton = 4; textalignbutton <=7; textalignbutton++){
            if(textalignbutton == 6){
                continue;
            }
            else{
            document.getElementById('textedit'+textalignbutton).style.border = defbor;
            }
        }
    }
    else if(alignname == "justify"){
        document.getElementById('textedit7').style.border = "2px solid #"+themecolorname;
        for(textalignbutton = 4; textalignbutton <=6; textalignbutton++){
            document.getElementById('textedit'+textalignbutton).style.border = defbor;
        }
    }
}
var shadowing = 1;
function shadowthis(){
    if(shadowing%2==1){
        texteditorelement.textShadow = "0px 0px 8px #"+themecolorname;
    
    document.getElementById('textedit8').style.border = "2px solid #"+themecolorname;
    shadowing++;
    }
    else{
        texteditorelement.textShadow = "none";
         document.getElementById('textedit8').style.border = defbor;
        shadowing++;
    }
}
function tefont(){
    var fontstyle=document.getElementById('tefont').value;
    switch(fontstyle){
        case 'Barlow':
            texteditorelement.fontFamily = 'Barlow, sans-serif';
            break;
        case 'Pattaya':
            texteditorelement.fontFamily = 'Pattaya, sans-serif';
            break;
        case 'Spicy Rice':
            texteditorelement.fontFamily = 'Spicy Flower, cursive';
            break;
        case 'Indie Flower':
            texteditorelement.fontFamily = 'Indie Flower, cursive';
            break;
        case 'Shadows into Light':
            texteditorelement.fontFamily = 'Shadows Into Light, cursive';
            break;
        case 'Satisfy':
            texteditorelement.fontFamily = 'Satisfy, cursive';
            break;
        case 'Baloo Bhaijaan':
            texteditorelement.fontFamily = 'Baloo Bhaijaan, cursive';
            break;
        case 'Caveat':
            texteditorelement.fontFamily = 'Caveat, cursive';
            break;
        case 'Monoton':
            texteditorelement.fontFamily = 'Monoton, cursive';
            break;
    }
}
function techangecol(){
    var val = document.getElementById('tecolpal').value;
    texteditorelement.color = val;
}
function showtebar(){
    document.getElementById('tetab').style.display="block";
    texteditorelement.height = "70%";
    document.getElementById('teshowbtn').style.display="none";
}
function hidetebar(){
    document.getElementById('tetab').style.display="none";
    texteditorelement.height = "100%";
    document.getElementById('teshowbtn').style.display="block";
}
function ctexteditor(){
    document.getElementById('texteditor').style.width = "0";
}



var ytembed = "https://www.youtube.com/embed/";
var youtubevideos = ["Ii3c3mEAuA4", "Q6_5InVJZ88", "UeG1ftTmLAg", "QdVFvsCWXrA", "1KofiHFsBQk", "zsjK04TqQq0", "fTvelC4ZZds", "Q0jeohWnmAQ", "D75ZuaSR8nQ", "cqyziA30whE", "HZrsuEWw9m8", "WKuNWrxuJ9g", "F9GujgK0y2M", "OmeFGPnT3Qs"];
var playingnow = 0;
//Themes
function themesz(){
    document.getElementById('themesz').style.width = "100%";
}
themcolo('aabac2');
var themecolorname;
function themcolo(themecolornamez){
    themecolorname = themecolornamez;
    document.getElementById('notific').style.backgroundColor = "#"+themecolorname;
    document.getElementById('phonecallbtn').style.backgroundColor = "#"+themecolorname;
    document.getElementById('phonebackbtn').style.backgroundColor = "#"+themecolorname;
    document.getElementById('playbutton').style.border = "2px solid #"+themecolorname;
    document.getElementById('pausebutton').style.border = "2px solid #"+themecolorname;
    document.getElementById('repmaibtn').style.backgroundColor = "#"+themecolorname;
    document.getElementById('closeembtn').style.backgroundColor = "#"+themecolorname;
    document.getElementById('repmaibtnc').style.backgroundColor = "#"+themecolorname;
    document.getElementById('closeembtnc').style.backgroundColor = "#"+themecolorname;
    for(i=1;i<=6;i++){
        document.getElementById('setbadge'+i).style.backgroundColor = "#"+themecolorname;
    }
    for(i=1; i<=5;i++){
        document.getElementById('calcnum'+i).style.backgroundColor = "#"+themecolorname;
    }
    for(i=1;i<=8;i++){
        document.getElementById('textedit'+i).style.border = "2px solid #ddd";
    }
    for(l=1;l<=10;l++){
        document.getElementById('dnd'+l).style.backgroundColor = "#"+themecolorname;
    }
    for(m=1;m<=3;m++){
        document.getElementById('musicbu'+m).style.border = "2px solid #"+themecolorname;
    }
    for(ie=0;ie<=5;ie++){
    	document.getElementById('iebtn'+ie).style.backgroundColor = "#"+themecolorname;
    }
    for(vid=0;vid<=youtubevideos.length-1;vid++){
        document.getElementById('videoitem'+vid).style.backgroundColor = "#"+themecolorname
    }
}
function cthemes(){
    document.getElementById('themesz').style.width = "0";
}


/*
⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠

Are this warning signs a joke???🙄😑
*/



//Unit Converter
function unitconverter(){
    document.getElementById('unitconveter').style.width = "100%";
}
var ucentimeter = document.getElementById('inpcentimeter');
	var umeter = document.getElementById('inpmeter');
	var ukilometer = document.getElementById('inpkilometer');
	var uinch = document.getElementById('inpinch');
	var ufoot = document.getElementById('inpfoot');
	var uyard = document.getElementById('inpyard');
	var umile = document.getElementById('inpmile');
function uccentimeter(cm){
	umeter.value = cm/100;
	ukilometer.value = cm/100000;
	uinch.value = cm*0.39370;
	ufoot.value = cm*0.032808;
	uyard.value = cm*0.010936;
	umile.value = cm*0.0000062137;
}
function ucmeter(m){
	ucentimeter.value = m/0.01;
	ukilometer.value = m/1000;
	uinch.value = m*39.370;
	ufoot.value = m*3.2808;
	uyard.value = m*1.0936;
	umile.value = m*0.00062137;
}
function uckilometer(km){
	ucentimeter.value = km*100000;
	umeter.value = km*1000;
	uinch.value = km*39370;
	ufoot.value = km*3280.8;
	uyard.value = km*1093.6;
	umile.value = km*0.62137;
}
function ucinch(inch){
	ucentimeter.value = inch/0.39370;
	umeter.value = inch/39.370;
	ukilometer.value = inch/39370;
	ufoot.value = inch*0.83333;
	uyard.value = inch*0.027778;
	umile.value = inch*0.000015783;
}
function ucfoot(foot){
	ucentimeter.value = foot/0.032808;
	umeter.value = foot/3.2808;
	ukilometer.value = ft/3280.8;
	uinch.value = foot*12;
	uyard.value = foot*0.33333;
	umile.value = foot*0.00018939;
}
function ucyard(yard){
	ucentimeter.value = yard/0.010936;;
	umeter.value = yard/1.0936;
	ukilometer.value = yard/1093.6;
	uinch.value = yard*36;
	ufoot.value = yard*3;
	umile.value = yard*0.00056818;
}
function ucmile(mile){
	ucentimeter.value = mile/0.0000062137;
	umeter.value = mile/0.00062137;
	ukilometer.value = mile/0.62137;
	uinch.value = mile*63360;
	ufoot.value = mile*5280;
	uyard.value = mile*1760;
}



//Temperature
var fah = document.getElementById('ufahrenheit');
var cel = document.getElementById('ucelsius');
var kel = document.getElementById('ukelvin');
function ucfahrenheit(tempf){
	cel.value = ((tempf-32)/1.8).toFixed(2);
	kel.value = (((tempf-32)/1.8)+273.15).toFixed(2);
}
function uccelsius(tempc){
	fah.value = ((tempc*1.8)+32).toFixed(2);
	kel.value = ((tempc*1) + 273.15).toFixed(2);
}
function uckelvin(tempk){
	fah.value = (((tempk-273.15)*1.8)+32).toFixed(2);
	cel.value = (tempk-273.15).toFixed(2);
}

//Text to Binary
function convtetb(binctinp){
	document.getElementById('bincbin').value = "";
	for(i = 0; i < binctinp.length; i++){
		document.getElementById('bincbin').value +=binctinp[i].charCodeAt(0).toString(2) + " ";
	}
}

function cunitconverter(){
    document.getElementById('unitconveter').style.width = "0";
}


/*
You are almost benath the code
    *The End is near*
    *haha*
*/


//Videos
function videos(){
    document.getElementById('vidplayer').style.width = "100%";
}

function playytv(playingno){
    if(navigator.onLine == true){
        playingnow = playingno;
        document.getElementById('youtubeid').setAttribute("src", ytembed+youtubevideos[playingno]+"?controls=1");
        document.getElementById('videoplbtn').style.display = "none"
        document.getElementById('vidplayer').scrollTo(0,0);
    }
    else{
        alert("check your connectivity");
    }
}
function nextvid(){
    playingnow++;
    if(playingnow>=youtubevideos.length)
        playingnow = 0;
    playytv(playingnow);
}
function prevvid(){
    playingnow--;
    if(playingnow<0)
        playingnow = youtubevideos.length-1;
    playytv(playingnow);
}
function adduservideo(){
    var ytvideol = youtubevideos.length-1;
    var youtubevlink = document.getElementById('videouserinput').value;
    if(youtubevlink.indexOf('youtube.com') > -1){
        var youtubevlin = youtubevlink.split("/");
        var youtubevli = youtubevlin[youtubevlin.length-1];
        var youtubevl = youtubevli.split("?");
        var youtub = youtubevl[1];
        var youtu = youtub.split("&");
        var yout = youtu[0].split("=");
        var tyou = yout[1];
        youtubevideos.push(tyou);
        ytvideol++;
        playytv(ytvideol);
        document.getElementById('videolistj').innerHTML += "<div class='videoitem' style=background-color:"+themecolorname+" onclick=playytv("+ytvideol+")>Video "+ytvideol+"</div>";
        document.getElementById('videouserinput').value = "";
    }
    else{
        alert('check the link\n ex : https://www.youtube.com/watch?v=YbJOTdZBX1g');
    }
}
function cvideos(){
    document.getElementById('vidplayer').style.width = "0";
    document.getElementById('youtubeid').setAttribute("src", ytembed+youtubevideos[playingnow]+"?controls=1");
    document.getElementById('videoplbtn').style.display = "inline-block";
}