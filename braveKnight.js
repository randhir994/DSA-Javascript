class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }

        const root = this.heap[0];
        const lastNode = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.heapifyDown();
        }

        return root;
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[index] < this.heap[parentIndex]) {
                [this.heap[index], this.heap[parentIndex]] = [
                    this.heap[parentIndex],
                    this.heap[index],
                ];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let index = 0;

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestChildIndex = index;

            if (
                leftChildIndex < this.heap.length &&
                this.heap[leftChildIndex] < this.heap[smallestChildIndex]
            ) {
                smallestChildIndex = leftChildIndex;
            }

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex] < this.heap[smallestChildIndex]
            ) {
                smallestChildIndex = rightChildIndex;
            }

            if (smallestChildIndex !== index) {
                [this.heap[index], this.heap[smallestChildIndex]] = [
                    this.heap[smallestChildIndex],
                    this.heap[index],
                ];
                index = smallestChildIndex;
            } else {
                break;
            }
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }
}

function lastDefeatedMonster(enemies, hp, potions) {
    let lastDefeatedIndex = 0;
    const heap = new MinHeap();

    for (let i = 1; i < enemies.length; i++) {
        if (enemies[i] < enemies[i - 1]) {
            // Surrendered monster
            lastDefeatedIndex = i;
        } else {
            // Stronger monster
            const difference = enemies[i] - enemies[i - 1];
            heap.push(difference);

            while (heap.size() > 0 && hp < heap.peek()) {
                // Use potions to defeat stronger monsters
                if (potions > 0) {
                    potions -= 1;
                    hp += heap.pop();
                    lastDefeatedIndex += 1;
                } else {
                    return lastDefeatedIndex;
                }
            }
        }
    }

    return lastDefeatedIndex;
}

// Example usage:
const enemies = [2, 5, 3, 7, 19];
const initialHp = 30;
const initialPotions = 2;

const result = lastDefeatedMonster(enemies, initialHp, initialPotions);
console.log("Index of the last defeated monster:", enemies[result]);
