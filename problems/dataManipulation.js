const getDurationText = function(monthData) {
  const arr = [];
  let sum = 0;
  let year = 1;
  monthData.map((item, index) => {
    if (item.next === 1) {
      arr.push(`${year} year ${sum + item.next} month`);
      sum += item.next;
    } else {
      arr.push(`${year} year ${sum + 1}-${sum + item.next} months`);
      sum += item.next;
      if (sum >= 12) {
        year += Math.floor(sum / 12);
        sum -= 12;
      }
    }
  });
  return arr;
};

console.log(
  getDurationText([
    {
      next: 1
    },
    {
      next: 2
    },
    {
      next: 2
    },
    {
      next: 7
    },
    {
      next: 2
    },
    {
      next: 1
    }
  ])
);
