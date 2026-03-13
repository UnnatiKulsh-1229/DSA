class Solution {
    public boolean isPalindrome(int x) {
        if(x<0) return false;
        String s = Integer.toString(x);
        int l=0;
        int n=s.length();
        int r=n-1;
        while(l<=r){
            if(s.charAt(l)==s.charAt(r)){
                l++;
                r--;
            }
            else return false;
        }
    return true;        
    }
}