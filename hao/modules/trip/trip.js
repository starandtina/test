define(['jquery', 'underscore', 'backbone', 'text!modules/trip/tripView.html'], function ($, _, Backbone, tripViewTemplate) {
    var tripView = Backbone.View.extend({
        template: _.template(tripViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return tripView;
});