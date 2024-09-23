#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int j=0;
        for(int i=nums1.size()-1;i>0;i++){
            if(nums1[i]==0){
                nums1[i]=nums2[j];
                j++;
            }
            if(j>n)break;
        }
        sort(nums1[0],nums1[nums1.size()-1]);
    }
    
};