/* jshint jasmine: true */
/* global NativeStorage */
exports.defineAutoTests = function () {

    describe('Write/Read/Delete Tests', function () {
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
                            NativeStorage.remove("dummy_ref_bool", function () {
                                done();
                            }, function (e) {
                                fail("Delete Boolean Failed");
                            });
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
                            NativeStorage.remove("dummy_ref_int", function () {
                                done();
                            }, function (e) {
                                fail("Delete Boolean Failed");
                            });
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
            var dummyData = 12327.023;
            NativeStorage.set("dummy_ref_double",
                dummyData,
                function (result) {
                    NativeStorage.getDouble("dummy_ref_double",
                        function (result) {
                            expect(result).toEqual(dummyData);
                            NativeStorage.remove("dummy_ref_double", function () {
                                done();
                            }, function (e) {
                                fail("Delete Boolean Failed");
                            });
                        },
                        function (e) {
                            fail("Read Double Failed");
                        });
                },
                function (e) {
                    fail("Write String Failed");
                });
        });
        it('Strings', function (done) {
            var dummyData = "sdadadfsjdhbfwehfnciu7834fybzx2lnqo8japf;ckamicoa.c.a/";
            NativeStorage.set("dummy_ref_str",
                dummyData,
                function (result) {
                    NativeStorage.getString("dummy_ref_str",
                        function (result) {
                            expect(result).toEqual(dummyData);
                            NativeStorage.remove("dummy_ref_str", function () {
                                done();
                            }, function (e) {
                                fail("Delete Boolean Failed");
                            });
                        },
                        function (e) {
                            fail("Read String Failed");
                        });
                },
                function (e) {
                    fail("Write String Failed");
                });
        });
        it('Objects', function (done) {
            var dummyData = {data1: "", data2: 2, data3: 3.0};
            NativeStorage.set("dummy_ref_obj",
                dummyData,
                function (result) {
                    NativeStorage.getObject("dummy_ref_obj",
                        function (result) {
                            expect(result).toEqual(dummyData);
                            NativeStorage.remove("dummy_ref_obj", function () {
                                done();
                            }, function (e) {
                                fail("Delete Boolean Failed");
                            });
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

    /* NEW API test */
    describe('Write/Read/Delete Tests new API', function () {
        it("Plugin available", function () {
            expect(NativeStorage).toEqual(jasmine.anything());
        });
        it('Booleans', function (done) {
            var dummyData = true;
            NativeStorage.setItem("dummy_ref_bool_new",
                dummyData,
                function (result) {
                    NativeStorage.getItem("dummy_ref_bool_new",
                        function (result) {
                            expect(result).toEqual(dummyData);
                            NativeStorage.remove("dummy_ref_bool_new", function () {
                                done();
                            }, function (e) {
                                fail("Delete Boolean Failed");
                            });
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
            NativeStorage.setItem("dummy_ref_int_new",
                dummyData,
                function (result) {
                    NativeStorage.getItem("dummy_ref_int_new",
                        function (result) {
                            expect(result).toEqual(dummyData);
                            NativeStorage.remove("dummy_ref_int_new", function () {
                                done();
                            }, function (e) {
                                fail("Delete Boolean Failed");
                            });
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
            var dummyData = 12327.023;
            NativeStorage.setItem("dummy_ref_double_new",
                dummyData,
                function (result) {
                    NativeStorage.getItem("dummy_ref_double_new",
                        function (result) {
                            expect(result).toEqual(dummyData);
                            NativeStorage.remove("dummy_ref_double_new", function () {
                                done();
                            }, function (e) {
                                fail("Delete Boolean Failed");
                            });
                        },
                        function (e) {
                            fail("Read Double Failed");
                        });
                },
                function (e) {
                    fail("Write String Failed");
                });
        });
        it('Strings', function (done) {
            var dummyData = "sdadadfsjdhbfwehfnciu7834fybzx2lnqo8japf;ckamicoa.c.a/";
            NativeStorage.setItem("dummy_ref_str_new",
                dummyData,
                function (result) {
                    NativeStorage.getItem("dummy_ref_str_new",
                        function (result) {
                            expect(result).toEqual(dummyData);
                            NativeStorage.remove("dummy_ref_str_new", function () {
                                done();
                            }, function (e) {
                                fail("Delete Boolean Failed");
                            });
                        },
                        function (e) {
                            fail("Read String Failed");
                        });
                },
                function (e) {
                    fail("Write String Failed");
                });
        });
        it('Objects', function (done) {
            var dummyData = {data1: "", data2: 2, data3: 3.0};
            NativeStorage.setItem("dummy_ref_obj_new",
                dummyData,
                function (result) {
                    NativeStorage.getItem("dummy_ref_obj_new",
                        function (result) {
                            expect(result).toEqual(dummyData);
                            NativeStorage.remove("dummy_ref_obj_new", function () {
                                done();
                            }, function (e) {
                                fail("Delete Boolean Failed");
                            });
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


    /* NEW API test */
    describe('Fail Tests new API', function () {
        it("Plugin available", function () {
            expect(NativeStorage).toEqual(jasmine.anything());
        });
        it('Null reference', function (done) {
            NativeStorage.setItem(null,"objbio",
                function (result) {
                    //expect(result).toEqual(dummyData);
                },
                function (e) {
                    expect(e.code).toEqual(3);
                    done();
                });
        });

        it('Item Not Found', function (done) {
            NativeStorage.getItem("dummy_ref_fail",
                function (result) {
                    //expect(result).toEqual(dummyData);
                },
                function (e) {
                    expect(e.code).toEqual(2);
                    done();
                });
        });


    });
};