class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        List<Integer> res=new ArrayList<>();
        if (s == null || p == null || s.length() < p.length()) {
            return res;
        }
        int[] p_cnt = new int[26];
        int[] s_cnt= new int[26];
        for (int i = 0; i < p.length(); i++) {
            p_cnt[p.charAt(i) - 'a']++;
            s_cnt[s.charAt(i) - 'a']++;
        }
        if (matches(p_cnt, s_cnt)) {
            res.add(0);
        }
        for (int i = p.length(); i < s.length(); i++) {
            s_cnt[s.charAt(i) - 'a']++;
            s_cnt[s.charAt(i - p.length()) - 'a']--;
            if (matches(p_cnt, s_cnt)) {
                res.add(i - p.length() + 1);
            }
        }

        return res;
    }
    private boolean matches(int[] pCounts, int[] sCounts) {
        for (int i = 0; i < 26; i++) {
            if (pCounts[i] != sCounts[i]) {
                return false;
            }
        }
        return true;
    }
}
