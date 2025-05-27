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

int findPosition(vector<int> in, int element, int inStart, int inEnd)
{
    for (int i = inStart; i <= inEnd; i++)
    {
        if (in[i] == element)
        {
            return i;
        }
    }
    return -1;
}

//O(n2)

Node *buildFromInorderPreorder(vector<int> in, vector<int> preOrder, int &preOrderIndex, int inStart, int inEnd)
{
    // Base Case

    if (preOrderIndex >= preOrder.size() || inStart > inEnd)
    {
        return NULL;
    }

    int element = preOrder[preOrderIndex++];
    Node *root = new Node(element);

    // search element in inorder array

    int pos = findPosition(in, element, inStart, inEnd);

    root->left = buildFromInorderPreorder(in, preOrder, preOrderIndex, inStart, pos - 1);
    root->right = buildFromInorderPreorder(in, preOrder, preOrderIndex, pos + 1, inEnd);
    return root;
}

int main()
{

    vector<int> inorder;
    inorder.push_back(3);
    inorder.push_back(1);
    inorder.push_back(4);
    inorder.push_back(0);
    inorder.push_back(5);
    inorder.push_back(2);

    vector<int> preorder;
    preorder.push_back(0);
    preorder.push_back(1);
    preorder.push_back(3);
    preorder.push_back(4);
    preorder.push_back(2);
    preorder.push_back(5);

    int startIndex = 0;
    Node *root = buildFromInorderPreorder(inorder, preorder, startIndex, 0, 5);
    levelOrderTraveralWithSeperator(root);

    return 0;
}