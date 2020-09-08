$('.list-group-item').each(function () {
  $(this).on('click', function () {
    $('.list-group-item').each(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      };
    });
    $(this).addClass('active');
  });
});

