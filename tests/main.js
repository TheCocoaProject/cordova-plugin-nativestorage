exports.defineAutoTests = function () {
    
    describe('Write/Read Tests', function () {
        it('Objects', function () {
            var dummyData = { data1: "", data2: 2, data3: 3.0 };
            NativeStorage.set("ref_obj",
                dummyData,
                function (result) {
                    NativeStorage.getObject("ref_obj",
                        function (result) {
                            expect(result).toEqual(dummyData);
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