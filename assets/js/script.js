"use strict";

jQuery(function ($) {
  // プライステーブル表
  var tab = $(".price__head tr th");
  $(tab).on('click', function () {
    var index = $(tab).index(this);
    $(tab).removeClass("js-accent");
    $(this).addClass('js-accent');
    $(".price__body tr:nth-child(1) td").removeClass("js-show").eq(index + 1).addClass("js-show");
    $(".price__body tr:nth-child(2) td").removeClass("js-show").eq(index + 1).addClass("js-show");
    $(".price__body tr:nth-child(3) td").removeClass("js-show").eq(index + 1).addClass("js-show");
    $(".price__body tr:nth-child(4) td").removeClass("js-show").eq(index + 1).addClass("js-show");
    $(".price__body tr:nth-child(5) td").removeClass("js-show").eq(index + 1).addClass("js-show");
    $(".price__body tr:nth-child(6) td").removeClass("js-show").eq(index + 1).addClass("js-show");
    $(".price__body tr:nth-child(7) td").removeClass("js-show").eq(index + 1).addClass("js-show");
    $(".price__foot tr td a").removeClass("js-blue").eq(index).addClass("js-blue");
    return false;
  }); // ドロワー

  $('#js-drawer').on('click', function (e) {
    e.preventDefault();
    $('.drawer__icon').toggleClass('is-active');
    $('#js-drawer .drawer__top').toggleClass('is-appear');
    $('.drawer-content').fadeToggle();
    return false;
  }); // ドロワークリックするときえる

  var clickItem = $(".drawer-content .drawer-content__items .drawer-content__item a ");
  clickItem.on("click", function () {
    $('.drawer__icon').toggleClass('is-active');
    $('#js-drawer .drawer__top').toggleClass('is-appear');
    $('.drawer-content').fadeToggle();
  }); // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    var time = 400;
    var header = $('header').innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  });
});