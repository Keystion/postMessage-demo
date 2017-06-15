function getQuery(name) {
    var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1)
        return undefined;
    return decodeURIComponent(result[1]);
}