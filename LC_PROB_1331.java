class Solution {
    public int[] arrayRankTransform(int[] arr) {
        int[] arr_copy=arr.clone();
        Arrays.sort(arr_copy);
        HashMap<Integer,Integer> rankmap=new HashMap<>();
        int rank=1;
        for(int num: arr_copy){
            if(!rankmap.containsKey(num)){
                rankmap.put(num,rank);
                rank++;
            }
        }
        int res[]= new int[arr.length];
        for(int i=0;i<arr.length;i++){
            res[i]=rankmap.get(arr[i]);
        }
        return res;
    }
}