/*
 * utils.js �洢����������Ŀ�г��õĹ����ķ���
 */
var utils = {
    listToAry: function (likeArray) {
        var ary = [];
        try {
          ary=Array.prototype.slice.call(likeArray,0)
        } catch (e) {
           for(var i=0;i<likeArray.length;i++){
                ary[ary.length]=likeArray[i];
           }
        }
        return ary;
    }
}

