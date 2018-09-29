
var mApp = function() {

  /** @type {object} colors State colors **/
  var colors = {
      brand:      '#716aca',
      metal:      '#c4c5d6',
      light:      '#ffffff',
      accent:     '#00c5dc',
      primary:    '#5867dd',
      success:    '#34bfa3',
      info:       '#36a3f7',
      warning:    '#ffb822',
      danger:     '#f4516c',
      focus:      '#9816f4'
  }

  /**
  * Initializes bootstrap tooltip
  */
  var initTooltip = function(el) {
      var skin = el.data('skin') ? 'm-tooltip--skin-' + el.data('skin') : '';
      var width = el.data('width') == 'auto' ? 'm-tooltop--auto-width' : '';
      var triggerValue = el.data('trigger') ? el.data('trigger') : 'hover';
      var placement = el.data('placement') ? el.data('placement') : 'left';
                  
      el.tooltip({
          trigger: triggerValue,
          template: '<div class="m-tooltip ' + skin + ' ' + width + ' tooltip" role="tooltip">\
              <div class="arrow"></div>\
              <div class="tooltip-inner"></div>\
          </div>'
      });
  }
  
  /**
  * Initializes bootstrap tooltips
  */
  var initTooltips = function() {
      // init bootstrap tooltips
      $('[data-toggle="m-tooltip"]').each(function() {
          initTooltip($(this));
      });
  }

  /**
  * Initializes bootstrap popover
  */
  var initPopover = function(el) {
      var skin = el.data('skin') ? 'm-popover--skin-' + el.data('skin') : '';
      var triggerValue = el.data('trigger') ? el.data('trigger') : 'hover';
          
      el.popover({
          trigger: triggerValue,
          template: '\
          <div class="m-popover ' + skin + ' popover" role="tooltip">\
              <div class="arrow"></div>\
              <h3 class="popover-header"></h3>\
              <div class="popover-body"></div>\
          </div>'
      });
  }

  /**
  * Initializes bootstrap popovers
  */
  var initPopovers = function() {
      // init bootstrap popover
      $('[data-toggle="m-popover"]').each(function() {
          initPopover($(this));
      });
  }

  /**
  * Initializes bootstrap file input
  */
  var initFileInput = function() {
      // init bootstrap popover
      $('.custom-file-input').on('change',function(){
          var fileName = $(this).val();
          $(this).next('.custom-file-label').addClass("selected").html(fileName);
      });
  }           

  /**
  * Initializes metronic portlet
  */
  var initPortlet = function(el, options) {
      // init portlet tools
      var el = $(el);
      var portlet = new mPortlet(el[0], options);
  }

  /**
  * Initializes metronic portlets
  */
  var initPortlets = function() {
      // init portlet tools
      $('[m-portlet="true"]').each(function() {
          var el = $(this);

          if ( el.data('portlet-initialized') !== true ) {
              initPortlet(el, {});
              el.data('portlet-initialized', true);
          }
      });
  }

  /**
  * Initializes scrollable contents
  */
  var initScrollers = function() {
      $('[data-scrollable="true"]').each(function(){
          var el = $(this);
          mUtil.scrollerInit(this, {disableForMobile: true, handleWindowResize: true, height: function() {
              if (mUtil.isInResponsiveRange('tablet-and-mobile') && el.data('mobile-height')) {
                  return el.data('mobile-height');
              } else {
                  return el.data('height');
              }
          }});
      });
  }

  /**
  * Initializes bootstrap alerts
  */
  var initAlerts = function() {
      // init bootstrap popover
      $('body').on('click', '[data-close=alert]', function() {
          $(this).closest('.alert').hide();
      });
  }

  /**
  * Initializes Metronic custom tabs
  */
  var initCustomTabs = function() {
      // init bootstrap popover
      $('[data-tab-target]').each(function() {
          if ($(this).data('tabs-initialized') == true ) {
              return;
          }

          $(this).click(function(e) {
              e.preventDefault();
              
              var tab = $(this);
              var tabs = tab.closest('[data-tabs="true"]');
              var contents = $( tabs.data('tabs-contents') );
              var content = $( tab.data('tab-target') );

              tabs.find('.m-tabs__item.m-tabs__item--active').removeClass('m-tabs__item--active');
              tab.addClass('m-tabs__item--active');

              contents.find('.m-tabs-content__item.m-tabs-content__item--active').removeClass('m-tabs-content__item--active');
              content.addClass('m-tabs-content__item--active');         
          });

          $(this).data('tabs-initialized', true);
      });
  }

var hideTouchWarning = function() {
  jQuery.event.special.touchstart = {
    setup: function(_, ns, handle) {
      if (typeof this === 'function')
        if (ns.includes('noPreventDefault')) {
          this.addEventListener('touchstart', handle, {passive: false});
        } else {
          this.addEventListener('touchstart', handle, {passive: true});
        }
    },
  };
  jQuery.event.special.touchmove = {
    setup: function(_, ns, handle) {
      if (typeof this === 'function')
        if (ns.includes('noPreventDefault')) {
          this.addEventListener('touchmove', handle, {passive: false});
        } else {
          this.addEventListener('touchmove', handle, {passive: true});
        }
    },
  };
  jQuery.event.special.wheel = {
    setup: function(_, ns, handle) {
      if (typeof this === 'function')
        if (ns.includes('noPreventDefault')) {
          this.addEventListener('wheel', handle, {passive: false});
        } else {
          this.addEventListener('wheel', handle, {passive: true});
        }
    },
  };
};

  return {
      /**
      * Main class initializer
      */
      init: function(options) {
          if (options && options.colors) {
              colors = options.colors;
          }
          mApp.initComponents();
      },

      /**
      * Initializes components
      */
      initComponents: function() {
          hideTouchWarning();
          initScrollers();
          initTooltips();
          initPopovers();
          initAlerts();
          initPortlets();
          initFileInput();
          initCustomTabs();
      },


      /**
      * Init custom tabs
      */
      initCustomTabs: function() {
          initCustomTabs();
      },

      /**
      * 
      * @param {object} el jQuery element object
      */
      // wrJangoer function to scroll(focus) to an element
      initTooltips: function() {
          initTooltips();
      },

      /**
      * 
      * @param {object} el jQuery element object
      */
      // wrJangoer function to scroll(focus) to an element
      initTooltip: function(el) {
          initTooltip(el);
      },

      /**
      * 
      * @param {object} el jQuery element object
      */
      // wrJangoer function to scroll(focus) to an element
      initPopovers: function() {
          initPopovers();
      },

      /**
      * 
      * @param {object} el jQuery element object
      */
      // wrJangoer function to scroll(focus) to an element
      initPopover: function(el) {
          initPopover(el);
      },

      /**
      * 
      * @param {object} el jQuery element object
      */
      // function to init portlet
      initPortlet: function(el, options) {
          initPortlet(el, options);
      },

      /**
      * 
      * @param {object} el jQuery element object
      */
      // function to init portlets
      initPortlets: function() {
          initPortlets();
      },

      /**
      * Blocks element with loading indiciator using http://malsup.com/jquery/block/
      * @param {object} target jQuery element object
      * @param {object} options 
      */
      block: function(target, options) {
          var el = $(target);

          options = $.extend(true, {
              opacity: 0.03,
              overlayColor: '#000000',
              state: 'brand',
              type: 'loader',
              size: 'lg',
              centerX: true,
              centerY: true,
              message: '',
              shadow: true,
              width: 'auto'
          }, options);

          var skin;
          var state;
          var loading;

          if (options.type == 'spinner') {
              skin = options.skin ? 'm-spinner--skin-' + options.skin : '';
              state = options.state ? 'm-spinner--' + options.state : '';
              loading = '<div class="m-spinner ' + skin + ' ' + state + '"></div';
          } else {
              skin = options.skin ? 'm-loader--skin-' + options.skin : '';
              state = options.state ? 'm-loader--' + options.state : '';
              size = options.size ? 'm-loader--' + options.size : '';
              loading = '<div class="m-loader ' + skin + ' ' + state + ' ' + size + '"></div';
          }

          if (options.message && options.message.length > 0) {
              var classes = 'm-blockui ' + (options.shadow === false ? 'm-blockui-no-shadow' : '');

              html = '<div class="' + classes + '"><span>' + options.message + '</span><span>' + loading + '</span></div>';

              var el = document.createElement('div');
              mUtil.get('body').prepend(el);
              mUtil.addClass(el, classes);
              el.innerHTML = '<span>' + options.message + '</span><span>' + loading + '</span>';
              options.width = mUtil.actualWidth(el) + 10;
              mUtil.remove(el);

              if (target == 'body') {
                  html = '<div class="' + classes + '" style="margin-left:-'+ (options.width / 2) +'px;"><span>' + options.message + '</span><span>' + loading + '</span></div>';
              }
          } else {
              html = loading;
          }

          var params = {
              message: html,
              centerY: options.centerY,
              centerX: options.centerX,
              css: {
                  top: '30%',
                  left: '50%',
                  border: '0',
                  padding: '0',
                  backgroundColor: 'none',
                  width: options.width
              },
              overlayCSS: {
                  backgroundColor: options.overlayColor,
                  opacity: options.opacity,
                  cursor: 'wait',
                  zIndex: '10'
              },
              onUnblock: function() {
                  if (el && el[0]) {
                      mUtil.css(el[0], 'position', '');
                      mUtil.css(el[0], 'zoom', '');
                  }                    
              }
          };

          if (target == 'body') {
              params.css.top = '50%';
              $.blockUI(params);
          } else {
              var el = $(target);
              el.block(params);
          }
      },

      /**
      * Un-blocks the blocked element 
      * @param {object} target jQuery element object
      */
      unblock: function(target) {
          if (target && target != 'body') {
              $(target).unblock();
          } else {
              $.unblockUI();
          }
      },

      /**
      * Blocks the page body element with loading indicator
      * @param {object} options 
      */
      blockPage: function(options) {
          return mApp.block('body', options);
      },

      /**
      * Un-blocks the blocked page body element
      */
      unblockPage: function() {
          return mApp.unblock('body');
      },

      /**
      * Enable loader progress for button and other elements
      * @param {object} target jQuery element object
      * @param {object} options
      */
      progress: function(target, options) {
          var skin = (options && options.skin) ? options.skin : 'light';
          var alignment = (options && options.alignment) ? options.alignment : 'right'; 
          var size = (options && options.size) ? 'm-spinner--' + options.size : ''; 
          var classes = 'm-loader ' + 'm-loader--' + skin + ' m-loader--' + alignment + ' m-loader--' + size;

          mApp.unprogress(target);
          
          $(target).addClass(classes);
          $(target).data('progress-classes', classes);
      },

      /**
      * Disable loader progress for button and other elements
      * @param {object} target jQuery element object
      */
      unprogress: function(target) {
          $(target).removeClass($(target).data('progress-classes'));
      },

      /**
      * Gets state color's hex code by color name
      * @param {string} name Color name
      * @returns {string}  
      */
      getColor: function(name) {
          return colors[name];
      }
  };
}();

var mLayout = function() {
  var header;
  var horMenu;
  var asideMenu;
  var asideMenuOffcanvas;
  var horMenuOffcanvas;
  var asideLeftToggle;
  var asideLeftHide;
  var scrollTop;
  var quicksearch;
  var mainPortlet;

  //== Header
  var initStickyHeader = function() {
      var tmp;
      var headerEl = mUtil.get('m_header');
      var options = {
          offset: {},
          minimize: {}
      };

      if (mUtil.attr(headerEl, 'm-minimize-mobile') == 'hide') {
          options.minimize.mobile = {};
          options.minimize.mobile.on = 'm-header--hide';
          options.minimize.mobile.off = 'm-header--show';
      } else {
          options.minimize.mobile = false;
      }

      if (mUtil.attr(headerEl, 'm-minimize') == 'hide') {
          options.minimize.desktop = {};
          options.minimize.desktop.on = 'm-header--hide';
          options.minimize.desktop.off = 'm-header--show';
      } else {
          options.minimize.desktop = false;
      }

      if (tmp = mUtil.attr(headerEl, 'm-minimize-offset')) {
          options.offset.desktop = tmp;
      }

      if (tmp = mUtil.attr(headerEl, 'm-minimize-mobile-offset')) {
          options.offset.mobile = tmp;
      }

      header = new mHeader('m_header', options);
  }

  //== Hor menu
  var initHorMenu = function() {
      // init aside left offcanvas
      horMenuOffcanvas = new mOffcanvas('m_header_menu', {
          overlay: true,
          baseClass: 'm-aside-header-menu-mobile',
          closeBy: 'm_aside_header_menu_mobile_close_btn',
          toggleBy: {
              target: 'm_aside_header_menu_mobile_toggle',
              state: 'm-brand__toggler--active'
          }
      });

      horMenu = new mMenu('m_header_menu', {
          submenu: {
              desktop: 'dropdown',
              tablet: 'accordion',
              mobile: 'accordion'
          },
          accordion: {
              slideSpeed: 200, // accordion toggle slide speed in milliseconds
              expandAll: false // allow having multiple expanded accordions in the menu
          }
      });
  }

  //== Aside menu
  var initLeftAsideMenu = function() {
      //== Init aside menu
      var menu = mUtil.get('m_ver_menu');
      var menuDesktopMode = (mUtil.attr(menu, 'm-menu-dropdown') === '1' ? 'dropdown' : 'accordion');

      var scroll;
      if (mUtil.attr(menu, 'm-menu-scrollable') === '1') {
          scroll = {
              height: function() {
                  if (mUtil.isInResponsiveRange('desktop')) {
                      return mUtil.getViewPort().height - parseInt(mUtil.css('m_header', 'height'));
                  }                   
              }
          };
      }

      asideMenu = new mMenu('m_ver_menu', {
          // vertical scroll
          scroll: scroll,

          // submenu setup
          submenu: {
              desktop: {
                  // by default the menu mode set to accordion in desktop mode
                  default: menuDesktopMode,
                  // whenever body has this class switch the menu mode to dropdown
                  state: {
                      body: 'm-aside-left--minimize',
                      mode: 'dropdown'
                  }
              },
              tablet: 'accordion', // menu set to accordion in tablet mode
              mobile: 'accordion' // menu set to accordion in mobile mode
          },

          //accordion setup
          accordion: {
              autoScroll: false, // enable auto scrolling(focus) to the clicked menu item
              expandAll: false // allow having multiple expanded accordions in the menu
          }
      });
  }

  //== Aside
  var initLeftAside = function() {
      // init aside left offcanvas
      var body = mUtil.get('body');
      var asideLeft = mUtil.get('m_aside_left');
      var asideOffcanvasClass = mUtil.hasClass(asideLeft, 'm-aside-left--offcanvas-default') ? 'm-aside-left--offcanvas-default' : 'm-aside-left';

      asideMenuOffcanvas = new mOffcanvas('m_aside_left', {
          baseClass: asideOffcanvasClass,
          overlay: true,
          closeBy: 'm_aside_left_close_btn',
          toggleBy: {
              target: 'm_aside_left_offcanvas_toggle',
              state: 'm-brand__toggler--active'
          }
      });

      //== Handle minimzied aside hover
      if (mUtil.hasClass(body, 'm-aside-left--fixed')) {
          var insideTm;
          var outsideTm;

          mUtil.addEvent(asideLeft, 'mouseenter', function() {
              if (outsideTm) {
                  clearTimeout(outsideTm);
                  outsideTm = null;
              }

              insideTm = setTimeout(function() {
                  if (mUtil.hasClass(body, 'm-aside-left--minimize') && mUtil.isInResponsiveRange('desktop')) {
                      mUtil.removeClass(body, 'm-aside-left--minimize');
                      mUtil.addClass(body, 'm-aside-left--minimize-hover');
                      asideMenu.scrollerUpdate();
                      asideMenu.scrollerTop();
                  }
              }, 300);
          });

          mUtil.addEvent(asideLeft, 'mouseleave', function() {
              if (insideTm) {
                  clearTimeout(insideTm);
                  insideTm = null;
              }

              outsideTm = setTimeout(function() {
                  if (mUtil.hasClass(body, 'm-aside-left--minimize-hover') && mUtil.isInResponsiveRange('desktop')) {
                      mUtil.removeClass(body, 'm-aside-left--minimize-hover');
                      mUtil.addClass(body, 'm-aside-left--minimize');
                      asideMenu.scrollerUpdate();
                      asideMenu.scrollerTop();
                  }
              }, 500);
          });
      }
  }

  //== Sidebar toggle
  var initLeftAsideToggle = function() {
      if ($('#m_aside_left_minimize_toggle').length === 0) {
          return;
      }

      asideLeftToggle = new mToggle('m_aside_left_minimize_toggle', {
          target: 'body',
          targetState: 'm-brand--minimize m-aside-left--minimize',
          togglerState: 'm-brand__toggler--active'
      }); 

      asideLeftToggle.on('toggle', function(toggle) {     
          if (mUtil.get('main_portlet')) {
              mainPortlet.updateSticky();      
          } 
          
          horMenu.pauseDropdownHover(800);
          asideMenu.pauseDropdownHover(800);

          //== Remember state in cookie
          Cookies.set('sidebar_toggle_state', toggle.getState());
          // to set default minimized left aside use this cookie value in your 
          // server side code and add "m-brand--minimize m-aside-left--minimize" classes to 
          // the body tag in order to initialize the minimized left aside mode during page loading.
      });

      asideLeftToggle.on('beforeToggle', function(toggle) {   
          var body = mUtil.get('body'); 
          if (mUtil.hasClass(body, 'm-aside-left--minimize') === false && mUtil.hasClass(body, 'm-aside-left--minimize-hover')) {
              mUtil.removeClass(body, 'm-aside-left--minimize-hover');
          }
      });
  }

  //== Sidebar hide
  var initLeftAsideHide = function() {
      if ($('#m_aside_left_hide_toggle').length === 0 ) {
          return;
      }

      initLeftAsideHide = new mToggle('m_aside_left_hide_toggle', {
          target: 'body',
          targetState: 'm-aside-left--hide',
          togglerState: 'm-brand__toggler--active'
      });

      initLeftAsideHide.on('toggle', function(toggle) {
          horMenu.pauseDropdownHover(800);
          asideMenu.pauseDropdownHover(800);

          //== Remember state in cookie
          Cookies.set('sidebar_hide_state', toggle.getState());
          // to set default minimized left aside use this cookie value in your 
          // server side code and add "m-brand--minimize m-aside-left--minimize" classes to 
          // the body tag in order to initialize the minimized left aside mode during page loading.
      });
  }

  //== Topbar
  var initTopbar = function() {
      $('#m_aside_header_topbar_mobile_toggle').click(function() {
          $('body').toggleClass('m-topbar--on');
      });

      // Animated Notification Icon 
      /*
      setInterval(function() {
          $('#m_topbar_notification_icon .m-nav__link-icon').addClass('m-animate-shake');
          $('#m_topbar_notification_icon .m-nav__link-badge').addClass('m-animate-blink');
      }, 3000);

      setInterval(function() {
          $('#m_topbar_notification_icon .m-nav__link-icon').removeClass('m-animate-shake');
          $('#m_topbar_notification_icon .m-nav__link-badge').removeClass('m-animate-blink');
      }, 6000);
      */
  }

  //== Quicksearch
  var initQuicksearch = function() {
      if ($('#m_quicksearch').length === 0) {
          return;
      }

      quicksearch = new mQuicksearch('m_quicksearch', {
          mode: mUtil.attr('m_quicksearch', 'm-quicksearch-mode'), // quick search type
          minLength: 1
      });

      //<div class="m-search-results m-search-results--skin-light"><span class="m-search-result__message">Something went wrong</div></div>

      quicksearch.on('search', function(the) {
          the.showProgress();

          $.ajax({
              url: 'https://keenthemes.com/metronic/themes/themes/metronic/dist/preview/inc/api/quick_search.php',
              data: {
                  query: the.query
              },
              dataType: 'html',
              success: function(res) {
                  the.hideProgress();
                  the.showResult(res);
              },
              error: function(res) {
                  the.hideProgress();
                  the.showError('Connection error. Pleae try again later.');
              }
          });
      });
  }

  //== Scrolltop
  var initScrollTop = function() {
      var scrollTop = new mScrollTop('m_scroll_top', {
          offset: 300,
          speed: 600
      });
  }

  //== Main portlet(sticky portlet)
  var createMainPortlet = function() {
      return new mPortlet('main_portlet', {
          sticky: {
              offset: parseInt(mUtil.css( mUtil.get('m_header'), 'height')),
              zIndex: 90,
              position: {
                  top: function() {
                      return parseInt(mUtil.css( mUtil.get('m_header'), 'height') );
                  },
                  left: function() {
                      var left = parseInt(mUtil.css( mUtil.getByClass('m-content'), 'paddingLeft'));
                      
                      if (mUtil.isInResponsiveRange('desktop')) {
                          //left += parseInt(mUtil.css(mUtil.get('m_aside_left'), 'width') );
                          if (mUtil.hasClass(mUtil.get('body'), 'm-aside-left--minimize')) {
                              left += 78; // need to use hardcoded width of the minimize aside
                          } else {
                              left += 255; // need to use hardcoded width of the aside
                          }
                      } 

                      return left; 
                  },
                  right: function() {
                      return parseInt(mUtil.css( mUtil.getByClass('m-content'), 'paddingRight') );
                  }
              }
          }
      });
  }

  return {
      init: function() {
          this.initHeader();
          this.initAside();
          this.initMainPortlet();
      },

      initMainPortlet: function() {
          if (!mUtil.get('main_portlet')) {
              return;
          }
          
          mainPortlet = createMainPortlet();
          mainPortlet.initSticky();
          
          mUtil.addResizeHandler(function(){
              mainPortlet.updateSticky();
          });
      },

      resetMainPortlet: function() {
          mainPortlet.destroySticky();
          mainPortlet = createMainPortlet();
          mainPortlet.initSticky();
      },

      initHeader: function() {
          initStickyHeader();
          initHorMenu();
          initTopbar();
          initQuicksearch();
          initScrollTop();
      },

      initAside: function() { 
          initLeftAside();
          initLeftAsideMenu();
          initLeftAsideToggle();
          initLeftAsideHide();

          this.onLeftSidebarToggle(function(e) {
              //== Update sticky portlet
              if (mainPortlet) {
                  mainPortlet.updateSticky();
              }

              //== Reload datatable
              var datatables = $('.m-datatable');
              if (datatables) {
                  datatables.each(function() {
                      $(this).mDatatable('redraw');
                  });
              }                
          });
      },

      getAsideMenu: function() {
          return asideMenu;
      },

      onLeftSidebarToggle: function(handler) {
          if (asideLeftToggle) {
              asideLeftToggle.on('toggle', handler);
          }
      },

      closeMobileAsideMenuOffcanvas: function() {
          if (mUtil.isMobileDevice()) {
              asideMenuOffcanvas.hide();
          }
      },

      closeMobileHorMenuOffcanvas: function() {
          if (mUtil.isMobileDevice()) {
              horMenuOffcanvas.hide();
          }
      }
  };
}();

$(document).ready(function() {
  mApp.init({});
  mLayout.init();
});