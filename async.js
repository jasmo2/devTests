/**
 * LLH Interview Question:

 * Implement a function that takes the following array,
 * sorts it into descending order by the 'order' property,
 * and then executes each 'action'.

 * Every action must complete before the next action can be run.
 *
 */

const action = function (obj) {
    console.log("Started at: " + new Date());
    setTimeout(function () {
        console.log("Finished at: " + new Date());
        obj.done();
    }, Math.floor(Math.random() * 1000) + 1);
};

const array = [
    {
        order: 5,
        action: action
    },
    {
        order: 4,
        action: action
    },
    {
        order: 1,
        action: action
    },
    {
        order: 2,
        action: action
    },
    {
        order: 2,
        action: action
    },
    {
        order: 0,
        action: action
    },
    {
        order: 3,
        action: action
    },
    {
        order: 5,
        action: action
    }
];

// Code goes here:
function compare(a, b) {
    if (a.order < b.order) {
        return 1;
    } else if (a.order > b.order) {
        return -1;
    } else {
        return 0;
    }
}

function setPromise(el) {
    return new Promise((resolve, reject) => {
        el.action({ done: resolve });
    });
}

function elValidation(nextEl, el) {
    return nextEl && (el.order === nextEl.order)
}
async function desendingAsync(arr) {
    const sortedArr = arr.sort(compare)
    for (let i = 0; i < sortedArr.length; i++) {
        const el = sortedArr[i];
        console.log("started order:", el.order);
        const requests = [setPromise(el)];
        let nextEl = sortedArr[i + 1];
        if (elValidation(nextEl, el)) i++;

        while (elValidation(nextEl, el)) {
            requests.push(setPromise(nextEl));
            nextEl = sortedArr[i + 1]
            if (elValidation(nextEl, el)) i++;
        }

        await Promise.all(requests);
        console.log("finished order", el.order);
        console.log("-------");

    }
}

desendingAsync(array);
/**
 * Bonus:
 * Order is non-unique, and every action with the same order can be run in parallel.
 * All actions with the same order must complete before actions with the next order can run.
 */


