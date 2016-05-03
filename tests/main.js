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