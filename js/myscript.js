// inview.js
// https://github.com/protonet/jquery.inview /で対応
$('.scroll').on('inview', function () { // .sxrollが表示されたら
    $(this).addClass('active'); //処理を記述
});

const mySwiper = new Swiper('.mv01 .swiper', {
  effect: 'fade',
  fadeEffect: {
    // crossFade: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
  speed: 1000,
  autoplay: {
    // delay: 5000,
    delay: 5000,
    disableOnInteraction: false,
  },
  // followFinger: false,
  pagination: {
    el: '.mv01 .swiper-pagination',
    clickable: true,
  },
});

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
// $(window).on('load', function(){
// 	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
// 	$(".open").each(function(index, element){	//openクラスを取得
// 		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
// 		$(Title).addClass('close');				//タイトルにクラス名closeを付与し
// 		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
// 		$(Box).slideDown(500);					//アコーディオンを開く
// 	});
// });

// blurTriggerにblurというクラス名を付ける定義

function BlurTextAnimeControl() {
	$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
		}
		});
}
function cubeAnime() {
	$('.box-r .cube').each(function(){ //blurTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('apper');// 画面内に入ったらblurというクラス名を追記
		}
		});
}
function fadeAnime() {
	$('.fadeInTrigger').each(function(){ //fadeInというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeIn');// 画面内に入ったらblurというクラス名を追記
		}
		});
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');// 画面内に入ったらblurというクラス名を追記
      }
      });
}
function textAnime() {
	$('.fadeInText').each(function(){ //blurTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('upText');// 画面内に入ったらblurというクラス名を追記
		}
  });
  $('.fadeInText-Y').each(function(){ //blurTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('upText-Y');// 画面内に入ったらblurというクラス名を追記
		}
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
  BlurTextAnimeControl();
  cubeAnime();
  textAnime();
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
  BlurTextAnimeControl();
  cubeAnime();
  textAnime();
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
// 画面をスクロールをしたら動かしたい場合の記述


const image = document.querySelector('.ukiyo');

new Ukiyo(image,{
  scale: 1.3, //スケール
  willChange: true,
})
