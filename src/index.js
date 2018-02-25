// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    try {
        if (currency <= 10000) {
           var H, Q, D, N, P;
           var h, q, d, n, p;
          h = 50;
          q = 25;
          d = 10;
          n = 5;
          p = 1;
        H = currency/h;
        H = Math.floor(H);
        currency = currency%h;

        Q = currency/q;
        Q = Math.floor(Q);
        currency = currency%q;

        D = currency/d;
        D = Math.floor(D);
        currency = currency%d;

        N = currency/n;
        N = Math.floor(N);
        currency = currency%n;

        P = currency/p;
        P = Math.floor(P);
        currency = currency%p;
        var ex = new Exchange(H,Q,D,N,P);
        return ex;
        }
        else {
           throw new error();
        }
    }
    catch (e) {
        return ({ error : e.message});
    }
}
function error() {
    this.message = "You are rich, my friend! We don't have so much coins for exchange";
}
function Exchange(H,Q,D,N,P){
    if(H>0)this.H = H;
    if(Q>0)this.Q = Q;
    if(D>0)this.D = D;
    if(N>0)this.N = N;
    if(P>0)this.P = P;
    }