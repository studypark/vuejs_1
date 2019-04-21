(function(Vue) {
    var WS = function(key, pkname, autoinc) {        
        autoinc = autoinc || false; // 키값 자동 증가 여부

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

        function getPkName() {            
            return pkname;
        }

        function getAutoinc() {
            return autoinc;
        }

        return {
            findOne: function(id) {
                return getItem().find(function(e) {
                    var pk = getPkName();
                    if (pk == null) pk = 'id';
                    return e[pk] == id;
                });
            },
            findAll: function() {
                return getItem();
            },
            create: function(obj) {
                list = getItem()
                
                if (getAutoinc()) { // 자동 증가일 경우
                    var pk = getPkName();
                    if (pk == null) {
                        obj.id = genId();
                    } else {
                        obj[pk] = genId();
                    }
                }

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

    var memberService = new WS('member', 'userId');
    var memuService = new WS('menu', 'menuNo', true);
    var memoService = new WS('memo', 'memoNo', true);
    Vue.prototype.memberService = memberService;
    Vue.prototype.memuService = memuService;
    Vue.prototype.memoService = memoService;
})(Vue)