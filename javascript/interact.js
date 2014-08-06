/*Variables
------------------------------------------------------------------------------------------------------------------------------*/
var imageCategory = [
    {name: 'men', observe: ko.observable(true), count:27},
    {name: 'women', observe: ko.observable(true), count:20},
    {name: 'nature', observe: ko.observable(true), count:5},
    {name: 'military', observe: ko.observable(true), count:9},
    {name: 'animals', observe: ko.observable(true), count:19}
];

var imageCatRange = ko.computed(function () {
    var array = [];
    var j=0;
    for (var i=0; i<imageCategory.length; i++){
        if (imageCategory[i].observe() == true){
            array[j] = {
                name: imageCategory[i].name,
                count: imageCategory[i].count,
            }
            j++;
        }
    }
    console.log(array);
    return array;
});

//<span class="glyphicon glyphicon-play"></span>
var quoteVars = {
    max: quotes.length - 1,
    index: 0,
    quote: '',
    author: '',
    timeDuration: 15000
    //timeDuration: ko.observable(10000)
}


/*Primary Function
------------------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function () {
    var timeCut = quoteVars.timeDuration*0.87;
    setupScreen();
    setupMusic();
    setupAnimate();
    setInterval(function(){
        setupAnimate();
        setupImage();
        console.log('launch');
    }, timeCut);
});

window.onresize = function () {
    resetScreen();
}

/*Setup Functions
------------------------------------------------------------------------------------------------------------------------------*/
function setupScreen () {
    $('.container').css('height', ($(window).height()-$('.main-title').height())+'px');
}

function resetScreen () {
    $('.container').css('height', ($(window).height()-$('.main-title').height())+'px');
}

function setupMusic () {
    for (var i=0; i < music.length; i++){
        var index = random(0, (music[i].tracks.length-1));
        $('.'+music[i].genre+' a').attr('href', music[i].tracks[index]);
    }
}

function setupAnimate () {

    quoteVars.index = random(0, quoteVars.max);
    if (quotes[quoteVars.index].quote == quoteVars.quote){
        quoteVars.index = random(0, quoteVars.max);
    }
    quoteVars.quote = quotes[quoteVars.index].quote;
    quoteVars.author = quotes[quoteVars.index].author;
    
    var topAdd = random(300, 400);
    topAdd+quotes[quoteVars.index].top;

    console.log(quoteVars.quote + ' - ' + quoteVars.author);
    $('.quote').text(quoteVars.quote);
    $('.author').text(quoteVars.author);

    $('.quote').css('top', topAdd+'px');
    $('.author').css('top', topAdd+quotes[quoteVars.index].top+'px');
    
    animate();
}

function setupImage () {
    /*
    random drawn between what was checked
    - use the new array to determine where to pick pics from
    */
    var fadeInImageWait = quoteVars.timeDuration * 0.05;
    var fadeOutImageWait = quoteVars.timeDuration * 0.75;
    
    var index = random(0, imageCatRange().length-1);
    var imageName = imageCatRange()[index].name+'/'+random(1, imageCatRange()[index].count);
    
    $('.image').css('background-image', 'url("images/'+imageName+'.jpg")');
    
    setTimeout(function () {
        $('.image').css('opacity', '1');
    }, fadeInImageWait);
        
    setTimeout(function () {
        $('.image').css('opacity', '0');
    }, fadeOutImageWait);
            
    
}

/*Animation Functions
------------------------------------------------------------------------------------------------------------------------------*/
function animate () {
    
    var fadeInQuoteWait = quoteVars.timeDuration * 0.10;
    var fadeInAuthorWait = quoteVars.timeDuration * 0.15;
    var fadeOutWait = quoteVars.timeDuration * 0.20;
    var exitOutWait = quoteVars.timeDuration * 0.80;
    
    resetAnimation();
    
    setTimeout(function () {
        fadeInQuote();
    }, fadeInQuoteWait);
    
    setTimeout(function () {
        fadeInAuthor();
    }, fadeInAuthorWait);

    setTimeout(function () {
        fadeOut();
    }, fadeOutWait);
    
    setTimeout(function () {
        exitOut();
    }, exitOutWait);
}

function resetAnimation () {
    console.log('reset animation');
    $('.quote').css({'transition':'left 0s, opacity 0s', '-webkit-transition':'left 0s, opacity 0s', 'left':'0px', 'opacity':0});
    $('.author').css({'transition':'left 0s, opacity 0s', '-webkit-transition':'left 0s, opacity 0s', 'left':'0px', 'opacity':0});
}

function fadeInQuote () {
    console.log('fade in');
    var leftTime = quoteVars.timeDuration*0.1/1000;
    var opacityTime = quoteVars.timeDuration*0.2/1000;
    $('.quote').css({'transition':'left '+leftTime+'s, opacity '+opacityTime+'s', '-webkit-transition':'left '+leftTime+'s, opacity '+opacityTime+'s', 'left':'30%', 'opacity':1});
}

function fadeInAuthor () {
    console.log('fade in');
    var leftTime = quoteVars.timeDuration*0.1/1000;
    var opacityTime = quoteVars.timeDuration*0.1/1000;
    $('.author').css({'transition':'left '+leftTime+'s, opacity '+opacityTime+'s', '-webkit-transition':'left '+leftTime+'s, opacity '+opacityTime+'s', 'left':'40%', 'opacity':1});
}

function fadeOut () {
    console.log('fade out');
    var leftTime = quoteVars.timeDuration*0.6/1000;
    var opacityTime = quoteVars.timeDuration*0.8/1000;
    //$('.quote').css({'transition':'left '+leftTime+'s, opacity '+opacityTime+'s', '-webkit-transition':'left '+leftTime+'s, opacity '+opacityTime+'s', 'left':'40%', 'opacity':1});
    //$('.author').css({'transition':'left '+leftTime+'s, opacity '+opacityTime+'s', '-webkit-transition':'left '+leftTime+'s, opacity '+opacityTime+'s', 'left':'50%', 'opacity':1});
}

function exitOut () {
    console.log('fade out');
    var leftTime = quoteVars.timeDuration*0.1/1000;
    var opacityTime = quoteVars.timeDuration*0.05/1000;
    $('.quote').css({'transition':'left '+leftTime+'s, opacity '+opacityTime+'s', '-webkit-transition':'left '+leftTime+'s, opacity '+opacityTime+'s', 'left':'100%', 'opacity':0});
    $('.author').css({'transition':'left '+leftTime+'s, opacity '+opacityTime+'s', '-webkit-transition':'left '+leftTime+'s, opacity '+opacityTime+'s', 'left':'100%', 'opacity':0});
}

/*Misc Functions
------------------------------------------------------------------------------------------------------------------------------*/
function random (min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function padstr(str, padcount, checker){
  str == 0 ? str='' : str=str.toString();
  var count = 0;
  var pad = '';
  var padcount = padcount - str.length;
  while (count < padcount){
    pad = '0'+pad;
    count++;
  }

  //if the minute is greater than 0, highlight the 0 pad as well for seconds
  if (checker > 0){
    return pad+str;
  }else{
    return '<span>'+pad+'</span>'+str;
  }
}


/*Timer Functions
------------------------------------------------------------------------------------------------------------------------------*/
var timerVars = {
    timerInterval: 0,
    beep1: new Audio("./sounds/beep1.wav"),
    beep2: new Audio("./sounds/beep2.wav"),
    status: 0,
    h: 0,
    m: 0,
    s: 0,
    ms: 0
};

$('.timer-display').click(function (){
    if (timerVars.status == 0){ // && timerVars.h == 0 && timerVars.m == 0 && timerVars.s == 0 && timerVars.ms == 0
        continueTimer();
        timerVars.status = 1;
    }else if(timerVars.status == 1){ // && (timerVars.h != 0 || timerVars.m != 0 || timerVars.s != 0 || timerVars.ms != 0)
        stopTimer();
        timerVars.status = 0;
    }
});

$('.timer .glyphicon-refresh').click(function () {
    restartTimer();
});

$(window).keypress(function(event){
    if (event.which == 13 || event.which == 32){//- if you hit enter or space, it times
        if (timerVars.status == 0){ // && timerVars.h == 0 && timerVars.m == 0 && timerVars.s == 0 && timerVars.ms == 0
            continueTimer();
            timerVars.status = 1;
        }else if(timerVars.status == 1){ // && (timerVars.h != 0 || timerVars.m != 0 || timerVars.s != 0 || timerVars.ms != 0)
            stopTimer();
            timerVars.status = 0;
        }
    }
});

function stopTimer () {
    clearInterval(timerVars.timerInterval);
}

function continueTimer () {
    timer();
}

function restartTimer () {
    clearInterval(timerVars.timerInterval);
    timerVars.h = 0;
    timerVars.m = 0;
    timerVars.s = 0;
    timerVars.ms = 0;
    timer();
}


function timer(){

    //interval = value or 0 if not set
    var interval = $('input').val() || 0;
    var beep2_set = 0;
    if (interval < 14){beep2_set = 1;}

    /*var h = timerVars.h;
    var m = timerVars.m;
    var s = timerVars.s;
    var ms = timerVars.ms;*/
    
    var counter = 0;
    var h_text;var m_text;var s_text;

    timerVars.timerInterval = setInterval(function(){

      timerVars.ms = timerVars.ms + 1;
      if (timerVars.ms > 8){
        timerVars.ms = 0;
        timerVars.s = timerVars.s + 1;
        counter = counter + 1;
        if (counter == interval){
          //timerVars.beep1.play();
          counter = 0;
        }else if (beep2_set = 1 && (counter == (interval - 10) || counter == (interval - 5))) {
          //timerVars.beep2.play();
        }

        if (timerVars.s > 59){
          timerVars.s = 0;
          timerVars.m = timerVars.m + 1;
          if (timerVars.m > 59){
             timerVars.m = 0;
             timerVars.h = timerVars.h + 1;
          }
        }
      }
      s_text = padstr(timerVars.s, 2, timerVars.m);m_text = padstr(timerVars.m, 2, timerVars.h);h_text = padstr(timerVars.h, 2);

      var time = h_text+':'+m_text+':'+s_text+'.'+timerVars.ms;
      $('.timer-display').html(time);
        
    }, 80);
}


/*KO in Action
------------------------------------------------------------------------------------------------------------------------------*/

var viewModel = {
    music: music,
    quoteVars: quoteVars,
    imageCategory: imageCategory,
    imageCatRange: imageCatRange,
    changeLink: function (data) {
        console.log(data);
        for (var i=0; i<music.length; i++) {
            if (data.genre == music[i].genre){
                var index = random(0, (music[i].tracks.length-1));
                $('.'+music[i].genre+' a').attr('href', music[i].tracks[index]);
            }
        }
    }
};

ko.applyBindings(viewModel);