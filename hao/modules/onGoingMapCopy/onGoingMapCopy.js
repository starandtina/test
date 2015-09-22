define(['jquery', 'underscore', 'backbone', 'text!modules/onGoingMapCopy/onGoingMapCopyView.html'], function ($, _, Backbone, onGoingMapCopyViewTemplate) {
    var onGoingMapCopyView = Backbone.View.extend({
        template: _.template(onGoingMapCopyViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return onGoingMapCopyView;
});