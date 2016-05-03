/* jshint jasmine: true */
/* global NativeStorage */
exports.defineAutoTests = function () {

    describe('Write/Read Tests', function () {
        it("Plugin available", function () {
            expect(NativeStorage).toEqual(jasmine.anything());
        });
        it('Booleans', function (done) {
            var dummyData = true;
            NativeStorage.set("dummy_ref_bool",
                dummyData,
                function (result) {
                    NativeStorage.getBoolean("dummy_ref_bool",
                        function (result) {
                            expect(result).toEqual(dummyData);
                            done();
                        },
                        function (e) {
                            fail("Read Boolean Failed");
                        });
                },
                function (e) {
                    fail("Write Boolean Failed");
                });
        });
        it('Ints', function (done) {
            var dummyData = 154243;
            NativeStorage.set("dummy_ref_int",
                dummyData,
                function (result) {
                    NativeStorage.getInt("dummy_ref_int",
                        function (result) {
                            expect(result).toEqual(dummyData);
                            done();
                        },
                        function (e) {
                            fail("Read Int Failed");
                        });
                },
                function (e) {
                    fail("Write Int Failed");
                });
        });
        it('Doubles', function (done) {
            var dummyData = 12327.023491;
            NativeStorage.set("dummy_ref_double",
                dummyData,
                function (result) {
                    NativeStorage.getDouble("dummy_ref_double",
                        function (result) {
                            expect(result).toEqual(dummyData);
                            done();
                        },
                        function (e) {
                            fail("Read Double Failed");
                        });
                },
                function (e) {
                    fail("Write String Failed");
                });
        });
        it('Objects', function (done) {
            var dummyData = { data1: "", data2: 2, data3: 3.0 };
            NativeStorage.set("dummy_ref_obj",
                dummyData,
                function (result) {
                    NativeStorage.getObject("dummy_ref_obj",
                        function (result) {
                            expect(result).toEqual(dummyData);
                            done();
                        },
                        function (e) {
                            fail("Read Object Failed");
                        });
                },
                function (e) {
                    fail("Write Object Failed");
                });
        });
    });

};