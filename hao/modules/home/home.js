define(['jquery', 'underscore', 'backbone', 'router', 'text!modules/home/homeView.html'],
 function ($, _, Backbone, Router, homeViewTemplate) {
    var homeView = Backbone.View.extend({
        template: _.template(homeViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return homeView;
});