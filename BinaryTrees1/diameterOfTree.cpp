#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *left;
    Node *right;

    Node(int d)
    {
        this->data = d;
        this->left = NULL;
        this->right = NULL;
    }
};

Node *buildBinaryTree(Node *root)
{
    cout << "Enter the data: " << endl;
    int data;
    cin >> data;

    root = new Node(data);

    if (data == -1)
    {
        return NULL;
    }

    cout << "Enter data for inserting in left of " << data << endl;

    root->left = buildBinaryTree(root->left);

    cout << "Enter data for inserting in right of " << data << endl;

    root->right = buildBinaryTree(root->right);

    return root;
}

int heightOfTree(Node *root)
{

    if (root == NULL)
    {
        return 0;
    }

    if (root->left == NULL && root->right == NULL)
    {
        return 0;
    }

    int left = heightOfTree(root->left);
    int right = heightOfTree(root->right);

    int ans = max(left, right) + 1;
    return ans;
}

int diameterOfTree(Node *root)
{
    if (root == NULL)
    {
        return 0;
    }

    int op1 = diameterOfTree(root->left);
    int op2 = diameterOfTree(root->right);
    int op3 = heightOfTree(root->left) + heightOfTree(root->right) + 1;

    return max(op1, max(op2, op3));
}

int main(void)
{
    Node *root = NULL;

    // create a tree using Recursion
    // 1 3 7 -1 -1 11 -1 -1 5 17 -1 -1 -1
    // 10 5 3 -1 -1 7 6 -1 -1 -1 11 -1 -1
    root = buildBinaryTree(root);
    cout << diameterOfTree(root) << endl;
    ;

    return 0;
}