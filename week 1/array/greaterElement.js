function greaterElement(nums1,nums2){
    let result = []
    for(let i=0;i<nums1.length;i++){
        let index = nums2.indexOf(nums1[i])
        let greater = -1

        for(let j=index+1;j<nums2.length;j++){
            if(nums2[j]>nums1[i]){
                greater = nums2[j]
                break
            }
        }
        result.push(greater)
    }
  return result
}
let nums1 =[4,1,2]
let nums2 = [1,3,4,2]

console.log(greaterElement(nums1,nums2))