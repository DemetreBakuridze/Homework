nums1 = {1, 2, 3, 4, 5}
nums2 = { 6, 7, 8}
nums_union = nums1.union(nums2)
differece = nums_union - nums1.intersection(nums2)
print(differece)
