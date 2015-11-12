define(['jquery', 'underscore', 'backbone', 'text!modules/tripDone/tripDoneView.html'], function ($, _, Backbone, tripDoneViewTemplate) {
    var tripDoneView = Backbone.View.extend({
        template: _.template(tripDoneViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return tripDoneView;
});