#include <iostream>
#include <queue>
using namespace std;
// 1 3 7 -1 -1 11 -1 -1 5 17 -1 -1 -1

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

void buildFromLevelOrder(Node *&root)
{

    queue<Node *> q;

    cout << "Enter data for root" << endl;

    int data;
    cin >> data;

    root = new Node(data);
    q.push(root);

    while (!q.empty())
    {
        Node *temp = q.front();
        q.pop();

        cout << "Enter left node for " << temp->data << endl;
        int leftData;
        cin >> leftData;

        if (leftData != -1)
        {
            temp->left = new Node(leftData);
            q.push(temp->left);
        }

        cout << "Enter right node for " << temp->data << endl;
        int rightData;
        cin >> rightData;

        if (rightData != -1)
        {
            temp->right = new Node(rightData);
            q.push(temp->right);
        }
    }
}

void levelOrderTraveral(Node *root)
{
    queue<Node *> q;

    q.push(root);

    while (!q.empty())
    {
        Node *temp = q.front();
        cout << temp->data << " ";
        q.pop();

        if (temp->left)
        {
            q.push(temp->left);
        }
        if (temp->right)
        {
            q.push(temp->right);
        }
    }
}

void levelOrderTraveralWithSeperator(Node *root)
{
    queue<Node *> q;

    q.push(root);
    q.push(NULL);

    while (!q.empty())
    {
        Node *temp = q.front();
        q.pop();

        if (temp == NULL)
        {
            cout << endl; // To move to next line
            if (!q.empty())
            {
                // queue still has child
                q.push(NULL);
            }
        }
        else
        {
            cout << temp->data << " ";
            if (temp->left)
            {
                q.push(temp->left);
            }
            if (temp->right)
            {
                q.push(temp->right);
            }
        }
    }
}

// NLR
void preOrder(Node *root)
{
    if (root == NULL)
    {
        return;
    }

    cout << root->data << " ";

    preOrder(root->left);
    preOrder(root->right);
}

// LNR
void inOrder(Node *root)
{
    if (root == NULL)
    {
        return;
    }

    inOrder(root->left);
    cout << root->data << " ";
    inOrder(root->right);
}

// LRN
void postOrder(Node *root)
{
    if (root == NULL)
    {
        return;
    }

    postOrder(root->left);
    postOrder(root->right);
    cout << root->data << " ";
}

int main()
{
    Node *root = NULL;

    // create a tree using Recursion
    // 1 3 7 -1 -1 11 -1 -1 5 17 -1 -1 -1
    // root = buildBinaryTree(root);

    // create a tree using Level Order
    // 1 3 5 7 11 17 -1 -1 -1 -1 -1 -1 -1
    buildFromLevelOrder(root);

    // level order

    cout << endl
         << "Printing Level Order Traversing" << endl;
    levelOrderTraveral(root);

    cout << endl
         << "Printing Level Order Traversing with seperator" << endl;
    levelOrderTraveralWithSeperator(root);

    cout << endl
         << "Preorder Traversing" << endl;
    preOrder(root);

    cout << endl
         << "Inorder Traversing" << endl;
    inOrder(root);

    cout << endl
         << "Postorder Traversing" << endl;
    postOrder(root);
    return 0;
}