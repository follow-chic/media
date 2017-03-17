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

/**
 * Attaches sticky table headers.
 */
Drupal.behaviors.tableHeader = {
  attach: function (context, settings) {
    if (!$.support.positionFixed) {
      return;
    }

    $('table.sticky-enabled', context).once('tableheader', function () {
      $(this).data("drupal-tableheader", new Drupal.tableHeader(this));
    });
  }
};

/**
 * Constructor for the tableHeader object. Provides sticky table headers.
 *
 * @param table
 *   DOM object for the table to add a sticky header to.
 */
Drupal.tableHeader = function (table) {
  var self = this;

  this.originalTable = $(table);
  this.originalHeader = $(table).children('thead');
  this.originalHeaderCells = this.originalHeader.find('> tr > th');

  // Clone the table header so it inherits original jQuery properties. Hide
  // the table to avoid a flash of the header clone upon page load.
  this.stickyTable = $('<table class="sticky-header"/>')
    .insertBefore(this.originalTable)
    .css({ position: 'fixed', top: '0px' });
  this.stickyHeader = this.originalHeader.clone(true)
    .hide()
    .appendTo(this.stickyTable);
  this.stickyHeaderCells = this.stickyHeader.find('> tr > th');

  this.originalTable.addClass('sticky-table');
  $(window)
    .bind('scroll.drupal-tableheader', $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    .bind('resize.drupal-tableheader', { calculateWidth: true }, $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    // Make sure the anchor being scrolled into view is not hidden beneath the
    // sticky table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceAnchor.drupal-tableheader', function () {
      window.scrollBy(0, -self.stickyTable.outerHeight());
    })
    // Make sure the element being focused is not hidden beneath the sticky
    // table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceFocus.drupal-tableheader', function (event) {
      if (self.stickyVisible && event.clientY < (self.stickyOffsetTop + self.stickyTable.outerHeight()) && event.$target.closest('sticky-header').length === 0) {
        window.scrollBy(0, -self.stickyTable.outerHeight());
      }
    })
    .triggerHandler('resize.drupal-tableheader');

  // We hid the header to avoid it showing up erroneously on page load;
  // we need to unhide it now so that it will show up when expected.
  this.stickyHeader.show();
};

/**
 * Event handler: recalculates position of the sticky table header.
 *
 * @param event
 *   Event being triggered.
 */
Drupal.tableHeader.prototype.eventhandlerRecalculateStickyHeader = function (event) {
  var self = this;
  var calculateWidth = event.data && event.data.calculateWidth;

  // Reset top position of sticky table headers to the current top offset.
  this.stickyOffsetTop = Drupal.settings.tableHeaderOffset ? eval(Drupal.settings.tableHeaderOffset + '()') : 0;
  this.stickyTable.css('top', this.stickyOffsetTop + 'px');

  // Save positioning data.
  var viewHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  if (calculateWidth || this.viewHeight !== viewHeight) {
    this.viewHeight = viewHeight;
    this.vPosition = this.originalTable.offset().top - 4 - this.stickyOffsetTop;
    this.hPosition = this.originalTable.offset().left;
    this.vLength = this.originalTable[0].clientHeight - 100;
    calculateWidth = true;
  }

  // Track horizontal positioning relative to the viewport and set visibility.
  var hScroll = document.documentElement.scrollLeft || document.body.scrollLeft;
  var vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - this.vPosition;
  this.stickyVisible = vOffset > 0 && vOffset < this.vLength;
  this.stickyTable.css({ left: (-hScroll + this.hPosition) + 'px', visibility: this.stickyVisible ? 'visible' : 'hidden' });

  // Only perform expensive calculations if the sticky header is actually
  // visible or when forced.
  if (this.stickyVisible && (calculateWidth || !this.widthCalculated)) {
    this.widthCalculated = true;
    // Resize header and its cell widths.
    this.stickyHeaderCells.each(function (index) {
      var cellWidth = self.originalHeaderCells.eq(index).css('width');
      // Exception for IE7.
      if (cellWidth == 'auto') {
        cellWidth = self.originalHeaderCells.get(index).clientWidth + 'px';
      }
      $(this).css('width', cellWidth);
    });
    this.stickyTable.css('width', this.originalTable.css('width'));
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.openid = {
  attach: function (context) {
    var loginElements = $('.form-item-name, .form-item-pass, li.openid-link');
    var openidElements = $('.form-item-openid-identifier, li.user-link');
    var cookie = $.cookie('Drupal.visitor.openid_identifier');

    // This behavior attaches by ID, so is only valid once on a page.
    if (!$('#edit-openid-identifier.openid-processed').size()) {
      if (cookie) {
        $('#edit-openid-identifier').val(cookie);
      }
      if ($('#edit-openid-identifier').val() || location.hash == '#openid-login') {
        $('#edit-openid-identifier').addClass('openid-processed');
        loginElements.hide();
        // Use .css('display', 'block') instead of .show() to be Konqueror friendly.
        openidElements.css('display', 'block');
      }
    }

    $('li.openid-link:not(.openid-processed)', context)
      .addClass('openid-processed')
      .click(function () {
         loginElements.hide();
         openidElements.css('display', 'block');
        // Remove possible error message.
        $('#edit-name, #edit-pass').removeClass('error');
        $('div.messages.error').hide();
        // Set focus on OpenID Identifier field.
        $('#edit-openid-identifier')[0].focus();
        return false;
      });
    $('li.user-link:not(.openid-processed)', context)
      .addClass('openid-processed')
      .click(function () {
         openidElements.hide();
         loginElements.css('display', 'block');
        // Clear OpenID Identifier field and remove possible error message.
        $('#edit-openid-identifier').val('').removeClass('error');
        $('div.messages.error').css('display', 'block');
        // Set focus on username field.
        $('#edit-name')[0].focus();
        return false;
      });
  }
};

})(jQuery);
;
