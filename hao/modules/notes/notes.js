define(['jquery', 'underscore', 'backbone', 'text!modules/notes/notesView.html'], function ($, _, Backbone, notesViewTemplate) {
    var notesView = Backbone.View.extend({
        template: _.template(notesViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return notesView;
});