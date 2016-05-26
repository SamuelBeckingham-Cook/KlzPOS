/**
 * Created by Sambo on 26/05/2016.
 */

function getDist() {
    var distNo = $('#distNo').val();

    $.ajax({
        type: 'GET',
        url: "localhost:3000/dist/" + distNo,
        cache: false,
        success: function(json){
            $('#modal-distNo').text(json.accountNo);
            $('#modal-distName').text(json.firstName + json.lastName);
            $('#confirmModal').modal('show');
        }
        //TODO: Handle error (Error modal, perhaps?)
    });

    return false;
}

$('#modal-confirm').on('click', function(){
    window.location.href = 'order.html?distNo=' + $('distNo').val();
});