!
function(e) {
    e(window).resize(function() {
        e(window).width() < 768 && e(".sidebar").each(function() {
            e(this).hasClass("sidebar-floating") || (e(this).addClass("hidden"), e(".sidebar").removeClass("visible"))
        }),
        e(window).width() > 768 && e(".sidebar").each(function() {
            e(this).hasClass("sidebar-floating") || e(this).removeClass("hidden")
        })
    }),
    e("[data-toggle=sidebar]").on("click",
    function() {
        e(e(this).data("target")).toggleClass("hidden"),
        e(e(this).data("target")).hasClass("sidebar-left") && e("nav").hasClass("left-md-sidebar") && e(".sidebar").toggleClass("visible")
    }),
    e(window).width() < 768 && e(".sidebar").each(function() {
        e(this).hasClass("sidebar-floating") || e(this).addClass("hidden")
    }),
    e(".sidebar").each(function() {
        e(this).on("mouseover",
        function() {
            e("body").css("overflow", "hidden")
        }).on("mouseleave",
        function() {
            e("body").css("overflow", "auto")
        })
    }),
    e(document).mouseup(function(a) {
        e(".sidebar").each(function() {
            if (e(window).width() < 768 || e(this).hasClass("sidebar-floating")) {
                if (e(this).hasClass("visible")) {
                    var t = e(this);
                    t.is(a.target) || 0 !== t.has(a.target).length || e(this).removeClass("visible")
                }
                if (e(this).hasClass("sidebar-right")) {
                    var t = e(this);
                    t.is(a.target) || 0 !== t.has(a.target).length || e(this).addClass("hidden")
                }
            }
        })
    }),
    e(".sidebar .nav .nav-item > a").on("click",
    function(a) {
        if (e(this).next("ul").html()) if (a.preventDefault(), e(this).parent().hasClass("open")) e(this).parent().removeClass("open");
        else {
            var t = e(this).closest(".nav"),
            o = t.find(".nav-item.open");
            o.removeClass("open"),
            e(this).parent().addClass("open")
        }
    })
} (jQuery),
function(e) {
    "use strict";
    e.fn.plusDatePicker = function() {
        this.length && "undefined" != typeof e.fn.datepicker && this.datepicker()
    },
    e.fn.plusTimePicker = function() {
        this.length && "undefined" != typeof e.fn.datepicker && this.timepicker({
            minuteStep: 5,
            showInputs: !1,
            disableFocus: !0,
            icons: {
                up: "material-icons up",
                down: "material-icons down"
            }
        })
    },
    e(".datepicker").plusDatePicker(),
    e("#timepicker3").plusTimePicker({
        minuteStep: 5,
        showInputs: !1,
        disableFocus: !0
    })
} (jQuery),
function(e) {
    var a = {
        map: {
            checkbox: "fa fa-square-o fa-fw",
            checkboxSelected: "fa fa-check-square fa-fw",
            checkboxUnknown: "fa fa-check-square fa-fw fa-muted",
            error: "fa fa-exclamation-triangle fa-fw",
            expanderClosed: "fa fa-caret-right fa-fw",
            expanderLazy: "fa fa-angle-right fa-fw",
            expanderOpen: "fa fa-caret-down fa-fw",
            doc: "fa fa-file-o fa-fw",
            noExpander: "",
            docOpen: "fa fa-file fa-fw",
            loading: "fa fa-refresh fa-spin fa-fw",
            folder: "fa fa-folder fa-fw",
            folderOpen: "fa fa-folder-open fa-fw"
        }
    },
    t = {
        autoExpandMS: 400,
        focusOnClick: !0,
        preventVoidMoves: !0,
        preventRecursiveMoves: !0,
        dragStart: function(e, a) {
            return ! 0
        },
        dragEnter: function(e, a) {
            return ! 0
        },
        dragDrop: function(e, a) {
            a.otherNode.moveTo(e, a.hitMode)
        }
    };
    e.fn.APFancyTree = function() {
        if (this.length && "undefined" != typeof e.fn.fancytree) {
            var o = ["glyph"];
            "undefined" != typeof this.attr("data-tree-dnd") && o.push("dnd"),
            this.fancytree({
                extensions: o,
                glyph: a,
                dnd: t,
                clickFolderMode: 3,
                checkbox: "undefined" != typeof this.attr("data-tree-checkbox") || !1,
                selectMode: "undefined" != typeof this.attr("data-tree-select") ? parseInt(this.attr("data-tree-select")) : 2
            })
        }
    },
    e('[data-toggle="tree"]').each(function() {
        e(this).APFancyTree()
    })
} (jQuery),
function(e) {
    e.fn.APNestable = function() {
        this.length && "undefined" != typeof e.fn.nestable && this.nestable({
            rootClass: "nestable",
            listNodeName: "ul",
            listClass: "nestable-list",
            itemClass: "nestable-item",
            dragClass: "nestable-drag",
            handleClass: "nestable-handle",
            collapsedClass: "nestable-collapsed",
            placeClass: "nestable-placeholder",
            emptyClass: "nestable-empty"
        })
    },
    e(".nestable").APNestable()
} (jQuery);
var date = new Date,
calendarMonth = ("0" + (date.getMonth() + 1)).slice( - 2),
calendarEvents = [{
    title: "Presentation",
    description: "Just presenting some UI examples.",
    type: "presentation",
    allday: "false",
    bg: "#FF5722",
    start: date.getFullYear() + "-" + calendarMonth + "-04T16:00:00",
    end: date.getFullYear() + "-" + calendarMonth + "-06T18:00:00"
},
{
    title: "Meeting with Sam",
    description: "Quick meetup with Sam to review the current progress of the project.",
    type: "meeting",
    allday: "false",
    bg: "#E53935",
    start: date.getFullYear() + "-" + calendarMonth + "-16T16:00:00",
    end: date.getFullYear() + "-" + calendarMonth + "-16T18:00:00"
},
{
    title: "Conference",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa dolores illo inventore iste perspiciatis qui quidem rem repudiandae sed.",
    type: "event",
    bg: "#4CAF50",
    allday: "true",
    start: date.getFullYear() + "-" + calendarMonth + "-11",
    end: date.getFullYear() + "-" + calendarMonth + "-13"
},
{
    title: "Board Meeting",
    description: "Get toghether with everyone in the company to assess.",
    type: "meeting",
    bg: "#E53935",
    allday: "false",
    start: date.getFullYear() + "-" + calendarMonth + "-12T10:30:00",
    end: date.getFullYear() + "-" + calendarMonth + "-12T12:30:00"
},
{
    title: "Next months Meeting",
    description: "Testing an event next month.",
    type: "meeting",
    bg: "#039BE5",
    allday: "false",
    start: date.getFullYear() + "-" + calendarMonth + "-28T10:30:00",
    end: date.getFullYear() + "-" + calendarMonth + "-31T12:30:00"
}];
if (function(e) {
    function a(e) {
        t(e)
    }
    function t(a) {
        a.startDate = moment(a.start).format("dddd, MMMM Do YYYY"),
        a.startTime = moment(a.start).format("hh:mm"),
        a.endDate = moment(a.end).format("dddd, MMMM Do YYYY"),
        a.endTime = moment(a.end).format("hh:mm"),
        e("#sidebar-calendar").removeClass("hidden"),
        e("#sidebar-calendar .content").html(o(a))
    }
    function o(e) {
        var a = '<div class="p-a-1"><h5 class="m-a-0"><i class="material-icons text-muted">event</i> <span class="icon-text">' + e.title + '</span></h5></div><div class="p-l-1 p-r-1"<p>' + e.description + '</p><ul class="list-group"><li class="list-group-item"> <small class="text-muted"><strong>Starts:</strong></small><br/>' + e.startDate + '</li><li class="list-group-item"><small class="text-muted"><strong>Ends:</strong></small><br/>' + e.endDate + "</li></ul>";
        return a
    }
    function l() {
        var a = (e("#calendar").fullCalendar("clientEvents"), "da");
        e("#this-month-event-list").html(a)
    }
    var n = new Object;
    e("#calendar").length > 0 && (e("#calendar").fullCalendar({
        header: {
            left: "prev",
            center: "title",
            right: "next"
        },
        editable: !0,
        eventLimit: !0,
        events: calendarEvents,
        eventClick: function(e) {
            a(e)
        },
        eventRender: function(e, a) {
            n += e,
            a.css("background-color", e.bg)
        },
        loading: function(a) {
            a && e("#loading").toggle(a)
        },
        viewRender: function() {
            l()
        }
    }), l(), e("#addEvent").click(function() {
        var a = {
            title: "Custom Event Added",
            description: "Added a custom event",
            type: "meeting",
            bg: "#f4511e",
            start: new Date,
            end: new Date
        };
        e("#calendar").fullCalendar("renderEvent", a),
        l()
    }))
} (jQuery), $("#map-canvas").length > 0) var personData = [{
    id: 0,
    name: "Lynnette Gibson",
    age: 75,
    followers: 55,
    occupation: "amet commodo",
    from: "Michigan",
    college: "FSU",
    lat: 36.848384,
    lng: -88.486336
},
{
    id: 1,
    name: "Carla Reese",
    age: 33,
    followers: 41,
    occupation: "pariatur aute",
    from: "National",
    college: "MTU",
    lat: 34.757467,
    lng: -117.289205
},
{
    id: 2,
    name: "Mccarthy Blevins",
    age: 58,
    followers: 47,
    occupation: "qui laborum",
    from: "National",
    college: "MSU",
    lat: 40.096377,
    lng: -118.61762
},
{
    id: 3,
    name: "Geneva Holcomb",
    age: 62,
    followers: 66,
    occupation: "adipisicing nostrud",
    from: "National",
    college: "CMU",
    lat: 40.113991,
    lng: -82.080224
},
{
    id: 4,
    name: "Parker Campbell",
    age: 41,
    followers: 32,
    occupation: "et sit",
    from: "Michigan",
    college: "UM",
    lat: 35.552591,
    lng: -86.801539
},
{
    id: 5,
    name: "Osborne Briggs",
    age: 41,
    followers: 60,
    occupation: "ad ipsum",
    from: "National",
    college: "FSU",
    lat: 32.497364,
    lng: -115.930087
},
{
    id: 6,
    name: "Tanisha Mercado",
    age: 30,
    followers: 12,
    occupation: "culpa reprehenderit",
    from: "Michigan",
    college: "MTU",
    lat: 34.5362,
    lng: -114.237048
},
{
    id: 7,
    name: "Lacy Graves",
    age: 25,
    followers: 59,
    occupation: "ut laboris",
    from: "Michigan",
    college: "MSU",
    lat: 33.865981,
    lng: -119.604591
},
{
    id: 8,
    name: "Martina Weeks",
    age: 31,
    followers: 42,
    occupation: "amet laborum",
    from: "National",
    college: "UM",
    lat: 36.149757,
    lng: -108.240607
},
{
    id: 9,
    name: "Raymond Gregory",
    age: 72,
    followers: 56,
    occupation: "eiusmod dolor",
    from: "Michigan",
    college: "MSU",
    lat: 36.824384,
    lng: -80.740186
},
{
    id: 10,
    name: "Candy Hewitt",
    age: 20,
    followers: 24,
    occupation: "sunt sint",
    from: "National",
    college: "MTU",
    lat: 37.908543,
    lng: -102.77804
},
{
    id: 11,
    name: "Loraine Holden",
    age: 38,
    followers: 8,
    occupation: "aliqua sint",
    from: "Michigan",
    college: "UM",
    lat: 41.907026,
    lng: -77.571907
},
{
    id: 12,
    name: "Leona Keith",
    age: 76,
    followers: 55,
    occupation: "commodo qui",
    from: "Michigan",
    college: "MSU",
    lat: 34.850248,
    lng: -81.706418
},
{
    id: 13,
    name: "Brianna Gilbert",
    age: 44,
    followers: 21,
    occupation: "in in",
    from: "National",
    college: "FSU",
    lat: 38.986633,
    lng: -77.58432
},
{
    id: 14,
    name: "Roxanne Finch",
    age: 46,
    followers: 69,
    occupation: "exercitation sit",
    from: "Michigan",
    college: "CMU",
    lat: 39.392528,
    lng: -79.900012
},
{
    id: 15,
    name: "Obrien Soto",
    age: 44,
    followers: 67,
    occupation: "esse sint",
    from: "National",
    college: "UM",
    lat: 39.653625,
    lng: -118.912713
},
{
    id: 16,
    name: "Erma Hopper",
    age: 45,
    followers: 33,
    occupation: "sint velit",
    from: "Michigan",
    college: "FSU",
    lat: 42.112884,
    lng: -91.958919
},
{
    id: 17,
    name: "England Pope",
    age: 39,
    followers: 40,
    occupation: "officia anim",
    from: "Michigan",
    college: "MTU",
    lat: 41.685131,
    lng: -111.740279
},
{
    id: 18,
    name: "Booth Cotton",
    age: 85,
    followers: 75,
    occupation: "et aliquip",
    from: "National",
    college: "MSU",
    lat: 37.622846,
    lng: -86.781389
},
{
    id: 19,
    name: "Alejandra Burnett",
    age: 40,
    followers: 77,
    occupation: "id nostrud",
    from: "Michigan",
    college: "FSU",
    lat: 33.349217,
    lng: -83.404649
},
{
    id: 20,
    name: "Mack Patrick",
    age: 34,
    followers: 34,
    occupation: "sint non",
    from: "National",
    college: "MTU",
    lat: 39.343341,
    lng: -78.541177
},
{
    id: 21,
    name: "Lee David",
    age: 60,
    followers: 69,
    occupation: "voluptate duis",
    from: "Michigan",
    college: "UM",
    lat: 34.788327,
    lng: -81.066577
},
{
    id: 22,
    name: "Mallory Acevedo",
    age: 31,
    followers: 47,
    occupation: "eu pariatur",
    from: "National",
    college: "MTU",
    lat: 35.167321,
    lng: -115.169422
},
{
    id: 23,
    name: "Klein Beard",
    age: 83,
    followers: 20,
    occupation: "duis voluptate",
    from: "National",
    college: "UM",
    lat: 36.303051,
    lng: -87.086745
},
{
    id: 24,
    name: "Erickson Bryan",
    age: 47,
    followers: 16,
    occupation: "ipsum ex",
    from: "Michigan",
    college: "CMU",
    lat: 40.498517,
    lng: -102.575022
},
{
    id: 25,
    name: "Charity Vaughan",
    age: 69,
    followers: 27,
    occupation: "dolore incididunt",
    from: "Michigan",
    college: "FSU",
    lat: 35.905567,
    lng: -84.885839
},
{
    id: 26,
    name: "Holden Rowland",
    age: 67,
    followers: 53,
    occupation: "aliqua voluptate",
    from: "National",
    college: "UM",
    lat: 43.638299,
    lng: -93.387752
},
{
    id: 27,
    name: "Miller Roach",
    age: 31,
    followers: 34,
    occupation: "dolore anim",
    from: "Michigan",
    college: "MSU",
    lat: 32.035638,
    lng: -113.605988
},
{
    id: 28,
    name: "Ellison Stephens",
    age: 35,
    followers: 28,
    occupation: "laboris quis",
    from: "National",
    college: "MSU",
    lat: 41.381184,
    lng: -87.383892
},
{
    id: 29,
    name: "Chasity Strickland",
    age: 42,
    followers: 40,
    occupation: "minim id",
    from: "Michigan",
    college: "MTU",
    lat: 32.141313,
    lng: -93.564034
},
{
    id: 30,
    name: "Holt Tanner",
    age: 40,
    followers: 56,
    occupation: "consectetur fugiat",
    from: "Michigan",
    college: "MTU",
    lat: 42.593587,
    lng: -117.906105
},
{
    id: 31,
    name: "Hutchinson Dejesus",
    age: 29,
    followers: 28,
    occupation: "Lorem occaecat",
    from: "National",
    college: "MSU",
    lat: 39.44406,
    lng: -82.69064
},
{
    id: 32,
    name: "Carmella Ferrell",
    age: 34,
    followers: 62,
    occupation: "occaecat id",
    from: "Michigan",
    college: "UM",
    lat: 42.00958,
    lng: -90.231567
},
{
    id: 33,
    name: "Hahn Grimes",
    age: 55,
    followers: 46,
    occupation: "ex commodo",
    from: "Michigan",
    college: "FSU",
    lat: 42.34232,
    lng: -79.592458
},
{
    id: 34,
    name: "Lowe Waters",
    age: 80,
    followers: 44,
    occupation: "reprehenderit laboris",
    from: "National",
    college: "MTU",
    lat: 34.932002,
    lng: -118.502849
},
{
    id: 35,
    name: "Harrell Riley",
    age: 59,
    followers: 72,
    occupation: "Lorem labore",
    from: "National",
    college: "FSU",
    lat: 39.350606,
    lng: -114.411983
},
{
    id: 36,
    name: "Pugh Dillon",
    age: 20,
    followers: 41,
    occupation: "pariatur tempor",
    from: "National",
    college: "UM",
    lat: 37.866368,
    lng: -103.48079
},
{
    id: 37,
    name: "Alana Hubbard",
    age: 61,
    followers: 79,
    occupation: "quis nisi",
    from: "Michigan",
    college: "UM",
    lat: 32.095524,
    lng: -117.575783
},
{
    id: 38,
    name: "Mia Barton",
    age: 30,
    followers: 18,
    occupation: "nostrud officia",
    from: "Michigan",
    college: "CMU",
    lat: 37.961815,
    lng: -101.265092
},
{
    id: 39,
    name: "Ernestine Lindsey",
    age: 34,
    followers: 18,
    occupation: "sit et",
    from: "National",
    college: "MTU",
    lat: 34.832379,
    lng: -90.592477
},
{
    id: 40,
    name: "Malinda Nicholson",
    age: 35,
    followers: 25,
    occupation: "proident sit",
    from: "National",
    college: "UM",
    lat: 38.483102,
    lng: -94.564797
},
{
    id: 41,
    name: "Selma Mcfarland",
    age: 54,
    followers: 40,
    occupation: "sint qui",
    from: "National",
    college: "MSU",
    lat: 38.233746,
    lng: -80.296596
},
{
    id: 42,
    name: "Christie Lopez",
    age: 57,
    followers: 22,
    occupation: "officia cillum",
    from: "National",
    college: "FSU",
    lat: 36.426758,
    lng: -86.48565
},
{
    id: 43,
    name: "Torres Alvarez",
    age: 65,
    followers: 64,
    occupation: "qui anim",
    from: "Michigan",
    college: "MSU",
    lat: 41.175339,
    lng: -98.782334
},
{
    id: 44,
    name: "Garcia Everett",
    age: 66,
    followers: 62,
    occupation: "esse laboris",
    from: "Michigan",
    college: "MTU",
    lat: 39.830745,
    lng: -87.660778
},
{
    id: 45,
    name: "Goodwin Heath",
    age: 74,
    followers: 41,
    occupation: "mollit laboris",
    from: "National",
    college: "MTU",
    lat: 38.80118,
    lng: -115.886799
},
{
    id: 46,
    name: "Patel Wong",
    age: 65,
    followers: 29,
    occupation: "dolor occaecat",
    from: "Michigan",
    college: "MTU",
    lat: 33.693607,
    lng: -101.083627
},
{
    id: 47,
    name: "Hays Castillo",
    age: 69,
    followers: 54,
    occupation: "ipsum dolore",
    from: "Michigan",
    college: "UM",
    lat: 37.483607,
    lng: -94.57343
},
{
    id: 48,
    name: "Bernadine Doyle",
    age: 68,
    followers: 19,
    occupation: "ad nisi",
    from: "National",
    college: "FSU",
    lat: 35.033456,
    lng: -79.105348
},
{
    id: 49,
    name: "Larsen Murphy",
    age: 61,
    followers: 69,
    occupation: "elit quis",
    from: "National",
    college: "MSU",
    lat: 40.829281,
    lng: -107.325249
}],
myMap = function() {
    function e(e) {
        map = new google.maps.Map(document.getElementById(e.idSelector), f),
        markerLocation = e.markerLocation,
        a()
    }
    function a(e) {
        var a = "undefined" != typeof e ? e: personData,
        t = 1;
        for (i = 0; i < a.length; i++) {
            var o = a[i];
            if ( - 1 === markerList.indexOf(o.id)) {
                var l = o.lat,
                n = o.lng,
                r = o.id,
                s = new google.maps.InfoWindow({
                    maxWidth: 400
                }),
                c = new google.maps.Marker({
                    position: new google.maps.LatLng(l, n),
                    title: o.name,
                    markerId: r,
                    icon: markerLocation,
                    map: map
                });
                markers[r] = c,
                markerList.push(o.id),
                t > 10 && (t = 1);
                var d = ['<div class="map-box"><img src="http://lorempixel.com/90/90/people/', t, '" width="90" height="90">', '<div class="iw-text"><h4 class="margin-none">', o.name, "</h4>Age: ", o.age, "<br/>Followers: ", o.followers, "<br/>College: ", o.college, "</div></div>"].join("");
                t++,
                google.maps.event.addListener(c, "click",
                function(e, a) {
                    return function() {
                        s.setContent(a),
                        s.open(map, e)
                    }
                } (c, d))
            }
        }
    }
    function t(e) {
        markers[e] && (markers[e].setMap(null), loc = markerList.indexOf(e), loc > -1 && markerList.splice(loc, 1), delete markers[e])
    }
    function o(e) {
        return r = e.shift().reduce(function(a, t) {
            return - 1 === a.indexOf(t) && e.every(function(e) {
                return - 1 !== e.indexOf(t)
            }) && a.push(t),
            a
        },
        []),
        r
    }
    function l(e) {
        return e % 1 === 0
    }
    function n(e, t) {
        var n = [];
        l(t) ? m[e] = parseInt(t) : m[e] = t;
        for (k in m) {
            if (!m.hasOwnProperty(k) && 0 === m[k]) return a(),
            !1;
            0 !== m[k] && n.push(g[k](m[k]))
        }
        0 === m[e] && n.push(personData),
        n = 1 === n.length ? n[0] : o(n),
        a(n)
    }
    function s(e, a) {
        for (var o = [], l = 0; l < personData.length; l++) {
            var n = personData[l];
            n[e] == a ? o.push(n) : t(n.id)
        }
        return o
    }
    function c(e, a) {
        for (var o = [], l = 0; l < personData.length; l++) {
            var n = personData[l];
            n[e] > a ? o.push(n) : t(n.id)
        }
        return o
    }
    function d() {
        m = {
            followers: 0,
            college: 0,
            from: 0
        }
    }
    var f = {
        zoom: 4,
        center: new google.maps.LatLng(38.810821, -95.053711),
        styles: [{
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#444444"
            }]
        },
        {
            featureType: "landscape",
            elementType: "all",
            stylers: [{
                color: "#f2f2f2"
            }]
        },
        {
            featureType: "poi",
            elementType: "all",
            stylers: [{
                visibility: "off"
            }]
        },
        {
            featureType: "road",
            elementType: "all",
            stylers: [{
                saturation: -100
            },
            {
                lightness: 45
            }]
        },
        {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{
                visibility: "simplified"
            }]
        },
        {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        },
        {
            featureType: "transit",
            elementType: "all",
            stylers: [{
                visibility: "off"
            }]
        },
        {
            featureType: "water",
            elementType: "all",
            stylers: [{
                color: "#039BE5"
            },
            {
                visibility: "on"
            }]
        }]
    };
    markers = {},
    markerList = [];
    var g, m = {
        followers: 0,
        college: 0,
        from: 0
    };
    return g = {
        followers: function(e) {
            return c("followers", e)
        },
        college: function(e) {
            return s("college", e)
        },
        from: function(e) {
            return s("from", e)
        }
    },
    {
        init: e,
        loadMarkers: a,
        filterCtrl: n,
        resetFilter: d
    }
} (); !
function(e) {
    if (e("#map-canvas").length > 0) {
        var a = {
            idSelector: "map-canvas",
            markerLocation: "images/markers/marker.png"
        };
        myMap.init(a),
        e(".load-btn").on("click",
        function() {
            var a = e(this);
            e("select").val(0),
            myMap.resetFilter(),
            myMap.loadMarkers(),
            a.hasClass("is-success") && a.removeClass("is-success").addClass("is-default")
        }),
        e(".followers-select").on("change",
        function() {
            myMap.filterCtrl("followers", this.value)
        }),
        e(".college-select").on("change",
        function() {
            myMap.filterCtrl("college", this.value)
        }),
        e(".from-select").on("change",
        function() {
            myMap.filterCtrl("from", this.value)
        })
    }
} (jQuery),
function(e) {
    e.fn.APSummernote = function() {
        this.length && "undefined" != typeof e.fn.summernote && this.summernote({
            popover: {
                image: [],
                link: [],
                air: []
            }
        })
    },
    e("#summernote").APSummernote()
} (jQuery),
function(e) {
    e.fn.APTouchSpin = function() {
        this.length && "undefined" != typeof e.fn.TouchSpin && this.TouchSpin()
    },
    e('[data-toggle="touch-spin"]').APTouchSpin()
} (jQuery);