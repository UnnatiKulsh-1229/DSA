class MedianFinder {
    private PriorityQueue<Integer> max; 
    private PriorityQueue<Integer> min;
    public MedianFinder() {
        max=new PriorityQueue<Integer>(Collections.reverseOrder());
        min=new PriorityQueue<Integer>();
        }
    
    public void addNum(int num) {
        max.offer(num);
        min.offer(max.poll());
        if(min.size()>max.size()){
            max.offer(min.poll());
        }
    }
    
    public double findMedian() {
        if(max.size()==min.size()){
            return (max.peek()+min.peek())/2.0;
        }
        return  max.peek();
        }        
    }

