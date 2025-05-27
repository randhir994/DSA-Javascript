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

Node *buildFromInorderPostorder(vector<int> in, vector<int> postOrder, int &postOrderIndex, int inStart, int inEnd)
{
    // Base Case

    if (postOrderIndex < 0 || inStart > inEnd)
    {
        return NULL;
    }

    int element = postOrder[postOrderIndex--];
    Node *root = new Node(element);

    // search element in inorder array

    int pos = findPosition(in, element, inStart, inEnd);

    root->right = buildFromInorderPostorder(in, postOrder, postOrderIndex, pos + 1, inEnd);
    root->left = buildFromInorderPostorder(in, postOrder, postOrderIndex, inStart, pos - 1);
    return root;
}

int main()
{

    vector<int> inorder;
    inorder.push_back(4);
    inorder.push_back(8);
    inorder.push_back(2);
    inorder.push_back(5);
    inorder.push_back(1);
    inorder.push_back(6);
    inorder.push_back(3);
    inorder.push_back(7);

    vector<int> postorder;
    postorder.push_back(8);
    postorder.push_back(4);
    postorder.push_back(5);
    postorder.push_back(2);
    postorder.push_back(6);
    postorder.push_back(7);
    postorder.push_back(3);
    postorder.push_back(1);

    int startIndex = postorder.size() - 1;
    Node *root = buildFromInorderPostorder(inorder, postorder, startIndex, 0, 7);
    levelOrderTraveralWithSeperator(root);

    return 0;
}