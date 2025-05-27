const task = {
  a: {
    job: function (finish) {
      setTimeout(() => {
        console.log("a ended");
        finish("a");
      }, 500);
    },
  },
  b: {
    job: function (finish) {
      setTimeout(() => {
        console.log("b ended");
        finish("b");
      }, 150);
    },
  },
  d: {
    job: function (finish) {
      setTimeout(() => {
        console.log("d ended");
        finish("d");
      }, 200);
    },
    dependencies: ["a", "b"],
  },
  c: {
    job: function (finish) {
      setTimeout(() => {
        console.log("c ended");
        finish("c");
      }, 300);
    },
    dependencies: [],
  },
  e: {
    job: function (finish) {
      setTimeout(() => {
        console.log("e ended");
        finish("e");
      }, 100);
    },
    dependencies: ["c"],
  },
};

function asyncGraph(task, completedCallBack) {
  let output = [];

  Object.keys(task).forEach((key) => {
    if (task[key].dependencies && task[key].dependencies.length > 0) {
      resolveDependencies(task, key, output);
    }
  });
}

function resolveDependencies(task, dependedKey, output) {
  task[dependedKey].dependencies.map((depKey) => {
    task[depKey].job((cb) => {
      output.push(dependedKey);
      console.log(output);
      if (!output.includes(depKey)) {
        task[dependedKey].job((cb) => cb);
      }
    });
  });
}

asyncGraph(task, () => console.log("Async call are finised "));
