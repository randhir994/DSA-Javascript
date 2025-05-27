// class MaxFreqStack {
//     constructor() {
//         this.freq = {};
//         this.arr = [];
//         this.pos = 0;
//     }

//     push(x) {
//         if (this.freq[x] === undefined) this.freq[x] = 0;

//         this.freq[x]++;
//         this.arr.push([this.freq[x], ++this.pos, x]);
//     }

//     pop() {
//         let maxIdx = -1;
//         let maxVal = -1;

//         for (let i = 0; i < this.arr.length; i++) {
//             let [freq, idx, val] = this.arr[i];
//             if (freq > maxVal || (freq === maxVal && idx > maxIdx)) {
//                 maxIdx = idx;
//                 maxVal = freq;
//             }
//         }

//         let idx = -1;
//         for (let i = 0; i < this.arr.length; i++) {
//             if (this.arr[i][1] === maxIdx) {
//                 idx = i;
//                 break;
//             }
//         }

//         let [freq, pos, x] = this.arr[idx];
//         freq--;

//         if (freq === 0) {
//             delete this.freq[x];
//         } else {
//             this.freq[x] = freq;
//         }

//         this.arr.splice(idx, 1);

//         return x;
//     }
// }

class MaxFreqStack {
    constructor() {
        this.freqMap = new Map();
        this.elementFreqMap = new Map();
        this.maxfreq = 0;
    }

    push(x) {
        const freq = this.freqMap.get(x) + 1 || 1;
        this.freqMap.set(x, freq);
        this.maxfreq = Math.max(this.maxfreq, freq);
        const setList = this.elementFreqMap.get(freq) || [];
        setList.push(x);
        this.elementFreqMap.set(freq, setList);
    }

    pop() {
        const top = this.elementFreqMap.get(this.maxfreq).pop();
        this.freqMap.set(top, this.freqMap.get(top) - 1);
        if (this.elementFreqMap.get(this.maxfreq).length === 0) {
            this.maxfreq--;
        }

        return top;
    }

    top() {
        const stack = this.elementFreqMap.get(this.maxfreq);
        return stack[stack.length - 1];
    }

    myStack() {
        console.log(this.freqMap, this.elementFreqMap, maxfreqStack);
    }
}

// Example usage:
const maxfreqStack = new MaxFreqStack();
maxfreqStack.myStack();
maxfreqStack.push(4);
maxfreqStack.push(6);
maxfreqStack.push(7);
maxfreqStack.push(6);
maxfreqStack.push(8);
maxfreqStack.myStack();
console.log(maxfreqStack.top());
console.log(maxfreqStack.pop()); // Output: 6
maxfreqStack.myStack();
console.log(maxfreqStack.top());
console.log(maxfreqStack.pop()); // Output: 8
maxfreqStack.myStack();
