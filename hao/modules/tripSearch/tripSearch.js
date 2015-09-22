define(['jquery', 'underscore', 'backbone', 'text!modules/tripSearch/tripSearchView.html'], function ($, _, Backbone, tripSearchViewTemplate) {
    var tripSearchView = Backbone.View.extend({
        template: _.template(tripSearchViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return tripSearchView;
});