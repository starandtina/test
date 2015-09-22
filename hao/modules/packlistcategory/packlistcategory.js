define(['jquery', 'underscore', 'backbone', 'text!modules/packlistcategory/packlistcategoryView.html'], function ($, _, Backbone, packlistcategoryViewTemplate) {
    var packlistcategoryView = Backbone.View.extend({
        template: _.template(packlistcategoryViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return packlistcategoryView;
});