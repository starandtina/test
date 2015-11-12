define(['jquery', 'underscore', 'backbone', 'text!modules/checklist/checklistView.html'], function ($, _, Backbone, checklistViewTemplate) {
    var checklistView = Backbone.View.extend({
        template: _.template(checklistViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return checklistView;
});