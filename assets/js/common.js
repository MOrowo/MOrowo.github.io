var boon = function () {
    let me = this
    let uu = {
        string: function (a) {
            return (typeof a == "string")
        },
        stringNull: function (a) {
            return !(typeof a == "string" && a != "")
        },
        function: function (a) {
            return (typeof a == "function")
        },
        boolean: function (a) {
            return (typeof a == "boolean")
        },
        object: function (a) {
            return (typeof a == "object")
        },
        undefined: function (a) {
            return (a == undefined || a == null)
        },
        number: function (a) {
            return (typeof a == "number")
        }
    }
    let add = function (a, b, c) {
        a.addEventListener(b, function (e) {
            c(e, a)
        })
    }
    this.add = function (a, b, c) {
        a.addEventListener(b, function (e) {
            c(e, a)
        })
    }
    let remove = function (a, b, c) {
        a.removeEventListener(b, function (e) {
            c(e)
        })
    }
    let get = function (a, b) {
        return a.querySelectorAll(b)
    }
    this.switchs = function (a) {
        this.main = a
        this.value = []
        let m = this
        this.add = function (a, b, c = false) {
            if (!uu.undefined(a) && uu.function(b) && uu.boolean(c)) {
                m.value.push({
                    key: a,
                    run: b,
                    break: c
                })
            }
        }
        this.run = function () {
            for (let i = 0; i < this.value.length; i++) {
                const e = this.value[i];
                if (e.key == m.main) {
                    e.run()
                    if (e.break == true) break
                }
            }
        }
    }
    this.forMe = function (a, b) {
        for (let i = 0; i < a.length; i++) {
            const e = a[i];
            b(e, i)
        }
    }
    this.get = function (a, b) {
        return a.querySelectorAll(b)
    }
    this.attr = function (a, b) {
        return a.getAttribute(b)
    }
    this.create = {
        event: function (a, b, c) {
            return {
                type: "event",
                name: a,
                event: b,
                run: c
            }
        },
        listener: function (a, b, c) {
            return {
                type: "listener",
                name: a,
                event: b,
                run: c
            }
        },
        window: function (a, b) {
            return {
                type: "window",
                event: a,
                run: b
            }
        },
        data:function(a,b,c){
            return {
                type: "data",
                name: a,
                event: b,
                run: c
            }
        },
        handler: {
            class: function (a) {
                let m = this
                this.element = (a != undefined && a.classList != undefined) ? a : null
                this.add = function (a) {
                    if (m.element.classList != null) {
                        m.element.classList.add(a)
                    }
                }
                this.remove = function (a) {
                    if (m.element.classList != null) {
                        m.element.classList.remove(a)
                    }
                }
                this.toggle = function (a) {
                    if (m.element.classList != null) {
                        m.element.classList.toggle(a)
                    }
                }
                this.has = function (a) {
                    if (m.element.classList != null) {
                        return m.element.classList.contains(a)
                    }
                }
            },
            http: function (a) {
                let m = this
                this.url = a
                this.get = function (callback) {
                    try {
                        let c = (window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
                        c.onreadystatechange = function () {
                            if (c.readyState == 4 && c.status == 200) {
                                callback(c.responseText);
                            }
                        }
                        c.onerror = function () {
                            callback("ERROR")
                        }
                        c.open("GET", m.url, true);
                        c.send();
                    } catch (error) {}
                }
            }
        }
    }
    this.arr = function () {
        let m = this
        this.value = {}
        this.add = function (a, b) {
            if (!uu.stringNull(a)) {
                m.value[a] = b
            } else {
                if (uu.stringNull(a)) console.error("error key name undefined")
            }
        }
    }
    this.task = function () {
        this.value = []
        let m = this.value
        this.new = function (a) {
            let c = new me.arr();
            c.add("type", "task")
            c.add("run", a)
            return c
        }
        this.add = function () {
            me.forMe(arguments, function (a) {
                m.push(a)
            })
        }
        this.run = function () {
            me.forMe(m, function (a) {
                if (a.value != undefined) {
                    if (a.value.type == "task") {
                        if (uu.function(a.value.run)) {
                            a.value.run()
                        }
                    }
                }
            })
        }
    }
    this.events = function () {
        this.value = []
        let m = this.value
        this.add = function () {
            me.forMe(arguments, function (a) {
                m.push(a)
            })
        }
        this.run = function () {
            me.forMe(m, function (a) {
                let x = new me.switchs(a.type)
                x.add("event", function () {
                    me.forMe(get(document, '[event="' + a.name + '"]'), function (b) {
                        add(b, a.event, a.run)
                    })
                }, true)
                x.add("listener", function () {
                    me.forMe(get(document, a.name), function (b) {
                        add(b, a.event, a.run)
                    })
                }, true)
                x.add("window", function () {
                    add(window, a.event, a.run)
                }, true)
                x.add("data",function(){
                    me.forMe(get(document, '[data-'+ a.name + ']'), function (b) {
                        add(b, a.event, a.run)
                    })
                },true)
                x.run()
            })
        }
        this.reALL = function () {
            me.forMe(m, function (a) {
                let x = new me.switchs(a.type)
                x.add("event", function () {
                    me.forMe(get(document, '[event="' + a.name + '"]'), function (b) {
                        remove(b, a.event, a.run)
                        add(b, a.event, a.run)
                    })
                }, true)
                x.add("listener", function () {
                    me.forMe(get(document, a.name), function (b) {
                        remove(b, a.event, a.run)
                        add(b, a.event, a.run)
                    })
                }, true)
                x.add("window", function () {
                    remove(window, a.event, a.run)
                    add(window, a.event, a.run)
                }, true)
                x.add("data",function(){
                    me.forMe(get(document, '[data-'+ a.name + ']'), function (b) {
                        remove(b, a.event, a.run)
                        add(b, a.event, a.run)
                    })
                },true)
                x.run()
            })
        }
    }
    this.tick = function (a) {
        setInterval(() => {
            a()
        }, 1);
    }
    this.st = function (a, b) {
        setTimeout(function () {
            a()
        }, b * 1000)
    }
}
var ra = function (a) {
    let b = Math.random()
    if (typeof a == "number") {
        b *= a
    }
    return b
}
var re = function (a) {
    return a.reverse()
}
var fa = function (a) {
    return Math.floor(a)
}
var ta = function (a) {
    return "." + a
}
var sa = function (a) {
    a[0].setAttribute(a[1], a[2])
}
Object.prototype.a = function () {
    return this.length
}
Object.prototype.c = function () {
    return this.children
}
Object.prototype.l = function (a) {
    return this[a]
}
Object.prototype.z = function () {
    return this[0]
}
Object.prototype.s = function (a, b) {
    this[a] = b
}
String.prototype.f = function () {
    var a = arguments
    var c = this
    for (var b = 0; b < a.a(); b++) {
        c = c.replace("{" + b + "}", a.l(b))
    }
    return c
}
String.prototype.j = function () {
    return JSON.parse(this)
}
Object.prototype.shake = function (a, b, c, d, e) {
    if (this === undefined || this.is_shake == true) return
    if (e === undefined) e = 85
    this.shaking = setInterval(() => {
        x = fa(ra(a + 0.3))
        y = fa(ra(b + 0.3))
        z = fa(ra(c + 0.3))
        if (ra() > 0.5) x = x * -1
        if (ra() > 0.5) y = y * -1
        if (ra() > 0.5) z = z * -1
        this.style.transform = "translate({0}px, {1}px) rotate({2}deg)".f(x, y, z)
        if (d != undefined && d != false) {
            d = d - 1
            if (d <= 0) {
                clearInterval(this.shaking);
                this.style.transform = "";
                this.is_shake = false
            }
        }
    }, e);
    this.is_shake = true
}
Object.prototype.stop = function () {
    if (this === undefined) return
    if (this.is_shake == true) this.is_shake = false
    this.style.transform = ""
    clearInterval(this.shaking)
}
var tem = function (data) {
    this.data = data
}
tem.prototype.place = function () {
    for (let i = 0; i < arguments.length; i++) {
        const e = arguments[i];
        this.data = this.data.replace("{" + i + "}", e)
    }
}
let k = new boon()