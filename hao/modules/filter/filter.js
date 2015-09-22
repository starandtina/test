define(['jquery', 'underscore', 'backbone', 'text!modules/filter/filterView.html'], function ($, _, Backbone, filterViewTemplate) {
    var filterView = Backbone.View.extend({
        template: _.template(filterViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return filterView;
});