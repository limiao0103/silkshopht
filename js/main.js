$(function () {
    //全选与取消全选
    var isCheckAll = false;
    function swapCheck() {
        if (isCheckAll) {
            $('table').find("input[type='checkbox']").each(function() {
                this.checked = false;
            });
            isCheckAll = false;
        } else {
            $('table').find("input[type='checkbox']").each(function() {
                this.checked = true;
            });
            isCheckAll = true;
        }
    }
    $('.checkbox-btn').click(function () {
        swapCheck()
    });
    function del() {
        var inputCheck=$('tbody').find(":checkbox:checked");
        console.log(inputCheck);
        if(inputCheck){
            $('tbody').find(":checkbox:checked").parents("tr").remove();
            $(this).attr("data-dismiss","modal")
            $('.modal ').removeClass('.in')
        }

    }
    $('.delet-btn').click(function () {
        del()
    })

})