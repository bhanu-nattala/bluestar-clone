<!DOCTYPE html>

<!--[if lt IE 7]      <html class="no-js lt-ie9 lt-ie8 lt-ie7" manifest="/cc/mize.appcache"> [endif]-->
<!--[if IE 7]       <html class="no-js lt-ie9 lt-ie8" manifest="/cc/mize.appcache"> [endif]-->
<!--[if IE 8]       <html class="no-js lt-ie9" manifest="/cc/mize.appcache"> [endif]-->
<!--[if gt IE 8] --> <html class="no-js" > <!--[endif]-->
    <head>
    	<meta http-equiv='x-dns-prefetch-control' content='on'>
    	<meta charset="utf-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    	<meta http-equiv="Pragma" content="no-cache">
    	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, minimal-ui' name='viewport' />
    	<meta name="apple-mobile-web-app-capable" content="yes">
    	<meta name="apple-mobile-web-app-status-bar-style" content="black">
    	<link rel="apple-touch-icon" href="/assets/images/cc-app-icon.png"/>
    	<link rel="apple-touch-startup-image" href="/assets/images/apple-startup-image.jpg">
    	<meta name="apple-mobile-web-app-title" content="Customer Central">
    	<meta name="apple-mobile-web-app-capable" content="yes">
    	<meta name="mobile-web-app-capable" content="yes">
    	<meta name="msapplication-TileImage" href="/assets/images/cc-app-icon.png"/>
    	<meta name="format-detection" content="telephone=no">
		<meta name="description" content="">
		<meta name="author" content="">
        <title>Blue Star</title>
        <!-- MIZE_CC_CSS:BEGIN -->
		<link rel="stylesheet" media="all"  href="/cc/build/yui-combined/yui-combined-min.css">
        <link rel="stylesheet" media="all"  href="/cc/build/mize-basic/mize-basic-min.css">
        <link rel="stylesheet" media="all"  href="/cc/src/css/rmiuser.css">
        <link rel="stylesheet" media="all"  href="/cc/src/css/caurosel-style.css">
        <link rel="stylesheet" media="screen" href="/cc/src/css/treeview-menu.css">
		<link rel="stylesheet" media="all"  href="/cc/src/css/apiStyle.css">
		<link rel="stylesheet" media="all"  href="/cc/src/css/jquery-ui.css">


       <!-- MIZE_CC_CSS:END -->
        <link rel="shortcut icon" type="image/png" href="/assets/images/favicon.png">
        <!-- <link href='https://fonts.googleapis.com/css?family=Roboto:400,700,700italic,900,900italic,500italic,500,400italic' rel='stylesheet' type='text/css'> -->
        <link href='https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700' rel='stylesheet' type='text/css'>

		<link rel="stylesheet" media="all" href="/assets/javascripts/jquery-bar-rating/themes/bars-1to10.css" />
		<link rel="stylesheet" media="all" href="/assets/javascripts/jquery-bar-rating/themes/bars-square.css" />
		<link rel="stylesheet" media="all" href="/assets/javascripts/jquery-bar-rating/themes/css-stars.css" />

		<link rel="preconnect" href="https://spellcheck.m-ize.com">
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link rel="preconnect" href="https://maps.googleapis.com">

        <script id="kc_tagMgr"></script>
       <!--  <script src="https://mizecontent-dev.s3.amazonaws.com/CCUIAssets/cclabels.js" defer></script>
        <script src="https://mizecontent-dev.s3.amazonaws.com/CCUIAssets/ccmessages.js" defer></script> -->
    </head>
    <body class="yui3-skin-cc" data-allowbgchange="true" id="cc-app-body">

            <span class="hide" id="cc_uRole"></span>
            <span class="hide" id="cc_uEmail"></span>
            <input type="hidden" class="hide" id="cc_userId" value=''/>
            <input type="hidden" class="hide" id="cc_userType" value=''/>
            <input type="hidden" class="hide" id="cc_loggedInUserType" value=''/>
            <input type="hidden" class="hide" id="cc_organizationCode" value=''/>
            <input type="hidden" class="hide" id="cc_organizationName" value=''/>

   <header class="navbar navbar-fixed-top hide">
   <div id="headerDetails">
   </div>
	</header>

	<button id="scrollTopBtn" class="DisplayNone"><i class="icon icon-arrow-up"></i></button>

<!-- 	<div class="hidden-md hidden-lg">
	<div class="navbar-inverse side-collapse in" id="sidemenu">
		<nav role="navigation" class="navbar-collapse">
		<ul class="nav navbar-nav" id="cc_app_menu_tm">

		</ul>
		</nav>
	</div>
	</div> -->
	<div style="margin-top:80px;" class="clearfix marginCls display_none marg165-top"></div>
	<div style="margin-top:100px;" class="clearfix marginCls-mb marg80-top-mb display_none"></div>
	<div class="container_section">
    <section id="main" class="row side-collapse-container">
    	<div class="cc-content-main cc-nonresponsive-i">
    		<div id="scala-app">
				<div class="col-lg-6 col-md-6 col-sm-6 col-lg-offset-3 col-md-offset-3 col-sm-offset-3 marg10-top centred alert hide" >
					<button class="close" data-dismiss="alert">&times;</button>
					<span></span>
					<!-- display the status message here. -->
		    	</div>
				<div class="content-bg hide">
					<!-- display the message content here. -->
				</div>
			</div>
					<div class="hide no-padding" id="sideNav"></div>
					<div class="no-padding" id="cc-app">	<!--  class="yui3-skin-sam" -->
					</div>
		</div>

      </section>
     </div>
    <div class="clearfix hidden-md hidden-lg footer-top footer-top80-mb"></div>
     <div id="footerDetails" class="clearfix">
   </div>
    <footer class="navbar-fixed-bottom col-xs-12 hidden-lg hidden-md no-padding clearfix" id="footer_section">
     <div class="side-menu hide">
    	 <div class="footer_more col-xs-12 no-padding pad20-top hide">
    	   <div class="col-xs-12 col-sm-12 footer_more_block">
	   			<ul id="cc_footer_more" class="nav nav-pills navbar-nav centred row col-sm-12 col-xs-12 pull-left clearfix no-margin no-padding pad20-bottom">
				</ul>
			 </div>
		 </div>
		 <div id="" class="cc-footer-topbar clearfix">
      		<div id="" class="clearfix" style="bottom:0;">
			   <div class="footer-menu col-xs-12 no-padding visible-xs visible-sm">
			       <ul id="cc_footer_menu" class="nav nav-pills navbar-nav centred row footer_width col-sm-10 col-xs-9 pull-left clearfix no-margin no-padding">

					<li id="" class="main-nav col-sm-3 col-xs-3 no-padding footer_home">
						<a data-sblox="none" href="/cc/home" class="pad15-top">
							<i id="" type="button" class="icon-home2"></i>
						</a>
					</li>
					<li class="main-nav col-sm-3 col-xs-3 no-padding footer_home">
						<a href="/cc/notificationwq.html?" data-sblox="none" class="no-padding pad5-bottom">
						   <div class="col-xs-12 no-padding pad5-left"><span id="notify_count" class="badge-cart marg20-left">0</span></div>
							 <i id="notify-title" type="button" class="icon-bell"></i>
						</a>
					</li>

					<li class="main-nav col-sm-3 col-xs-3 no-padding footer_home">
						<a class="no-padding pad5-bottom cursor_pointer" id ="viewShoppingCart_mb">
						  <div class="col-xs-12 no-padding pad5-left"><span class="badge-cart marg20-left" id="Cart_Count">0</span></div>
						  <i class="icon-cart5" type="button" id=""></i>
						</a>
					</li>
					<li id="inbox-button" class="main-nav col-sm-3 col-xs-3 no-padding footer_home">
						<a data-sblox="none" href="/cc/inbox.html?entity=" class="pad15-top">
							<i id="" type="button" class="icon-drawer3"></i>
						</a>
					</li>
				   </ul>
				   <button id="footer_toggle" aria-expanded="false" aria-haspopup="true" data-toggle="dropdown" class="col-sm-2 col-xs-3 btn dropdown-toggle pull-left no-padding hide" type="button">
					 <div class="active-bg col-xs-12 marg10-bottom" style="padding:1.5px;"></div>
					 <i class="icon-circle-up2" id="collapse_more"></i>
					 <p id="more_text">more</p>
				   </button>

			   </div>
			</div>
         </div>

	 </div>
	</footer>

    <div class="yui3-skin-sam hide" id="ls_panel_result"></div>

	<div class="yui3-skin-sam load_spinnerTest hide" id="panel-container">
	 <div id="panelContent">
	 	<div class="yui3-widget-hd hide"></div>
	    <div class="yui3-widget-bd center loading_pannel" id="loading_wait">
	    	<img src="/assets/images/loading.gif" />
	    </div>
	</div>
	</div>

	<div class="yui3-skin-sam">
	 <div id="aboutPanelContent"></div>
	</div>

	<div class="yui3-skin-sam">
	 <div id="syncPanelContent"></div>
	</div>

	<div class="yui3-skin-sam">
		<div id="alertpanel"></div>
	</div>

	<div class="yui3-skin-sam">
		<div id="modelPanel"></div>
	</div>

	<div class="yui3-skin-sam">
		<div id="overlay" class="yui3-overlay-loading">
		</div>
	</div>
	<div id="cc-tooltip"></div>
	<!-- Seed File -->
	<script src="/cc/build/yui-combined/yui-combined-min.js"></script>
    <script src="/assets/javascripts/jquery-3.3.1.min.js" type="text/javascript"></script>
	 <!-- MIZE_CC_SCRIPTS:END -->

	<script>
		//supress all errors
		window.onerror = function(msg, url, lineNo, columnNo, error){
			return true;
		}
		window.cc = {maybeoffline:false};
		 function showPanel(e){
		 		/* if(window.cc){
			    	window.cc.panel.show();
			    } */
	 	 }
	 	 function hidePanel(e){
	 		/* if(window.cc){
		    	window.cc.panel.hide(); //don't hide
		    } */
	 	 }
	 	 function appcacherror(){
	 		window.cc.maybeoffline = true;
	 	 }
		 if(window.applicationCache){
		 	window.addEventListener('load', function(e) {
			  window.applicationCache.addEventListener('updateready', function(e) {
			    if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
			       window.location.reload(true);
			       //window.applicationCache.swapCache();
			    }
			  }, false);
			    window.applicationCache.addEventListener('downloading', showPanel, false);
			 	//window.applicationCache.addEventListener('checking', showPanel, false);
			 	window.applicationCache.addEventListener('noupdate', hidePanel, false);
			 	//window.applicationCache.addEventListener('error', appcacherror, false);
			 	window.applicationCache.addEventListener('obsolete', hidePanel, false);
			 	window.applicationCache.addEventListener('cached', hidePanel, false);
			}, false);
		 	if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
			       window.location.reload(true);
		 			//window.applicationCache.swapCache();
			}
		 }
		 YUI({
			 logLevel : 'error',
			 jsAttributes : {defer:''},
			 groups:{
				 'yui2' : {
						base : '/cc/',
						patterns:  {
		                    'yui2-': {
		                        configFn: function(me) {
		                            if(/-skin|reset|fonts|grids|base/.test(me.name)) {
		                                me.type = 'css';
		                                me.path = me.path.replace(/\.js/, '.css');
		                                me.path = 'src/css/yui2-treeview.css';
		                            }else{
		                            	//me.path='src/js/yui/js/yui2-treeview.js';
		                            }
		                        }
		                    }
		                }
					},
				'mize' : {
					modules : {
						'mize-basic' : {
							async : false,
							fullpath : '/cc/build/mize-basic/mize-basic-min.js',
							requires : ['forge']
						},
						'mize-home' : {
							async : false,
							fullpath : '/cc/build/mize-home/mize-home-min.js',
							requires : []
						},
						'mize-common-mod' : {
							async : false,
							fullpath : '/cc/build/mize-common/mize-common-min.js',
							requires : ['math']
						},
						'mize-forms-mod' : {
							fullpath : '/cc/build/mize-forms/mize-forms-min.js',
							requires : ['mize-common-mod','jSignature','jqbarratings','math']
						},
						'mize-locator-mod' : {
							fullpath : '/cc/build/mize-locator/mize-locator-min.js',
						},
						'mize-products-mod' : {
							fullpath : '/cc/build/mize-products/mize-products-min.js',
							requires : ['mize-common-mod','jSignature','jqbarratings']
						},
						'mize-parts-mod' : {
							fullpath : '/cc/build/mize-parts/mize-parts-min.js',
							requires : ['mize-common-mod']
						},
						'mize-protos-mod' : {
							fullpath : '/cc/build/mize-protos/mize-protos-min.js',
						},
						'mize-claim-mod' : {
							fullpath : '/cc/build/mize-claim/mize-claim-min.js',
							requires : ['mize-common-mod']
						},
						'mize-documents-mod' : {
							fullpath : '/cc/build/mize-documents/mize-documents-min.js',
							requires : ['mize-common-mod']
						},
						'mize-tradeIn-mod' : {
							fullpath : '/cc/build/mize-tradeIn/mize-tradeIn-min.js',
							requires : ['mize-common-mod']
						},
						'mize-supportRequest-mod' : {
							fullpath : '/cc/build/mize-supportRequest/mize-supportRequest-min.js',
							requires : ['mize-common-mod']
						},
						'mize-serviceOrder-mod' : {
							fullpath : '/cc/build/mize-serviceOrder/mize-serviceOrder-min.js',
							requires : ['mize-common-mod','dhxlimit','dhxtimeline','dhxtreetimeline','dhxminical','dhxouterdrag','dhxquickinfo','dhxreadonly','dhxactvlnks']
						},
						'mize-campaign-mod' : {
							fullpath : '/cc/build/mize-campaign/mize-campaign-min.js',
							requires : ['mize-common-mod']
						},
						'mize-preCustomer-mod' : {
							fullpath : '/cc/build/mize-preCustomer/mize-preCustomer-min.js',
							requires : ['mize-common-mod']
						},
						'mize-product360-mod' : {
							fullpath : '/cc/build/mize-product360/mize-product360-min.js',
							requires : ['mize-common-mod']
						},
						'mize-knowledgeCenter-mod' : {
							fullpath : '/cc/build/mize-knowledgeCenter/mize-knowledgeCenter-min.js',
							requires : ['mize-common-mod']
						},
						'mize-servicePlan-mod' : {
							fullpath : '/cc/build/mize-servicePlan/mize-servicePlan-min.js',
							requires : ['mize-common-mod','jSignature']
						},
						'mize-rentals-mod' : {
							fullpath : '/cc/build/mize-rentals/mize-rentals-min.js',
							requires : ['mize-common-mod']
						},
						'mize-sysconf-mod' : {
							fullpath : '/cc/build/mize-sysconf/mize-sysconf-min.js',
							requires : ['mize-common-mod']
						},
						'mize-rmi-mod' : {
							fullpath : '/cc/build/mize-rmi/mize-rmi-min.js',
							requires : ['mize-common-mod']
						},
						'mize-reports-mod' : {
							fullpath : '/cc/build/mize-reports/mize-reports-min.js'
						},
						'mize-cportal-mod' : {
							fullpath : '/cc/build/mize-cportal/mize-cportal-min.js',
							requires : ['mize-common-mod']
						},
						'mize-resourceDefinition-mod' : {
							fullpath : '/cc/build/mize-resourceDefinition/mize-resourceDefinition-min.js',
							requires : ['mize-common-mod']
						},
						'mize-video-mod' : {
							fullpath : '/cc/build/mize-video/mize-video-min.js',
							requires : ['mize-common-mod']
						},
						'mize-commerce-mod' : {
							fullpath : '/cc/build/mize-commerce/mize-commerce-min.js',
							requires : ['mize-common-mod']
						}
					}
				},
				'vendor' : {
					modules : {
						'mizesvg':'/assets/svg/mize-svg.js',
						'ckeditor' : '/assets/ckeditor/ckeditor.js',
						/* 'moment' : {
							async : false,
							fullpath : '/assets/moment/moment.min.js'
						},
						'momenttz' : {
							async : false,
							fullpath : '/assets/moment/moment-timezone-with-data.min.js',
							requires : ['moment'],
							after : ['moment']
						}, */
						'jSignature' : '/assets/jSignature/jSignature.min.js',
						'jqbarratings' : '/assets/javascripts/jquery-bar-rating/jquery.barrating.min.js',
						'3DCSS' : {
							type : 'css',
							fullpath:'https://developer.api.autodesk.com/viewingservice/v1/viewers/style.min.css'
						},
						'three' : 'https://developer.api.autodesk.com/viewingservice/v1/viewers/three.min.js',
						'viewer3D' : {
							fullpath:'https://developer.api.autodesk.com/viewingservice/v1/viewers/viewer3D.min.js',
							requires : ['3DCSS','three']
						},
						'dhtmlxscheduler':{type:'css',fullpath : '/assets/dhtmlx/dhtmlxscheduler.css'},
						'dhtmlx' : {fullpath : '/assets/dhtmlx/dhtmlxscheduler.js',async:false,requires:['dhtmlxscheduler']},
						'dhxlimit' : {fullpath:'/assets/dhtmlx/ext/dhtmlxscheduler_limit.js',async:false,requires :['dhtmlx']},
						'dhxtimeline' : {fullpath:'/assets/dhtmlx/ext/dhtmlxscheduler_timeline.js',async:false,requires :['dhtmlx']},
						'dhxtreetimeline' : {fullpath:'/assets/dhtmlx/ext/dhtmlxscheduler_treetimeline.js',async:false,requires :['dhtmlx']},
						'dhxminical': {fullpath:'/assets/dhtmlx/ext/dhtmlxscheduler_minical.js',async:false,requires :['dhtmlx']},
						'dhxouterdrag': {fullpath:'/assets/dhtmlx/ext/dhtmlxscheduler_outerdrag.js',async:false,requires :['dhtmlx']},
						'dhxquickinfo': {fullpath:'/assets/dhtmlx/ext/dhtmlxscheduler_quick_info.js',async:false,requires :['dhtmlx']},
						'dhxreadonly': {fullpath:'/assets/dhtmlx/ext/dhtmlxscheduler_readonly.js',async:false,requires :['dhtmlx']},
						'dhxactvlnks': {fullpath:'/assets/dhtmlx/ext/dhtmlxscheduler_active_links.js',async:false,requires :['dhtmlx']},
						'forge' : {fullpath:'/assets/ed/forge.min.js'},
						'math': {fullpath:'/assets/javascripts/math.min.js'},
						'diagram-js':{type:'css',fullpath:'/assets/dmn-js/assets/diagram-js.css'},
						'dmn-font':{type:'css',fullpath:'/assets/dmn-js/assets/dmn-font/css/dmn.css'},
						'dmn-js-shared':{type:'css',fullpath:'/assets/dmn-js/assets/dmn-js-shared.css'},
						'dmn-js-decision-table':{type:'css',fullpath:'/assets/dmn-js/assets/dmn-js-decision-table.css'},
						'dmn-js-decision-table-controls':{type:'css',fullpath:'/assets/dmn-js/assets/dmn-js-decision-table-controls.css'},
						'dmn-js-drd':{type:'css',fullpath:'/assets/dmn-js/assets/dmn-js-drd.css'},
						'dmn-js-literal-expression':{type:'css',fullpath:'/assets/dmn-js/assets/dmn-js-literal-expression.css'},
						'dmnjs': {fullpath:'/assets/dmn-js/dmn-modeler.production.min.js',requires : ['diagram-js','dmn-font','dmn-js-shared','dmn-js-decision-table','dmn-js-decision-table-controls','dmn-js-drd','dmn-js-literal-expression']},
						'jszip': {fullpath:'/assets/javascripts/jszip.min.js'},
						'pouchdb': {fullpath:'/assets/javascripts/pouchdb-5.0.0.min.js'},
						'amazon-connect': {fullpath:'/assets/javascripts/amazon-connect-v1.2.0.js'}

					}
				}
			 }
			}).use(['node','io','handlebars'], function (Y) {
				window.Handlebars=Y.Handlebars;
			function isUnsupportedBrowser() {
				var flag = false;
				if(Y.UA.ie && Y.UA.ie <= 9) {
					flag = true;
					Y.io('/cc/src/js/views/templates/unsupported_browser.template',{
		                on:{
		                    complete:function(id,resp){
		                    	Y.one(document.getElementById('scala-app')).setHTML("");
		                    	Y.one(document.getElementById('panelContent')).addClass('hide');
		                    	Y.one(document.getElementById('cc-app')).setHTML(resp.responseText);
		                    }
		                }
		            });

				}
				return flag;
			}
			if(!isUnsupportedBrowser()){
					Y.use(['mize-basic','mize-oopUtils'],function(Y){
							Y.use(['mize-home','*'],function(Y){
								Y.use('mize-common-mod','bluestar-ccApp',function(Y){
							        Y.CC.ccAPP = new Y.CC.app({
										container		:	'#cc-app',
										transitions		: 	false,
										pcmods			:   true
									});
									window.cc.ccAPP = Y.CC.ccAPP;
							        Y.use('*',function(Y){
							        	Y.CC.ccAPP.render();
							        	Y.CC.ccAPP.loadCommons();
							        });
						        });
								if(Y.config.global.applicationCache){
					        	Y.config.global.applicationCache.addEventListener('downloading', function(e) {
									Y.CC.panel.show();
								}, false);
					        	Y.config.global.applicationCache.addEventListener('error', function(e) {
					        		if(e.reason=="manifest"){
					        			cc.maybeoffline=true;
										Y.CC.ccAPP.online=false;
										Y.CC.ccAPP.navigate('/cc');
					        		}
								}, false);
								}
							});
					});
			}
		});
	</script>

	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
    <script src="/assets/javascripts/bootstrap/html5shiv.min.js" type="text/javascript"></script>
  	<script src="/assets/javascripts/bootstrap/response.min.js" type="text/javascript"></script>
  	<![endif]-->
  	<script src="/assets/moment/moment.min.js" type="text/javascript" defer></script>
  	<script src="/assets/moment/moment-timezone-with-data.min.js" type="text/javascript" defer></script>
    <script src="/assets/javascripts/bootstrap/bootstrap.min.js" type="text/javascript" defer></script>
	 <script src="/assets/javascripts/modernizr-2.6.2.min.js" defer></script>
	 <script src="/assets/javascripts/jquery-ui.js" defer></script>
	  <script src="/assets/javascripts/bootstrap-select.min.js" defer></script>


	<script>
		if (!String.prototype.endsWith) {
		  String.prototype.endsWith = function(searchString, position) {
		      var subjectString = this.toString();
		      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
		        position = subjectString.length;
		      }
		      position -= searchString.length;
		      var lastIndex = subjectString.lastIndexOf(searchString, position);
		      return lastIndex !== -1 && lastIndex === position;
		  };
		}
		$(document).ready(function(){
		    $('[data-toggle="tooltip"]').tooltip();
		});
	</script>
    </body>
	<div class="drag-target" style="left: 0px;"></div>
</html>
