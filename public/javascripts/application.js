// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function(){
  $('a[rel*=fancybox]').fancybox({
    'hideOnContentClick': false,
    'overlayOpacity': .7,
    'overlayColor': '#0D0D0D'});
  
  $('.note_container').draggable({
    cursor: 'move',
    disabled: true,
    stop: function(event, ui){
      xposVar = $(this).css('left');
      yposVar = $(this).css('top');
      $(this).find('input#notes__x_pos').val(xposVar);
      $(this).find('input#notes__y_pos').val(yposVar);
    }
  });
  $('.note').resizable();

  $('.edit_link').click(function(){
    $(this).hide();
    $('.save_link').show();
    $('.cancel_link').show();
    $('.add_link').hide();
    $('.note_container').draggable("enable");
    $('textarea').attr('disabled',false);
    $('.colors').show();
    $('a.delete_link').show();
    $('textarea#notes__contents').change(function(){
      $(this).parents('.note_container').eq(0).find('input#notes__content').attr("value",$(this).val());
    });
  });
  $('.add_link').click(function(){
    $('textarea').attr('disabled',false);
    $('.add_container').find('.colors').show();
  });
  $('.save_link').click(function(){
    display_buttons();
  });
  
  $('.delete_link').live("click",function(){
    $(this).parents('.note_container').eq(0).fadeOut();
    $.ajax({
      type: "DELETE",
      url: "/notes/" + $(this).parents('.note_container').eq(0).attr("value"),
      dataType: "html"
    }); 
    $(this).parents('.note_container').eq(0).remove();
    return false;
  });
  
  function display_buttons(){
    $('.save_link').hide();
    $('.edit_link').show();
    $('.cancel_link').hide();
    $('.add_link').show();
    $('.note_container').draggable("disable");
    $('textarea').attr('disabled',true);
    $('.colors').hide();
    $('a.delete_link').hide();
  }
  
});
