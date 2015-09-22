define(['jquery', 'underscore', 'backbone', 'text!modules/reservationList/reservationListView.html'], function ($, _, Backbone, reservationListViewTemplate) {
    var reservationListView = Backbone.View.extend({
        template: _.template(reservationListViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return reservationListView;
});