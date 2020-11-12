(this["webpackJsonpheroes-app"] = this["webpackJsonpheroes-app"] || []).push([
    [0], {
        46: function(e, r, a) {
            "use strict";
            a.r(r);
            var t = a(0),
                c = a(1),
                s = a(21),
                n = a.n(s),
                i = a(10),
                l = Object(c.createContext)(),
                o = a(4),
                h = "[auth] login",
                j = "[auth] logout",
                u = function() {
                    var e = arguments.length > 1 ? arguments[1] : void 0;
                    switch (e.type) {
                        case h:
                            return Object(o.a)(Object(o.a)({}, e.payload), {}, { logged: !0 });
                        case j:
                            return { logged: !1 }
                    }
                },
                d = a(5),
                b = a(2),
                m = [{ id: "dc-batman", superhero: "Batman", publisher: "DC Comics", alter_ego: "Bruce Wayne", first_appearance: "Detective Comics #27", characters: "Bruce Wayne" }, { id: "dc-superman", superhero: "Superman", publisher: "DC Comics", alter_ego: "Kal-El", first_appearance: "Action Comics #1", characters: "Kal-El" }, { id: "dc-flash", superhero: "Flash", publisher: "DC Comics", alter_ego: "Jay Garrick", first_appearance: "Flash Comics #1", characters: "Jay Garrick, Barry Allen, Wally West, Bart Allen" }, { id: "dc-green", superhero: "Green Lantern", publisher: "DC Comics", alter_ego: "Alan Scott", first_appearance: "All-American Comics #16", characters: "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz" }, { id: "dc-arrow", superhero: "Green Arrow", publisher: "DC Comics", alter_ego: "Oliver Queen", first_appearance: "More Fun Comics #73", characters: "Oliver Queen" }, { id: "dc-wonder", superhero: "Wonder Woman", publisher: "DC Comics", alter_ego: "Princess Diana", first_appearance: "All Star Comics #8", characters: "Princess Diana" }, { id: "dc-martian", superhero: "Martian Manhunter", publisher: "DC Comics", alter_ego: "J'onn J'onzz", first_appearance: "Detective Comics #225", characters: "Martian Manhunter" }, { id: "dc-robin", superhero: "Robin/Nightwing", publisher: "DC Comics", alter_ego: "Dick Grayson", first_appearance: "Detective Comics #38", characters: "Dick Grayson" }, { id: "dc-blue", superhero: "Blue Beetle", publisher: "DC Comics", alter_ego: "Dan Garret", first_appearance: "Mystery Men Comics #1", characters: "Dan Garret, Ted Kord, Jaime Reyes" }, { id: "dc-black", superhero: "Black Canary", publisher: "DC Comics", alter_ego: "Dinah Drake", first_appearance: "Flash Comics #86", characters: "Dinah Drake, Dinah Lance" }, { id: "marvel-spider", superhero: "Spider Man", publisher: "Marvel Comics", alter_ego: "Peter Parker", first_appearance: "Amazing Fantasy #15", characters: "Peter Parker" }, { id: "marvel-captain", superhero: "Captain America", publisher: "Marvel Comics", alter_ego: "Steve Rogers", first_appearance: "Captain America Comics #1", characters: "Steve Rogers" }, { id: "marvel-iron", superhero: "Iron Man", publisher: "Marvel Comics", alter_ego: "Tony Stark", first_appearance: "Tales of Suspense #39", characters: "Tony Stark" }, { id: "marvel-thor", superhero: "Thor", publisher: "Marvel Comics", alter_ego: "Thor Odinson", first_appearance: "Journey into Myster #83", characters: "Thor Odinson" }, { id: "marvel-hulk", superhero: "Hulk", publisher: "Marvel Comics", alter_ego: "Bruce Banner", first_appearance: "The Incredible Hulk #1", characters: "Bruce Banner" }, { id: "marvel-wolverine", superhero: "Wolverine", publisher: "Marvel Comics", alter_ego: "James Howlett", first_appearance: "The Incredible Hulk #180", characters: "James Howlett" }, { id: "marvel-daredevil", superhero: "Daredevil", publisher: "Marvel Comics", alter_ego: "Matthew Michael Murdock", first_appearance: "Daredevil #1", characters: "Matthew Michael Murdock" }, { id: "marvel-hawkeye", superhero: "Hawkeye", publisher: "Marvel Comics", alter_ego: "Clinton Francis Barton", first_appearance: "Tales of Suspense #57", characters: "Clinton Francis Barton" }, { id: "marvel-cyclops", superhero: "Cyclops", publisher: "Marvel Comics", alter_ego: "Scott Summers", first_appearance: "X-Men #1", characters: "Scott Summers" }, { id: "marvel-silver", superhero: "Silver Surfer", publisher: "Marvel Comics", alter_ego: "Norrin Radd", first_appearance: "The Fantastic Four #48", characters: "Norrin Radd" }],
                p = function(e) {
                    var r = e.id,
                        a = e.superhero,
                        c = (e.publisher, e.alter_ego),
                        s = e.first_appearance,
                        n = e.characters;
                    return Object(t.jsx)("div", { className: "card ms-3", style: { maxWidth: 540 }, children: Object(t.jsxs)("div", { className: "row no-gutters", children: [Object(t.jsx)("div", { className: "col-md-4", children: Object(t.jsx)("img", { src: "../assets/heroes/".concat(r, ".jpg"), className: "card-img", alt: a }) }), Object(t.jsx)("div", { className: "col-md-8", children: Object(t.jsxs)("div", { className: "card-body", children: [Object(t.jsx)("h5", { className: "card-title", children: a }), c !== n ? Object(t.jsx)("p", { className: "card-text", children: n }) : Object(t.jsx)("p", { className: "card-text", children: c }), Object(t.jsx)("p", { className: "card-text", children: Object(t.jsx)("small", { className: "text-muted", children: s }) }), Object(t.jsx)(d.b, { to: "./heroe/".concat(r), children: "M\xe1s..." })] }) })] }) })
                },
                O = function(e) {
                    var r = e.publisher,
                        a = Object(c.useMemo)((function() { return function(e) { if (!["DC Comics", "Marvel Comics"].includes(e)) throw new Error('Publisher "'.concat(e, '" no es correcto')); return m.filter((function(r) { return r.publisher === e })) }(r) }), [r]);
                    return Object(t.jsx)("div", { className: "card-columns animate__animated animate__fadeIn", children: a.map((function(e) { return Object(t.jsx)(p, Object(o.a)({}, e), e.id) })) })
                },
                v = function() { return Object(t.jsxs)("div", { children: [Object(t.jsx)("h1", { children: "DC Screen" }), Object(t.jsx)("hr", {}), Object(t.jsx)(O, { publisher: "DC Comics" })] }) },
                x = function(e) {
                    var r = e.history,
                        a = Object(b.i)().heroeId,
                        s = Object(c.useMemo)((function() { return e = a, m.find((function(r) { return r.id === e })); var e }), [a]);
                    if (!s) return Object(t.jsx)(b.a, { to: "/" });
                    var n = s.superhero,
                        i = s.publisher,
                        l = s.alter_ego,
                        o = s.first_appearance,
                        h = s.characters;
                    return Object(t.jsxs)("div", { className: "row mt-5", children: [Object(t.jsx)("div", { className: "col-4", children: Object(t.jsx)("img", { src: "../assets/heroes/".concat(a, ".jpg"), className: "img-thumbnail animate__animated animate__fadeInLeft", alt: n }) }), Object(t.jsxs)("div", { className: "col-8", children: [Object(t.jsx)("h3", { children: n }), Object(t.jsxs)("ul", { className: "list-group list-group-flush", children: [Object(t.jsxs)("li", { className: "list-group-item", children: [Object(t.jsx)("b", { children: " Alter ego : " }), l] }), Object(t.jsxs)("li", { className: "list-group-item", children: [Object(t.jsx)("b", { children: " Publisher : " }), i] }), Object(t.jsxs)("li", { className: "list-group-item", children: [Object(t.jsx)("b", { children: " First appearance : " }), o] })] }), Object(t.jsx)("h5", { children: "Characters " }), Object(t.jsx)("p", { children: h }), Object(t.jsx)("button", { className: "btn btn-outline-info", onClick: function() { r.length <= 2 ? r.push("/") : r.goBack() }, children: "Return" })] })] })
                },
                f = function() { return Object(t.jsxs)("div", { children: [Object(t.jsx)("h1", { children: "Marvel Screen" }), Object(t.jsx)("hr", {}), Object(t.jsx)(O, { publisher: "Marvel Comics" })] }) },
                g = a(23),
                C = a.n(g),
                _ = a(12),
                N = function(e) {
                    var r = e.history,
                        a = Object(b.h)(),
                        s = C.a.parse(a.search).q,
                        n = void 0 === s ? "" : s,
                        l = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = Object(c.useState)(e),
                                a = Object(i.a)(r, 2),
                                t = a[0],
                                s = a[1];
                            return [t, function(e) {
                                var r = e.target;
                                s(Object(o.a)(Object(o.a)({}, t), {}, Object(_.a)({}, r.name, r.value)))
                            }, function() { s(e) }]
                        }({ searchText: n }),
                        h = Object(i.a)(l, 2),
                        j = h[0],
                        u = h[1],
                        d = j.searchText,
                        O = Object(c.useMemo)((function() { return function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return "" === e ? [] : (e = e.toLocaleLowerCase(), m.filter((function(r) { return r.superhero.toLocaleLowerCase().includes(e) }))) }(n) }), [n]);
                    return Object(t.jsxs)("div", { children: [Object(t.jsx)("h1", { children: "Search" }), Object(t.jsx)("hr", {}), Object(t.jsxs)("div", { className: "row", children: [Object(t.jsxs)("div", { className: "col-5", children: [Object(t.jsx)("h4", { children: "Search form" }), Object(t.jsx)("hr", {}), Object(t.jsxs)("form", { onSubmit: function(e) { e.preventDefault(), r.push("?q=".concat(d)) }, children: [Object(t.jsx)("input", { type: "text", placeholder: "Find your hero", className: "form-control", name: "searchText", autoComplete: "off", value: d, onChange: u }), Object(t.jsx)("button", { type: "submit", className: "btn m-1 btn-block btn-outline-primary", children: "Search..." })] })] }), Object(t.jsxs)("div", { className: "col-7", children: [Object(t.jsx)("h4", { children: "Results" }), Object(t.jsx)("hr", {}), "" === n && Object(t.jsx)("div", { className: "alert alert-info", children: "Search a hero" }), "" === n && 0 === O.length && Object(t.jsxs)("div", { className: "alert alert-error", children: ["There is no a hero with ", n] }), O.map((function(e) { return Object(t.jsx)(p, Object(o.a)({}, e), e.id) }))] })] })] })
                },
                y = function() {
                    var e = Object(c.useContext)(l),
                        r = e.user.name,
                        a = e.dispatch,
                        s = Object(b.g)();
                    return Object(t.jsxs)("nav", { className: "navbar navbar-expand-sm navbar-dark bg-dark", children: [Object(t.jsx)(d.b, { className: "navbar-brand", to: "/", children: "Asociaciones" }), Object(t.jsx)("div", { className: "navbar-collapse", children: Object(t.jsxs)("div", { className: "navbar-nav", children: [Object(t.jsx)(d.c, { activeClassName: "active", className: "nav-item nav-link", exact: !0, to: "/marvel", children: "Marvel" }), Object(t.jsx)(d.c, { activeClassName: "active", className: "nav-item nav-link", exact: !0, to: "/dc", children: "DC" }), Object(t.jsx)(d.c, { activeClassName: "active", className: "nav-item nav-link", exact: !0, to: "/search", children: "Search" })] }) }), Object(t.jsx)("div", { className: "navbar-collapse collapse w-100 order-3 dual-collapse2", children: Object(t.jsxs)("ul", { className: "navbar-nav ml-auto", children: [Object(t.jsx)("span", { className: "nav-item nav-link text-info", children: r }), Object(t.jsx)("button", { className: "nav-item nav-link btn", onClick: function() { a({ type: j }), s.replace("/login") }, children: "Logout" })] }) })] })
                },
                M = function() { return Object(t.jsxs)(t.Fragment, { children: [Object(t.jsx)(y, {}), Object(t.jsx)("div", { className: "container mt-2", children: Object(t.jsxs)(b.d, { children: [Object(t.jsx)(b.b, { exact: !0, path: "/marvel", component: f }), Object(t.jsx)(b.b, { exact: !0, path: "/heroe/:heroeId", component: x }), Object(t.jsx)(b.b, { exact: !0, path: "/dc", component: v }), Object(t.jsx)(b.b, { exact: !0, path: "/search", component: N }), Object(t.jsx)(b.a, { to: "/marvel" })] }) })] }) },
                S = a(13),
                k = function(e) {
                    var r = e.isAuthenticated,
                        a = e.component,
                        c = Object(S.a)(e, ["isAuthenticated", "component"]);
                    return localStorage.setItem("lastPath", c.location.pathname), Object(t.jsx)(b.b, Object(o.a)(Object(o.a)({}, c), {}, { component: function(e) { return r ? Object(t.jsx)(a, Object(o.a)({}, e)) : Object(t.jsx)(b.a, { to: "/login" }) } }))
                },
                D = function(e) {
                    var r = e.history,
                        a = Object(c.useContext)(l).dispatch;
                    return Object(t.jsxs)("div", {
                        className: "container mt-5",
                        children: [Object(t.jsx)("h1", { children: "Login" }), Object(t.jsx)("hr", {}), Object(t.jsx)("button", {
                            className: "btn btn-primary",
                            onClick: function() {
                                var e = localStorage.getItem("lastPath") || "/";
                                a({ type: h, payload: { name: "Fernando" } }), r.replace(e)
                            },
                            children: "Entrar"
                        })]
                    })
                },
                w = function(e) {
                    var r = e.isAuthenticated,
                        a = e.component,
                        c = Object(S.a)(e, ["isAuthenticated", "component"]);
                    return Object(t.jsx)(b.b, Object(o.a)(Object(o.a)({}, c), {}, { component: function(e) { return r ? Object(t.jsx)(b.a, { to: "/" }) : Object(t.jsx)(a, Object(o.a)({}, e)) } }))
                },
                A = function() { var e = Object(c.useContext)(l).user; return Object(t.jsx)(d.a, { children: Object(t.jsx)("div", { children: Object(t.jsxs)(b.d, { children: [Object(t.jsx)(w, { exact: !0, path: "/login", component: D, isAuthenticated: e.logged }), Object(t.jsx)(k, { path: "/", component: M, isAuthenticated: e.logged })] }) }) }) },
                B = function() { return JSON.parse(localStorage.getItem("user")) || { logged: !1 } },
                J = function() {
                    var e = Object(c.useReducer)(u, {}, B),
                        r = Object(i.a)(e, 2),
                        a = r[0],
                        s = r[1];
                    return Object(c.useEffect)((function() { localStorage.setItem("user", JSON.stringify(a)) }), [a]), Object(t.jsx)(l.Provider, { value: { user: a, dispatch: s }, children: Object(t.jsx)(A, {}) })
                };
            n.a.render(Object(t.jsx)(J, {}), document.getElementById("root"))
        }
    },
    [
        [46, 1, 2]
    ]
]);
//# sourceMappingURL=main.2b9c8281.chunk.js.map