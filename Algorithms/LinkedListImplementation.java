package Algorithms;

public class LinkedListImplementation{
    public static void main(String[] args) {
        
    }

/////////// NODE CLASS /////////////////////////////
    public class Node{
        int data;
        Node next;

        // constructor for the node
        public Node(int data){
            this.data = data;
            this.next = null;
        }
        
    }
/////// LINKED LIST CLASS///////////////
    public class LinkedList{
        Node head; // head of the linked list




        // function to insert a node into the linked list
        public void insert(int data){
            // create a new node and add the data into it
            Node newNode = new Node(data);
            // if no data is in the head add the new node as head
            if(head == null){
                head = newNode;
            }
            // else add to the end of the linked list
            else{
                // getting the head node
                Node nextNode = head; 
                // going till the end of the linked list to insert the new node
                while(nextNode.next != null){
                    // keeps going to the next node till it goes to the last one
                    nextNode = nextNode.next;
                }
            }
        }




        // FLOYD CYCLE ALGORITHM//
        // TORTOISE AND HARE ALGORITHM //
        // function to find the middle element of a linked list
        public int findMiddleElement(){
           

            // initialize two pointers with head
            Node fastPointer = head;
            Node slowPointer = head;

            if(head != null){
                // runs till the fast pointer is on null or fast pointers next pointer is null
                while(fastPointer!=null && fastPointer.next!=null){
                    // fast pointer goes two nodes at a time till null
                    fastPointer = fastPointer.next.next;
                    // slow pointer goes one node at a time till the fast pointer reaches null
                    slowPointer = slowPointer.next;
                }
                // the mid pointer will be at the slow pointer
                return slowPointer.data;
            }
            else{
                // if not found return -1
                return -1;
            }
        }





        // function to find the length of a link list
        public int getLinkListLength(){

            // get the head of the link list
            Node headNode = head;
            // length of link list in this variable
            int length = 0;
            // traverse throught the link list till null
            while(headNode != null){
                length++;
                headNode = headNode.next;
            }
            // cant return headnode.length at the end because 
            // the node would be null after the loop
            return length;
           
        }




        //  FLOYD CYCLE ALGORITHM
        // for finding if the linked list has a cycle or not 
        public boolean hasCycle() {
            // get the head node
            Node headNode = head;
            // checking if there are nodes in the linked list
            if (headNode == null) {
                return false;
            }
            // intialize slow with the head node
            Node slow = head;
            // usually in floyd cycle algo we intialize fast with head too
            // but if we do in this case the while condition below would
            // terminate at the start, so to avoid that we do this
            Node fast = head.next;
            // keep going till slow and fast pointers dont meet
            while (slow != fast) {
                // if fast reaches null 
                if (fast == null || fast.next == null) {
                    // return false meaning no cycle was found
                    return false;
                }
                // slow moves at half speed
                slow = slow.next;
                // fast moves at double speed to enable the nodes to meet 
                // if there is a cycle
                // if they moved at the same rate would run endlessly
                fast = fast.next.next;
            }
            // returns true if the condition ends
            // meaning slow and fast meet
            return true;
        }






        // merging sorted linked lists
        public Node mergeSortedLinkLists(Node list1, Node list2){
            // make a dummy head that starts with 0
            // we use a dummy head because by doing this we dont have to make checks
            // if list1's first node or list2's first node are smaller or if either of 
            // them is null so it saves us alot of time
            Node dummyHead = new Node(0);
            // the node we will use to append other nodes to
            Node current = dummyHead;

            // goes through both lists until one becomes null
            while(list1 != null && list2 != null){
                // if the data in list 1 is smaller than the data in list 2
                if(list1.data < list2.data){
                    // adds it to the next node of new merged linked list
                    current.next = list1;
                    // moves to the next node of the first list
                    list1 = list1.next;
                }
                // if the data in list 2 is smaller than the data in list1
                else{
                    // adds it to the next node of new merged linked list
                    current.next = list2;
                    // moves to the next node of the second list
                    list2 = list2.next;
                }
                // moves to the next node of the linked list so other nodes can be added on it
                current = current.next;
            }

            // if there are nodes left in list1 add all of them to the end 
            // of the merged linked list
            // we dont have to worry about appending list1 or list2 first in this
            // because the condition above means one linked list is empty
            if(list1 != null){
                current.next = list1;
            }
            // adds list 2 to the end of the merged list
            // if list 1 was null
            else{
                current.next = list2;
            }
            // return the next of the head because the first node we initialized with
            // dummy data
            return dummyHead.next;

        }





        public Node reverseLinkList(Node list){
            Node prev = null;
            Node current = head;
            Node next = null;

            // if current becomes null means you've reached the end of the list
            while (current != null) {
                next = current.next;   // Store next
                current.next = prev;   // Reverse current node's pointer
                prev = current;        // Move pointers one position ahead
                current = next;
            }
            head = prev;              // Update head to new front of the list
            return head;
        }


    }
}