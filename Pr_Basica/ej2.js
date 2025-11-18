
var res = 0
var nums = [7,8,2,9,10]

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 8) {
    res = nums[i] + res
  }

}

alert(res);