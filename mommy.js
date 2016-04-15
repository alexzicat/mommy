(function () {
  'use strict';

  Object.defineProperties(Object.prototype, {
    'inherits_from': {
      value: function (klass) {
        var KlassPrototype = Function.bind.apply(klass, arguments);

        this.prototype = new KlassPrototype();
        this.prototype._super = new KlassPrototype();
        this.prototype.constructor = this;

        return this;
      },
      writable: false,
      enumerable: false,
      configurable: false
    }
  });
}());
