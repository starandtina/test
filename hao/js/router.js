define(['jquery', 'underscore', 'backbone', 'modules/home/home', 'modules/search/search','modules/filter/filter','modules/login/login',
	'modules/index/index', 'modules/trip/trip', 'modules/tripSearch/tripSearch','modules/tripList/tripList',
	'modules/campsiteList/campsiteList','modules/startDate/startDate', 'modules/startDateFrom/startDateFrom', 
	'modules/startDateTo/startDateTo', 
	'modules/reservationList/reservationList','modules/reservationListFrom/reservationListFrom','modules/tripDone/tripDone',
	'modules/tripOngoing/tripOngoing','modules/notes/notes','modules/mine/mine','modules/friendsList/friendsList', 'modules/checkList/checkList',
	'modules/packlistcategory/packlistcategory','modules/onGoingMap/onGoingMap','modules/onGoingMapCopy/onGoingMapCopy',
	'modules/campsitemap/campsitemap','swiper',  'jqm'],
	function ($, _, Backbone, HomeView, SearchView, filterView, LoginView, IndexView, TripView, TripSearchView, TripListView, 
		       CampsiteListView, StartDateView, StartDateFromView, StartDateToView, ReservationListView, ReservationListFromView,
		       TripDoneView, TripOngoingView, notesView,MineView,
		       friendsListView, checkListView, packlistCategoryView,onGoingMapView,onGoingMapCopyView, 
		       campsitemapView, swiper) {
	    var Router = Backbone.Router.extend({
	        routes: {
	            '': 'Home',  
	            'login': 'Login',          
	            'index': 'Index',        
	            'trip': 'Trip',
	            'search': 'Search',
	            'filter': 'filter',
	            'tripSearch': 'TripSearch',
	            'tripList': 'TripList',
	            'tripDone': 'TripDone',
	            'tripOngoing': 'TripOngoing',
	            'notes': 'notes',
	            'startDate': 'startDate',  
	            'startDateFrom': 'startDateFrom',  
	            'startDateTo': 'startDateTo',   
	            'reservationList': 'reservationList',
	            'reservationListFrom': 'reservationListFrom',  
	            'campsiteList': 'CampsiteList',      
	            'mine': 'Mine',
	            'checkList': 'checkList',
	            'packlistcategory': 'packlistcategory', 
	            'onGoingMap': 'onGoingMap',
	            'onGoingMapCopy': 'onGoingMapCopy',
	            'campsitemap': 'campsitemap',
	            'friendsList': 'friendsList'      
	        },
	        firstPage: true,
	        Home: function (actions) {
	            var homeView = new HomeView();
	            homeView.render();
	            this.changePage(homeView, 'Home');
	            // setTimeout( function(){
	            // 	window.location = '#login';
	            // },6000);
	        },
	        Search: function (actions) {
	            var view = new SearchView();
	            view.render();
	            this.changePage(view);
	        },
	        filter: function (actions) {
	            var view = new filterView();
	            view.render();
	            this.changePage(view);
	        },
	        Login: function (actions) {
	            var loginView = new LoginView();
	            loginView.render();
	            this.changePage(loginView);
	        },
	        Index: function (actions) {
	            var indexView = new IndexView();
	            indexView.render();
	            this.changePage(indexView, 'Index');
	        },
	        Trip: function (actions) {
	            var tripView = new TripView();
	            tripView.render();
	            this.changePage(tripView);
	        },
	        TripSearch: function (actions) {
	            var view = new TripSearchView();
	            view.render();
	            this.changePage(view);
	        },
	        TripList: function (actions) {
	            var view = new TripListView();
	            view.render();
	            this.changePage(view);
	        },
	        startDate: function (actions) {
	            var view = new StartDateView();
	            view.render();
	            this.changePage(view);
	        },
	        startDateFrom: function (actions) {
	            var view = new StartDateFromView();
	            view.render();
	            this.changePage(view);
	        },
	        startDateTo: function (actions) {
	            var view = new StartDateToView();
	            view.render();
	            this.changePage(view);
	        },
	        reservationList: function (actions) {
	            var view = new ReservationListView();
	            view.render();
	            this.changePage(view);
	        },
	        reservationListFrom: function (actions) {
	            var view = new ReservationListFromView();
	            view.render();
	            this.changePage(view);
	        },
	        TripDone: function (actions) {
	            var view = new TripDoneView();
	            view.render();
	            this.changePage(view);
	            redipsInit();
	        },
	        TripOngoing: function (actions) {
	            var view = new TripOngoingView();
	            view.render();
	            this.changePage(view);
	        },
	        notes: function (actions) {
	            var view = new notesView();
	            view.render();
	            this.changePage(view);
	        },
	        friendsList: function (actions) {
	            var view = new friendsListView();
	            view.render();
	            this.changePage(view);
	        },
	        checkList: function (actions) {
	            var view = new checkListView();
	            view.render();
	            this.changePage(view);
	        },
	        packlistcategory: function (actions) {
	            var view = new packlistCategoryView();
	            view.render();
	            this.changePage(view);
	        },
        	onGoingMap: function (actions) {
	            var view = new onGoingMapView();
	            view.render();
	            this.changePage(view);
	        },
	        onGoingMapCopy: function (actions) {
	            var view = new onGoingMapCopyView();
	            view.render();
	            this.changePage(view);
	        },
	        campsitemap: function (actions) {
	            var view = new campsitemapView();
	            view.render();
	            this.changePage(view);
	        },
	        Mine: function (actions) {
	            var mineView = new MineView();
	            mineView.render();
	            this.changePage(mineView);
	        },
	        CampsiteList: function (actions) {
	            var view = new CampsiteListView();
	            view.render();
	            this.changePage(view);
	        },
	        triggerChangeView: function (view) {
	            this.changePage(view);
	        },
	        changePage: function (view, router) {
	            $(view.el).attr('data-role', 'page');
	            $('#main').append($(view.el));
	            // $('body').append($(view.el));
	            var transition = $.mobile.defaultPageTransition;
	            if (!this.firstPage) {
	                $.mobile.changePage($(view.el), { changeHash: false, transition: transition });
	            } else {
	                this.firstPage = false;
	            }

	            if(router && router == 'Home'){
	            	 setTimeout( function(){
		            	var swiper = new Swiper('.swiper-container', {
					        pagination: '.swiper-pagination',
					        paginationClickable: true,
					        autoplay: 2500,
					        autoplayDisableOnInteraction: false
					     });
		            },300);
	            }
	        }
	    });
	    return Router;
	});