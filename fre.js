class MaxFreqStack {
    constructor() {
        this.freqMap = new Map();
        this.elementFreqStackMap = new Map();
        this.maxFreq = 0;
    }

    push(x) {
        const freq = this.freqMap.get(x) + 1 || 1;

        this.freqMap.set(x, freq);
        this.maxFreq = Math.max(freq, this.maxFreq);
        const freqStack = this.elementFreqStackMap.get(freq) || [];
        freqStack.push(x);
        this.elementFreqStackMap.set(freq, freqStack);
    }

    pop() {
        const mostFreqStack = this.elementFreqStackMap.get(this.maxFreq);
        const top = mostFreqStack.pop();

        this.freqMap.set(top, this.freqMap.get(top) - 1);

        if (mostFreqStack.length === 0) {
            this.maxFreq--;
        }

        return top;
    }

    myStack() {
        console.log(this.freqMap, this.elementFreqStackMap, this.maxFreq);
    }

    top() {
        const stack = this.elementFreqStackMap.get(this.maxFreq);
        return stack[stack.length - 1];
    }
}

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
