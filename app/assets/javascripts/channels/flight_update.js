App.flight_update = App.cable.subscriptions.create("FlightUpdateChannel", {
  connected: function() {

  },
  disconnected: function() {

  },
  received: function(data) {

    var $target = $('#flight-list')


    var $new_flight_div = $('<div class="column is-one-quarter">')
    var $new_flight_card = $('<div class="card">')
    var $new_flight_card_content = $('<div class="card-content">')
    var $new_flight_p_title = $('<p class="title">')

    $new_flight_p_title.text(data.content.from + '-' + data.content.to)

    var $new_flight_p_subtitle = $('<p class="subtitle">')
    $new_flight_p_subtitle.text(data.content.airline)

    $new_flight_card_content.append($new_flight_p_title)
    $new_flight_card_content.append($new_flight_p_subtitle)

    $new_flight_card.append($new_flight_card_content)
    $new_flight_div.append($new_flight_card)

    $target.append($new_flight_div)


  }
})
