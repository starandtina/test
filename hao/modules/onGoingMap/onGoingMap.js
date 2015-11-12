define(['jquery', 'underscore', 'backbone', 'text!modules/onGoingMap/onGoingMapView.html'], function ($, _, Backbone, onGoingMapViewTemplate) {
    var onGoingMapView = Backbone.View.extend({
        template: _.template(onGoingMapViewTemplate),
        render: function () {
            $(this.el).append(this.template());
            return this;
        }
    });
    return onGoingMapView;
});