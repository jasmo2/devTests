
const censusMembers = Object.freeze([
	{
		id: 1,
		name: 'Bob'
	}, {
		id: 2,
		name: 'Sue'
	}, {
		id: 3,
		name: 'Mary',
		household_id: 2
	}, {
		id: 4,
		name: 'Elizabeth',
		household_id: 6
	}, {
		id: 5,
		name: 'Tom'
	}, {
		id: 6,
		name: 'Jill'
	}, {
		id: 7,
		name: 'John',
		household_id: 6
	}
]);

/*
* In the insurance industry a household contains a employee and whatever children and spouses are supported by that employee's insurance
* Within our system we store dependents in the same table as employees. A dependent can be determined by the presence of a household_id.
* The household_id is a reference to the ID of the employee that that member is a depended of (ex in the censusMembers list 'Mary' is
* a dependent of 'Sue')
*
*
* For this first problem build a function that counts the number of employees in an array and returns the result
*/
function countEmployees(memberArray) {

}

// Unit test to pass
assertEqual(countEmployees(censusMembers), 4);

/*
* Build a similar function for counting the number of dependents in an array. And please write a unit test for count dependents
*/
function countDependents(memberArray) {

}

// Unit test to pass. Please build a unit test here
assertEqual();

/*
* Now build a function that returns a new array with dependents mapped onto member. For example since mary is a dependent of Sue the new
* array would have Sue as
* {
*    id: 2,
*    name: 'Sue',
*    dependents: [
*        {
*	         id: 3.
*	         name: 'Mary',
*	         household_id: 2
*        }
*    ]	
* }
*
*
* see mapHouseholdsExpectedResult variable for the fully expected result
*/
function mapHouseholds() {

}

// Unit test to pass
assertEqual(mapHouseholds(censusMembers), mapHouseholdsExpectedResult)

/*
* Now build a function that takes in an id and the array of members and returns all dependents that belong to the user
* that has that id. If the id is of a dependent, or isn't in the censusMember array then the function should return null.
* If there are no dependents then the function should return an empty arrray.
* Please add any unit tests you think are appropriate.
*/

function getDependents() {

}

// please add unit tests here
assertEqual(getDependents(1, censusMembers), []);
assertEqual(getDependents(3, censusMembers), null);

// UNIT TEST EXPECTED RESULTS
var mapHouseholdsExpectedResult = [
	{
		id: 1,
		name: 'Bob'
	}, {
		id: 2,
		name: 'Sue',
		dependents: [
			{
				id: 3,
				name: 'Mary',
				household_id: 2
			}
		]
	}, {
		id: 5,
		name: 'Tom'
	}, {
		id: 6,
		name: 'Jill',
		dependents: [
			{
				id: 4,
				name: 'Elizabeth',
				household_id: 6
			},
			{
				id: 7,
				name: 'John',
				household_id: 6
			}
		]
	}
]

/**
  Description: Determines whether two elements are equal.
  Note: This only determines if two elements are exactly equal. Arrays and objects
  Can be compared this way, but order matters for the objects. This is useful for the purpose of this test though

  Param {Any} testElement1 - the first element to be checked
  Param {Any} testElement2 - the element to be compared against
  Returns {Boolean} True if both are equal false if they are not.
*/
function assertEqual(testElement1, testElement2) {
	var stringEl1 = JSON.stringify(testElement1)
	var stringEl2 = JSON.stringify(testElement2)
	if (stringEl1 === stringEl2) {
		return true;
	} else {
		throw new Error('expected ' + stringEl1 + ' to equal ' + stringEl2);
	}
}