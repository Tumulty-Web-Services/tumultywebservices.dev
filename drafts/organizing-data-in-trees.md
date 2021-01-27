---
title: 'Organizing Data in Trees'
description: In computer science trees are a data structure that look like an inverted tree with the root at the top and branches growing downard
category: Computer Science
date: 2020-11-26T00:00:00Z
---

## A tree is a a common data structure that actually resembles a tree, but inverted. The root is at the botom and the branches grown downard.

Each one of these downward growing branch is made up of nodes, and these nodes are linked in a specific order.

### Terminology

Nodes: are numerical points that contain some form of data
Edges: are the lines that stress the direction of where the tree is growing

Together, the nodes and their attached edges create a tree.

### The technical

#### There are two types of trees

1. An empty tree
2. A node with a list of successor trees

An empty tree is no fun, so we'll be focusing on a node with a list of successor trees. Generally, nodes are labelled with some sort of data -- either a number or a search key. The label for this data is called the node's value.

These values can be any sort of data: numbers, strings, objects etc. 

#### Parts of a tree

**Root:** top level node
 
When visualizing a tree, in computer science, these trees are displayed upside down, with the root node on top, and its branches stemming downward from that node.

**children:** nodes that directly connect to the root node

When visualizing a tree, you first look at the root node, then follow the branch down to find connecting nodes. Those connecting nodes are the children

**Sibilings:** two nodes that have the same root node

If two nodes share the same level and their branches connect to the same parent node. Then they are considered siblings

You can see that a tree follows the same structure as a nuclear family. You have parents, children and those children are siblings.


<!-- Continue on pg. 32 just by the Quad-trees section -->
If a node is the child of a child of . . . of a another node then we say that the rst node is a
descendent of the second node. Conversely, the second node is an ancestor of the rst node.
Nodes which do not have any children are known as leaves (e.g., the nodes labelled with 1, 7,
10, 12, and 15 in Figure 6.1).
A path is a sequence of connected edges from one node to another. Trees have the property
that for every node there is a unique path connecting it with the root. In fact, that is another
possible denition of a tree. The depth or level of a node is given by the length of this path.
Hence the root has level 0, its children have level 1, and so on. The maximal length of a
path in a tree is also called the height of the tree. A path of maximal length always goes
from the root to a leaf. The size of a tree is given by the number of nodes it contains. We
shall normally assume that every tree is nite, though generally that need not be the case.
The tree in Figure 6.1 has height 3 and size 11. A tree consisting of just of one node has
height 0 and size 1. The empty tree obviously

