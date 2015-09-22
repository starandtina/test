define(['jquery', 'underscore', 'backbone', 'text!modules/reservationListFrom/reservationListFromView.html'], function ($, _, Backbone, reservationListFromViewTemplate) {
    var reservationListFromView = Backbone.View.extend({
        template: _.template(reservationListFromViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return reservationListFromView;
});