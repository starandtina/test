define(['jquery', 'underscore', 'backbone', 'text!modules/startDateFrom/startDateFromView.html'], function ($, _, Backbone, startDateFromViewTemplate) {
    var startDateFromView = Backbone.View.extend({
        template: _.template(startDateFromViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return startDateFromView;
});