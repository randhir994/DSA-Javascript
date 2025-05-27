#include <iostream>
#include <map>
#include <list>
#include <queue>
using namespace std;

template <typename T>
class Graph
{
public:
    map<T, list<pair<T, T> > > adjList;

    void addEdge(T u, T v, T weight, bool direction)
    {
        // diredtion = 0 ->  undirected Graph
        // diredtion = 1 ->  directed Graph

        adjList[u].push_back(make_pair(v, weight));

        if (direction == 0)
        {
            adjList[v].push_back(make_pair(u, weight));
        }
    }

    void printAdj()
    {
        for (auto i : adjList)
        {
            cout << i.first << "->";
            for (auto j : i.second)
            {
                cout << "(" << j.first << ", " << j.second << "), ";
            }
            cout << endl;
        }
    }

    void bfs(int src, map<int, bool> &visited)
    {
        queue<int> q;
        q.push(src);

        visited[src] = true;

        while (!q.empty())
        {
            int front = q.front();
            q.pop();

            cout << front << ", ";

            for (auto neighbour : adjList[front])
            {
                if (!visited[neighbour.first])
                {
                    q.push(neighbour.first);
                    visited[neighbour.first] = true;
                }
            }
        }
    }

    void dfs(int src, map<int, bool> &visited)
    {
        visited[src] = true;
        // cout << "visited " << src << ", ";

        cout << src << ", ";

        for (auto neighbour : adjList[src])
        {
            if (!visited[neighbour.first])
            {
                // cout << "neighbour " << neighbour.first << ", ";

                dfs(neighbour.first, visited);
            }
        }
    }
};

int main()
{
    Graph<int> g;

    g.addEdge(0, 1, 3, 0);
    g.addEdge(1, 2, 4, 0);
    g.addEdge(1, 3, 9, 0);
    g.addEdge(2, 3, 8, 0);
    g.addEdge(3, 4, 11, 0);
    g.addEdge(2, 4, 10, 0);

    // g.addEdge(5, 6, 10, 0);

    cout << "Printing the Adjacency List " << endl;
    g.printAdj();

    int n = 5;
    map<int, bool> visited1;

    cout << "printing the bfs traversal  " << endl;
    for (int i = 0; i < n; i++)
    {
        if (!visited1[i])
        {
            g.bfs(i, visited1);
        }
    }

    Graph<int> g2;
    map<int, bool> visited2;

    g2.addEdge(0, 2, 10, 0);
    g2.addEdge(2, 3, 11, 0);
    g2.addEdge(2, 4, 12, 0);
    g2.addEdge(3, 4, 34, 0);
    g2.addEdge(1, 3, 44, 0);

    cout << "Printing the Adjacency List " << endl;
    g.printAdj();

    cout << endl
         << "printing the dfs traversal  " << endl;

    for (int i = 0; i < n; i++)
    {
        if (!visited2[i])
        {
            g2.dfs(i, visited2);
        }
    }

    return 0;
}