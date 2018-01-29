// Strict mode in self-executing function
(function () {
    'use strict';
    // lunch = 'Pasta Carbonara';  // Throws an error, as lunch is global
})();

(function () {
    'use strict';
    var lunch = 'Pasta Carbonara';
})();

// Strict mode in block
{
    'use strict';
    const lunch = 'Pasta Carbonara';
    // lunch = 'Pizza Funghi';  // Throws an error, as constants cannot be redeclared
}