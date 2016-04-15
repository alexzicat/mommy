describe('mommy.js', function () {
  var Child,
    child_object;

  beforeAll(function () {
    Child = function () {
      this.type = 'baby';
      this.talk = 'cry';
    };
  });

  describe('When the Object instance does not inherit from another Object', function () {

    beforeAll(function () {
      child_object = new Child();
    });

    it('should not have a parent prototype accessible', function () {
      expect(child_object._super).toBe(undefined);
    });

    it("should have an attribute 'type' that returns 'baby'", function () {
      expect(child_object.type).toBe('baby');
    });

    it("should have an attribute 'talk' that returns 'cry'", function () {
      expect(child_object.talk).toBe('cry');
    });

    it("should not have an attribute 'mood'", function () {
      expect(child_object.mood).not.toBeDefined();
    });
  });

  describe('When the Object instance inherits from another Object', function () {
    var Parent,
      parent_object;

    describe('Without receiving parameters', function () {

      beforeAll(function () {
        Parent = function () {
          this.type = 'mommy';
          this.mood = 'happy';
        };

        Child.inherits_from(Parent);

        child_object = new Child();
      });

      it('should have the parent prototype accessible', function () {
        expect(child_object._super).toEqual(new Parent());
      });

      it("should have an attribute 'type' that returns 'baby'", function () {
        expect(child_object.type).toBe('baby');
      });

      it("should have an attribute 'talk' that returns 'cry'", function () {
        expect(child_object.talk).toBe('cry');
      });

      it("should have an attribute 'mood' that returns 'happy'", function () {
        expect(child_object.mood).toBe('happy');
      });
    });

    describe('With parameters', function () {

      beforeAll(function () {
        Parent = function (mood) {
          this.mood = mood;
        };

        Child.inherits_from(Parent, 'sad');

        child_object = new Child();
      });

      it("should have an attribute 'type' that returns 'baby'", function () {
        expect(child_object.type).toBe('baby');
      });

      it("should have an attribute 'talk' that returns 'cry'", function () {
        expect(child_object.talk).toBe('cry');
      });

      it("should have an attribute 'mood' that returns 'sad'", function () {
        expect(child_object.mood).toBe('sad');
      });
    });
  });
});
