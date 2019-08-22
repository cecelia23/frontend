function coffeeTime (eff, cup, probs) {
    let eff_job = cup * 60 * eff;
    let probs_sum = 0;
    for (let i in probs) {
        probs[i] = parseInt(probs[i]);
        probs_sum += probs[i];
    }
    let eff_time = Math.ceil(probs_sum / eff);
    if (eff_time < cup * 60) {
        console.log(eff_time);
        return;
    }

    let left_job = eff_job;
    let sum = cup * 60; 
    for (let i in probs) {
        if (left_job >= probs[i]) {
            left_job -= probs[i];
        } else if (left_job > 0) {
            let single_left = probs[i] - left_job;
            sum += single_left;
            left_job  = 0;
        } else {
            sum += probs[i];
        }
    }
    // console.log(sum);
    if (sum <= 480) {
        console.log(sum);
    } else {
        console.log(0);
    }
}
//8 2 8
// 60 60 60 60 60 60 60 60
let probs = "333 77 100 13".split(' ');
let cup = 2;
let eff = 3;
let res = coffeeTime(eff, cup, probs);
// console.log(res);