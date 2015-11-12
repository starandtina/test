define(['jquery', 'underscore', 'backbone', 'text!modules/tripOngoing/tripOngoingView.html'], function ($, _, Backbone, tripOngoingViewTemplate) {
    var tripOngoingView = Backbone.View.extend({
        template: _.template(tripOngoingViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return tripOngoingView;
});