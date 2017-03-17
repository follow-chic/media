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
var
  vk_members_data = {},
  lastCommentsResponse,
  lastCommentsPage = null,
  baseURL = window.location.protocol + '//' + window.location.hostname + '/';

function array_unique(ar){
  if (ar.length && typeof ar !== 'string') {
    var sorter = {};
    var out = [];
    for (var i=0, j=ar.length; i<j; i++) {
      if(!sorter[ar[i]+typeof ar[i]]){
        out.push(ar[i]);
        sorter[ar[i]+typeof ar[i]]=true;
      }
    }
  }
  return out || ar;
}

function doLogin() {
  VK.Auth.login(getInitData);
}

function doUnite() {
  VK.Auth.login(uniteGetInitData);
}

/*
function doLogout() {
  VK.Auth.logout(logoutOpenAPI);
}
*/
function loginOpenAPI() {
  getInitData();
}

function logoutOpenAPI() {
  window.location = baseURL;
}

function getInitData() {
  var code;
  code = 'return {';
  code += 'me: API.getProfiles({uids: API.getVariable({key: 1280})})[0]';
  /*
    ,sex,bdate,city,country,timezone,photo,photo_medium,photo_big,has_mobile,rate,contacts,education,home_phone,mobile_phone,university,university_name,faculty,faculty_name,graduation
  */
  code += '};';
  VK.Api.call('execute', {'code': code}, onGetInitData);
}

function uniteGetInitData() {
  var code;
  code = 'return {';
  code += 'me: API.getProfiles({uids: API.getVariable({key: 1280})})[0]';
  /*
    ,sex,bdate,city,country,timezone,photo,photo_medium,photo_big,has_mobile,rate,contacts,education,home_phone,mobile_phone,university,university_name,faculty,faculty_name,graduation
  */
  code += '};';
  VK.Api.call('execute', {'code': code}, uniteOnGetInitData);
}


function onGetInitData(data) {
  (function ($) {
    var r, i, j, html;
    if (data.response) {
      r = data.response;
      /* Insert user info */
      if (r.me) {
        $.ajax({
          cache: false,
          data: {uid: r.me.uid, first_name: r.me.first_name, last_name: r.me.last_name, nickname: r.me.nickname},
          dataType: 'json',
          success: function(data) { succesLogin(data); },
          error: function(data) { errorLogin(data); },
          type: 'POST',
          url: Drupal.settings.basePath + 'vk/login'
        });
      }    
    } else {
      window.location = baseURL + 'vk/login/error';
    }
  })(jQuery);
}

function uniteOnGetInitData(data) {
  (function ($) {
    var r, i, j, html;
    if (data.response) {
      r = data.response;
      /* Insert user info */
      if (r.me) {
        $.ajax({
          cache: false,
          data: {uid: r.me.uid, first_name: r.me.first_name, last_name: r.me.last_name, nickname: r.me.nickname},
          dataType: 'json',
          success: function(data) { succesLogin(data); },
          error: function(data) { errorLogin(data); },
          type: 'POST',
          url: Drupal.settings.basePath + 'vk/succesfull-unite'
        });
      }    
    } else {
      window.location = baseURL + 'vk/error-unite';
    }
  })(jQuery);
}

function succesLogin(data) {
  if(data.error) {
    alert(data.message);
  }
  window.location = baseURL + data.redirect_url;
}

function errorLogin(data) {
  if(data.error) {
    alert(data.message);
  }
  alert(Drupal.t('Error connecting to server'));
};
(function ($) {

  Drupal.behaviors.captcha = {
    attach: function (context) {

      // Turn off autocompletion for the CAPTCHA response field.
      // We do it here with Javascript (instead of directly in the markup)
      // because this autocomplete attribute is not standard and
      // it would break (X)HTML compliance.
      $("#edit-captcha-response").attr("autocomplete", "off");

    }
  };

  Drupal.behaviors.captchaAdmin = {
    attach: function (context) {
    	// Add onclick handler to checkbox for adding a CAPTCHA description
    	// so that the textfields for the CAPTCHA description are hidden
    	// when no description should be added.
      // @todo: div.form-item-captcha-description depends on theming, maybe
      // it's better to add our own wrapper with id (instead of a class).
    	$("#edit-captcha-add-captcha-description").click(function() {
    		if ($("#edit-captcha-add-captcha-description").is(":checked")) {
    			// Show the CAPTCHA description textfield(s).
    			$("div.form-item-captcha-description").show('slow');
    		}
    		else {
    			// Hide the CAPTCHA description textfield(s).
    			$("div.form-item-captcha-description").hide('slow');
    		}
    	});
    	// Hide the CAPTCHA description textfields if option is disabled on page load.
    	if (!$("#edit-captcha-add-captcha-description").is(":checked")) {
    		$("div.form-item-captcha-description").hide();
    	}
    }

  };

})(jQuery);
;
(function ($) {

/**
 * Toggle the visibility of a fieldset using smooth animations.
 */
Drupal.toggleFieldset = function (fieldset) {
  var $fieldset = $(fieldset);
  if ($fieldset.is('.collapsed')) {
    var $content = $('> .fieldset-wrapper', fieldset).hide();
    $fieldset
      .removeClass('collapsed')
      .trigger({ type: 'collapsed', value: false })
      .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));
    $content.slideDown({
      duration: 'fast',
      easing: 'linear',
      complete: function () {
        Drupal.collapseScrollIntoView(fieldset);
        fieldset.animating = false;
      },
      step: function () {
        // Scroll the fieldset into view.
        Drupal.collapseScrollIntoView(fieldset);
      }
    });
  }
  else {
    $fieldset.trigger({ type: 'collapsed', value: true });
    $('> .fieldset-wrapper', fieldset).slideUp('fast', function () {
      $fieldset
        .addClass('collapsed')
        .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));
      fieldset.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = document.documentElement.clientHeight || document.body.clientHeight || 0;
  var offset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    }
    else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = {
  attach: function (context, settings) {
    $('fieldset.collapsible', context).once('collapse', function () {
      var $fieldset = $(this);
      // Expand fieldset if there are errors inside, or if it contains an
      // element that is targeted by the uri fragment identifier. 
      var anchor = location.hash && location.hash != '#' ? ', ' + location.hash : '';
      if ($('.error' + anchor, $fieldset).length) {
        $fieldset.removeClass('collapsed');
      }

      var summary = $('<span class="summary"></span>');
      $fieldset.
        bind('summaryUpdated', function () {
          var text = $.trim($fieldset.drupalGetSummary());
          summary.html(text ? ' (' + text + ')' : '');
        })
        .trigger('summaryUpdated');

      // Turn the legend into a clickable link, but retain span.fieldset-legend
      // for CSS positioning.
      var $legend = $('> legend .fieldset-legend', this);

      $('<span class="fieldset-legend-prefix element-invisible"></span>')
        .append($fieldset.hasClass('collapsed') ? Drupal.t('Show') : Drupal.t('Hide'))
        .prependTo($legend)
        .after(' ');

      // .wrapInner() does not retain bound events.
      var $link = $('<a class="fieldset-title" href="#"></a>')
        .prepend($legend.contents())
        .appendTo($legend)
        .click(function () {
          var fieldset = $fieldset.get(0);
          // Don't animate multiple times.
          if (!fieldset.animating) {
            fieldset.animating = true;
            Drupal.toggleFieldset(fieldset);
          }
          return false;
        });

      $legend.append(summary);
    });
  }
};

})(jQuery);
;
