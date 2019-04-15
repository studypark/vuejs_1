(function(Vue) {
    var WS = function(key) {
        function setItem(list) {
            localStorage.setItem(key, JSON.stringify(list));
        }

        function getItem() {
            var list = localStorage.getItem(key) || '[]';
            return JSON.parse(list)
        }

        function genId() {
            var id = localStorage.getItem(key+'_id') || 0;
            localStorage.setItem(key+'_id', ++id);
            return id;
        }

        return {
            findOne: function(id) {
                return getItem().filter(function(e) {
                    e.id = id
                });
            },
            findAll: function() {
                return getItem();
            },
            create: function(obj) {
                list = getItem()
                obj.id = genId();
                list.push(obj);
                setItem(list)
                return obj;
            },
            update: function(id, obj) {
                var list = localStorage.getItem() || '[]';
                list = JSON.parse(list)
                list.push(obj);
                localStorage.setItem(list);
            }
        }
    }

    var memberService = new WS('member');
    var memuService = new WS('menu');
    var memoService = new WS('memo');
    Vue.prototype.memberService = memberService;
    Vue.prototype.memuService = memuService;
    Vue.prototype.memoService = memoService;
})(Vue)