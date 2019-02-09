$(document).ready(function() {
    
    $('#jasoncall').hover(function() {
        $('.past-logo-bg').hide().delay(80).css("background-image", "url(images/jasoncall-bg.jpg)").fadeIn(400);
        $('.linktree').hide();
        $('.jasoncall-lt').show();
        $('.past-img-credit').text(function () {
            return "Jason Call Music";
        });
    });
    $('#kyle').hover(function() {
        $('.past-logo-bg').hide().delay(80).css("background-image", "url(images/kyle-bg.jpg)").fadeIn(400);
        $('.linktree').hide();
        $('.kyle-lt').show();
        $('.past-img-credit').text(function () {
            return "Kyle Castellani";
        });
    });
    $('#archabald').hover(function() {
        $('.past-logo-bg').hide().delay(80).css("background-image", "url(images/archabald-bg.jpeg)").fadeIn(400);
        $('.linktree').hide();
        $('.archabald-lt').show();
        $('.past-img-credit').text(function () {
            return "Archabald";
        });
    });
    $('#hiddenhos').hover(function() {
        $('.past-logo-bg').hide().delay(80).css("background-image", "url(images/hiddenhos-bg.jpg)").fadeIn(400);
        $('.linktree').hide();
        $('.hiddenhos-lt').show();
        $('.past-img-credit').text(function () {
            return "Hidden Hospitals";
        });
    });
    $('#strangevac').hover(function() {
        $('.past-logo-bg').hide().delay(80).css("background-image", "url(images/strangevac-bg.jpg)").fadeIn(400);
        $('.linktree').hide();
        $('.strangevac-lt').show();
        $('.past-img-credit').text(function () {
            return "Strange Vacation";
        });
    });
    $('#drmcthr').hover(function() {
        $('.past-logo-bg').hide().delay(80).css("background-image", "url(images/drmcthr-bg.jpg)").fadeIn(400);
        $('.linktree').hide();
        $('.drmcthr-lt').show();
        $('.past-img-credit').text(function () {
            return "DRMCTHR";
        });
    });
    
    $('.hamburger').click(function () {
        $('.hamburger-expand').toggleClass('active');
    });
    $('.section').click(function () {
        $('.hamburger-expand').removeClass('active');
    });
    
 });