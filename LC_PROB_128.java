class Solution {
    public int longestConsecutive(int[] nums) {
        int res=0;
        HashSet<Integer> st=new HashSet<>();
        for(int i=0;i<nums.length;i++){
            st.add(nums[i]);
        }
        for(int num:nums){
            int cr=num;
            int cnt=0;
                while(st.contains(cr)){
                    cr++;
                    cnt++;
                }
            res=Math.max(cnt,res);
            }
        return res;
    }
}
