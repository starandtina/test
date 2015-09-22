define(['jquery', 'underscore', 'backbone', 'text!modules/tripList/tripListView.html'], function ($, _, Backbone, tripListViewTemplate) {
    var tripListView = Backbone.View.extend({
        template: _.template(tripListViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return tripListView;
});