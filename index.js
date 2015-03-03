function Calendar(month, year) {

    /**
     * Возвращает номер последнего дня в месяце
     * @param {Number} y - год
     * @param {Number} m - месяц
     * @returns {Number}
     */
    var maxDays = function (y, m) {
        return new Date(y, m + 1, 0).getDate();
    };

    // числа текущего месяца
    var main = [];
    for (var i = 1; i <= maxDays(year, month); i++) {
        var data = new Date(year, month, i);
        // заполняем числа месяца, учитывая, что день недели начинается с понедельника
        main.push({number: i, day: (data.getDay() == 0) ? 7 : data.getDay()});
    }

    var firstDay = main[0].day,
        lastDay = main[main.length - 1].day;

    // Числа предыдущего месяца
    var max = maxDays(year, month - 1),
        before = [];
    while (firstDay > 1) {
        before.unshift({number: max--, day: --firstDay});
    }

    // Числа следующего месяца
    var after = [],
        i = 1;
    while (lastDay < 7) {
        after.push({number: i++, day: ++lastDay});
    }

    return [before, main, after];
}

var newDate = new Date();
console.log(Calendar(newDate.getMonth(), newDate.getFullYear()));
