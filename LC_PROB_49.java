class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> res=new ArrayList<>();
        HashMap<String,List<String>> mp=new HashMap<>();
        for(String str:strs){
            int[]freq=new int[26];
            for(char c:str.toCharArray()){
                freq[c-'a']++;
        }
        String k=Arrays.toString(freq);
        mp.putIfAbsent(k,new ArrayList<>());
        mp.get(k).add(str);
        }
        return new ArrayList<>(mp.values());
    }
}