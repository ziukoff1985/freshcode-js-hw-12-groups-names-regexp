'use strict';

const arrGroups = [
    'FE2021-5',
    'Fe2020-2',
    'FD2021',
    'fD2022-1',
    'FE2020-3',
    'FD2020/2',
    'fe2021-3',
    'FD2020$5',
    'FE2008-52',
    'Fm2008-23',
    'FM2022-1',
];

const regExp = /^(FD|FM|FE|fd|fm|fe)20\d{2}(-\d+)?$/;

function checkGroupsNames(array, regexp) {
    array.forEach((group) => {
        if (!regexp.test(group)) {
            console.log(`Error ${group}`);
            return;
        }
        console.log(`Success: ${group}`);
    });
}

checkGroupsNames(arrGroups, regExp);
