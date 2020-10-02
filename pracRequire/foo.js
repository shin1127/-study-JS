const hw = () => {
  console.log("hello world");
};

const gf = () => {
  console.log();
};

function hw2() {
  console.log("hello world");
}

class hogee {
  hw = () => {
    console.log("hogeeHW");
  };
  gf = () => {
    console.log("play GF hogee");
  };
}

module.exports.hw = hw;
module.exports.hw2 = hw2;
module.exports.hogee = hogee;
