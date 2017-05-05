App.flight_delete = App.cable.subscriptions.create("FlightDeleteChannel", {
  connected: function() {

  },
  disconnected: function() {

  },
  received: function(data) {

    // var $container = $('.column is-one-quarter')
    // var $card = $('.card')
    //
    // $container.remove($card)

    var $target = $('#' + data.content.id)
    $target.hide()
  }
})
