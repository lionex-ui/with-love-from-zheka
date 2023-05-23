const rangeSlider = document.getElementById('rangeSlider');

noUiSlider.create(rangeSlider, {
    start: 50000,
    connect: 'lower',
    step: 500,
    tooltips: {
        to: function (numericValue) {
            return numericValue.toFixed(0) + ' $';
        }
    },
    range: {
        'min': [50000],
        'max': [1000000]
    },
    format: formatForSlider,
    
});

var formatForSlider = {
    from: function (formattedValue) {
        return Number(formattedValue);
    },
    to: function (numericValue) {
        return Math.round(numericValue);
    }
};
