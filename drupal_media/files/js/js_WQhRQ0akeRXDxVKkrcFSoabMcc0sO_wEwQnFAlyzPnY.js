Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"HTTP \u0437\u0430\u043f\u0440\u043e\u0441 AJAX \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0421\u0442\u0430\u0442\u0443\u0441\u0422\u0435\u043a\u0441\u0442: !statusText","ResponseText: !responseText":"ResponseText: !responseText","ReadyState: !readyState":"ReadyState: !readyState","Loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","@title dialog":"@title \u0434\u0438\u0430\u043b\u043e\u0433","Configure":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","Show shortcuts":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448","Hide shortcuts":"\u0421\u043a\u0440\u044b\u0442\u044c \u044f\u0440\u043b\u044b\u043a\u0438","Hide summary":"\u0421\u043a\u0440\u044b\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Edit summary":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","New revision":"\u041d\u043e\u0432\u0430\u044f \u043f\u0440\u0430\u0432\u043a\u0430","No revision":"\u0412\u0435\u0440\u0441\u0438\u0439 \u043d\u0435\u0442","By @name on @date":"@name. @date","By @name":"\u0410\u0432\u0442\u043e\u0440: @name","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Alias: @alias":"\u0410\u0434\u0440\u0435\u0441: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","@number comments per page":"@number \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","Autocomplete popup":"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","Searching for matches...":"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439...","Re-order rows by numerical weight instead of dragging.":"\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u043e \u0432\u0435\u0441\u0443 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","Changes made in this table will not be saved until the form is submitted.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u0441\u043b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0444\u043e\u0440\u043c\u044b.","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Customize dashboard":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c","Done":"\u0413\u043e\u0442\u043e\u0432\u043e","Enabled":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Edit":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c","Disabled":"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e","This permission is inherited from the authenticated user role.":"\u042d\u0442\u043e \u043f\u0440\u0430\u0432\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u0440\u043e\u043b\u0438 \u00ab\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u00bb.","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","Restricted to certain pages":"\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","Not customizable":"\u041d\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0439","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u043b\u043e\u043a\u0430\u0445 \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u043d\u0430\u0436\u043c\u0435\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u003Cem\u003E\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0431\u043b\u043e\u043a\u0438\u003C\/em\u003E.","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u044d\u0442\u043e\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435.","Please wait...":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...","Requires a title":"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","Don\u0027\u0027t display post information":"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b %filename \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %extensions."}} };;
(function ($) {

Drupal.behaviors.quote = {
  attach: function() {
    var level = Drupal.settings.quote_nest - 1;
    if (level >= 0) {
      var top = $('blockquote.quote-nest-1');
      $('blockquote.quote-msg:eq(' + level + ')', top)
      .hide()
      .after('<div class="quote-snip">' + Drupal.t('<a href="#">[snip]</a>') + '</div>')
      .next('.quote-snip')
      .children('a')
      .click(function(e) {
        $(this).parent().siblings('.quote-msg').toggle();
        e.preventDefault();
      });
    }
  }
};

}(jQuery));
;
(function ($) {

/**
 * Show/hide the 'Email site administrator when updates are available' checkbox
 * on the install page.
 */
Drupal.hideEmailAdministratorCheckbox = function () {
  // Make sure the secondary box is shown / hidden as necessary on page load.
  if ($('#edit-update-status-module-1').is(':checked')) {
    $('.form-item-update-status-module-2').show();
  }
  else {
    $('.form-item-update-status-module-2').hide();
  }

  // Toggle the display as necessary when the checkbox is clicked.
  $('#edit-update-status-module-1').change( function () {
    $('.form-item-update-status-module-2').toggle();
  });
};

/**
 * Internal function to check using Ajax if clean URLs can be enabled on the
 * settings page.
 *
 * This function is not used to verify whether or not clean URLs
 * are currently enabled.
 */
Drupal.behaviors.cleanURLsSettingsCheck = {
  attach: function (context, settings) {
    // This behavior attaches by ID, so is only valid once on a page.
    // Also skip if we are on an install page, as Drupal.cleanURLsInstallCheck will handle
    // the processing.
    if (!($('#edit-clean-url').length) || $('#edit-clean-url.install').once('clean-url').length) {
      return;
    }
    var url = settings.basePath + 'admin/config/search/clean-urls/check';
    $.ajax({
      url: location.protocol + '//' + location.host + url,
      dataType: 'json',
      success: function () {
        // Check was successful. Redirect using a "clean URL". This will force the form that allows enabling clean URLs.
        location = settings.basePath +"admin/config/search/clean-urls";
      }
    });
  }
};

/**
 * Internal function to check using Ajax if clean URLs can be enabled on the
 * install page.
 *
 * This function is not used to verify whether or not clean URLs
 * are currently enabled.
 */
Drupal.cleanURLsInstallCheck = function () {
  var url = location.protocol + '//' + location.host + Drupal.settings.basePath + 'admin/config/search/clean-urls/check';
  // Submit a synchronous request to avoid database errors associated with
  // concurrent requests during install.
  $.ajax({
    async: false,
    url: url,
    dataType: 'json',
    success: function () {
      // Check was successful.
      $('#edit-clean-url').attr('value', 1);
    }
  });
};

/**
 * When a field is filled out, apply its value to other fields that will likely
 * use the same value. In the installer this is used to populate the
 * administrator e-mail address with the same value as the site e-mail address.
 */
Drupal.behaviors.copyFieldValue = {
  attach: function (context, settings) {
    for (var sourceId in settings.copyFieldValue) {
      $('#' + sourceId, context).once('copy-field-values').bind('blur', function () {
        // Get the list of target fields.
        var targetIds = settings.copyFieldValue[sourceId];
        // Add the behavior to update target fields on blur of the primary field.
        for (var delta in targetIds) {
          var targetField = $('#' + targetIds[delta]);
          if (targetField.val() == '') {
            targetField.val(this.value);
          }
        }
      });
    }
  }
};

/**
 * Show/hide custom format sections on the regional settings page.
 */
Drupal.behaviors.dateTime = {
  attach: function (context, settings) {
    for (var value in settings.dateTime) {
      var settings = settings.dateTime[value];
      var source = '#edit-' + value;
      var suffix = source + '-suffix';

      // Attach keyup handler to custom format inputs.
      $('input' + source, context).once('date-time').keyup(function () {
        var input = $(this);
        var url = settings.lookup + (settings.lookup.match(/\?q=/) ? '&format=' : '?format=') + encodeURIComponent(input.val());
        $.getJSON(url, function (data) {
          $(suffix).empty().append(' ' + settings.text + ': <em>' + data + '</em>');
        });
      });
    }
  }
};

 /**
 * Show/hide settings for page caching depending on whether page caching is
 * enabled or not.
 */
Drupal.behaviors.pageCache = {
  attach: function (context, settings) {
    $('#edit-cache-0', context).change(function () {
      $('#page-compression-wrapper').hide();
      $('#cache-error').hide();
    });
    $('#edit-cache-1', context).change(function () {
      $('#page-compression-wrapper').show();
      $('#cache-error').hide();
    });
    $('#edit-cache-2', context).change(function () {
      $('#page-compression-wrapper').show();
      $('#cache-error').show();
    });
  }
};

})(jQuery);
;
