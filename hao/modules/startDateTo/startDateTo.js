define(['jquery', 'underscore', 'backbone', 'text!modules/startDateTo/startDateToView.html'], function ($, _, Backbone, startDateToViewTemplate) {
    var startDateToView = Backbone.View.extend({
        template: _.template(startDateToViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return startDateToView;
});