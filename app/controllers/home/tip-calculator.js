import Controller from '@ember/controller';


export default Controller.extend({
    actions: {
        calculate(){
            var tipAmount = (parseFloat(this.billAmount) * parseFloat(this.TipRate)/100);
            var TotalAmount = (parseFloat(this.billAmount) + parseFloat(tipAmount)).toFixed(2);
            var totalPerPerson = (parseFloat(TotalAmount)/parseFloat(this.numberOfPeople)).toFixed(2);
            var html ='<p>Tips: $' + tipAmount + '</p>';
            html += '<p>Total Amount: $' + TotalAmount + '</p>';
            html += '<p>Total per person $' + totalPerPerson + '</p>';
            $('#result').html(html);
        },
        
    }
});
