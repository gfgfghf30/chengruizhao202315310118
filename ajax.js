<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>事件循环经典_经典面试题</title>
</head>

<body>
  <script>
    // 目标：回答代码执行顺序
    console.log(1)
    setTimeout(() => {
      console.log(2)
      const p = new Promise(resolve => resolve(3))
      p.then(result => console.log(result))
    }, 0)
    const p = new Promise(resolve => {
      setTimeout(() => {
        console.log(4)
      }, 0)
      resolve(5)
    })
    p.then(result => console.log(result))
    const p2 = new Promise(resolve => resolve(6))
    p2.then(result => console.log(result))
    console.log(7)
    // 1 7 5 6 2 3 4
  </script>

</body>

</html>
