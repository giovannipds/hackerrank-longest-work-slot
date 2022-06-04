# Longest Work Slot

There are 26 employees to complete a task. The employees have IDs in the range _['a'-'z']_, where employee _0_ has _ID = 'a'_, employee _1_ has _ID = 'b'_, ... employee _25_ has _ID = 'z'_. The task runs continuously, and the employees take turns to perform the task. At any moment of time, exactly one employee is working on the task. As soon as an employee leaves the task, the following employee starts working on it.

Given the employee numbers and the times at which they leave the task in a 2-D array _leaveTimes_, find the ID of the employee who has the longest single time slot at the task.<br>
_leaveTimes[i][0]_ represent employee numbers, in the range _0-25_. _leaveTimes[i][1]_ represents the time at which the employee leaves the task. The elements will be given in ascending time order.<br>
_Note_: If the same employee has two continuous slots, the slots are considered to be different.

**Example**

_leaveTimes = [[0, 3], [2, 5], [0, 9], [1, 15]]_

In the example, the time slots are as follows:

1. Employee _0_ works from t=0 to t=3, i.e., for 3 units of time.
1. Employee _2_ works from t=3 to t=5, i.e for 5-3 = 2 units of time.
1. Employee _0_ works from t=5 to t=9, i.e for 9-5 = 4 units of time.
1. Employee _1_ works from t=9 to t=15, i.e., for 15-9 = 6 units of time.

The largest time slot is of 6 units of time, by employee _1_, so return the ID of employee _1_, i.e., 'b'.

**Function Description**

Complete the function _findLongestSingleSlot_ in the editor below.

_findLongestSingleSlot_ has the following parameter(s):<br>
&nbsp;&nbsp;&nbsp;&nbsp;_int leaveTimes[n][2]_: the first column contains the employee number, the second contains the time at which the employee leaves the task.

**Returns:**

&nbsp;&nbsp;&nbsp;&nbsp;_char_: the ID of the employee that has the longest single slot.

**Constraints**

- _1 ≤ n ≤ 105_
- _0 ≤ leaveTimes[i][0] ≤ 25 (0 ≤ i < n)_
- _1 ≤ leaveTimes[i][1] ≤ 108 (0 ≤ i < n)_
- There will only be one employee having the longest single time slot.
- _leaveTimes_ is sorted in ascending order of _leaveTimes[i][1]_

<details>
  <summary style="background: #000; color: #fff">Input Format For Custom Testing</summary>

The first line contains an integer, n, the number of elements in _leaveTimes_.

The second line contains the integer 2, the number of columns in each _leaveTimes[i]_.

Each line _i_ of the n subsequent lines (where _0 ≤ i < n_) contains two space-separated integers, _leaveTimes[i][0]_ and _leaveTimes[i][1]_.

</details>

<details>
  <summary style="background: #000; color: #fff">Sample Case 0</summary>

**Sample Input For Custom Testing**

```
STDIN    Function
-----    --------
3     →  leaveTimes[] size n = 3
2     →  leaveTimes[][] size columns = 2
0 2   →  leaveTimes = [[0, 2], [1, 3], [0, 7]]
1 3
0 7
```

**Sample Output**

```
a
```

**Explanation**

The time slots are as follows:

1. Employee _0_ works from t=0 to t=2, i.e., for 2-0=2 units of time.
1. Employee _1_ works from t=2 to t=3, i.e., for 3-2=1 unit of time.
1. Employee _0_ works from t=3 to t=7, i.e., for 7-3=4 units of time.
   The longest time slot is of _4_ units of time, by employee _0_, who has Id = 'a'.

</details>

<details>
  <summary style="background: #000; color: #fff">Sample Case 1</summary>

**Sample Input For Custom Testing**

```
STDIN    Function
-----    --------
5     →  leaveTimes[] size n = 5
2     →  leaveTimes[][] size = 2
0 1   →  leaveTimes = [[0, 1], [0, 3], [4, 5], [5, 6], [4, 10]]
0 3
4 5
5 6
4 10
```

**Sample Output**

```
e
```

**Explanation**

The time slots are as follows:

1. Employee _0_ works from t=0 to t=1, i.e, for 1-0=1 unit of time.
1. Employee _0_ works from t=1 to t=3, i.e, for 3-1=2 unit of time.
1. Employee _4_ works from t=3 to t=5, i.e, for 5-2=4 units of time.
1. Employee _5_ works from t=5 to t=6, i.e, for 6-5=1 units of time.
1. Employee _4_ works from t=6 to t=10, i.e, for 10-6=4 units of time.
   The longest time slot is of _4_ units of time, by employee _4_, who has Id = 'e'. Note that the first two slots by employee _0_ are to be considered two different slots.

</details>
