(function (d, D, v) {
    d.fn.responsiveSlides = function (h) {
        var b = d.extend({
            auto: !0,
            speed: 1E3,
            timeout: 7E3,
            pager: !1,
            nav: !1,
            random: !1,
            pause: !1,
            pauseControls: !1,
            prevText: "Previous",
            nextText: "Next",
            maxwidth: "",
            controls: "",
            namespace: "rslides",
            before: function () {},
            after: function () {}
        }, h);
        return this.each(function () {
            v++;
            var e = d(this),
                n, p, i, k, l, m = 0,
                f = e.children(),
                w = f.size(),
                q = parseFloat(b.speed),
                x = parseFloat(b.timeout),
                r = parseFloat(b.maxwidth),
                c = b.namespace,
                g = c + v,
                y = c + "_nav " + g + "_nav",
                s = c + "_here",
                j = g + "_on",
                z = g + "_s",
                o = d("<ul class='" + c + "_tabs " + g + "_tabs' />"),
                A = {
                    "float": "left",
                    position: "relative"
                },
                E = {
                    "float": "none",
                    position: "absolute"
                },
                t = function (a) {
                    b.before();
                    f.stop().fadeOut(q, function () {
                        d(this).removeClass(j).css(E)
                    }).eq(a).fadeIn(q, function () {
                        d(this).addClass(j).css(A);
                        b.after();
                        m = a
                    })
                };
            b.random && (f.sort(function () {
                return Math.round(Math.random()) - 0.5
            }), e.empty().append(f));
            f.each(function (a) {
                this.id = z + a
            });
            e.addClass(c + " " + g);
            h && h.maxwidth && e.css("max-width", r);
            f.hide().eq(0).addClass(j).css(A).show();
            if (1 <
                f.size()) {
                if (x < q + 100) return;
                if (b.pager) {
                    var u = [];
                    f.each(function (a) {
                        a = a + 1;
                        u = u + ("<li><a href='#' class='" + z + a + "'>" + a + "</a></li>")
                    });
                    o.append(u);
                    l = o.find("a");
                    h.controls ? d(b.controls).append(o) : e.after(o);
                    n = function (a) {
                        l.closest("li").removeClass(s).eq(a).addClass(s)
                    }
                }
                b.auto && (p = function () {
                    k = setInterval(function () {
                        var a = m + 1 < w ? m + 1 : 0;
                        b.pager && n(a);
                        t(a)
                    }, x)
                }, p());
                i = function () {
                    if (b.auto) {
                        clearInterval(k);
                        p()
                    }
                };
                b.pause && e.hover(function () {
                    clearInterval(k)
                }, function () {
                    i()
                });
                b.pager && (l.bind("click", function (a) {
                    a.preventDefault();
                    b.pauseControls || i();
                    a = l.index(this);
                    if (!(m === a || d("." + j + ":animated").length)) {
                        n(a);
                        t(a)
                    }
                }).eq(0).closest("li").addClass(s), b.pauseControls && l.hover(function () {
                    clearInterval(k)
                }, function () {
                    i()
                }));
                if (b.nav) {
                    c = "<a href='javascript:' class='" + y + " prev'>" + b.prevText + "</a><a href='javascript:' class='" + y + " next'>" + b.nextText + "</a>";
                    h.controls ? d(b.controls).append(c) : e.after(c);
                    var c = d("." + g + "_nav"),
                        B = d("." + g + "_nav.prev");
                    c.bind("click", function (a) {
                        a.preventDefault();
                        if (!d("." + j + ":animated").length) {
                            var c = f.index(d("." + j)),
                                a = c - 1,
                                c = c + 1 < w ? m + 1 : 0;
                            t(d(this)[0] === B[0] ? a : c);
                            b.pager && n(d(this)[0] === B[0] ? a : c);
                            b.pauseControls || i()
                        }
                    });
                    b.pauseControls && c.hover(function () {
                        clearInterval(k)
                    }, function () {
                        i()
                    })
                }
            }
            if ("undefined" === typeof document.body.style.maxWidth && h.maxwidth) {
                var C = function () {
                    e.css("width", "100%");
                    e.width() > r && e.css("width", r)
                };
                C();
                d(D).bind("resize", function () {
                    C()
                })
            }
        })
    }
})(jQuery, this, 0);
$(function () {
    $(".f426x240").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 300,
    });
    $(".f160x160").responsiveSlides({
        auto: true,
        pager: true,
        speed: 700,
    });
});