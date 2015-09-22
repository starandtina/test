define(['jquery', 'underscore', 'backbone', 'text!modules/startDate/startDateView.html'], function ($, _, Backbone, startDateViewTemplate) {
    var startDateView = Backbone.View.extend({
        template: _.template(startDateViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return startDateView;
});