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

void inorder(Node *root, int &count)
{

    if (root == NULL)
    {
        return;
    }

    inorder(root->left, count);

    if (root->left == NULL && root->right == NULL)
    {
        count++;
    }

    inorder(root->right, count);
}

int main()
{
    Node *root = NULL;

    // create a tree using Recursion
    // 1 3 7 -1 -1 11 -1 -1 5 17 -1 -1 -1
    // 10 5 3 -1 -1 7 6 -1 -1 -1 11 -1 -1
    root = buildBinaryTree(root);
    int count = 0;
    inorder(root, count);
    cout << count;

    return 0;
}