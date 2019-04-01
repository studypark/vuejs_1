function getQueryString() {
    var href = window.location.href;
    var queryString = href.substring(href.indexOf('?')>=0?href.indexOf('?')+1 : 0);
    return queryString || '';
}

function getParameter(name) {
    if (name == null || name === '') return null;
    var queryStr = getQueryString();

    var nameequal = name+'=';
    var idx = queryStr.indexOf(nameequal);
    if (idx < 0) return null;

    var str1 = queryStr.substring(idx+nameequal.length);
    var arr1 = str1.split('&');
    return arr1[0];
}